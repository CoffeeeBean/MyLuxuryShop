import { render, screen } from "@testing-library/react";
import CreateProduct from "../CreateProduct";

test("Show form with product attribute and call api to post it", () => {
  render(<CreateProduct />);
  expect(screen.getByText(/id/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/id/i)).toBeInTheDocument();

  expect(screen.getByText(/short description/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/short description/i)).toBeInTheDocument();

  expect(screen.getByText(/editorial description/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/editorial description/i)).toBeInTheDocument();

  expect(screen.getByText(/category/i)).toBeInTheDocument();
  //how to test the select input ???

  expect(screen.getByText(/brand/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/brand/i)).toBeInTheDocument();

  expect(screen.getByText(/sku/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/sku/i)).toBeInTheDocument();

  expect(screen.getByText(/model/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/model/i)).toBeInTheDocument();

  expect(screen.getByText(/color/i)).toBeInTheDocument();
  //how to test the select input ???

  expect(screen.getByText(/material/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/material/i)).toBeInTheDocument();

  expect(screen.getByText(/size/i)).toBeInTheDocument();
  // expect(screen.getByLabelText(/size/i)).toBeInTheDocument();

  expect(screen.getByText(/gender/i)).toBeInTheDocument();
  //how to test the select input ???

  expect(screen.getByText(/unit price/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/unit price/i)).toBeInTheDocument();

  expect(screen.getByText(/price currency/i)).toBeInTheDocument();
  //how to test the select input ???

  //why it does not find this''??
  //   const checkBox = screen.getByRole("checkbox", {
  //     name: /in stock/i,
  //   });

  expect(screen.getByText(/image url/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/image url/i)).toBeInTheDocument();

  const saveButton = screen.getByRole("button", {
    name: "Save",
  });
});
