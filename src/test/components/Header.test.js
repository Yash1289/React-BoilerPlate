import { TestScheduler } from "jest"
import React from "react"
import { shallow } from "enzyme"
import ReactShallowRenderer from "react-test-renderer/shallow"
import { Header } from "../../components/Header"



 test("Should render header component ", () => {
    const wrapper = shallow(<Header doLogout = { () => {}}/>)
    expect(wrapper).toMatchSnapshot(); 
      /*   const renderer = new ReactShallowRenderer();
    renderer.render(<Header />)
    expect(renderer.getRenderOutput()).toMatchSnapshot(); */     
}) 

test("Should call doLogout on button click", () => {
  const doLogout =  jest.fn()
  const wrapper = shallow(<Header doLogout={doLogout} />)
  wrapper.find("button").simulate("click")
  expect(doLogout).toHaveBeenCalled()
})