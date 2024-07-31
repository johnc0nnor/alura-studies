import { ITask } from '../../../types/tasks'
import style from './Item.module.scss'

interface IProps extends ITask {
  selectTask: (taskSelected: ITask) => void
}

export function Item(
  { 
    task, 
    time, 
    selected, 
    done, 
    id, 
    selectTask
  }: IProps) {
    return (
        <li 
        className={`${style.item} ${selected ? style.itemSelecionado : ''} ${done ? style.itemCompletado : ''}`} 
        onClick={() => !done && selectTask(
           {
            task,
            time,
            selected,
            done,
            id
           }
         )}
        >
        <h3>{task}</h3>
        <span>{time}</span>
        {done && <span className={style.concluido} aria-label="Task completed"></span>}
      </li>
    )
}