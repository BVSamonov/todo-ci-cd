import './header-app.css';

interface IProps {
    done: number;
    todo: number;
}

const HeaderApp = ({ done, todo }: IProps) => {
    return (
        <div className="header-app">
            <h1 className="header-app__title">Todo List</h1>
            <span className="header-app__subtitle">
                {todo} More todo, {done} Done
            </span>
        </div>
    );
};

export default HeaderApp;
