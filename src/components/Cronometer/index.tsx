import Botao from "../Buttons";
import Relogio from "./Watch";
import style from './Cronometer.module.scss';

export default function Cronometer() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicia o cronometro</p>
            <div className={style.relogioWrapper}>
            <Relogio />
            </div>
            <Botao>Start!</Botao>
        </div>
    )
}