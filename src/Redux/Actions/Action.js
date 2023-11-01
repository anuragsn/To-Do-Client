

import axios from 'axios'

export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3000/user');
      dispatch({ type: FETCH_TODOS, payload: response.data });
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };
};

export const editTodo = (todo) => {
  console.log(todo)
  return async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost:3000/user/${todo.id}`, todo);
      dispatch({
        type: 'EDIT_TODO', 
        payload: response.data, 
      });
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };
};

export const addTodo = (todo) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3000/user', todo); 
      dispatch({
        type: 'ADD_TODO',
        payload: response.data 
      });
    } catch (error) {
    }
  };
};


export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3000/user/${id}`);
      dispatch({
        type: 'DELETE_TODO', 
        payload: id, 
      });
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };
};


