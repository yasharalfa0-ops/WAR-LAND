// WAR LAND - strategic combat foundation.
const COMBAT_SYSTEM = {
  terrain: { plains:1, city:0.9, forest:0.85, mountain:0.7, desert:0.9, river:0.8 },
  tactics: { assault:1, armoredBreakthrough:1.12, defensive:1.1, encirclement:1.15, withdrawal:0.9 },
  resolve(attacker, defender, options={}) {
    const terrain = this.terrain[options.terrain] || 1;
    const tactic = this.tactics[options.attackerTactic] || 1;
    const attack = attacker.power * tactic * terrain * (attacker.morale / 100) * (attacker.supplyModifier || 1);
    const defense = defender.power * (defender.morale / 100) * (defender.supplyModifier || 1) / terrain;
    const ratio = attack / Math.max(1, defense);
    return { ratio, attackerAdvantage: ratio >= 1, estimated: ratio >= 1.2 ? 'attacker_favored' : ratio <= 0.8 ? 'defender_favored' : 'contested' };
  }
};
