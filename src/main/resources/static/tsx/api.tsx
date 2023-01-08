import {Todo} from "./model";

export const url = "/api/todo";

export const deleteTodo = (id: number) => {
    const requestOptions = {
        method: 'DELETE',
    };
    fetch(url + '/' + id, requestOptions)
        .then(response => response.json());
}

export const createTodo = (todo: Todo) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(todo)
    };
    fetch(url, requestOptions)
        .then(response => response.json());
}

export const updateTodo = (todo: Todo) => {
    const requestOptions = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(todo)
    };
    fetch(url, requestOptions)
        .then(response => response.json());
}
