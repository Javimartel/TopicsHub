import React from "react";
import { describe } from "vitest";
import { getByRole } from "@testing-library/react";
import { renderWithMockFirebase } from "../test-utils.jsx";

import Message from "../../components/chat/Message.jsx";

describe("Message", () => {
  it("renders a message", () => {
    const { container } = renderWithMockFirebase(
      <Message message={{
        name: "Test User",
        text: "Test Message",
        id: "test-id",
        uid: "123"
      }} />
    );

    expect(container).toHaveTextContent("Test User");
    expect(container).toHaveTextContent("Test Message");
  });

  it("renders a message with a delete button when uid is the same as current user", () => {
    const { container } = renderWithMockFirebase(
      <Message message={{
        name: "Test User",
        text: "Test Message",
        id: "test-id",
        uid: "123"
      }} />
    );

    expect(getByRole(container, "button")).toBeInTheDocument();
  });
});
