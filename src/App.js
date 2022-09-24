import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButtom } from './CreateTodoButtom';
import { Footer } from "./Footer.jsx";

const todos = [
    { text: 'Cortar cebolla', completed: false },
    { text: 'Lavar', completed: true },
    { text: 'Beta', completed: false },
    { text: 'Alpha', completed: false }
]

function App() {
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {todos.map(todo => (
                <TodoItem 
                key = {todo.text}
                text = {todo.text}
                completed = {todo.completed}
                />))}
            </TodoList>
            <CreateTodoButtom />
            <Footer/>
        </>
    );
}

export default App;
