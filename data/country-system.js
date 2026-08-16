// WAR LAND country state model. Lightweight first playable build.
const COUNTRY_SYSTEM = {
  defaults: { stability: 70, warSupport: 50, manpower: 100, industryEfficiency: 1, taxRate: 20 },
  createState(countryId, base) {
    return {
      countryId,
      treasury: base.money,
      resources: { oil: base.oil, steel: base.steel, coal: base.coal, aluminum: base.aluminum },
      stability: this.defaults.stability,
      warSupport: this.defaults.warSupport,
      manpower: this.defaults.manpower,
      industryEfficiency: this.defaults.industryEfficiency,
      taxRate: this.defaults.taxRate,
      atWarWith: [],
      allies: [],
      controlledRegions: []
    };
  },
  dailyTick(state) {
    const income = Math.max(1, Math.floor(state.treasury * (state.taxRate / 1000)));
    state.treasury += income;
    for (const key of ['oil', 'steel', 'coal', 'aluminum']) state.resources[key] = Math.max(0, state.resources[key]);
    return income;
  }
};
