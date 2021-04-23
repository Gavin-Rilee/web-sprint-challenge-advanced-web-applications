import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

const testColor = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  }
]

test("Renders BubblePage without errors", () => {
  render(<BubblePage />)
  // Finish this test
});

test("Fetches data and renders the bubbles on mounting",async () => {
  // Finish this test
  render(<BubblePage />)
  fetchTestColors.mockResolvedValueOnce(testColor)
  const colors = await screen.findAllByTestId()
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading