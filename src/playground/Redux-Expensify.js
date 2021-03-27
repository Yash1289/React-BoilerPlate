import { createStore , combineReducers } from "redux";
import { v4 as uuidv4 } from 'uuid';


const expenseAdder = ({ description = "", note = "", amount = 0, createdAt = undefined } = {}) => ({
    type: "ExpenseAdd",
    expense: { id: uuidv4(), description, note, amount, createdAt }
});

const expenseRemover = ({ id } = {}) => ({
    type: "ExpenseRemove",
    id
})

const expenseEdit = (id, update) => ({
    type: "ExpenseEdit",
    id,
    update
})

const setTextFilter = ( text="" ) => ({
    type : "FilterSet" ,
    update : { text }
})

const sortByAmount = () => ({
    type : "SortByAmount" 
})

const sortByDate = () => ({
    type : "SortByDate"
})

const setStartDate = (startDate = undefined) => ({
    type : "SetStartDate",
    update : { startDate }
})

const setEndDate = ( endDate = undefined ) => ({
    type : "SetEndDate" ,
    update : { endDate }
})

const expenseReducerDefaultState = []
const filterReducerDefaultState = {
    text : "" ,
    sortBy : "date" ,
    startDate : undefined ,
    endDate : undefined
}

const expenseReducer = ( state = expenseReducerDefaultState , action) => {
    switch (action.type) {
        case "ExpenseAdd":
            return [
                ...state, action.expense
            ];
        case "ExpenseRemove":
            return state.filter((expense) => expense.id !== action.id)
        case "ExpenseEdit" :
            return state.map((expense) => {
                if( expense.id === action.id){
                    return { ...expense , ...action.update }
                }
                else {
                    return expense ;
                }
            })
        default:
            return state ;
    }
}

const filterReducer = ( state = filterReducerDefaultState , action ) => {
    switch (action.type) {
        case "FilterSet" :
            return { ...state , ...action.update}
        case "SortByAmount" : 
            return { ...state , sortBy : "Amount" }
        case "SortByDate":
            return { ...state, sortBy: "Date" }
        case "SetStartDate" : 
            return { ...state , ...action.update}
        case "SetEndDate" : 
            return { ...state , ...action.update }
        default:
            return state ;
    }
}


const store = createStore(
    combineReducers({
        expenses : expenseReducer,
        filter : filterReducer
    })
)

const filterExpenses = ( expenses , { text , sortBy , startDate, endDate }) => {
    const filteredExpenses = expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        
        return startDateMatch && endDateMatch && textMatch ;
    })

    return filteredExpenses.sort((a , b) => {
        if( sortBy === "date"){
            return a.createdAt < b.createdAt ? 1 : -1
        }   
        if( sortBy === "amount"){
            return a.amount < b.amount ? 1 : -1
        }
    })
}

store.subscribe(() => {
    const data = store.getState()
    console.log(filterExpenses(data.expenses , data.filter))
})


const expenseOne = store.dispatch(expenseAdder({
    description : "Renting" ,
    amount : 2500,
    createdAt : 300
}))


const expenseTwo =  store.dispatch(expenseAdder({
    description : "Movie night out",
    note : "You watched a very impressive srk movie and you are very happy about it",
    amount : 1000,
    createdAt : 500
}))

/* store.dispatch(setStartDate(200))

store.dispatch(setEndDate(600))  */


/*  store.dispatch(expenseEdit( expenseTwo.expense.id , { note : "You watched a movie last night and the movie name was Inglorious Bastards" , amount : 1250}))

store.dispatch(expenseRemover({id : expenseOne.expense.id }))

store.dispatch(setTextFilter("shopping" ))

store.dispatch(setTextFilter())*/

store.dispatch(sortByAmount())

/* store.dispatch(sortByDate())   */





const demoState = {
    expense: [{
        id: "asdfsdalf",
        description: "Pizza Party",
        note: "To enjoy the going of a horrible year called 2020",
        amount: 500
    }],
    filter: {
        text: "rent",
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
}

