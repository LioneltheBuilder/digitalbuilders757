import { createRoot} from 'react-dom/client';

const Header = () => {
    return (
        <header>
            <h1>To Do List</h1>\
            <span className='total-items'>Items: 1</span>
        </header>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<Header/>);