const assignNoteForJubilee = (stationName) => {
  switch(stationName) {
    case 'Stanmore':
      return 'C2';
    case 'CanonsPark':
      return 'D2';
    case 'Queensbury':
      return 'E2';
    case 'Kingsbury':
      return 'G2';
    case 'WembleyPark':
      return 'A2';
    case 'Neasden':
      return 'C3';
    case "WillesdenGreen":
      return 'D3';
    case 'Kilburn':
      return 'E3';
    case 'WestHampstead':
      return 'G3';
    case 'FinchleyRoad':
      return 'A3';
    case 'SwissCottage':
      return 'C4';
    case "StJohnsWood":
      return 'C2';
    case 'BakerStreet':
      return 'D2';
    case  'BondStreet':
      return 'E2';
    case 'GreenPark':
      return 'G2';
    case 'Westminster':
      return 'A2';
    case 'Waterloo':
      return 'C3';
    case 'Southwark':
      return 'D3';
    case 'LondonBridge':
      return 'E3';
    case 'Bermondsey':
      return 'G3';
    case 'CanadaWater':
      return 'A3';
    case 'CanaryWharf':
      return 'C4';
    case 'NorthGreenwich':
      return 'C2';
    case 'CanningTown':
      return 'D2';
    case 'WestHam ':
      return 'E2';
    case 'Stratford':
      return 'G2';
    default:
      return 'C3';
  }
}

module.exports = assignNoteForJubilee;
