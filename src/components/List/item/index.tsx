import { ITask } from '../../../types/tasks'
import style from './Item.module.scss'

interface IProps extends ITask {
  selectTask: (task: ITask) => void
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
        className={`${style.item} ${selected ? style.itemSelecionado : ''}`} 
        onClick={() => selectTask(
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
      </li>
    )
}