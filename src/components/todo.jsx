
import { Check } from './checking';

export const Todo = ({ content, completed, onDel, onToggle }) => {
    return (
        <div className="todo">
            <Check bool={completed} />
            <h2 style={{ textDecoration: completed ? 'line-through' : 'none' }}>{content}</h2>
            <button className="btn" onClick={onDel}>
                <i className="fa-solid fa-trash-can"></i>
            </button>
        </div>
);
};
