import {describe, expect, it, vitest} from "vitest";
import {MY_FORM_TEST_IDS} from "./MyForm.tsx";
import MyForm from "./MyForm.tsx";
import {render, screen} from "@testing-library/react";

describe('MyForm component', () => {
  it('should correctly display placeholder, when provided ', () => {
    render(<MyForm placeholder='placeholder' onSubmit={() => console.log('test')}/>)
    const container = screen.getByTestId(MY_FORM_TEST_IDS.PLACEHOLDER)
    expect(container).toHaveAttribute('placeholder', 'placeholder')
  });

  it('should call render function', () => {
    const fn = vitest.fn()
    render(<MyForm placeholder={'placeholder'} onSubmit={fn('test')}/>)

    expect(fn).toHaveBeenCalled()
  });
})
