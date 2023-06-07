const assignNoteForHammersmithCity = (stationName) => {
  switch(stationName) {
    case 'Hammersmith':
      return 'C1';
    case 'GoldhawkRoad':
      return 'D1';
    case "ShepherdsBushMarket":
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
    case 'Paddington':
      return 'G2';
    case 'EdgwareRoadCircleLine':
      return 'A2';
    case 'BakerStreet':
      return 'C3';
    case 'GreatPortlandStreet':
      return 'C1';
    case 'EustonSquare':
      return 'D1';
    case 'KingsCrossStPancras':
      return 'E1';
    case 'Farringdon':
      return 'G1';
    case 'Barbican':
      return 'A1';
    case 'Moorgate':
      return 'C2';
    case 'LiverpoolStreet':
      return 'D2';
    case 'AldgateEast':
      return 'E2';
    case 'Whitechapel':
      return 'G2';
    case 'StepneyGreen':
      return 'A2';
    case 'MileEnd':
      return 'C3';
    case 'BowRoad':
      return 'C1';
    case 'Bromley-by-Bow':
      return 'D1';
    case 'WestHam':
      return 'E1';
    case 'Plaistow':
      return 'G1';
    case 'UptonPark':
      return 'A1';
    case 'EastHam':
      return 'C2';
    case 'Barking':
      return 'D2';
    case 'Upney':
      return 'E2';
    case 'Becontree':
      return 'G2';
    case 'Dagenham Heathway':
      return 'A2';
    case 'Dagenham East':
      return 'C3';
    case 'Elm Park':
      return 'C1';
    case 'Hornchurch':
      return 'D1';
    case 'Upminster Bridge':
      return 'E1';
    case 'Upminster':
      return 'G1';
    default:
      return 'C2';
  }
};

module.exports = assignNoteForHammersmithCity;
