import Todo from "../modles/todo";
import Items from "../components/Items"
import classes from './Todos.module.css'
const ToDos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map(item => (
                <Items key={item.id} text={item.text}
                    onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
            ))}
        </ul>
    )
};

export default ToDos;