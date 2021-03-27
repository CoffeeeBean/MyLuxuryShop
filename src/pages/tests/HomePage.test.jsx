import { render, screen, waitFor } from "@testing-library/react";
import HomePage from "../HomePage";

test("home page with title and product of the day", async () => {
  render(<HomePage />);

  const productOfTheDayTitle = screen.getByText("Product Of The Day");
  expect(productOfTheDayTitle).toBeInTheDocument();

  //load product image and attributes from api
  const productOfTheDayImage = await screen.findByRole("img", {
    name: "Product of the day id 200",
    src: "https://imageRepository/product_image.jpg",
  });
  expect(productOfTheDayImage).toBeInTheDocument();
  const altTextForProductOfTheDayImage = productOfTheDayImage.alt;
  expect(altTextForProductOfTheDayImage).toEqual("Product of the day id 200");

  // check product attribute from api
  await screen.findByText("Oversized double-breasted grain de poudre blazer");
  await screen.findByText("Bottega Veneta");
});
