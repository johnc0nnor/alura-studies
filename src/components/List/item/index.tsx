import { ITask } from '../../../types/tasks'
import style from '../List.module.scss'

export function Item({ task, time, selected, done, id}: ITask) {
    return (
        <li className={style.item}>
        <h3>{task}</h3>
        <span>{time}</span>
      </li>
    )
}