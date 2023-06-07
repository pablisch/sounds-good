const assignNoteForBakerloo = (stationName) => {
  switch(stationName) {
    case 'Harrow_Wealdstone':
      return 'C2';
    case 'Kenton ':
      return 'D2';
    case 'SouthKenton':
      return 'E2';
    case 'NorthWembley':
      return 'G2';
    case 'WembleyCentral':
      return 'A2';
    case 'StonebridgePark':
      return 'C3';
    case 'Harlesden':
      return 'D3';
    case 'WillesdenJunction':
      return 'E3';
    case 'KensalGreen':
      return 'G3';
    case 'QueensPark':
      return 'C4';
    case 'KilburnPark':
      return 'D4';
    case 'MaidaVale':
      return 'E4';
    case 'WarwickAvenue':
      return 'G4';
    case 'Paddington':
      return 'A4';
    case 'EdgwareRoad(Bakerloo)':
      return 'C5';
    case 'Marylebone':
      return 'C2';
    case 'BakerStreet':
      return 'D2';
    case 'RegentsPark':
      return 'E2';
    case 'OxfordCircus':
      return 'G2';
    case 'PiccadillyCircus':
      return 'A2';
    case 'CharingCross ':
      return 'C3';
    case 'Embankment':
      return 'D3';
    case 'Waterloo':
      return 'E3';
    case 'LambethNorth':
      return 'G3';
    case 'Elephant_Castle':
      return 'A3';
    default:
      return 'C4';
    }
  }
  
  module.exports = assignNoteForBakerloo;