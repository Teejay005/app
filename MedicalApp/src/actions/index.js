import { TRANSCRIBE_SPEECH, TRANSCRIPTION_COMPLETED } from './types';

// // Your Google Cloud Platform project ID
// const projectId = 'modular-sign-178423';
//
// // Instantiates a client
// const speechClient = Speech({
//   projectId: projectId
// });
//
 export const translateText = (audioBytes) => {
// 	// // The name of the audio file to transcribe
// 	// const fileName = './resources/audio.raw';
// 	//
// 	// // Reads a local audio file and converts it to base64
// 	// const file = fs.readFileSync(fileName);
// 	// const audioBytes = file.toString('base64');
//
// 	// The audio file's encoding, sample rate in hertz, and BCP-47 language code
//   const audio = {
// 	  content: audioBytes
//   };
//   const config = {
// 	  encoding: 'LINEAR16',
// 	  sampleRateHertz: 16000,
// 	  languageCode: 'en-US'
//   };
//   const request = {
// 	  audio: audio,
// 	  config: config
//   };
  return (dispatch) => {
    dispatch({ type: TRANSCRIBE_SPEECH});
	// // Detects speech in the audio file
   //  speechClient.recognize(request)
	//   .then((results) => {
	//     const transcription = results[0].results[0].alternatives[0].transcript;
	//     console.log(`Transcription: ${transcription}`);
   //  dispatch({type: TRANSCRIPTION_COMPLETED, payload: transcription});
	//   })
	//   .catch((err) => {
	//     console.error('ERROR:', err);
	//   });
  }
};