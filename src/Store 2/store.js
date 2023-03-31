import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import combineReducers from './reducers/combine';
// import changeFav from './reducers/addFav';
// import changeMovies from './reducers/Movies';



const store=createStore(combineReducers,composeWithDevTools(applyMiddleware(thunk)))  //,composeWithDevTools()  //changeFav,changeMovies

export default store