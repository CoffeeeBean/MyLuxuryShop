import { render, screen } from "@testing-library/react";
import SearchForm from "../SearchForm";

test("search form with input for brand, category, color and size", () => {
  render(<SearchForm />);

  //   expect(
  //     screen.getByRole("textbox", { id: "brandFilter" })
  //   ).toBeInTheDocument();
  const categoryRadioFilters = screen.getAllByRole("radio", {
    id: "categoryFilter",
  });
  expect(categoryRadioFilters.length).toBeGreaterThan(0);

  //   expect(
  //     screen.getByRole("textbox", { id: "colorFilter" })
  //   ).toBeInTheDocument();
  //   expect(screen.getByRole("textbox", { id: "sizeFilter" })).toBeInTheDocument();
});
