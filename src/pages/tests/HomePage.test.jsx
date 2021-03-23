import { render, screen } from "@testing-library/react";
import HomePage from "../HomePage";

test("home page with title and product of the day", () => {
  render(<HomePage />);

  //???does an ARIA role exists for h1 ? there is a way to check that the text is h1?
  const title = screen.getByText("My Luxury Shop");
  expect(title).toBeInTheDocument();

  const productOfTheDayTitle = screen.getByText("Product Of The Day");
  expect(productOfTheDayTitle).toBeInTheDocument();
});
