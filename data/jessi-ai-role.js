// WAR LAND - Jessi AI role split.
const JESSI_AI_ROLE = {
  modeForCountry(country, playerCountries = []) {
    return playerCountries.includes(country.id) ? 'advisor' : 'autopilot';
  },
  canExecute(country, playerCountries = []) {
    return !playerCountries.includes(country.id);
  },
  advise(country, context = {}) {
    return { countryId: country.id, type:'advice', context, execute:false };
  },
  answer(country, question, context = {}) {
    return { countryId: country.id, type:'answer', question, context, execute:false };
  },
  controlUnselected(country, aiPlan) {
    if (this.canExecute(country)) return { countryId:country.id, type:'ai_execute', plan:aiPlan, execute:true };
    return { countryId:country.id, type:'advisor_only', plan:aiPlan, execute:false };
  }
};
