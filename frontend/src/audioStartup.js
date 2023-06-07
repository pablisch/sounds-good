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
    baseUrl: "/samples/violin_samples/",
  }).toDestination();
  violinSampler.volume.value = -6;

  const violaSampler = new Tone.Sampler({
    urls: {
      "A3": "viola_legato_a3.mp3",
      "A4": "viola_legato_a4.mp3",
      "A5": "viola_legato_a5.mp3",
      "C3": "viola_legato_c3.mp3",
      "C4": "viola_legato_c4.mp3",
      "C5": "viola_legato_c5.mp3",
      "D3": "viola_legato_d3.mp3",
      "D4": "viola_legato_d4.mp3",
      "D5": "viola_legato_d5.mp3",
      "E3": "viola_legato_e3.mp3",
      "E4": "viola_legato_e4.mp3",
      "E5": "viola_legato_e5.mp3",
      "G3": "viola_legato_g3.mp3",
      "G4": "viola_legato_g4.mp3"
    },
    release: 1,
    baseUrl: "/samples/viola_samples/",
  }).toDestination();
  violaSampler.volume.value = -6;

  const doublebassSampler = new Tone.Sampler({
    urls: {
      "A1": "doublebass_legato_a1.mp3",
      "A2": "doublebass_legato_a2.mp3",
      "C1": "doublebass_legato_c1.mp3",
      "C2": "doublebass_legato_c2.mp3",
      "C3": "doublebass_legato_c3.mp3",
      "D1": "doublebass_legato_d1.mp3",
      "D2": "doublebass_legato_d2.mp3",
      "E1": "doublebass_legato_e1.mp3",
      "E2": "doublebass_legato_e2.mp3",
      "G1": "doublebass_legato_g1.mp3",
      "G2": "doublebass_legato_g2.mp3"
    },
    release: 1,
    baseUrl: "/samples/doublebass_samples/",
  }).toDestination();
  doublebassSampler.volume.value = -6;

  const celloSampler = new Tone.Sampler({
    urls: {
      "A1": "cello_legato_a1.mp3",
      "A2": "cello_legato_a2.mp3",
      "A3": "cello_legato_a3.mp3",
      "C1": "cello_legato_c1.mp3",
      "C2": "cello_legato_c2.mp3",
      "C3": "cello_legato_c3.mp3",
      "C4": "cello_legato_c4.mp3",
      "D1": "cello_legato_d1.mp3",
      "D2": "cello_legato_d2.mp3",
      "D3": "cello_legato_d3.mp3",
      "E1": "cello_legato_e1.mp3",
      "E2": "cello_legato_e2.mp3",
      "E3": "cello_legato_e3.mp3",
      "G1": "cello_legato_g1.mp3",
      "G2": "cello_legato_g2.mp3",
      "G3": "cello_legato_g3.mp3",
    },
    release: 1,
    baseUrl: "/samples/cello_samples/",
  }).toDestination();
  celloSampler.volume.value = -6;

  const tubaSampler = new Tone.Sampler({
    urls: {
      "A1": "tuba_marc_a1.mp3",
      "A2": "tuba_marc_a2.mp3",
      "C1": "tuba_marc_c1.mp3",
      "C2": "tuba_marc_c2.mp3",
      "C3": "tuba_marc_c3.mp3",
      "D1": "tuba_marc_d1.mp3",
      "D2": "tuba_marc_d2.mp3",
      "E1": "tuba_marc_e1.mp3",
      "E2": "tuba_marc_e2.mp3",
      "G1": "tuba_marc_g1.mp3",
      "G2": "tuba_marc_g2.mp3"
    },
    release: 1,
    baseUrl: "/samples/tuba_samples/",
  }).toDestination();
  tubaSampler.volume.value = -12;

  const fhornSampler = new Tone.Sampler({
    urls: {
      "A2": "fhorn_stacc_a2.mp3",
      "A3": "fhorn_stacc_a3.mp3",
      "C2": "fhorn_stacc_c2.mp3",
      "C3": "fhorn_stacc_c3.mp3",
      "C4": "fhorn_stacc_c4.mp3",
      "D2": "fhorn_stacc_d2.mp3",
      "D3": "fhorn_stacc_d3.mp3",
      "E2": "fhorn_stacc_e2.mp3",
      "E3": "fhorn_stacc_e3.mp3",
      "G2": "fhorn_stacc_g2.mp3",
      "G3": "fhorn_stacc_g3.mp3"
    },
    release: 1,
    baseUrl: "/samples/fhorn_samples/",
  }).toDestination();
  fhornSampler.volume.value = -12;

  
  

  await Tone.loaded();

  return {
    Bakerloo: violaSampler,
    Central: violinSampler,
    Circle: doublebassSampler,
    District: celloSampler,
    Hammersmith_City: tubaSampler,
    Jubilee: fhornSampler,
    // Metropolitan: violinSampler,
    // Northern: violinSampler,
    // Piccadilly: violinSampler,
    // Victoria: violinSampler, 
    // Waterloo_City: violinSampler,

    // Pedal: violinSampler
  };
}

export default audioStartup;

