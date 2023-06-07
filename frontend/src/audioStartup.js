import * as Tone from 'tone';

const audioStartup = async () => {
  await Tone.start()

  const reverb = new Tone.Reverb(2.5).toDestination(); // decay time as arg
  reverb.wet.value = 0.4; // 1 == 100% reverb. 0 == no reverb

  

  


  

  

  

 



  

  

  const violinSampler = new Tone.Sampler({
    urls: {
      "A3": "violin_legato_a3.mp3",
      "A4": "violin_legato_a4.mp3",
      "A5": "violin_legato_a5.mp3",
      "C3": "violin_legato_c3.mp3",
      "C4": "violin_legato_c4.mp3",
      "C5": "violin_legato_c5.mp3",
      "C6": "violin_legato_c6.mp3",
      "D3": "violin_legato_d3.mp3",
      "D4": "violin_legato_d4.mp3",
      "D5": "violin_legato_d5.mp3",
      "E3": "violin_legato_e3.mp3",
      "E4": "violin_legato_e4.mp3",
      "E5": "violin_legato_e5.mp3",
      "G3": "violin_legato_g3.mp3",
      "G4": "violin_legato_g4.mp3",
      "G5": "violin_legato_g5.mp3"

      
    },
    release: 1,
    baseUrl: "/samples/violin/violin_samples/",
  }).toDestination();
  violinSampler.volume.value = -6;

  

  await Tone.loaded();

  return {
    // Bakerloo: violinSampler,
    Central: violinSampler,
    // Circle: violinSampler,
    // District: violinSampler,
    // Hammersmith_City: violinSampler,
    // Jubilee: violinSampler,
    // Metropolitan: violinSampler,
    // Northern: violinSampler,
    // Piccadilly: violinSampler,
    // Victoria: violinSampler, 
    // Waterloo_City: violinSampler,

    // Pedal: violinSampler
  };
}

export default audioStartup;

