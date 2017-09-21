import React from 'react';

import { TRANSCRIPTION_COMPLETED } from '../actions/types';
const INITIAL_STATE = null;

const SpeechTranslationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRANSCRIPTION_COMPLETED:
      return { ...state, transcription: action.payload };
    default:
		 	return INITIAL_STATE;
  }
};


export default SpeechTranslationReducer;