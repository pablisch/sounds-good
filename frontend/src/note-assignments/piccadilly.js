const assignNoteForPiccadilly = (stationName) => {
  switch(stationName) {
    case 'Cockfosters':
      return 'C4';
    case 'Oakwood':
      return 'D4';
    case 'Southgate':
      return 'E4';
    case 'ArnosGrove':
      return 'G4';
    case 'BoundsGreen':
      return 'A4';
    case 'WoodGreen':
      return 'C5';
    case 'TurnpikeLane':
      return 'D5';
    case 'ManorHouse':
      return 'E5';
    case 'FinsburyPark':
      return 'G5';
    case 'Arsenal':
      return 'A5';
    case 'HollowayRoad':
      return 'C6';
    case 'CaleonianRoad':
      return 'C4';
    case 'KingsCrossStPancras':
      return 'D4';
    case 'RussellSquare':
      return 'E4';
    case 'Holborn':
      return 'G4';
    case 'Covent Garden':
      return 'A4';
    case 'Leicester Square':
      return 'C5';
    case 'GreenPark':
      return 'D5';
    case 'PiccadillyCircus':
      return 'E5';
    case 'HydeParkCorner':
      return 'G5';
    case 'Knightsbridge':
      return 'A5';
    case 'SouthKensington':
      return 'C6';
    case 'GloucesterRoad':
      return 'C4';
    case 'EarlsCourt':
      return 'D4';
    case 'BaronsCourt':
      return 'E4';
    case 'Hammersmith':
      return 'G4';
    case 'TurnhamGreen':
      return 'A4';
    case 'Acton Town':
      return 'C4';
    case 'SouthEaling':
      return 'D4';
    case 'Northfields':
      return 'E4';
    case 'BostonManor':
      return 'G4';
    case 'Osterley':
      return 'A4';
    case 'HounslowEast':
      return 'C5';
    case 'HounslowCentral':
      return 'D5';
    case 'HounslowWest':
      return 'E5';
    case 'HattonCross':
      return 'G5';
    case 'HeathrowTerminal 4':
      return 'A5';
    case 'HeathrowTerminals23':
      return 'C4';
    case 'HeathrowTerminal5':
      return 'D4';
    default:
      return 'C4';
    }
  }
  
  module.exports = assignNoteForPiccadilly;
  