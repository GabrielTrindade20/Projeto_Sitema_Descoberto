import React from 'react';

function OpcaoSelecao(props) {
  return (
    <div>
      <label>{props.label}</label>
      <select value={props.value} onChange={props.onChange}>
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </select>
    </div>
  );
}

export default OpcaoSelecao;