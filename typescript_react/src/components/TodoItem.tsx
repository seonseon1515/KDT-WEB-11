import React from 'react';
import TodoItemProps from '../types';
import TodoList from './TodoList';

interface Props {
  todo: TodoItemProps;
  toggleComplete: (id: number) => void;
}

export default function TodoItem({ todo, toggleComplete }: Props) {
  return (
    <li>
      <label htmlFor="">
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {todo.text}
      </label>
    </li>
  );
}
