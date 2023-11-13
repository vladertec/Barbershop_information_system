import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import { legacy_createStore as createStore } from "redux"
import { reducer } from "../../store/store"
import BuyModal from "./BuyModal"

describe("<BuyModal /> component", () => {
  it("should render", () => {
    const store = createStore(reducer)
    render(
      <Provider store={store}>
        <BuyModal />
      </Provider>
    )
    // screen.debug();
    // userEvent.pointer({keys: '[MouseLeft]', target: screen.getByText('Ok')})
    // expect(handleClick).toHaveBeenCalled()
  })

  it("it should show buttons text", () => {
    const store = createStore(reducer)
    render(
      <Provider store={store}>
        <BuyModal />
      </Provider>
    )
    screen.getByText(/Back to cart/i)
    screen.getByText(/Checkout/i)
  })

  it("do snapshot", () => {
    const store = createStore(reducer)
    const { container } = render(
      <Provider store={store}>
        <BuyModal />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })

  // it("should pass onClick if buttons is clicked", () => {
  //   const store = createStore(reducer)
  //   const handleClick = jest.fn()
  //   render(
  //     <Provider store={store}>
  //       <Modal />
  //     </Provider>
  //   )
  //   userEvent.pointer({
  //     keys: "[MouseLeft]",
  //     target: screen.getByText("Back to cart"),
  //   })
  //   expect(handleClick).toHaveBeenCalled()
  //   userEvent.pointer({
  //     keys: "[MouseLeft]",
  //     target: screen.getByText("Checkout"),
  //   })
  //   expect(handleClick).toHaveBeenCalled()
  // })
})
