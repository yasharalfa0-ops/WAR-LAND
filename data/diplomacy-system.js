// WAR LAND - diplomacy foundation.
const DIPLOMACY_SYSTEM = {
  relationRange: { min:-100, max:100 },
  createState() {
    return { relations:{}, treaties:[], alliances:[], tradeDeals:[], wars:[], diplomaticPower:50 };
  },
  setRelation(state, countryId, value) {
    state.relations[countryId] = Math.max(this.relationRange.min, Math.min(this.relationRange.max, value));
  },
  improveRelation(state, countryId, amount=5) {
    this.setRelation(state, countryId, (state.relations[countryId] || 0) + amount);
  },
  worsenRelation(state, countryId, amount=5) {
    this.setRelation(state, countryId, (state.relations[countryId] || 0) - amount);
  },
  addTreaty(state, type, countryId) {
    state.treaties.push({ type, countryId, active:true });
  },
  declareWar(state, countryId) {
    if (!state.wars.includes(countryId)) state.wars.push(countryId);
  },
  makePeace(state, countryId) {
    state.wars = state.wars.filter(id => id !== countryId);
  }
};
