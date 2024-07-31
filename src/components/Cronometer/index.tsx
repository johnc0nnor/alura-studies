import Botao from "../Buttons";
import Relogio from "./Watch";
import style from './Cronometer.module.scss';
import { timeToSeconds } from '../common/utils/time';
import { ITask } from "../../types/tasks";
import { useEffect, useState } from "react";

interface ICronometerProps {
    selected: ITask | undefined,
    finalleTask: () => void;
}

export default function Cronometer({ selected, finalleTask }: ICronometerProps) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time));
    }}, [selected]);
    
    function regressive(counter: number = 0) {
        setTimeout(() => {
            if(counter > 0) {
                setTime(counter - 1);
                return regressive(counter - 1);
            }
            finalleTask();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
            <Relogio time={time}/>
            </div>
            <Botao onClick={() => regressive(time)}>Start!</Botao>
        </div>
    )
}