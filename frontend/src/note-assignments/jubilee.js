const assignNoteForJubilee = (stationName) => {
  switch(stationName) {
    case 'Stanmore':
      return 'C4';
    case 'CanonsPark':
      return 'D4';
    case 'Queensbury':
      return 'E4';
    case 'Kingsbury':
      return 'G4';
    case 'WembleyPark':
      return 'A4';
    case 'Neasden':
      return 'C5';
    case "WillesdenGreen":
      return 'D5';
    case 'Kilburn':
      return 'E5';
    case 'WestHampstead':
      return 'G5';
    case 'FinchleyRoad':
      return 'A5';
    case 'SwissCottage':
      return 'C6';
    case "StJohnsWood":
      return 'C4';
    case 'BakerStreet':
      return 'D4';
    case  'BondStreet':
      return 'E4';
    case 'GreenPark':
      return 'G4';
    case 'Westminster':
      return 'A4';
    case 'Waterloo':
      return 'C5';
    case 'Southwark':
      return 'D5';
    case 'LondonBridge':
      return 'E5';
    case 'Bermondsey':
      return 'G5';
    case 'CanadaWater':
      return 'A5';
    case 'CanaryWharf':
      return 'C6';
    case 'NorthGreenwich':
      return 'C4';
    case 'CanningTown':
      return 'D4';
    case 'WestHam ':
      return 'E4';
    case 'Stratford':
      return 'G4';
    default:
      return 'C4';
  }
}

module.exports = assignNoteForJubilee;
