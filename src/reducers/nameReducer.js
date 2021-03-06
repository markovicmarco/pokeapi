const INITIAL_STATE = {
  name: "pepito"
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'SET_NAME':
      return{
        ...state,
        name: action.payload
      }
    default:
      return state;
  }
}

export default reducer;