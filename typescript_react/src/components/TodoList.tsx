import { useState,useRef } from 'react';
import TodoItem from './TodoItem';
import TodoItemProps from '../types'

// state를 활용



export default function TodoList() {
  // generic 안쓰고 그냥 타입 쓰면 안됨?
  const [todos, setTodos] = useState<TodoItemProps[]>([]); // 전체 투두 목록
  const [newTodo, setNewTodo] = useState<string>(''); // 새로 추가될 투두 하나
  const inputRef = useRef<HTMLInputElement| null>(null); // 마운트 전에 실행될 수 있어서 null로 초기값


  const addTodo = () => {
    const updatedTodos = [
      ...todos,
      { id: Date.now(), text: newTodo, completed: false },
    ];
    setTodos(updatedTodos); // 전체 투두에 새로운 투두 추가
    setNewTodo(''); // input 초기화
  };
  // 엔터 입력시 투두 추가(키보드 이벤트)
  // 엔터를 눌렀다는 것을 알려면 e 객체를 가져와야 함
  // e에 마우스 호버를 해봤을 때 타입이 뜨지 않아 직접 명시해줘야 함
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const focusInput = () => {
    // null인 요소에 포커스를 줄 수 없으므로 있으면 실행하라는 의미로 ? 추가
    inputRef.current?.focus();
  }

  // 투두 아이템 완료 상태 변경 함수
  const toggleComplete =(targetId:number)=>{
    // 내가 클릭한 값의 아이디를 받아와서 totolist의 목록 업데이트
    const updatedTodos = todos.map((todo)=>{
      return todo.id === targetId ? {...todo,completed: !todo.completed}:todo;
    })
    setTodos(updatedTodos);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <div>완료 개수: {todos.filter((todo)=>(todo.completed===true)).length}</div>
      <div>
        {/* 매개변수에 e 안넣어주면 e를 찾을 수 없다고 뜸
        매개변수 e에 드래그 해보면? React.ChangeEvent<HTMLInputElement>
        e를 넘겨줘야할 때 필요할 수도 있음
      */}
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        {/* 엔터키 이벤트 핸들러 추가 */}
        <input type="text" onKeyDown={handleKeyDown} ref={inputRef}/>
        <button onClick={addTodo}>ADD</button>
        <button onClick={focusInput}>Focus</button>
        <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
            />
          );
        })}
        </ul>
      </div>
    </div>
  );
}
