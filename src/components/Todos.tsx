import Todo from "../modles/todo";
import Items from "../components/Items"
const ToDos: React.FC<{items: Todo[]}> = (props) =>{
    return (
        <ul>
            {props.items.map(item =>(
                <Items key={item.id} text= {item.text}/>
            ))}
        </ul>
    )
};

export default ToDos;