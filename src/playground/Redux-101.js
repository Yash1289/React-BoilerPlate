import { createStore } from "redux"

const incrementCount = ({ IncrementBy = 1} = {} ) => ({
    type : 'Increment' ,
    IncrementBy
})

const decrementCount = ({ DecrementBy = 1} = {}) => ({
    type : "Decrement" ,
    DecrementBy
})

const setCount = ({ count }) => ({
    type : "Set" ,
    count
})

const resetCount = () => ({
    type : "Reset"
})

const store = createStore((state = { count:0 } , action) => {
       
    switch (action.type) {
        case 'Increment':
            return{
                count : state.count + action.IncrementBy
            }
        case 'Decrement':
            
            return {
                count : state.count - action.DecrementBy
            }
        case 'Reset' :
            return {
                count : 0
            }
        case 'Set' : 
        return {
            count : action.count
        }
        default:
            return state
    }
})

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(incrementCount({
    IncrementBy : 7
}))


store.dispatch(incrementCount())

 // unsubscribe()

store.dispatch(decrementCount({
    DecrementBy : 15
}))

store.dispatch(decrementCount())

store.dispatch(resetCount())

store.dispatch(setCount({ count : 20}))



console.log("Hello World")