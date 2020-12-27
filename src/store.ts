import { createStore, applyMiddleware } from 'redux';
import creatTask from './views/Task/rootReducers';
import thunk from 'redux-thunk';


export default createStore(
	creatTask, applyMiddleware(thunk)
)
