// WAR LAND - equipment catalogue, 1939 starting era.
const EQUIPMENT_1939 = {
  infantryWeapons: ['rifle','machineGun','submachineGun','mortar'],
  artillery: ['fieldGun','heavyArtillery','antiTankGun','antiAirGun'],
  armor: ['lightTank','mediumTank','heavyTank','tankDestroyer'],
  aircraft: ['fighter','tacticalBomber','strategicBomber','reconAircraft','transportAircraft'],
  naval: ['submarine','destroyer','lightCruiser','heavyCruiser','battleship','aircraftCarrier','transportShip'],
  support: ['truck','engineering','signals','medical'],
  stats: {
    rifle:{cost:1,steel:1,manpower:1}, machineGun:{cost:2,steel:2,manpower:1}, fieldGun:{cost:5,steel:6,manpower:2},
    antiTankGun:{cost:6,steel:7,manpower:2}, antiAirGun:{cost:7,steel:8,aluminum:1,manpower:2},
    lightTank:{cost:15,steel:18,aluminum:2,oil:2,manpower:3}, mediumTank:{cost:25,steel:30,aluminum:3,oil:4,manpower:4},
    heavyTank:{cost:40,steel:50,aluminum:5,oil:7,manpower:6}, fighter:{cost:22,steel:10,aluminum:15,oil:3,manpower:2},
    tacticalBomber:{cost:30,steel:12,aluminum:18,oil:4,manpower:3}, strategicBomber:{cost:45,steel:18,aluminum:28,oil:6,manpower:4},
    submarine:{cost:35,steel:45,aluminum:2,oil:5,manpower:5}, destroyer:{cost:45,steel:55,aluminum:4,oil:7,manpower:6},
    battleship:{cost:140,steel:180,aluminum:12,oil:20,manpower:18}, aircraftCarrier:{cost:160,steel:190,aluminum:25,oil:22,manpower:20}
  }
};
