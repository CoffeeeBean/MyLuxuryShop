import { render, screen } from "@testing-library/react";
import CreateProduct from "../CreateProduct";

test("Show form with product attribute and call api to post it", () => {
  render(<CreateProduct />);
  expect(screen.getByText(/id/i)).toBeInTheDocument();
  expect(screen.getByText(/short description/i)).toBeInTheDocument();
  expect(screen.getByText(/editorial description/i)).toBeInTheDocument();
  expect(screen.getByText(/category/i)).toBeInTheDocument();
  expect(screen.getByText(/brand/i)).toBeInTheDocument();
  expect(screen.getByText(/sku/i)).toBeInTheDocument();
  expect(screen.getByText(/model/i)).toBeInTheDocument();
  expect(screen.getByText(/color/i)).toBeInTheDocument();
  expect(screen.getByText(/material/i)).toBeInTheDocument();
  expect(screen.getByText(/size/i)).toBeInTheDocument();
  expect(screen.getByText(/gender/i)).toBeInTheDocument();
  expect(screen.getByText(/unit price/i)).toBeInTheDocument();
  expect(screen.getByText(/price currency/i)).toBeInTheDocument();
  expect(screen.getByText(/in stock/i)).toBeInTheDocument();
  expect(screen.getByText(/image url/i)).toBeInTheDocument();
});
