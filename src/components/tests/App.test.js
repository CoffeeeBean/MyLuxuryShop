import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";

import App from "../App";

test.skip("full app rendering/navigating", async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  //verify to be in HomePage
  expect(screen.getByText("Product Of The Day")).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/search products/i), leftClick);

  // verify to be in SearchProducts
  expect(screen.getByText(/search page/i)).toBeInTheDocument();
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
