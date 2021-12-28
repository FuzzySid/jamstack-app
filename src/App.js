import './App.css';
import { useState, useEffect } from 'react';

function App() {
  
  const [tasks,setTasks]=useState([]);

  const fetchTasks=async()=>{
    const response=await fetch('/api/tasks');
    const data=await response.json();
    setTasks(data);
  }

  useEffect(()=>{
    fetchTasks();
  },[])

  return (
    <div className="App">
      <header className="App-header">
          {
            tasks.map(task=>
              <div key={task.id}>
                  <p>{task.Name}</p>
                  <span>{task.Status}</span>
              </div>
            )
          }
      </header>
    </div>
  );
}

export default App;
