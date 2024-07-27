import { ITarefa } from '../../../types/tarefas'
import style from '../List.module.scss'

export function Item({ tarefa, tempo, selected, done, id}: ITarefa) {
    return (
        <li className={style.item}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
      </li>
    )
}