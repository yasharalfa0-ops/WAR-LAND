// WAR LAND - interactive strategic map foundation.
// Keeps the existing map data and adds lightweight selection/info behavior.
function WARLAND_MAP_INFO(){
  const root=document.getElementById('map');
  if(!root) return;
  root.addEventListener('click',e=>{
    const target=e.target.closest('[data-country],[data-city],[data-port]');
    if(!target) return;
    const type=target.dataset.city?'city':target.dataset.port?'port':'country';
    const id=target.dataset.city||target.dataset.port||target.dataset.country;
    const name=target.dataset.name||id;
    window.dispatchEvent(new CustomEvent('warland-map-select',{detail:{type,id,name,owner:target.dataset.owner||'',kind:target.dataset.kind||type}}));
  });
}
if(typeof window!=='undefined') window.WARLAND_MAP_INFO=WARLAND_MAP_INFO;
