import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

describe("App component", () => {
  it("render correct heading", () => {
    render(<App />);
    expect(
      screen.getByRole("heading".textContent).toMatch(/Featured Items :/i)
    );
  });
});
