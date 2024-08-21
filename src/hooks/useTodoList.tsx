import { useState } from "react";
import { FRUIT, TODO_LISTS } from "@/constants";
import { TodoListType } from "@/types";
import useReset from "./useReset";

export default function useTodoList() {
  const [todoList, setTodoList] = useState<TodoListType[]>(TODO_LISTS);
  const [fruit, setFruit] = useState<TodoListType[]>([]);
  const [vegetable, setVegetable] = useState<TodoListType[]>([]);
  const { setTimeoutRef, clearTimeoutRef } = useReset();

  function handleTodoListClick(todo: TodoListType) {
    const isFruit = todo.type === FRUIT;

    if (isFruit) {
      setFruit((prev) => [...prev, todo]);
    } else {
      setVegetable((prev) => [...prev, todo]);
    }
    setTodoList((prev) => prev.filter((td) => td !== todo));

    setTimeoutRef(todo.name, () => {
      if (isFruit) {
        setFruit((prev) => prev.filter((td) => td !== todo));
      } else {
        setVegetable((prev) => prev.filter((td) => td !== todo));
      }
      setTodoList((prev) => [...prev, todo]);
    });
  }

  function handleSelectedListClick(todo: TodoListType) {
    const isFruit = todo.type === FRUIT;
    clearTimeoutRef(todo.name);

    if (isFruit) {
      setFruit((prev) => prev.filter((td) => td !== todo));
    } else {
      setVegetable((prev) => prev.filter((td) => td !== todo));
    }
    setTodoList((prev) => [...prev, todo]);
  }

  return {
    handleSelectedListClick,
    handleTodoListClick,
    todoList,
    fruit,
    vegetable,
  };
}
