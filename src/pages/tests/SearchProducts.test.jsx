import { render, screen , waitFor} from "@testing-library/react";
import SearchProducts from "../SearchProducts";
import axios from "axios";
import mockResponse from './mockApiResponses'

jest.mock('axios');


test("search page with search input textbox and search button - using jest", async () => {
  axios.get.mockImplementation(() => Promise.resolve({ data: []}));

  render(<SearchProducts />);

  expect(await screen.findByRole("textbox", { id: "filter" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
});

test("search page with search input textbox and search button - using waitFor", async () => {
  axios.get.mockImplementation(() => Promise.resolve({ data: []}));

  render(<SearchProducts />);

  await waitFor(() => screen.getByRole("textbox", { id: "filter" }))

  expect(screen.getByRole("textbox", { id: "filter" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
});

test("load products from api when page render", async () => {
  axios.get.mockImplementation(() => Promise.resolve({ data: mockResponse.mockSearchProducts}));
  render(<SearchProducts />);

  //load product image and attributes from api
  const productImages = await screen.findAllByRole("img", {
    name: /^product_img/i,
  });
  expect(productImages).toHaveLength(3);

  const altTexts = productImages.map((element) => element.alt);
  expect(altTexts).toEqual([
    "product_img_100",
    "product_img_200",
    "product_img_300",
  ]);

  // check product attribute from api
  const shortDescriptions = await screen.findAllByText(
    "Oversized double-breasted grain de poudre blazer"
  );
  expect(shortDescriptions).toHaveLength(3);
});


