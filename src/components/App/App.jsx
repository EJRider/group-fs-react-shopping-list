import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx'
import './App.css';
import List from '../List/List'
import ItemForm from '../ItemForm/ItemForm.jsx';


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


    const resetPurchases = () =>{
        axios.put('/list')
            .then(response =>{
                console.log('reseting Purchases')
                getList();
            })
            .catch(err =>{
                console.error('error resetting purchases', err);
            })
    }

    const putPurchase = (newId) => {
        console.log('putPurchase')
        axios.put(`/list/${newId}`)
            .then(response =>{
                console.log('puttingPurchase', response);
                getList()
            })
            .catch(err=>{
                console.error('error in putPurchase', err);
            });
    };

    const deleteList = () => {

        console.log('deleting List');
        axios.delete('/list/destroy')
            .then(response => {
                console.log('list destroyed', response);
                getList();
            })
            .catch(err => {
                console.error("Error in deleteList", err);
            })

    }
    const deleteItem = (newId) => {
        console.log('Deleting item');

        axios({
            method: 'DELETE',
            url: `/list/${newId}`
        })
            .then(response => {
                console.log('deleting item from list');
                getList();
            })
            .catch(err => {
                console.error("Error in deleteItem", err);
            })
    };


    const addItem = (newItem) => {

        axios.post('/list', newItem)
            .then(response => {
                (console.log('Item added, ', response))
                getList();
            })
            .catch(error => {
                (console.log('Item not added, ', error))

            });

    };

    return (
        <div class="App">
            <Header />
            <main>

                <ItemForm
                    addItem={addItem} />

                <div class='list'>
                    <h2>Shopping List</h2>
                    <button onClick={resetPurchases}>Reset purchases</button>
                    <button  onClick={deleteList}>Clear table</button>
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
                                    Actions
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            < List
                                list={list}
                                deleteItem={deleteItem}
                                putPurchase={putPurchase}
                            />
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default App;
