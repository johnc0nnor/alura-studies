import { ITask } from '../../types/tasks';
import style from './List.module.scss';
import { Item } from './item';

interface IProps {
  tasks: ITask[],
  selectTask: (taskSelected: ITask) => void
}

function Lista({ tasks, selectTask }: IProps) {
    return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tasks.map((item) => (
        <Item 
          selectTask={selectTask}
          key={item.id}
        {...item} />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;