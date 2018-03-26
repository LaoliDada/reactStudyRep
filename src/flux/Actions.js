import * as ActionTypes from "./appActionTypes.js";
import AppDispatcher from "./appDispatcher.js";
export const increment = (counterCaption) => {
	AppDispatcher.dispatch({
		type:ActionTypes.INCREMENT,
		counterCaption:counterCaption
	});
};

