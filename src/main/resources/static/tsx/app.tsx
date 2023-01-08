import * as React from "react";
import "../css/App.css"
import InputField from "./components/InputField";
import {useEffect, useState} from "react";
import {Todo} from "./model";
import TodoList from "./components/TodoList";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

let name: string = "Alex"

const App: React.FC = () => {

    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetch("http://localhost:9000/api/todo",)
            .then(resp => resp.json())
            .then(resp => setTodos(resp))
            .catch(error => console.log(error))
    }, []);

    const postTodo = (todoObj: Todo) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(todoObj)
        };
        fetch('http://localhost:9000/api/todo', requestOptions)
            .then(response => response.json());
    }

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            const todoObj: Todo = {id: Date.now(), todo, isDone: false};
            setTodos([...todos, todoObj]);
            setTodo("");
            postTodo(todoObj)
        }
    };

    console.log(todo);

    return (
        <div className="App">
            <span className="heading">Taskify</span>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}
export default App;
