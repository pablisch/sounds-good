import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import './App.css';
import './ArrivalEffects.css';
import TubeMap from '../TubeMap/TubeMap.js';
import audioStartup from '../../audioStartup';
import triggerAudioVisuals from '../../triggerAudioVisuals';
import DataVisualiser from '../DataVisualiser/DataVisualiser.js';
import { Routes, Route } from "react-router-dom";
import processTubeData from '../../processTubeData';
import allStations from '../../stations';
import TIMEOUTS from '../../timeouts';
import SideBarLeft from '../SideBarLeft/SideBarLeft';
import SideBarRight from '../SideBarRight/SideBarRight';
import Navbar from '../Navbar/Navbar';
import Landing from '../Landing/Landing';
import { InstrumentContext } from '../InstrumentProvider/InstrumentProvider';
import logo from '../../logo.svg';

const dataBlockDuration = 30; // seconds between fetch from TFL
const lines = "bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city";
const arrivals = []; // array to hold arrival elements, intialised w global scope
let mainLooper;

function App() {
  const {currentInstrument, setCurrentInstrument} = useContext(InstrumentContext)

  const [visualiseEventsOnly, setVisualiseEventsOnly] = useState(true); // added for data visualiser
  const [dataVisualiserKey, setDataVisualiserKey] = useState(0); // added for data visualiser
  const [visualData, setVisualData] = useState([]); // added for data visualiser
  const [isPlaying, setIsPlaying] = useState(false);
  const [arrivalEffectsToggle, setArrivalEffectsToggle] = useState(true); // added for data visualiser
  const [instruments, setInstruments] = useState(null);
  const [tapInVisible, setTapInVisible] = useState(true);
  const renderCount = useRef(1)

  // const fadeElement = (elementId, state, setState) => {
  //   const element = document.getElementById(elementId);
    
  //   if (state === true) {
  //     let currentOpacity = element.style.opacity;
  //     console.log(element.style.opacity)
  //     if (isNaN(currentOpacity)){ currentOpacity = 1 }
  //     // changeCSSFadeOut(currentOpacity);
  //     element.style.animation = `fade-out 1s forwards`;
  //     setState(false);
  //   } else if (state === false) {
  //     console.log("Fade In");
  //     element.style.animation = "fade-in 1s forwards";
  //     setState(true);
  //   }
  // }

  const soundOn = async () => {
    console.log('SOUND ON');
    setTapInVisible(false);
    setIsPlaying(true); // controls the visibility of the soundon button
    fadeAllStations();
    const awaitedInstruments = await audioStartup(currentInstrument);
    setInstruments(awaitedInstruments);
    
    // Following block provides a looping pedal note:
    // setInterval(() => {
    //   instruments.Pedal.triggerAttackRelease('C4', '1n');
    // }, (dataBlockDuration / 60) * 2000);
  }

  const fadeAllStations = () => {
    allStations.forEach((line) => {
      line.forEach((station) => {
        // console.log(station);
        document.getElementById(station
          .replace(/ *\([^)]*\) */g, "")
          .replace(/\s|\.''/g, '')
          .replace(/\./g, '')
          .replace(/'/g, '')
          .replace(/UndergroundStation/g, '')
          .replace(/-Underground/g, '')
          .replace(/&/g, '_'),)
        .style.opacity = "0%";
      });
    });
  }

  const restart = async () => {
    console.log("RESTART");
    TIMEOUTS.clearAllTimeouts();
    clearTimeout(mainLooper);
    soundOn();
  }

  const fetchData = () => {
    axios.get(`https://api.tfl.gov.uk/Line/${lines}/Arrivals?`)
      .then(response => {
        const filteredData = response.data
          .filter(item => item.timeToStation < dataBlockDuration)
          .map(item => ({
            id: item.id,
            stationName: item.stationName,
            lineName: item.lineName,
            timeToStation: item.timeToStation
          }));
        const sortedData = filteredData.sort((a, b) => a.timeToStation - b.timeToStation);
        const processedData = processTubeData(sortedData, dataBlockDuration);
        console.log('processedData =', processedData);
        setVisualData(processedData);
        console.log("fetchdata instruments", instruments)
        triggerAudioVisuals(processedData, instruments, arrivalEffectsToggle, arrivals);
      })
      .catch(error => {
        console.error('Error fetching tube data:', error);
      });
  };

  // To trigger the first fetch after instruments 
  useEffect(() => {
    if(!isPlaying) {return;}
    // console.log('used effect')

    if(instruments) { 
      console.log('instruments:', instruments)
      fetchData()  // initial fetch as setInterval only exectues after first interval
      mainLooper = setInterval(fetchData, dataBlockDuration * 1000);
    }
  // eslint-disable-next-line
  }, [instruments])

  const toggleVisualiseEventsOnly = () => {
    setVisualiseEventsOnly(!visualiseEventsOnly);
    setDataVisualiserKey((prevKey) => prevKey + 1);
    console.log(visualiseEventsOnly)
    setTimeout(() => {
      setVisualiseEventsOnly(visualiseEventsOnly);
      setDataVisualiserKey((prevKey) => prevKey + 1);
      console.log(visualiseEventsOnly)
    }, 3000);
  };

  // handleArrivalEffectToggle to toggle the value of arrivalEffectsToggle
  const handleArrivalEffectToggle = () => {
    console.log("Helo wrolds")
    setArrivalEffectsToggle(current => !current);
    restart();
    console.log('arrivalEffectsToggle', arrivalEffectsToggle);
  };

  useEffect(() => {
    if(!isPlaying) {return;}
    renderCount.current = renderCount.current + 1
    // console.log('renderCount', renderCount.current)
  })

  useEffect(() => {
    if(!isPlaying) {return;}
    (async () => {
      await restart();
    })();

    return () => {};
  }, [currentInstrument])
  
  const changeCurrentInstrument = (change) => {
    console.log("Change Current Instrument to :" + change);
    setCurrentInstrument(change);
  }

  return (
    <div className="App">
      
      <Routes>
        <Route path='/data' element={<>
          <Navbar />
          <button id="btn-data" className='btn-data-chart' onClick={toggleVisualiseEventsOnly}> {visualiseEventsOnly ? 'Include second intervals where no events occur' : 'Button will reset in 3 seconds'} </button>
          <DataVisualiser key={dataVisualiserKey} data={visualData} duration={dataBlockDuration} visualiseEventsOnly={visualiseEventsOnly} />
        </>} />
        
        <Route path='/sounds-of-the-underground' element={<>
            {tapInVisible && <img src={logo} id="tap-in" className="App-logo" alt="sound on" onClick={soundOn} style={{ cursor: 'pointer' }}/>}
            {/* <img src={logo} id="tap-in" className="App-logo" alt="sound on" /> */}
            <Navbar />
            <div className="container bars-and-map">
              <SideBarLeft restart={restart} soundOn={soundOn} isPlaying={isPlaying} instruments={instruments} changeCurrentInstrument={changeCurrentInstrument}/>
              <TubeMap/>
              <SideBarRight arrivals={arrivals} arrivalEffectsToggle={arrivalEffectsToggle} handleArrivalEffectToggle={handleArrivalEffectToggle} />
            </div> 
          </>
        } />
        
        <Route path='/' element={
          <Landing renderCount={renderCount} />
        }/>
      </Routes>
    </div>
  );
}

export default App;

