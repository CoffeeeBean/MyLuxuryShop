import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Product from "../Product";

test("click on product image to see product details", () => {
  render(
    <Product
      id="0"
      shortDescription=""
      imageUrl="product/image.jpeg"
      editorialDescription="editorial description of the product"
      brand="some brand"
      unitPrice="100"
      priceCurrency="EUR"
    />
  );

  const productImage = screen.getByRole("img", { name: "product_img_0" });
  expect(productImage).toBeInTheDocument();

  userEvent.click(productImage);

  const editorialDescription = screen.getByText(
    "editorial description of the product"
  );
  const brand = screen.getByText("some brand");
  const price = screen.getByText("EUR 100");

  expect(editorialDescription).toBeInTheDocument();
  expect(brand).toBeInTheDocument();
  expect(price).toBeInTheDocument();
});
