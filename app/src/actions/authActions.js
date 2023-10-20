// Defina o tipo da ação
export const SELECT_RADIO_OPTION = 'SELECT_RADIO_OPTION';

// Ação para selecionar uma opção de rádio
export const selectRadioOption = (option) => {
  return {
    type: SELECT_RADIO_OPTION,
    payload: option,
  };
};
