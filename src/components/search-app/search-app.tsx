import { ChangeEvent, Component } from 'react';

import './search-app.css';
import TodoFilter from '../todo-filter-status';

interface IProps {
    changeTerm: (term: string) => void;
    filter: string;
    onFilterChange: (filter: string) => void;
}

export default class SearchApp extends Component<IProps> {
    state = {
        term: '',
    };

    changeTerm = (e: ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.changeTerm(term);
    };

    render() {
        const { onFilterChange, filter } = this.props;

        return (
            <div className="search-app__wrapper">
                <input
                    className="search-app"
                    type="text"
                    placeholder="search"
                    value={this.state.term}
                    onChange={this.changeTerm}
                />
                <TodoFilter filter={filter} onFilterChange={onFilterChange} />
            </div>
        );
    }
}
