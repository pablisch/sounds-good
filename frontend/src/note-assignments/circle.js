const assignNoteForCircle = (stationName) => {
  switch(stationName) {
    case 'Hammersmith(H&CLine)':
      return 'C1';
    case 'GoldhawkRoad':
      return 'D1';
    case 'ShepherdsBushMarket':
      return 'E1';
    case 'WoodLane':
      return 'G1';
    case 'LatimerRoad':
      return 'A1';
    case 'LadbrokeGrove':
      return 'C2';
    case 'WestbournePark':
      return 'D2';
    case 'RoyalOak':
      return 'E2';
    case 'Paddington(H&CLine)-Underground':
      return 'G2';
    case 'Paddington':
      return 'A2';
    case 'EdgwareRoad(CircleLine)':
      return 'C3';
    case 'BakerStreet':
      return 'C1';
    case 'GreatPortlandStreet':
      return 'D1';
    case 'EustonSquare':
      return 'E1';
    case 'KingsCrossStPancras':
      return 'G1';
    case 'Farringdon':
      return 'A1';
    case 'Barbican':
      return 'C2';
    case 'Moorgate':
      return 'D2';
    case 'LiverpoolStreet':
      return 'E2';
    case 'Aldgate':
      return 'G2';
    case 'TowerHill':
      return 'A2';
    case 'Monument':
      return 'C3';
    case 'CannonStreet':
      return 'C1';
    case 'MansionHouse':
      return 'D1';
    case 'Blackfriars':
      return 'E1';
    case 'Temple':
      return 'G1';
    case 'Embankment':
      return 'A1';
    case 'Westminster':
      return 'C2';
    case 'StJamessPark':
      return 'D2';
    case 'Victoria':
      return 'E2';
    case 'SloaneSquare':
      return 'G2';
    case 'SouthKensington':
      return 'A2';
    case 'GloucesterRoad':
      return 'C3';
    case 'HighStreetKensington':
      return 'C1';
    case 'NottingHillGate':
      return 'D2';
    case 'Bayswater':
      return 'E2';
    default:
      return 'C1';
  }
}

module.exports = assignNoteForCircle;

module.exports = assignNoteForCircle;
