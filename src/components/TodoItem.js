function TodoItem(props) {
  const { todo, deleteTodo, toggleEditing, toggleComplete } = props;

  return (
    <div className='TodoItem'>
      <p onClick={() => toggleComplete(todo.id)} className={todo.isCompleted ? 'completed' : ''}>
        {todo.text}
      </p>
      <div>
        <button className='todo-btn' onClick={() => toggleEditing(todo.id)} type='button'>
          Засах
        </button>
        <button className='todo-btn' onClick={() => deleteTodo(todo.id)} type='button'>
          Устгах
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
