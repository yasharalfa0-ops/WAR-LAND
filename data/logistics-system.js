// WAR LAND - lightweight army supply system.
// Supply is intentionally simple: distance and supply hubs matter, but shortages are forgiving.
const LOGISTICS_SYSTEM = {
  createArmySupply(armyId, supply=100) {
    return { armyId, supply: Math.max(0, Math.min(100, supply)), status:'supplied' };
  },
  dailyUpdate(army, distanceFromHub=0) {
    const drain = distanceFromHub > 10 ? 2 : distanceFromHub > 5 ? 1 : 0;
    army.supply = Math.max(0, army.supply - drain);
    army.status = army.supply < 25 ? 'low' : army.supply < 50 ? 'strained' : 'supplied';
    return army.supply;
  },
  combatModifier(supply) {
    if (supply >= 50) return 1;
    if (supply >= 25) return 0.9;
    return 0.75;
  }
};
