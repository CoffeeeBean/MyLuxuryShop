import { render, screen } from "@testing-library/react";
import HomePage from "../HomePage";

test("home page with title and product of the day", async () => {
  render(<HomePage />);

  //???does an ARIA role exists for h1 ? there is a way to check that the text is h1?
  const title = screen.getByText("My Luxury Shop");
  expect(title).toBeInTheDocument();

  const productOfTheDayTitle = screen.getByText("Product Of The Day");
  expect(productOfTheDayTitle).toBeInTheDocument();

  //load product image and attributes from api
  const productOfTheDayImage = await screen.findByRole("img", {
    name: "Product of the day",
  });
  expect(productOfTheDayImage).toBeInTheDocument();
  const altTextForProductOfTheDayImage = productOfTheDayImage.alt;
  expect(altTextForProductOfTheDayImage).toEqual("Product of the day");
});
