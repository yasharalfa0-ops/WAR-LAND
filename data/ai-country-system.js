// WAR LAND - country AI decision layer.
const COUNTRY_AI = {
  profiles: {
    germany:{aggression:.88,expansion:.86,diplomacy:.48,economy:.72,defense:.45,naval:.42,risk:.72},
    uk:{aggression:.42,expansion:.28,diplomacy:.82,economy:.78,defense:.75,naval:.92,risk:.42},
    france:{aggression:.38,expansion:.25,diplomacy:.72,economy:.68,defense:.82,naval:.45,risk:.35},
    ussr:{aggression:.68,expansion:.72,diplomacy:.55,economy:.65,defense:.78,naval:.38,risk:.58},
    italy:{aggression:.62,expansion:.65,diplomacy:.52,economy:.55,defense:.48,naval:.62,risk:.58},
    japan:{aggression:.82,expansion:.88,diplomacy:.35,economy:.62,defense:.52,naval:.90,risk:.75},
    usa:{aggression:.25,expansion:.18,diplomacy:.76,economy:.90,defense:.65,naval:.88,risk:.25},
    china:{aggression:.42,expansion:.15,diplomacy:.58,economy:.35,defense:.86,naval:.18,risk:.40},
    iran:{aggression:.18,expansion:.08,diplomacy:.70,economy:.45,defense:.72,naval:.22,risk:.22}
  },
  createState(countryId){
    return {countryId,profile:this.profiles[countryId]||{aggression:.5,expansion:.5,diplomacy:.5,economy:.5,defense:.5,naval:.5,risk:.5},threatMap:{},priorities:[],currentPlan:null,cooldowns:{}};
  },
  scoreThreat(ai,target,relation=0){
    const military=target.militaryPower||0;
    const border=target.sharedBorder?1.25:.65;
    const hostility=Math.max(0,-relation/100);
    return military*border*(1+hostility);
  },
  evaluate(ai,country,world){
    const p=ai.profile,actions=[];
    const treasury=country.economy?.treasury||0;
    const target=country.economy?.targetTreasury||100;
    const manpower=country.military?.manpower||0;
    if(treasury/Math.max(1,target)<.5) actions.push({type:'economy',score:(1-treasury/Math.max(1,target))*p.economy});
    if(manpower<35) actions.push({type:'mobilize',score:(35-manpower)*p.defense});
    for(const other of (world.countries||[])){
      if(other.id===ai.countryId) continue;
      const relation=country.diplomacy?.relations?.[other.id]??0;
      const threat=this.scoreThreat(ai,other,relation);
      if(threat>30) actions.push({type:'diplomacy',target:other.id,score:threat*p.diplomacy});
      if(relation<-55&&p.aggression>.6) actions.push({type:'militaryPressure',target:other.id,score:threat*p.aggression*p.risk});
    }
    actions.push({type:'production',score:p.economy*20},{type:'defense',score:p.defense*20});
    return actions.sort((a,b)=>b.score-a.score);
  },
  choosePlan(ai,country,world){
    const actions=this.evaluate(ai,country,world),top=actions[0]||{type:'stability',score:1};
    ai.currentPlan=top; return top;
  },
  tick(ai,country,world){
    const plan=this.choosePlan(ai,country,world); ai.priorities=this.evaluate(ai,country,world).slice(0,5); return plan;
  }
};
