import AppDispatcher from "../flux/appDispatcher.js";
import * as ActionTypes from '../flux/appActionTypes.js';
import {EventEmitter} from 'events';
const CHANGE_EVENT = 'changed';
const counterValues = {
	"First": 0,
	"Second": 10,
	"Third": 20
};
const CounterStore = Object.assign({},EventEmitter.prototype, {
	getCounterValues: function(){
		return counterValues;
	},
	emitChange:function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener:function(callback){
		this.on(CHANGE_EVENT,callback);
	},
	removeChangeListener:function(callback){
		this.removeListener(CHANGE_EVENT,callback);
	}
})

CounterStore.AppDispatchToken = AppDispatcher.register((action)=>{
	console.log(action)
	counterValues[action.counterCaption]++;
	console.log(counterValues)
	CounterStore.emitChange();
})

export default CounterStore;
