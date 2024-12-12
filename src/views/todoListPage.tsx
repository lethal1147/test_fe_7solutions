import { TodoCard } from "@/components";
import { useTodoList } from "@/hooks";
import { Link } from "react-router-dom";

export default function TodoListPage() {
  const {
    handleSelectedListClick,
    handleTodoListClick,
    todoList,
    fruit,
    vegetable,
  } = useTodoList();

  return (
    <main data-testid="main-todolist" className="h-screen w-screen p-3 md:p-10">
      <div className="grid grid-cols-3 mx-auto h-full">
        <ul
          data-testid="todolist-arr"
          className="col-span-1 flex flex-col gap-3 max-w-96"
        >
          {todoList.map((todo) => (
            <div
              key={todo.name}
              data-testid={`item-${todo.name.toLowerCase().trim()}`}
            >
              <TodoCard
                onClick={() => handleTodoListClick(todo)}
                title={todo.name}
              />
            </div>
          ))}
        </ul>
        {/* Fruit container */}
        <div className="container">
          <div className="conatiner-header">Fruit</div>
          <ul data-testid="fruit-arr" className="container-child-list">
            {fruit.map((todo) => (
              <div
                data-testid={`fruit-${todo.name.toLowerCase().trim()}`}
                key={todo.name}
              >
                <TodoCard
                  onClick={() => handleSelectedListClick(todo)}
                  title={todo.name}
                />
              </div>
            ))}
          </ul>
        </div>
        {/* Vegetable container */}
        <div className="container">
          <div className="conatiner-header">Vegetable</div>
          <ul data-testid="vegetable-arr" className="container-child-list">
            {vegetable.map((todo) => (
              <div
                data-testid={`vegetable-${todo.name.toLowerCase().trim()}`}
                key={todo.name}
              >
                <TodoCard
                  onClick={() => handleSelectedListClick(todo)}
                  title={todo.name}
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
      <Link
        className="button text-white hover:bg-orange-600 bg-orange-500 absolute top-5 right-5"
        to="/extra"
      >
        Extra
      </Link>
    </main>
  );
}
