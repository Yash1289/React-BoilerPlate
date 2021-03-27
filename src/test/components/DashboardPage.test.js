import { TestScheduler } from "jest"
import React from "react"
import { shallow } from "enzyme"
import DashboardPage from "../../components/DashboardPage"


 test("Should render header component ", () => {
    const wrapper = shallow(<DashboardPage />)
    expect(wrapper).toMatchSnapshot(); 
}) 