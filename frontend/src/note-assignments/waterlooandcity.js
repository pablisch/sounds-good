const assignNoteForWaterlooAndCityLine = (stationName) => {
  switch(stationName) {
    case 'Waterloo Underground Station':
    return 'C4';
    case 'Bank Underground Station':
    return 'D4';
    default:
    return 'C4';
    }
  }
  
  module.exports = assignNoteForWaterlooAndCityLine;