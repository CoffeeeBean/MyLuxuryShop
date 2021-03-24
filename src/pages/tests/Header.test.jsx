import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("header with title", () => {
  render(<Header />);

  screen.getByRole("heading", { level: 1, name: "My Luxury Shop" });
});
