import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx'
import './App.css';
import List from '../List/List'


function App() {

    const [list, setList] = useState([]);
    // On load GET shopping list
    useEffect(() => {
        getList()
    }, [])

    const getList = () => {
        axios.get('/list')
        .then(response => {
            setList(response.data)
        
        })
        .catch(err => {
            alert('error getting list');
            console.log(err);
        })
    }

    const deleteList = () =>{
        console.log('deleting List');
        axios.delete('/list/destroy')
            .then(response =>{
                console.log('list destroyed', response);
                getList();
            })
            .catch(err =>{
                console.error("Error in deleteList", err);
            })


    }
    const deleteItem = (newId) =>{
        console.log('Deleting item');

        axios({
            method:'DELETE',
            url: `/list/${newId}`
        })
            .then(response =>{
                console.log('deleting item from list');
                getList();
            })
            .catch(err =>{
                console.error("Error in deleteItem", err);
            })
    };

    return (
        <div class="App">
            <Header />
            <main>
                <form>
                    <h2>Add Item</h2>
                    <input placeholder="Item"></input>
                    <input placeholder="Quantity"></input>
                    <input placeholder="Unit"></input>
                    <button>Submit</button>
                </form>
            
                <div class='list'>
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
                            < List 
                                list={list}
                            />
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default App;
