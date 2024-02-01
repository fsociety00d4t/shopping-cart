import { describe, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Store from "../src/components/pages/Store";
import { BrowserRouter } from "react-router-dom";
import Cart from "../src/components/pages/Cart";
import { useState } from "react";

describe("cart page", () => {
  it("should render items", () => {
    const cartItems = [
      {
        title: "random",
        image:
          "https://liquipedia.net/commons/images/thumb/f/fd/Team_Random_logo.png/600px-Team_Random_logo.png",
        price: 500,
        category: "women",
        id: 0,
      },
      {
        title: "random2",
        image:
          "https://liquipedia.net/commons/images/thumb/f/fd/Team_Random_logo.png/600px-Team_Random_logo.png",
        price: 540,
        category: "men",
        id: 1,
      },
    ];

    const items = [
      {
        amount: "2",
        id: 0,
      },

      {
        amount: "3",
        id: 6,
      },
    ];
    render(
      <BrowserRouter>
        <Cart items={items} cartItems={cartItems}></Cart>
      </BrowserRouter>
    );

    const divs = screen.getAllByTestId("cart-divs");
    expect(divs.length).toBe(1);
  });
});
