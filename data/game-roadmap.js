// WAR LAND - core integration roadmap and feature registry.
const WARLAND_ROADMAP={
 phases:[
  {id:'world-core',name:'World Core',status:'in_progress',features:['calendar','countries','territories','cities','resources','ports','defenses']},
  {id:'armies',name:'Army Engine',status:'next',features:['units','armies','movement','fronts','combat','occupation']},
  {id:'economy',name:'Economy',status:'next',features:['budget','industry','production','trade','research']},
  {id:'diplomacy',name:'Diplomacy',status:'next',features:['relations','treaties','alliances','war','peace','negotiation']},
  {id:'ai',name:'Country AI',status:'foundation_ready',features:['strategy','economy_ai','diplomacy_ai','military_ai','adaptive_plans']},
  {id:'jessi',name:'JESSI',status:'foundation_ready',features:['advisor_for_players','autopilot_for_unselected_countries','answers','analysis']},
  {id:'ui',name:'Game UI',status:'pending',features:['hud','country_panel','army_panel','diplomacy_panel','economy_panel','jessi_panel']},
  {id:'save-online',name:'Save and Online',status:'pending',features:['save_load','accounts','multiplayer','server_deploy']},
  {id:'qa',name:'QA',status:'pending',features:['integration_tests','combat_tests','ai_tests','mobile_tests','performance']}
 ],
 modes:[{id:'world',countries:30},{id:'europe',countries:30},{id:'asia',countries:30}]
};
