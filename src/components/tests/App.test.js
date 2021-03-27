import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import axios from "axios";

jest.mock("axios");

test("full app rendering/navigating", async () => {
  axios.get.mockImplementation(() => Promise.resolve({ data: [] }));

  const history = createMemoryHistory();
  await waitFor(() =>
    render(
      <Router history={history}>
        <App />
      </Router>
    )
  );
  const title = screen.getByText("My Luxury Shop");
  expect(title).toBeInTheDocument();
  //verify to be in HomePage
  expect(screen.getByText("Product Of The Day")).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/search products/i), leftClick);
  expect(await screen.findByText(/search page/i)).toBeInTheDocument();

  userEvent.click(screen.getByText(/create new product/i), leftClick);
  expect(screen.getByText(/create product/i)).toBeInTheDocument();
});

test("landing on a bad page", () => {
  const history = createMemoryHistory();
  history.push("/some/bad/route");
  render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(screen.getByText(/no match/i)).toBeInTheDocument();
});
