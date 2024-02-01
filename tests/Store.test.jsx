import { describe, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Store from "../src/components/pages/Store";
import { BrowserRouter } from "react-router-dom";

describe("store page", () => {
  it("input should be in the page", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Store onChange={onChange} />
      </BrowserRouter>
    );
    const input = screen.getByRole("textbox");
    await user.click(input);
    expect(input).toBeInTheDocument();
  });

  it("should render item", async () => {
    const storeItems = [
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
        <Store storeItems={storeItems}> </Store>
      </BrowserRouter>
    );

    const divs = screen.getAllByTestId("store-div");
    expect(divs).toBeInTheDocument;
    expect(divs.length).toBe(2);
    const price1 = screen.getByText(/500/i);
    expect(price1).toBeInTheDocument;
  });
});
