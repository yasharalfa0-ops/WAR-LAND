// WAR LAND - integration hub. One entry point for the game systems.
function createIntegratedGame(){const state=createGameState();connectNewsToGameState(state);return state;}
function emitGameEvent(state,event){state.events.push(event);logGameEvent(state,event.type,event.message,event.data||{});WARLAND_NEWS_ENGINE.fromEvent(state,event);return state;}
function tickGame(state){if(state.paused)return state;advanceGameDay(state);return state;}
function registerCountry(state,country){state.countries[country.id]=country;return country;}
function registerArmy(state,army){state.armies[army.id]=army;return army;}
function getLatestNews(state,count=10){return WARLAND_NEWS_ENGINE.latest(state,count);}
