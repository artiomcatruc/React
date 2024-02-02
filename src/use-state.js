import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return (
        <div>
            <HookSwitcher />
        </div>
    )
}


const HookSwitcher = () => {
    const [color, setColor] = useState('grey');
    const [fontSize, setFontSize] = useState(20)
    return (
    <div style={{ padding: '10px',        backgroundColor: color, fontSize: `${fontSize}px`}}>
            <button onClick={() => setColor('grey')}>Dark</button>
            <button onClick={() => setColor('white')}>Light</button>
            <button onClick={() => setFontSize((s) => s + 2)}>+</button>
            <button onClick={() => setFontSize((s) => s - 2)}>-</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



