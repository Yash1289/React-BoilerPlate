import { TestScheduler } from "jest"
import React from "react"
import { shallow } from "enzyme"
import NotFound from "../../components/NotFound"


test("Should render header component ", () => {
    const wrapper = shallow(<NotFound />)
    expect(wrapper).toMatchSnapshot(); 
})