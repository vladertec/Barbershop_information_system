import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import { legacy_createStore as createStore } from "redux"
import { reducer } from "../../store/store"
import Modal from "./Modal"
import {shallow } from 'enzyme';

describe("<Modal /> component", () => {
  it("should render", () => {
    const store = createStore(reducer)
    render(
      <Provider store={store}>
        <Modal />
      </Provider>
    )
  })

  it("it should show button text", () => {
    const store = createStore(reducer)
    render(
      <Provider store={store}>
        <Modal />
      </Provider>
    )
    screen.getByText(/Ok/i)
  })

  it("do snapshot", () => {
    const store = createStore(reducer)
    const { container } = render(
      <Provider store={store}>
        <Modal />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })

  // it("should pass onClick if button is clicked", () => {
  //   const store = createStore(reducer)
  //   const { container, debug } = render(
  //     <Provider store={store}>
  //       <Modal />
  //     </Provider>
  //   )
  //   userEvent.pointer({ keys: "[MouseLeft]", target: screen.getByText("Ok") })
  //   expect(jest.fn()).toHaveBeenCalledTimes(1)
  // })
})
