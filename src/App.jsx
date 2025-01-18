import { useState } from 'react'

// import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([]);
  return (
    
      <div>
        hii
      <Todos todos ={[
        {
          title:agnk,
          description:"bgwrobgowbgr",
          completed:false
        }]}></Todos>
        <CreateTodo />
    </div>
  )
}

export default App
