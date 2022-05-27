import React, {useState} from 'react';
import './App.css';

function App() {

    const [value, setValue] = useState<number>(0)
    const incHandler = () => {
        setValue(value + 1);
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value));
        localStorage.setItem('counterValue+1', JSON.stringify(value + 1));
    }
    const getFromLocalHandler = () => {
        let valueAsString = localStorage.getItem('counterValue');
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString);
            setValue(newValue);
        }
    }
    const clearLocalStorageHandler = () => {
        localStorage.clear();
        setValue(0);
    }
    const removeItemLocalStorageHandler = () => {
        localStorage.removeItem('counterValue+1');
    }

    return (
        <div className="App">
            <h1>LocalStorage</h1>
            <hr/>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getFromLocalHandler}>getFromLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
            <button onClick={removeItemLocalStorageHandler}>removeItemLocalStorage</button>
        </div>
    );
}

export default App;
