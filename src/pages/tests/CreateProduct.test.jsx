import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateProduct from "../CreateProduct";

test("Show form with product attribute and call api to post it", async () => {
  render(<CreateProduct />);
  expect(screen.getByText(/id/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/id/i)).toBeInTheDocument();

  expect(screen.getByText(/short description/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/short description/i)).toBeInTheDocument();

  expect(screen.getByText(/editorial description/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/editorial description/i)).toBeInTheDocument();

  expect(screen.getByText(/category/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/category/i)).toBeInTheDocument();

  expect(screen.getByText(/brand/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/brand/i)).toBeInTheDocument();

  expect(screen.getByText(/sku/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/sku/i)).toBeInTheDocument();

  expect(screen.getByText(/model/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/model/i)).toBeInTheDocument();

  expect(screen.getByText(/color/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/color/i)).toBeInTheDocument();

  expect(screen.getByText(/material/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/material/i)).toBeInTheDocument();

  expect(screen.getByText(/size/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/size/i)).toBeInTheDocument();

  expect(screen.getByText(/gender/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/gender/i)).toBeInTheDocument();

  expect(screen.getByText(/unit price/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/unit price/i)).toBeInTheDocument();

  expect(screen.getByText(/price currency/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/price currency/i)).toBeInTheDocument();

  //why it does not find this''??
  //   const checkBox = screen.getByRole("checkbox", {
  //     name: /in stock/i,
  //   });

  expect(screen.getByText(/image url/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/image url/i)).toBeInTheDocument();

  //save and display e confirmation message
  const createNewProductButton = screen.getByRole("button", {
    name: "Create New Product",
  });
  expect(createNewProductButton).toBeDisabled();

  const saveButton = screen.getByRole("button", {
    name: "Save",
  });
  userEvent.click(saveButton);

  const saveConfirmation = await screen.findByText(/New Product Created. Id:/i);
  expect(saveConfirmation).toBeInTheDocument();

  expect(saveButton).toBeDisabled();
  expect(createNewProductButton).toBeEnabled();

  expect(screen.getByLabelText(/id/i)).toBeDisabled();
  expect(screen.getByLabelText(/short description/i)).toBeDisabled();
  expect(screen.getByLabelText(/editorial description/i)).toBeDisabled();
  expect(screen.getByLabelText(/category/i)).toBeDisabled();
  expect(screen.getByLabelText(/brand/i)).toBeDisabled();
  expect(screen.getByLabelText(/sku/i)).toBeDisabled();
  expect(screen.getByLabelText(/model/i)).toBeDisabled();
  expect(screen.getByLabelText(/color/i)).toBeDisabled();
  expect(screen.getByLabelText(/material/i)).toBeDisabled();
  expect(screen.getByLabelText(/size/i)).toBeDisabled();
  expect(screen.getByLabelText(/gender/i)).toBeDisabled();
  expect(screen.getByLabelText(/unit price/i)).toBeDisabled();
  expect(screen.getByLabelText(/price currency/i)).toBeDisabled();
  expect(screen.getByLabelText(/image url/i)).toBeDisabled();

  //when click create new product the form must be enabled again and the value must be reset
  userEvent.click(createNewProductButton);

  expect(screen.getByLabelText(/id/i)).toBeEnabled();
  expect(screen.getByLabelText(/id/i)).toHaveTextContent("");

  expect(screen.getByLabelText(/short description/i)).toBeEnabled();
  expect(screen.getByLabelText(/editorial description/i)).toBeEnabled();
  expect(screen.getByLabelText(/category/i)).toBeEnabled();
  expect(screen.getByLabelText(/brand/i)).toBeEnabled();
  expect(screen.getByLabelText(/sku/i)).toBeEnabled();
  expect(screen.getByLabelText(/model/i)).toBeEnabled();
  expect(screen.getByLabelText(/color/i)).toBeEnabled();
  expect(screen.getByLabelText(/material/i)).toBeEnabled();
  expect(screen.getByLabelText(/size/i)).toBeEnabled();
  expect(screen.getByLabelText(/gender/i)).toBeEnabled();
  expect(screen.getByLabelText(/unit price/i)).toBeEnabled();
  expect(screen.getByLabelText(/price currency/i)).toBeEnabled();
  expect(screen.getByLabelText(/image url/i)).toBeEnabled();
});
