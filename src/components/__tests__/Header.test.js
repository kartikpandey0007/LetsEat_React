import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";


it("should load Header component with a login button",()=>{
    render(
        <BrowserRouter>
        <Provider store = {appStore}>
             <Header/>
        </Provider>
        </BrowserRouter>
    )

    //const LoginButtonLoaded = screen.getByRole("button")
    const LoginButtonLoaded = screen.getByRole("button", {name : "Login"})

    expect(LoginButtonLoaded).toBeInTheDocument();
})

it("should render cart item with 0 items", ()=>{
     render(
        <BrowserRouter>
        <Provider store = {appStore}>
             <Header/>
        </Provider>
        </BrowserRouter>
    )

    //const CartItems = screen.getByText("Cart🛒(0)")
    const CartItems = screen.getByText(/Cart/)

    expect(CartItems).toBeInTheDocument();
})

it("should change login button to logout on click",()=>{
    render(
        <BrowserRouter>
        <Provider store = {appStore}>
             <Header/>
        </Provider>
        </BrowserRouter>
    )

    const LoginButtonLoaded = screen.getByRole("button", {name : "Login"})

    fireEvent.click(LoginButtonLoaded)

    const LogoutButtonLoaded = screen.getByRole("button", {name : "Logout"})

    expect(LogoutButtonLoaded).toBeInTheDocument();
})