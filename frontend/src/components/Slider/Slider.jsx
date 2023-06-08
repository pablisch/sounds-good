import './Slider.css';

const Slider = ({ instruments, lineName, maxVolumeScaledUp, sliderValue, setSliderValue}) => {

  // console.log('instruments in Slider', instruments)
  // console.log(`lineName inside of handleSliderChage: ${lineName}`)
  // if(instruments) { console.log(`max volume is ${instruments[lineName].maxVolume}`) }

  const changeOpacity = (elementId, opacity) => {
    const element = document.getElementById(elementId);
    element.style.opacity = opacity;
  }

  const handleSliderChange = (event) => {
    // console.log(`slider value: ${event.target.value}`)
    // console.log('instrument inside of handleSliderChange', instruments[lineName])
    // console.log(`maxVolumeScaledUp is ${maxVolumeScaledUp}`)
    let negativeValue = (event.target.value - 100);
    instruments[lineName].volume.value = negativeValue;
    setSliderValue(event.target.value)

    let newOpacity = (event.target.value/100)+0.15
    if (newOpacity > 1) {
      newOpacity = 1;
    }
    changeOpacity(lineName, newOpacity);
  }

  const handleButtonClick = () => {
    if(sliderValue > 0){
      // fadeElement(lineName, true, setState);
      instruments[lineName].volume.value = -100;
      setSliderValue(0);
      changeOpacity(lineName, 0.15);

    } else {
      // fadeElement(lineName, false, setState);
      instruments[lineName].volume.value = -6;
      setSliderValue(maxVolumeScaledUp);
      changeOpacity(lineName, 1);
    }
  };

  return (
    <div>
      <input 
      type="range" 
      min="0" 
      max={maxVolumeScaledUp}  
      value={sliderValue} 
      className="slider" 
      onChange={handleSliderChange}>
      </input>
      <img className='mute-icon' src="./mute.png" alt="mute" onClick={handleButtonClick} />
    </div>
  )
}

export default Slider;
