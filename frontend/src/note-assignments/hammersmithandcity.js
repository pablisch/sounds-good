const assignNoteForHammersmithCity = (stationName) => {
  switch(stationName) {
    case 'Hammersmith':
      return 'C4';
    case 'GoldhawkRoad':
      return 'D4';
    case "ShepherdsBushMarket":
      return 'E4';
    case 'WoodLane':
      return 'G4';
    case 'LatimerRoad':
      return 'A4';
    case 'LadbrokeGrove':
      return 'C5';
    case 'WestbournePark':
      return 'D5';
    case 'RoyalOak':
      return 'E5';
    case 'Paddington':
      return 'G5';
    case 'EdgwareRoadCircleLine':
      return 'A5';
    case 'BakerStreet':
      return 'C6';
    case 'GreatPortlandStreet':
      return 'C4';
    case 'EustonSquare':
      return 'D4';
    case 'KingsCrossStPancras':
      return 'E4';
    case 'Farringdon':
      return 'G4';
    case 'Barbican':
      return 'A4';
    case 'Moorgate':
      return 'C5';
    case 'LiverpoolStreet':
      return 'D5';
    case 'AldgateEast':
      return 'E5';
    case 'Whitechapel':
      return 'G5';
    case 'StepneyGreen':
      return 'A5';
    case 'MileEnd':
      return 'C6';
    case 'BowRoad':
      return 'C4';
    case 'Bromley-by-Bow':
      return 'D4';
    case 'WestHam':
      return 'E4';
    case 'Plaistow':
      return 'G4';
    case 'UptonPark':
      return 'A4';
    case 'EastHam':
      return 'C5';
    case 'Barking':
      return 'D5';
    case 'Upney':
      return 'E5';
    case 'Becontree':
      return 'G5';
    case 'Dagenham Heathway':
      return 'A5';
    case 'Dagenham East':
      return 'C6';
    case 'Elm Park':
      return 'C4';
    case 'Hornchurch':
      return 'D4';
    case 'Upminster Bridge':
      return 'E4';
    case 'Upminster':
      return 'G4';
    default:
      return 'C4';
  }
}

module.exports = assignNoteForHammersmithCity;
