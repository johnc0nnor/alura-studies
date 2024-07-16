import React from "react";
import Botao from "../Buttons";

class Form extends React.Component {
    render() {
        return <form>
            <div>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input 
                type="text"
                name="tarefa"
                id="tarefa"
                placeholder="Digite sua tarefa"
                required
                />
            </div>
            <div>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input 
                type="time"
                step="1"
                name="tempo"
                id="tempo"
                min="00:00:00"
                max="24:00:00"
                required
                />
            </div>
            <Botao />
        </form>;
    }
    }

export default Form;