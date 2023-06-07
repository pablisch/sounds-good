const assignNoteForVictoria = (stationName) => {
  switch(stationName) {
    case 'WalthamstowCentral':
      return 'C3';
    case 'BlackhorseRoad':
      return 'D3';
    case 'TottenhamHale':
      return 'E3';
    case 'SevenSisters':
      return 'G3';
    case 'FinsburyPark':
      return 'A3';
    case 'Highbury&Islington':
      return 'C4';
    case "KingsCrossStPancras":
      return 'D4';
    case 'Euston':
      return 'E4';
    case 'WarrenStreet':
      return 'G4';
    case 'OxfordCircus':
      return 'A4';
    case 'GreenPark':
      return 'C3';
    case 'Victoria':
      return 'D3';
    case 'Pimlico':
      return 'E3';
    case  'Vauxhall':
      return 'G3';
    case 'Stockwell':
      return 'A3';
    case 'Brixton':
      return 'C4';
    default:
      return 'C2';
  }
};

module.exports = assignNoteForVictoria;
