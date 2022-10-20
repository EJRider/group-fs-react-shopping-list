import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <form>
                    <h2>Add Item</h2>
                    <input placeholder="Item"></input>
                    <input placeholder="Quantity"></input>
                    <input placeholder="Unit"></input>
                    <button>Submit</button>
                </form>
                <br></br>
                <h2>Shopping List</h2>
                <button>Reset</button>
                <button>Clear</button>
                <table>
                    <thead>
                        <tr>
                            <td>
                                Item
                            </td>
                            <td>
                                Quantity
                            </td>
                            <td>
                                Settings
                            </td>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default App;
