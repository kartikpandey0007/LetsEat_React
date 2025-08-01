import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import RestaurantCard from "../RestaurantCard";
// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should render the body component with search button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  
  const searchButton = screen.getByRole("button", { name: "Search" });

});

it("should search reslist for pizza input in search box", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchButton = screen.getByRole("button", { name: "Search" });
  
  const searchInput = screen.getByTestId("searchInput")

  fireEvent.change(searchInput, {target : {value: "pizza"}})

  fireEvent.click(searchButton)

  const cards = screen.getAllByTestId("resCard")

  expect(cards.length).toBe(3)

});

it("should filter top Rated restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const topRes = screen.getByText("🌟 Top Rated Restaurants")

  fireEvent.click(topRes)

  const NewRes = screen.getAllByTestId("resCard")
  
  expect(NewRes.length).toBe(7)
});
