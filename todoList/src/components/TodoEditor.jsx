import { useRef, useState } from "react";
import "./TodoEditor.css";

export default function TodoEditor({ onCreate }) {
  const [content, setContent] = useState("");
  const inputRef = useRef(null);

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClick = () => {
    if (content === "") {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClick();
    }
  };

  return (
    <div className="TodoEditor">
      <input
        placeholder="새로운 Todo ..."
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClick}>추가</button>
    </div>
  );
}
