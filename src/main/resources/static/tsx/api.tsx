import {Todo} from "./model";

export const url = "http://localhost:9000/api/todo";

export const deleteTodo = (id: number) => {
    const requestOptions = {
        method: 'DELETE',
    };
    fetch('http://localhost:9000/api/todo/' + id, requestOptions)
        .then(response => response.json());
}

export const createTodo = (todo: Todo) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(todo)
    };
    fetch('http://localhost:9000/api/todo', requestOptions)
        .then(response => response.json());
}

export const updateTodo = (todo: Todo) => {
    const requestOptions = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(todo)
    };
    fetch('http://localhost:9000/api/todo', requestOptions)
        .then(response => response.json());
}
