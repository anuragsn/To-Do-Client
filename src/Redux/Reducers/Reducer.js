
import { FETCH_TODOS, ADD_TODO, DELETE_TODO } from '../Actions/Action'

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TODOS:
        return {
          ...state,
          todos: action.payload,
        };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

export default todoReducer;
