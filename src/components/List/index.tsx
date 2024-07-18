import React from "react";

function List() {
  const tarefas = [{
    nome: "React",
    concluido: false,
    tempo: "02:00:00"
  }, {
    nome: "Javascript",
    concluido: false,
    tempo: "01:00:00"
  }, {
    nome: "HTML",
    concluido: true,
    tempo: "00:30:00"}];
    return (
    <aside>
        <h2>Estudos do dia</h2>
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>
              <h3>
                {tarefa.nome}
              </h3>
              <span>
                {tarefa.tempo}
              </span>
            </li>
          ))}
        </ul>
    </aside>
    );}

export default List;