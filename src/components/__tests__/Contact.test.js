import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us Page test Cases", () => {

  beforeAll(()=>{
    console.log("before All")
  })

   beforeEach(()=>{
    console.log("before All")
  })

  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load buttom inside contact us component", () => {
    render(<Contact />);

    //const button = screen.getByRole("button");
    const button = screen.getByText("Send");

    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact us component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Your Name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside contact us component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
