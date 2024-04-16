import { ChangeEvent, Component, FormEvent } from 'react';

import './add-item.css';

interface IProps {
    onItemAdded: (text: string) => void;
}

export default class AddItem extends Component<IProps> {
    state = {
        label: '',
    };

    onSubmit = (e: FormEvent) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);

        this.setState({
            label: '',
        });
    };

    addNewItem = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            label: e.target.value,
        });
    };

    render() {
        return (
            <form className="create-item-container" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Add new list"
                    className="text-item"
                    onChange={this.addNewItem}
                    value={this.state.label}
                ></input>
                <button type="submit" className="add-item-btn">
                    Create
                </button>
            </form>
        );
    }
}
