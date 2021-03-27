import { createStore , combineReducers , applyMiddleware } from "redux"
import authReducer from "../reducers/auth"
import thunk from "redux-thunk" ;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

const storeConfigure  = () => {
    const store = createStore(
        combineReducers({
            auth : authReducer 
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store ;
}

export default storeConfigure