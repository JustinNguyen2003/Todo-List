import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }){
    return(
    <ul className="list">
      {todos.length === 0 && "All tasks completed"}
      {todos.map(todo => {
        return (
            <TodoItem completed={todo.completed} id={todo.id} title={todo.title} key={todo.id}
            toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        )
      } )}
      
    </ul>
    )
}