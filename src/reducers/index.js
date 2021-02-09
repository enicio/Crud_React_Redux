const INITIAL_STATE = [];

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value];
    case 'DEL_ELEMENT':
      return state.filter((cada) => cada.id !== action.id );
    case 'EDIT_ELEMENT':
      return state.map((cada) =>
       (cada.id === action.id)
        ? {...cada,editing:!cada.editing}
        : cada );
    case 'UPDATE_ELEMENT':
       return state.map( (cada) => {
       if (cada.id === action.id) {
         return {
           ...cada,
           name: action.data.name,
           cpf: action.data.cpf,
           salary: action.data.salary,
           discount: action.data.discount,
           dependents: action.data.dependents,
           editing: false,
         } ;
       } return cada;
      });
    default:
      return state;
  }
}

export default listReducer;
