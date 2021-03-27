import { TestScheduler } from "@jest/core"

import { login , logout } from "../../actions/auth"


test("Should generate login action object " , () => {
    const action = login(  "1578" )
    expect(action).toEqual({
        type : "Login" ,
        uid : "1578"
    })
})

test("Should generate logout action object" , () => {
    const action = logout()
    expect(action).toEqual({
        type : "Logout"
    })
})