import RestaurantCard from "../RestaurantCard"
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json"

it("should render RestaurantCard component with props Data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("₹400 for two")

    expect(name).toBeInTheDocument();
})