import { useEffect, useRef, useState } from 'react';


/**
 * @component
 * @param {*} props - Todo element's props
 * @returns {JSX.Element} A React JSX Element
 */
function TodoForm(props) {
    /***
     * Local state and parent component state.
     * Local state to save the value of the input
     * and submit the value save to the parent component state
     */
  const { todo, saveTodo } = props;
  const [value, setValue] = useState(todo?.text || '');
  const inputRef = useRef(null);

  /** if todo has value then to call edit function
   * else to call add function and pass parameter value
   * @function onSubmit
   * @param {event} form event
   * @param {string} todo.id is task id
   * @param {string} value is task text
   */
  const onSubmit = (e) => {
    e.preventDefault();

    if (value) {
      if (todo) {
        saveTodo(value, todo.id);
      } else {
        saveTodo(value);
      }
      setValue('');
    }
  };

  useEffect(() => {
    inputRef.current.defaultValue = "Ажлын даалгавар оруулна уу";
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={onSubmit} className='TodoForm'>
      <input type='text' className='todo-input' ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <button type='submit' className='todo-btn'>
        Хадгалах
      </button>
    </form>
  );
}

export default TodoForm;
