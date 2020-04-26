import { USER_EVENTS } from '../constants/constants.js';

const { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CLEAR_ALL_TODOS } = USER_EVENTS;

const initialState = {
  todoReducer: {
    todos: []
  }
};

const todoReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_TODO:
      return {
        todoReducer: {
          todos: [
            ...state.todos,
            {
              id: action.todo.id,
              text: action.todo.text,
              completed: action.todo.completed
            }
          ]
        }
      };

    case TOGGLE_TODO:
      return {
        todoReducer: {
          todos: [
            ...state.todos.map(todo => {
              return {
                ...todo,
                completed: todo.id === action.id ? !todo.completed : todo.completed
              }
            })
          ]
        }
      };

    case DELETE_TODO:

      return {
        todoReducer: {
          todos: [
            ...state.todos.filter(todo => {
              if (todo.id !== action.id) {
                return todo;
              }
            })
          ]
        }
      };

    case CLEAR_ALL_TODOS:

      return {
        todoReducer: {
          todos: []
        }
      };

    default:

      return state;

  }
};

export default todoReducer;