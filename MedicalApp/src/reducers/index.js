import { combineReducers } from 'redux';
import SpeechTranslationReducer from './SpeechTranslationReducer';
export default combineReducers({
  speechReducer: SpeechTranslationReducer
});
