import authReducer from "../../reducers/auth"

test("Should set the user uid to the logged in individual" , () => {
    const state = authReducer( {} , { type : "Login" , uid : "98632"})
    expect(state).toEqual({
        uid : "98632"
    })
})

test("Should logout the individual and empty the user uid" , () => {
    const state = authReducer( { uid : "anything" } , { type : "Logout"})
    expect(state).toEqual({})
})