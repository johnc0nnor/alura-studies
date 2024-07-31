import React, { useState } from 'react';
import Botao from '../Buttons';
import style from './Form.module.scss';
import { ITask } from '../../types/tasks';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
} 
function Form({ setTasks }: Props) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");
  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTasks(tarefasAntigas => 
      [
        ...tarefasAntigas, 
        {  
          task,
          time,
          selected: false,
          done: false,
          id: uuidv4()
        }
      ]
    );
    setTask("");
    setTime("00:00");
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input 
          type="text"
          value={task}
          onChange={evento => setTask(evento.target.value)}
          name="tarefa"
          id="tarefa"
          placeholder="Digite sua tarefa"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input 
          type="time"
          step="1"
          name="tempo"
          value={time}
          onChange={evento => setTime(evento.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit">
        Adicionar
      </Botao>
    </form>
  )

}

export default Form;
