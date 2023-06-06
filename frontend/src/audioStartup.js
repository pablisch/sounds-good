import * as Tone from 'tone';

const audioStartup = async () => {
  await Tone.start()

  const reverb = new Tone.Reverb(2.5).toDestination(); // decay time as arg
  reverb.wet.value = 0.4; // 1 == 100% reverb. 0 == no reverb

  const celloSampler = new Tone.Sampler({
    urls: {
      "A5": "cello_A5_05_forte_arco-normal.mp3",
      "A4": "cello_A4_15_forte_arco-normal.mp3",
      "A3": "cello_A3_025_forte_arco-normal.mp3",
    },
    release: 0.5,
    baseUrl: "/samples/cello/",
  }).connect(reverb);
  celloSampler.volume.value = -6;

  const clarinetSampler = new Tone.Sampler({
    urls: {
      "A3": "clarinet_A3_05_piano_normal.mp3",
      "A4": "clarinet_A4_05_piano_normal.mp3",
      "A6": "clarinet_A6_05_piano_normal.mp3",
      "C4": "clarinet_C4_1_piano_normal.mp3"
    },
    release: 1,
    baseUrl: "/samples/clarinet/",
  }).toDestination();
  clarinetSampler.volume.value = -9;

  const doubleBassPizzSampler = new Tone.Sampler({
    urls: {
      "A#1": "double-bass_As1_025_piano_pizz-normal.mp3",
      "A#2": "double-bass_As2_025_piano_pizz-normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/double-bass/",
  }).toDestination();
  doubleBassPizzSampler.volume.value = -3

  const doubleBassSampler = new Tone.Sampler({
    urls: {
      "A1": "double-bass_A1_05_forte_arco-normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/double-bass/",
  }).toDestination();
  doubleBassSampler.volume.value = -6

  const mandolinSampler = new Tone.Sampler({  
    urls: {
      "A5": "mandolin_A5_very-long_piano_normal.mp3",
      "A6": "mandolin_A6_very-long_piano_normal.mp3"
    },
    release: 1,
    baseUrl: "/samples/mandolin/",
  }).connect(reverb);
  mandolinSampler.volume.value = -9;

  const sustainedHornSampler = new Tone.Sampler({
    urls: {
      "C5": "french-horn_C5_very-long_piano_normal.mp3"
    },
    release: 1,
    baseUrl: "/samples/french-horn/",
  }).toDestination();
  sustainedHornSampler.volume.value = -100

  const saxophoneSampler = new Tone.Sampler({
    urls: {
      "A4": "saxophone_A4_very-long_cresc-decresc_normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).toDestination();
  saxophoneSampler.volume.value = -6;

  const trumpetSampler = new Tone.Sampler({
    urls: {
      "A4": "trumpet_A4_15_pianissimo_normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).toDestination();
  trumpetSampler.volume.value = -6;

  const tubaSampler = new Tone.Sampler({
    urls: {
      "C2": "tuba_C2_025_pianissimo_normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).toDestination();
  trumpetSampler.volume.value = -6;

  const violaSampler = new Tone.Sampler({
    urls: {
      "A3": "viola_A3_1_piano_pizz-normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).connect(reverb);
  violaSampler.volume.value = -6;

  const violinSampler = new Tone.Sampler({
    urls: {
      "A6": "violin_A6_1_piano_arco-normal.mp3",
      "A5": "violin_A5_1_mezzo-piano_arco-normal.mp3",
      "A4": "violin_A4_05_mezzo-piano_arco-normal.mp3",
      "A3": "violin_A3_025_mezzo-piano_arco-normal.mp3"
    },
    release: 1,
    baseUrl: "/samples/violin/",
  }).connect(reverb);
  violinSampler.volume.value = -6;

  const windChimesSampler = new Tone.Sampler({
    urls: {
      "C4": "wind_chimes_short.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).toDestination();
  windChimesSampler.volume.value = -6;

  const tubeDrumSampler = new Tone.Sampler({
    urls: {
      // "C1": "tube_drum_c1.mp3",
    //   "C#1": "tube_drum_c#1.mp3",
    //   "D1": "tube_drum_d1.mp3",
    //   "D#1": "tube_drum_d#1.mp3",
    //   "E1": "tube_drum_e1.mp3",
    //   "F1": "tube_drum_f1.mp3",
    //   "F#1": "tube_drum_f#1.mp3",
    //   "G1": "tube_drum_g1.mp3",
    //   "G#1": "tube_drum_g#1.mp3",
    //   "A1": "tube_drum_a1.mp3",
    //   "A#1": "tube_drum_a#1.mp3",
    //   "B1": "tube_drum_b1.mp3",
    //   "C2": "tube_drum_c2.mp3",
    //   "C#2": "tube_drum_c#2.mp3",
    //   "D2": "tube_drum_d2.mp3",
    //   "D#2": "tube_drum_d#2.mp3",
    //   "E2": "tube_drum_e2.mp3",
    //   "F2": "tube_drum_f2.mp3",
    //   "F#2": "tube_drum_f#2.mp3",
    //   "G2": "tube_drum_g2.mp3",
    //   "G#2": "tube_drum_g#2.mp3",
    //   "A2": "tube_drum_a2.mp3",
    //   "A#2": "tube_drum_a#2.mp3",
    //   "B2": "tube_drum_b2.mp3",
    //   "C3": "tube_drum_c3.mp3",
    //   "C#3": "tube_drum_c#3.mp3",
    //   "D3": "tube_drum_d3.mp3",
    //   "D#3": "tube_drum_d#3.mp3",
    //   "E3": "tube_drum_e3.mp3",
    //   "F3": "tube_drum_f3.mp3",
    //   "F#3": "tube_drum_f#3.mp3",
    //   "G3": "tube_drum_g3.mp3",
    //   "G#3": "tube_drum_g#3.mp3",
    //   "A3": "tube_drum_a3.mp3",
    //   "A#3": "tube_drum_a#3.mp3",
    //   "B3": "tube_drum_b3.mp3",
      "C4": "tube_drum_c4.mp3",
      "C#4": "tube_drum_c#4.mp3",
      "D4": "tube_drum_d4.mp3",
      "D#4": "tube_drum_d#4.mp3",
      "E4": "tube_drum_e4.mp3",
      "F4": "tube_drum_f4.mp3",
      "F#4": "tube_drum_f#4.mp3",
      "G4": "tube_drum_g4.mp3",
      "G#4": "tube_drum_g#4.mp3",
      "A4": "tube_drum_a4.mp3",
      "A#4": "tube_drum_a#4.mp3",
      "B4": "tube_drum_b4.mp3",
      "C5": "tube_drum_c5.mp3",
      "C#5": "tube_drum_c#5.mp3",
      "D5": "tube_drum_d5.mp3",
      "D#5": "tube_drum_d#5.mp3",
      "E5": "tube_drum_e5.mp3",
      "F5": "tube_drum_f5.mp3",
      "F#5": "tube_drum_f#5.mp3",
      "G5": "tube_drum_g5.mp3",
      "G#5": "tube_drum_g#5.mp3",
      "A5": "tube_drum_a5.mp3",
      "A#5": "tube_drum_a#5.mp3",
      "B5": "tube_drum_b5.mp3",
      "C6": "tube_drum_c6.mp3",
      // "C#6": "tube_drum_c#6.mp3",
      // "D6": "tube_drum_d6.mp3",
      // "D#6": "tube_drum_d#6.mp3",
      // "E6": "tube_drum_e6.mp3",
      // "F6": "tube_drum_f6.mp3",
      // "F#6": "tube_drum_f#6.mp3",
      // "G6": "tube_drum_g6.mp3",
      // "G#6": "tube_drum_g#6.mp3",
      // "A6": "tube_drum_a6.mp3",
      // "A#6": "tube_drum_a#6.mp3",
      // "B6": "tube_drum_b6.mp3",
      // "C7": "tube_drum_c7.mp3",
      // "C#7": "tube_drum_c#7.mp3",
      // "D7": "tube_drum_d7.mp3",
      // "D#7": "tube_drum_d#7.mp3",
      // "E7": "tube_drum_e7.mp3",
      // "F7": "tube_drum_f7.mp3",
      // "F#7": "tube_drum_f#7.mp3",
      // "G7": "tube_drum_g7.mp3",
      // "G#7": "tube_drum_g#7.mp3",
      // "A7": "tube_drum_a7.mp3",
      // "A#7": "tube_drum_a#7.mp3",
      // "B7": "tube_drum_b7.mp3",
     },
    release: 1,
    baseUrl: "samples/tube_drum_samples/",
  }).toDestination();
  tubeDrumSampler.volume.value = -6;

  await Tone.loaded();

  return {
    Bakerloo: tubeDrumSampler,
    Central: tubeDrumSampler,
    Circle: tubeDrumSampler,
    District: tubeDrumSampler,
    Hammersmith_City: tubeDrumSampler,
    Jubilee: tubeDrumSampler,
    Metropolitan: tubeDrumSampler,
    Northern: tubeDrumSampler,
    Piccadilly: tubeDrumSampler,
    Victoria: tubeDrumSampler, 
    Waterloo_City: tubeDrumSampler,

    Pedal: tubeDrumSampler,
  };
}

export default audioStartup;

