const assignNoteForPiccadilly = (stationName) => {
  switch(stationName) {
    case 'Cockfosters':
      return 'C1';
    case 'Oakwood':
      return 'D1';
    case 'Southgate':
      return 'E1';
    case 'ArnosGrove':
      return 'G1';
    case 'BoundsGreen':
      return 'A1';
    case 'WoodGreen':
      return 'C2';
    case 'TurnpikeLane':
      return 'D2';
    case 'ManorHouse':
      return 'E2';
    case 'FinsburyPark':
      return 'G2';
    case 'Arsenal':
      return 'A2';
    case 'HollowayRoad':
      return 'C1';
    case 'CaleonianRoad':
      return 'D1';
    case 'KingsCrossStPancras':
      return 'E1';
    case 'RussellSquare':
      return 'G1';
    case 'Holborn':
      return 'A1';
    case 'Covent Garden':
      return 'C2';
    case 'Leicester Square':
      return 'D2';
    case 'GreenPark':
      return 'E2';
    case 'PiccadillyCircus':
      return 'G2';
    case 'HydeParkCorner':
      return 'A2';
    case 'Knightsbridge':
      return 'C1';
    case 'SouthKensington':
      return 'D1';
    case 'GloucesterRoad':
      return 'E1';
    case 'EarlsCourt':
      return 'G1';
    case 'BaronsCourt':
      return 'A1';
    case 'Hammersmith':
      return 'C2';
    case 'TurnhamGreen':
      return 'D2';
    case 'Acton Town':
      return 'E2';
    case 'SouthEaling':
      return 'G2';
    case 'Northfields':
      return 'A2';
    case 'BostonManor':
      return 'C1';
    case 'Osterley':
      return 'D1';
    case 'HounslowEast':
      return 'E1';
    case 'HounslowCentral':
      return 'G1';
    case 'HounslowWest':
      return 'A1';
    case 'HattonCross':
      return 'C2';
    case 'HeathrowTerminal 4':
      return 'D2';
    case 'HeathrowTerminals23':
      return 'E2';
    case 'HeathrowTerminal5':
      return 'G2';
    default:
      return 'C1';
    }
  };
  
  module.exports = assignNoteForPiccadilly;
  
  