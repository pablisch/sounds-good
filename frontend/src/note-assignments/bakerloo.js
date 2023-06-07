const assignNoteForBakerloo = (stationName) => {
  switch(stationName) {
    case 'Harrow_Wealdstone':
      return 'C4';
    case 'Kenton ':
      return 'D4';
    case 'SouthKenton':
      return 'E4';
    case 'NorthWembley':
      return 'G4';
    case 'WembleyCentral':
      return 'A4';
    case 'StonebridgePark':
      return 'C5';
    case 'Harlesden':
      return 'D5';
    case 'WillesdenJunction':
      return 'E5';
    case 'KensalGreen':
      return 'G5';
    case 'QueensPark':
      return 'A5';
    case 'KilburnPark':
      return 'C6';
    case 'MaidaVale':
      return 'C4';
    case 'WarwickAvenue':
      return 'D4';
    case 'Paddington':
      return 'E4';
    case 'EdgwareRoad(Bakerloo)':
      return 'G4';
    case 'Marylebone':
      return 'A4';
    case 'BakerStreet':
      return 'C5';
    case 'RegentsPark':
      return 'D5';
    case 'OxfordCircus':
      return 'E5';
    case 'PiccadillyCircus':
      return 'G5';
    case 'CharingCross ':
      return 'A5';
    case 'Embankment':
      return 'C6';
    case 'Waterloo':
      return 'C4';
    case 'LambethNorth':
      return 'D4';
    case 'Elephant_Castle':
      return 'E4';
    default:
      return 'C4';
    }
  }
  
  module.exports = assignNoteForBakerloo;