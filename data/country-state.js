// WAR LAND: unified economic, diplomatic and military country state.
const COUNTRY_STATE = {
  create(base) {
    return {
      economy: {
        treasury: base.money,
        oil: base.oil,
        steel: base.steel,
        coal: base.coal,
        aluminum: base.aluminum,
        stability: 70,
        industry: 1,
        taxRate: 20
      },
      diplomacy: {
        relations: {},
        allies: [],
        enemies: [],
        treaties: [],
        tradeDeals: [],
        warSupport: 50,
        diplomaticPower: 50
      },
      military: {
        manpower: 100,
        armies: [],
        commanders: [],
        equipmentStock: {},
        doctrine: 'balanced',
        experience: 0,
        mobilization: 50,
        armyPower: 0,
        airPower: 0,
        navalPower: 0
      }
    };
  },
  dailyUpdate(state) {
    state.economy.treasury += Math.max(1, Math.floor(state.economy.treasury * state.economy.taxRate / 1000));
    state.military.manpower = Math.max(0, state.military.manpower);
    state.diplomacy.diplomaticPower = Math.min(100, state.diplomacy.diplomaticPower + 1);
  }
};
