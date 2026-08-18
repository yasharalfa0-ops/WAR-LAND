// WAR LAND - military units foundation
const WAR_UNITS = {
  infantry: {name:'پیاده نظام', type:'land', attack:20, defense:30, speed:40},
  armored: {name:'زرهی', type:'land', attack:55, defense:50, speed:45},
  tank: {name:'تانک', type:'land', attack:75, defense:70, speed:35},
  artillery: {name:'توپخانه', type:'land', attack:65, defense:25, speed:20},
  fighter: {name:'جنگنده', type:'air', attack:80, defense:45, speed:90},
  bomber: {name:'بمب افکن', type:'air', attack:95, defense:35, speed:70},
  destroyer: {name:'ناوشکن', type:'navy', attack:70, defense:60, speed:55},
  submarine: {name:'زیردریایی', type:'navy', attack:85, defense:40, speed:45}
};

function createWarUnit(id, kind, owner, x, y, amount=1000){
  const base = WAR_UNITS[kind] || WAR_UNITS.infantry;
  return {
    id,
    owner,
    kind,
    name: base.name,
    position:{x,y},
    amount,
    equipment:[],
    fuel:100,
    morale:100,
    stats:{attack:base.attack, defense:base.defense, speed:base.speed}
  };
}

if(typeof window!=='undefined'){
  window.WAR_UNITS = WAR_UNITS;
  window.createWarUnit = createWarUnit;
}
