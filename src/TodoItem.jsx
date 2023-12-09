export function TodoItem( id, completed, title ){
    return(
    <li>
        <label>
          <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="deleteBtn">Delete</button>
    </li>
    )
}