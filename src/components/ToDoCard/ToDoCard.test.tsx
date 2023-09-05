import {TO_DO_CARD_TEST_IDS} from "./ToDoCard.tsx";
import {CHECK_BOX_TEST_IDS} from "../ui";
import {render, screen} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import ToDoCard from "./ToDoCard.tsx";
import {Provider} from "react-redux";
import {setupStore} from "../../store/store.ts";

const store = setupStore()

describe('todo card tests', () => {
  it('should correctly show text, when provided', () => {
    render(
      <Provider store={store}>
        <ToDoCard id='testtest_test' text='test' isDone={false}/>
      </Provider>
    )
    const container = screen.getByTestId(TO_DO_CARD_TEST_IDS.TEXT)
    expect(container).toHaveTextContent('test')
  });

  it('should correctly show checked, when provided', () => {
    render(
      <Provider store={store}>
        <ToDoCard id='testtest_test' text='test' isDone={true}/>
      </Provider>
    )
    const container = screen.getByTestId(CHECK_BOX_TEST_IDS.CONTAINER)
    expect(container).toBeChecked()
  });

  it('should correctly show checked, when provided', () => {
    render(
      <Provider store={store}>
        <ToDoCard id='testtest_test' text='test' isDone={false}/>
      </Provider>
    )
    const container = screen.getByTestId(CHECK_BOX_TEST_IDS.CONTAINER)
    expect(container).not.toBeChecked()
  });
})
