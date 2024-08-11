import "./TodoList.css";

import { useMemo, useState } from "react";

import TodoItem from "./TodoItem";

export default function TodoList({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterTodos = () => {
    if (search === "") {
      return todos;
    }

    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const { totalCount, doneCount, undoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const undoneCount = totalCount - doneCount;

    return { totalCount, doneCount, undoneCount };
  }, [todos]);

  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <div>
        <div>전체: {totalCount}건</div>
        <div>완료: {doneCount}건</div>
        <div>미완료: {undoneCount}건</div>
      </div>
      <input
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filterTodos().map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
