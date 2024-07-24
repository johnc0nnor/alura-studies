import React from 'react';
import style from './Buttons.module.scss';

class Botao extends React.Component {
  render() {
     return <button className={style.botao}>
            Click me!
            </button>;
  }
}

export default Botao;