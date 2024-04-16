import { Component } from 'react';

import './todo-list-item.css';

interface IProps {
    label: string;
    onDone: () => void;
    onDeleted: () => void;
    onImportant: () => void;
    important: boolean;
    done: boolean;
}

export default class ToDoListItem extends Component<IProps> {
    render() {
        const { label, onDeleted, onImportant, onDone, important, done } = this.props;

        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }
        return (
            <div className={classNames}>
                <span onClick={onDone}>{label}</span>
                <div className="todo-list-item__wrapper-btn">
                    <button className="list-item__btn item__remove-btn">
                        <span className="material-icons md-18 remove-btn__img" onClick={onDeleted}>
                            delete
                        </span>
                    </button>
                    <button className="list-item__btn item__important-btn" onClick={onImportant}>
                        <span className="material-icons md-18 important-btn__img">
                            priority_high
                        </span>
                    </button>
                </div>
            </div>
        );
    }
}
