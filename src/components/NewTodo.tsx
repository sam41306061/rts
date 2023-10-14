import { useRef } from "react";

import classes from './NewTodo.module.css'

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }

        props.onAddTodo(enteredText)

        todoTextInputRef.current!.value = ''; // clear input 
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label className={classes.label} >Todo text</label>
            <input className={classes.input} type="text" id="text" ref={todoTextInputRef} />
            <button className={classes.button}>Add Todo</button>
        </form>
    );
}
export default NewTodo