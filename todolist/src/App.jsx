// import { useState , useEffect} from 'react'
// import Navbar from './components/Navbar'
// import { v4 as uuidv4 } from 'uuid';
// import { MdOutlineEditNote } from "react-icons/md";
// import { MdDelete } from "react-icons/md";
// ;

// function App() {
//   const [todo, setTodo] = useState("")
//   const [todos, setTodos] = useState([])
//   const [showFinished, setshowFinished
//   ] = useState(true)
//   useEffect(() => {
//     let todoString=localStorage.getItem("todos")
//     if(todoString){
//       let todos=JSON.parse(localStorage.getItem("todos"))
//       setTodos(todos)
//     }

//   }, [])

//   const saveToLS = () => {
//     localStorage.setItem("todos", JSON.stringify(todos))
//   }
//   const toggleFinished=(e)=>{
// setshowFinished(!showFinished)
//   }

//   const handleEdit = (e, id) => {
//     let t = todos.filter(i => i.id === id)
//     setTodo(t[0].todo)

//     let newTodos = todos.filter(item => {
//       return item.id !== id
//     });

//     setTodos(newTodos)
//     saveToLS();
//   }
//   const handleDelete = (e, id) => {

//     let newTodos = todos.filter(item => {
//       return item.id !== id
//     });

//     setTodos(newTodos)
//     saveToLS()
//   }
//   const handleAdd = () => {
//     setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
//     setTodo("")
//     // console.log(todos);
//     saveToLS()
//   }
//   const handleChange = (e) => {
//     setTodo(e.target.value)
//   }
//   const handleCheckbox = (e) => {
//     let id = e.target.name;
//     let index = todos.findIndex(item => {
//       return item.id === id;
//     })
//     let newTodos = [...todos];
//     newTodos[index].isCompleted = !newTodos[index].isCompleted
//     setTodos(newTodos)
//     saveToLS()
//   }

//   return (
//     <>
//       <Navbar />
//       <div className='container mx-auto my-6 rounded-xl bg-slate-300 min-h-[85vh] 
//       w-1/2'>
//       <h1 className='font-bold text-xl text-center '> TaskZen - Manage Your Todos at One Place </h1>
//         <div className="addtodo my-5 flex flex-col gap-5 items-center">
//           <h2 className='text-lg'>Add a Todo</h2>
//           <input onChange={handleChange} value={todo} type="text" className='w-2/3 p-2 border-2 rounded-md border-slate-600 focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out hover:border-slate-500 ' />
//           <button onClick={handleAdd} disabled ={todo.length<=3} className='bg-slate-700 hover:bg-slate-900 p-2 py-1 rounded-md text-white text-sm  disabled:bg-slate-700'>
//             ADD
//           </button>
//         </div>
//         <input  className='my-4 mx-6' onChange={toggleFinished} type="checkbox" checked={showFinished} id="" /> completed todos
//         <h2 className='text-lg font-bold'>Your Todos</h2>
//         <div className="todos">
//           {todos.length === 0 && <div className='m-5'>Write a new Todo</div>}
//           {todos.map(item => {


//             return (showFinished||!item.isCompleted )&& <div key={item.id} className="todo flex w-1/2 justify-between my-3 mx-6">
//               <input name={item.id} onChange={handleCheckbox
//               } type="checkbox" checked={item.isCompleted} id="" />
//               <div className='flex gap-6'>
//                 <div className={item.isCompleted ? "line-through" : ""}>
//                   {item.todo}
//                 </div>

//               </div>
//               <div className="buttons flex h-full justify-center">
//                 <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-slate-700 hover:bg-slate-900 p-2 py-1 rounded-md text-white text-sm mx-1'><MdOutlineEditNote /></button>
//                 <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-slate-700 hover:bg-slate-900 p-2 py-1 rounded-md text-white text-sm mx-1'><MdDelete /></button>
//               </div>
//             </div>
//           })}
//         </div>

//       </div>

//     </>
//   )
// }

// export default App


































import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { v4 as uuidv4 } from 'uuid';
import { MdOutlineEditNote, MdDelete } from 'react-icons/md';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load todos from localStorage on component mount
  useEffect(() => {
    const todoString = localStorage.getItem('todos');
    if (todoString) {
      const todos = JSON.parse(todoString);
      setTodos(todos);
    }
  }, []);

  // Save todos to localStorage whenever todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Toggle between dark mode and light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Function to handle editing a todo item
  const handleEdit = (id) => {
    const t = todos.find(i => i.id === id);
    setTodo(t.todo);
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  };

  // Function to handle deleting a todo item
  const handleDelete = (id) => {
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  };

  // Function to handle adding a new todo item
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo('');
  };

  // Function to handle changing the input field for adding new todos
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // Function to handle toggling the completion status of a todo item
  const handleCheckbox = (e) => {
    const id = e.target.name;
    const index = todos.findIndex(item => item.id === id);
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Navbar />
      <div className='container mx-auto my-6 p-6 rounded-xl bg-white shadow-lg min-h-[85vh] max-w-4xl'>
        <h1 className='font-bold text-2xl text-center mb-6'>TaskZen - Manage Your Todos at One Place</h1>
        <div className='addtodo my-5 flex flex-col gap-5 items-center'>
          <h2 className='text-lg'>Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type='text'
            className='w-full md:w-2/3 p-2 border-2 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out hover:border-gray-500'
          />
          <button
            onClick={handleAdd}
            disabled={todo.length <= 3}
            className='bg-blue-600 hover:bg-blue-800 p-2 py-1 rounded-md text-white text-sm disabled:bg-gray-500'
          >
            ADD
          </button>
        </div>
        <div className='flex items-center mb-4'>
          <input
            className='mr-2'
            onChange={() => setShowFinished(!showFinished)}
            type='checkbox'
            checked={showFinished}
            id='toggleFinished'
          />
          <label htmlFor='toggleFinished'>Show Completed Todos</label>
        </div>
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className='todos'>
          {todos.length === 0 && <div className='m-5'>Write a new Todo</div>}
          {todos.map(item => (
            (showFinished || !item.isCompleted) && (
              <div key={item.id} className='todo flex flex-col md:flex-row justify-between items-center my-3 p-4 bg-gray-100 rounded-lg shadow-md'>
                <div className='flex items-center w-full md:w-auto'>
                  <input
                    name={item.id}
                    onChange={handleCheckbox}
                    type='checkbox'
                    checked={item.isCompleted}
                    className='mr-3'
                  />
                  <div className={`flex-1 ${item.isCompleted ? 'line-through text-gray-500' : ''}`}>
                    {item.todo}
                  </div>
                </div>
                <div className='flex gap-2 mt-2 md:mt-0'>
                  <button
                    onClick={() => handleEdit(item.id)}
                    className='bg-yellow-500 hover:bg-yellow-700 p-2 rounded-md text-white'
                  >
                    <MdOutlineEditNote />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className='bg-red-500 hover:bg-red-700 p-2 rounded-md text-white'
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
        <div className='flex justify-end mt-4'>
        <button
  onClick={toggleDarkMode}
  className={`p-2 rounded-md text-white ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} hover:bg-gray-500`}
>
  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
</button>

        </div>
      </div>
    </div>
  );
}

export default App;

