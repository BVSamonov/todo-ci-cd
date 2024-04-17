import { Component } from 'react';

import HeaderApp from '../header-app';
import SearchApp from '../search-app';
import ToDoList from '../todo-list';
import AddItem from '../add-item';

import './app.css';

export interface IItemData {
    label: string;
    important: boolean;
    done: boolean;
    id: number;
}

interface IAppInitial {
    todoData: IItemData[];
    term: string;
    filter: string;
}

export default class App extends Component {
    labelId = 100;

    state: IAppInitial = {
        todoData: [
            this.currentItem('Drink Coffee'),
            this.currentItem('Build todo App'),
            this.currentItem('Have a lanch'),
        ],
        term: '',
        filter: 'all',
    };

    search = (items: IItemData[], text: string) => {
        if (text.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.label.toUpperCase().indexOf(text.toUpperCase()) > -1;
        });
    };

    filter = (items: IItemData[], category: string) => {
        switch (category) {
            case 'done':
                return items.filter(item => item.done);
            case 'active':
                return items.filter(item => !item.done);
            default:
                return items;
        }
    };

    onFilterChange = (filter: string) => {
        this.setState({ filter });
    };

    changeTerm = (term: string) => {
        this.setState({ term });
    };

    getDone = (id: number) => {
        this.setState({ filter: id });
    };

    currentItem(text: string): IItemData {
        return {
            label: text,
            important: false,
            done: false,
            id: this.labelId++,
        };
    }

    onItemAdded = (text: string) => {
        this.setState(({ todoData }: IAppInitial) => {
            const item: IItemData = {
                label: text,
                important: false,
                done: false,
                id: this.labelId++,
            };

            const newArr = [...todoData, item];

            return {
                todoData: newArr,
            };
        });
    };

    deleteId = (id: number) => {
        this.setState(({ todoData }: IAppInitial) => {
            const correctArr = todoData.filter(value => value.id !== id);

            return {
                todoData: correctArr,
            };
        });
    };

    onToggleImportant = (id: number) => {
        this.setState(({ todoData }: IAppInitial) => {
            return this.toggleItem(id, todoData, 'important');
        });
    };

    onToggleDone = (id: number) => {
        this.setState(({ todoData }: IAppInitial) => {
            return this.toggleItem(id, todoData, 'done');
        });
    };

    toggleItem = (id: number, todoData: IItemData[], props: keyof IItemData) => {
        const currentId = todoData.findIndex(value => value.id === id);
        const oldItem = todoData[currentId];
        const newItem = { ...oldItem, [props]: !oldItem[props] };

        const newArr = [...todoData.slice(0, currentId), newItem, ...todoData.slice(currentId + 1)];

        return {
            todoData: newArr,
        };
    };

    render() {
        const { todoData, term, filter } = this.state;

        const visiableData = this.filter(this.search(todoData, term), filter);
        const done = todoData.filter(value => value.done).length;
        const toDo = todoData.length - done;

        return (
            <div className="todo-wrapper">
                <HeaderApp done={done || 0} todo={toDo || 0} />
                <SearchApp
                    changeTerm={this.changeTerm}
                    filter={filter}
                    onFilterChange={this.onFilterChange}
                />
                <ToDoList
                    todos={visiableData}
                    onDeleted={this.deleteId}
                    onImportant={this.onToggleImportant}
                    onDone={this.onToggleDone}
                />
                <AddItem onItemAdded={this.onItemAdded} />
            </div>
        );
    }
}
