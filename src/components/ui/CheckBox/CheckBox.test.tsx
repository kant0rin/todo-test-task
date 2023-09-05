import {CHECK_BOX_TEST_IDS} from "./CheckBox.tsx";
import CheckBox from "./CheckBox.tsx";
import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";

describe('checkbox tests', () => {
  it('should correctly show checked, when provided', () => {
    render(<CheckBox isDone={true} setIsChecked={() => console.log(123)}/>)
    const container = screen.getByTestId(CHECK_BOX_TEST_IDS.CONTAINER)
    expect(container).toBeChecked()
  });

  it('should dont show checked, when isnt provided', () => {
    render(<CheckBox isDone={false} setIsChecked={() => console.log(123)}/>)
    const container = screen.getByTestId(CHECK_BOX_TEST_IDS.CONTAINER)
    expect(container).not.toBeChecked()
  });
})
