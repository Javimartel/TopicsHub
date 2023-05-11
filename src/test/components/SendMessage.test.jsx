import React from "react";
import { describe } from "vitest";
import { getByRole } from "@testing-library/react";
import { renderWithMockFirebase } from "../test-utils.jsx";

import SendMessage from "../../components/chat/SendMessage.jsx";

describe("SendMessage", () => {
  it("renders correctly", () => {
    const { container } = renderWithMockFirebase(<SendMessage />);

    expect(container).toBeInTheDocument();
    expect(container).not.toBeEmptyDOMElement();
  });

  it("renders the input", () => {
    const { container } = renderWithMockFirebase(<SendMessage />);
    const input = getByRole(container, "textbox");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("maxlength", "255");
  });

  it("renders the button", () => {
    const { container } = renderWithMockFirebase(<SendMessage />);
    const button = getByRole(container, "button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "submit");
  });

  it("sends a message", () => {
    const { container } = renderWithMockFirebase(<SendMessage />);
    const input = getByRole(container, "textbox");
    const button = getByRole(container, "button");

    input.value = "Test message";
    button.click();

    expect(input.value).toBe("Test message");
  });
});
