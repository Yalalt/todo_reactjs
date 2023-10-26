import { useReducer } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

function reducer(todos, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...todos,
        {
          id: Math.random().toString(),
          text: action.payload.text,
          isCompleted: false,
          isEditing: false,
        }]
    }
    case 'EDIT_TODO': {
      return todos.map((todo) => (todo.id === action.payload.id ? { ...todo, text: action.payload.text, isEditing: false } : todo))
    }
    case 'DELETE_TODO': {
      return todos.filter((todo) => todo.id !== action.payload.id);
    }
    case 'TOGGLE_COMPLETE': {
      return todos.map((todo) => (todo.id === action.payload.id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
    }
    case 'TOGGLE_EDITING': {
      return todos.map((todo) => (todo.id === action.payload.id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }
  }
}

function TodoWrapper() {
  const [todos, dispatch] = useReducer(reducer, [
    {
      id: Math.random().toString(),
      text: 'Read a PMBOK',
      isCompleted: false,
      isEditing: false,
    },
  ]);

  const addTodo = (text) => {
      dispatch({ type: 'ADD_TODO', payload: { text } });
  };

  const editTodo = (text, id) => {
    dispatch({ type: 'EDIT_TODO', payload: { text, id } });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: { id } });
  };

  const toggleComplete = (id) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: { id } });
  };

  const toggleEditing = (id) => {
    dispatch({ type: 'TOGGLE_EDITING', payload: { id } });
  };

  /** TodoForm ruu edit hiih esehees hamaarch
   *  saveTodo damjuulsan func props ylgaatai damjuulsan */
  return (
    <div className='TodoWrapper'>
      <h1>Ажлын жагсаалт</h1>
      <TodoForm saveTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <TodoForm key={todo.id} todo={todo} saveTodo={editTodo} />
        ) : (
          <TodoItem
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleEditing={toggleEditing}
            toggleComplete={toggleComplete}
            todo={todo}
          />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
