import TodoItem from "../../src/components/utils/TodoItem";
import { Provider } from "react-redux";
import { Priority } from "../../src/dataModel/todo";
import { store } from "../../src/store/todoStore.ts";

describe("ToDoItem.cy.tsx", () => {
  it("playground", () => {
    const testItem = {
      id: "test-id",
      caption: "Test task",
      description: "Test Description",
      priority: Priority.High,
      completed: false,
      repeats: [false, false, false, false, false, false, false],
    };
    cy.mount(
      <Provider store={store}>
        <TodoItem todo={testItem} showDuedate showLabel />
      </Provider>
    );
  });
});
