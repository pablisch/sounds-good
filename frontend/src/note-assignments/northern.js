const assignNoteForNorthern = (stationName) => {
  switch(stationName) {
    case 'MillHillEast':
      return 'C3';
    case 'FinchleyCentral':
      return 'D3';
    case 'Highgate':
      return 'E3';
    case 'Archway':
      return 'G3';
    case 'TufnellPark':
      return 'A3';
    case 'KentishTown':
      return 'C4';
    case "CamdenTown":
      return 'D4';
    case 'Euston':
      return 'E4';
    case "KingsCrossStPancras":
      return 'G4';
    case 'Angel':
      return 'A4';
    case 'OldStreet':
      return 'C5';
    case 'Moorgate':
      return 'D5';
    case 'Bank':
      return 'E5';
    case  'LondonBridge':
      return 'G5';
    case 'Borough':
      return 'A5';
    case 'Elephant&Castle':
      return 'C6';
    case 'Kennington':
      return 'C3';
    case 'Oval':
      return 'D3';
    case 'Stockwell':
      return 'E3';
    case 'ClaphamNorth':
      return 'G3';
    case 'ClaphamCommon':
      return 'A3';
    case 'ClaphamSouth':
      return 'C4';
    case 'Balham':
      return 'D4';
    case 'TootingBec':
      return 'E4';
    case 'TootingBroadway':
      return 'G4';
    case 'ColliersWood':
      return 'A4';
    case 'SouthWimbledon':
      return 'C5';
    case 'Morden':
      return 'D5';
    default:
      return 'C4';
  }
};

module.exports = assignNoteForNorthern;
