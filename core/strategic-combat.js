// WAR LAND - strategic contact, borders and capture layer
(function(){
  const territory=(state,x,y)=>Object.values(state.territories||{}).find(t=>Math.hypot(t.x-x,t.y-y)<(t.radius||38));
  function ensureTerritory(state,id,name,owner,x,y,opts={}){state.territories=state.territories||{};if(!state.territories[id])state.territories[id]={id,name,owner,x,y,radius:opts.radius||38,neighbors:opts.neighbors||[],city:opts.city||null,terrain:opts.terrain||'plain',controller:owner};return state.territories[id];}
  function territoryAt(state,x,y){return territory(state,x,y)||null;}
  function canEnter(state,army,t){if(!army||!t)return false;return !t.controller||t.controller===army.owner||t.controller!==army.owner;}
  function resolveContact(state,moving){if(!moving)return null;const t=territoryAt(state,moving.x,moving.y);if(!t)return null;const enemies=Object.values(state.armies||{}).filter(a=>a.id!==moving.id&&a.status!=='destroyed'&&a.owner!==moving.owner&&Math.hypot(a.x-moving.x,a.y-moving.y)<30);if(enemies.length){moving.status='engaged';enemies.forEach(e=>e.status='engaged');state.fronts=state.fronts||{};const id='front-'+[moving.id,...enemies.map(e=>e.id)].sort().join('-');state.fronts[id]={id,attacker:moving.owner,defenders:enemies.map(e=>e.owner),x:moving.x,y:moving.y,status:'active',territory:t.id};logGameEvent(state,'combat','تماس نظامی و تشکیل جبهه',{frontId:id,territory:t.id});return {type:'combat',frontId:id};}
    if(t.controller&&t.controller!==moving.owner){const old=t.controller;t.controller=moving.owner;t.owner=moving.owner;moving.status='arrived';state.events=state.events||[];logGameEvent(state,'capture','منطقه تصرف شد',{territory:t.id,from:old,to:moving.owner});return {type:'capture',territory:t.id};}
    return {type:'move',territory:t.id};}
  function onArmyArrived(state,army){return resolveContact(state,army);}
  window.WARLAND_COMBAT={ensureTerritory,territoryAt,canEnter,resolveContact,onArmyArrived};
})();