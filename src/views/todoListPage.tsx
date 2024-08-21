import { TodoCard } from "@/components";
import { useTodoList } from "@/hooks";

export default function TodoListPage() {
  const {
    handleSelectedListClick,
    handleTodoListClick,
    todoList,
    fruit,
    vegetable,
  } = useTodoList();

  return (
    <main className="h-screen w-screen p-3 md:p-10">
      <div className="grid grid-cols-3 gap-3 mx-auto h-full">
        <div className="col-span-1 flex flex-col gap-3 max-w-96">
          {todoList.map((todo) => (
            <TodoCard
              onClick={() => handleTodoListClick(todo)}
              title={todo.name}
            />
          ))}
        </div>
        {/* Fruit container */}
        <div className="container">
          <div className="conatiner-header">Fruit</div>
          <div className="container-child-list">
            {fruit.map((todo) => (
              <TodoCard
                onClick={() => handleSelectedListClick(todo)}
                title={todo.name}
              />
            ))}
          </div>
        </div>
        {/* Vegetable container */}
        <div className="container">
          <div className="conatiner-header">Vegetable</div>
          <div className="container-child-list">
            {vegetable.map((todo) => (
              <TodoCard
                onClick={() => handleSelectedListClick(todo)}
                title={todo.name}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
