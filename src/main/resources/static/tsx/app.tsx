import * as React from "react";
import "../css/App.css"
import InputField from "./components/InputField";
import {useState} from "react";
import {Todo} from "./model";
import TodoList from "./components/TodoList";

let name: string = "Alex"

const App: React.FC = () => {

    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
            setTodo("");
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
