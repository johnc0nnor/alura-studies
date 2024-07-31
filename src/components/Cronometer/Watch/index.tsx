import style from './Watch.module.scss';

interface IWatchProps {
    time: number | undefined;
}

export default function Watch({ time = 0}: IWatchProps) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minutesDigit1, minutesDigit2] = String(minutes).padStart(2, '0');
    const [secondsDigit1, secondsDigit2] = String(seconds).padStart(2, '0');
    return (
        <>
        <span className={style.relogioNumero}>{minutesDigit1}</span>
        <span className={style.relogioNumero}>{minutesDigit2}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{secondsDigit1}</span>
        <span className={style.relogioNumero}>{secondsDigit2}</span>
        </>
    )
}