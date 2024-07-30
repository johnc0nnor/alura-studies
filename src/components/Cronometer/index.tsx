import Botao from "../Buttons";
import Relogio from "./Watch";
import style from './Cronometer.module.scss';
import { timeToSeconds } from '../common/utils/time';
import { ITask } from "../../types/tasks";
import { useState } from "react";

interface ICronometerProps {
    selected: ITask | undefined;
}

export default function Cronometer({ selected }: ICronometerProps) {
    const [time, setTime] = useState<number>();	
    if (selected?.selected) {
        setTime(timeToSeconds(selected.time));
    }
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            Tempo: {time}
            <div className={style.relogioWrapper}>
            <Relogio />
            </div>
            <Botao>Start!</Botao>
        </div>
    )
}