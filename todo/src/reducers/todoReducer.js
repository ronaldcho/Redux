import {
  ADD_TODO,
  TOGGLE_COMPLETE
} from '../actions';

export default (texts = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return texts.concat(action.taskload);
    case TOGGLE_COMPLETE:
      const newTexts = texts.slice(0);
      newTexts[action.taskload].complete = !newTexts[action.taskload].complete;
      return newTexts;
    default:
      return texts;
  }
}
