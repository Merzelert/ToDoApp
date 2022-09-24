import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButtom } from './CreateTodoButtom';

const todos = [
    { text: 'Cortar cebolla', completed: false },
    { text: 'Lavar', completed: false },
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
                text = {todo.text}/>))}
            </TodoList>
            <CreateTodoButtom />
        </>
    );
}

export default App;
