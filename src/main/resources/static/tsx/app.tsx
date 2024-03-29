import "../css/App.css"
import InputField from "./components/InputField";
import * as React from "react";
import {Todo} from "./model";
import TodoList from "./components/TodoList";
import * as Api from "./api";
import {DragDropContext, DropResult} from "react-beautiful-dnd";

const App: React.FC = () => {

    const [todo, setTodo] = React.useState<string>("");
    const [todos, setTodos] = React.useState<Todo[]>([]);
    const [completedTodos, setCompletedTodos] = React.useState<Todo[]>([]);

    React.useEffect(() => {
        fetch(Api.url,)
            .then(resp => resp.json())
            .then(actualData => {
                setTodos(actualData.filter(todo => !todo.isDone))
                setCompletedTodos(actualData.filter(todo => todo.isDone))
            })
            .catch(error => console.log(error))
    }, []);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            const todoObj: Todo = {id: Date.now(), todo, isDone: false};
            setTodos([...todos, todoObj]);
            setTodo("");
            Api.createTodo(todoObj)
        }
    };

    const onDragEnd = (result: DropResult) => {
        const {source, destination} = result;

        if (!destination) return;
        if (
            destination.droppableId === source.droppableId
            && destination.index === source.index
        )
            return;

        let add: Todo,
            active = todos,
            complete = completedTodos;
        if (source.droppableId === "TodosList") {
            add = active[source.index];
            active.splice(source.index, 1);
        } else if (source.droppableId === "TodosRemove") {
            add = complete[source.index];
            complete.splice(source.index, 1);
        }
        if (destination.droppableId === "TodosList") {
            add.isDone = false;
            active.splice(destination.index, 0, add);
        } else if (destination.droppableId === "TodosRemove") {
            add.isDone = true;
            complete.splice(destination.index, 0, add);
        }
        Api.updateTodo(add)
        setTodos(active);
        setCompletedTodos(complete);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="App">
                <span className="heading">Taskify</span>
                <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
                <TodoList todos={todos} setTodos={setTodos}
                          completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>
            </div>
        </DragDropContext>
    );
}
export default App;
