import { describe, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "../src/components/pages/Search";
import { BrowserRouter } from "react-router-dom";

describe("search page", () => {
  it("renders search results", async () => {
    const searchResutls = [
      {
        title: "random",
        image:
          "https://liquipedia.net/commons/images/thumb/f/fd/Team_Random_logo.png/600px-Team_Random_logo.png",
        price: "500",
        category: "women",
      },
      {
        title: "random2",
        image:
          "https://liquipedia.net/commons/images/thumb/f/fd/Team_Random_logo.png/600px-Team_Random_logo.png",
        price: "540",
        category: "men",
      },
    ];

    render(
      <BrowserRouter>
        <Search searchResutls={searchResutls} />
      </BrowserRouter>
    );

    const divs = screen.getAllByTestId("search-div");
    expect(divs.length).toBe(2);
  });

  it("add btn works", async () => {
    const searchResutls = [
      {
        title: "random",
        image:
          "https://liquipedia.net/commons/images/thumb/f/fd/Team_Random_logo.png/600px-Team_Random_logo.png",
        price: "500",
        category: "women",
      },
      {
        title: "random2",
        image:
          "https://liquipedia.net/commons/images/thumb/f/fd/Team_Random_logo.png/600px-Team_Random_logo.png",
        price: "540",
        category: "men",
      },
    ];

    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Search searchResutls={searchResutls} />
      </BrowserRouter>
    );

    const addbtns = screen.getAllByRole("button", { name: "Add to cart" });
    await user.click(button);
  });
});
