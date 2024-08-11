import "./App.css";

import { useCallback, useReducer, useRef } from "react";

import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "UPDATE": {
      return state.map((todo) => {
        if (todo.id === action.data) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    }
    case "DELETE": {
      return state.filter((todo) => todo.id !== action.data);
    }
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        createdDate: new Date().getTime(),
      },
    });
  };

  const onUpdate = useCallback((targetId) => {
    dispatch({ type: "UPDATE", data: targetId });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({ type: "DELETE", data: targetId });
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
