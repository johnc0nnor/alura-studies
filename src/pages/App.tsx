import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import Cronometro from '../components/Cronometer';
import { ITask } from '../types/tasks';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function handleSelect(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(prevTasks => prevTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  } 
  return (
    <div className={style.AppStyle}>
     <Form setTasks={setTasks}/>
     <List 
     tasks={tasks}
     selectTask={handleSelect}
     />
     <Cronometro selected={selected}/>
    </div>
  );
}

export default App;