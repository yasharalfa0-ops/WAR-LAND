// WAR LAND - central game state.
const WARLAND_GAME_STATE={version:1,mode:'world',date:{year:1939,month:9,day:1},speed:1,paused:true,turn:0,countries:{},armies:{},fronts:{},battles:{},diplomacy:{},economy:{},map:{selectedCountry:null,selectedArmy:null,layers:{cities:true,ports:true,oil:true,defenses:true}},jessi:{enabled:true,playerCountries:[],modeByCountry:{}},events:[],log:[]};
function createGameState(overrides={}){return structuredClone({...WARLAND_GAME_STATE,...overrides});}
function advanceGameDay(state){const days=[31,28,31,30,31,30,31,31,30,31,30,31];state.date.day++;const limit=days[state.date.month-1]||30;if(state.date.day>limit){state.date.day=1;state.date.month++;if(state.date.month>12){state.date.month=1;state.date.year++;}}state.turn++;return state;}
function setGameMode(state,mode){if(!['world','europe','asia'].includes(mode))throw new Error('Invalid game mode');state.mode=mode;return state;}
function logGameEvent(state,type,message,data={}){state.log.push({turn:state.turn,date:{...state.date},type,message,data});if(state.log.length>500)state.log.shift();}
