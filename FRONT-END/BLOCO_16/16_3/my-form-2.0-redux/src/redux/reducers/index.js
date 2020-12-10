import { ADD_INFO } from '../actions/action';

const INITIAL_STATE = {
  nome: "",
  email: "",
  cpf: "",
  endereço: "",
  cidade: "",
  estado: "",
  moradia: "",
  resumo: "",
  cargo: "",
  descrição: "",
};

export const reducerAddData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_INFO:
      return {
        ...state,
        [action.payload.info]: action.payload.value,
      };
    default:
      return state;
  }
};
