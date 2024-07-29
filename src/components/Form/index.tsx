import React from "react";
import Botao from "../Buttons";
import style from "./Form.module.scss";
import { ITask } from "../../types/tasks";
import { v4 as uuidv4 } from "uuid";

class Form extends React.Component<
{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}
> {
    state = {
        task: "",
        time: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTasks(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {  
                    ...this.state,
                    selected: false,
                    done: false,
                    id: uuidv4()
                }
            ]
        );
        // evento.preventDefault();
        // this.props.adicionarTarefa(this.state.tarefa, this.state.tempo);
        this.setState({ task: "", time: "00:00" });
    }
    render() {
        return <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input 
                type="text"
                value={this.state.task}
                onChange={evento => this.setState({ ...this.state, task: evento.target.value})}
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
                value={this.state.time}
                onChange={evento => this.setState({ ...this.state, time: evento.target.value})}
                id="tempo"
                min="00:00:00"
                max="24:00:00"
                required
                />
            </div>
            <Botao type="submit">
                Adicionar
            </Botao>
        </form>;
    }
    }

export default Form;