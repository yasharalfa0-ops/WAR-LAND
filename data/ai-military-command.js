// WAR LAND - AI military command layer.
// Chooses fronts, objectives, army composition and map orders, then adapts after battles.
const AI_MILITARY_COMMAND = {
  stances:{aggressive:1,balanced:.75,defensive:.55},
  createState(countryId){return{countryId,fronts:{},objectives:[],orders:[],stance:'balanced',lastBattleResults:[]};},
  evaluateFront(front){const enemy=front.enemyPower||0,own=front.ownPower||0;return{pressure:enemy/Math.max(1,own),priority:(enemy+front.strategicValue*10)/Math.max(1,own)};},
  chooseObjective(fronts){return[...fronts].sort((a,b)=>this.evaluateFront(b).priority-this.evaluateFront(a).priority)[0]||null;},
  plan(ai,country,world){
    const fronts=world.fronts||[],objective=this.chooseObjective(fronts.filter(f=>f.countryId===country.id));
    if(!objective)return{type:'defend',target:null};
    const e=this.evaluateFront(objective);
    if(e.pressure>1.25)return{type:'reinforce',target:objective.id};
    if(e.pressure<.7&&objective.strategicValue>=6)return{type:'attack',target:objective.id,tactic:'armoredBreakthrough'};
    return{type:'hold',target:objective.id,tactic:'defensiveLine'};
  },
  generateMoveOrder(army,destination,path,priority=1){return{armyId:army.id,type:'move',destination,path,priority};},
  afterBattle(ai,result){
    ai.lastBattleResults.push(result);if(ai.lastBattleResults.length>10)ai.lastBattleResults.shift();
    if(result?.defeat)ai.stance='defensive';else if(result?.decisiveVictory)ai.stance='aggressive';
  },
  tick(ai,country,world){const plan=this.plan(ai,country,world);ai.objectives=plan.target?[plan.target]:[];ai.orders=[];return plan;}
};
