import { useState } from 'react'

function ItemForm({ addItem }) {

    let [newItemName, setItemName] = useState('');
    let [itemQuantity, setItemQuantity] = useState(0);
    let [itemUnit, setItemUnit] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        let newItem = {
            item: newItemName,
            quantity: itemQuantity,
            unit: itemUnit
        }

        console.log(newItem)

        if(newItemName){

            addItem(newItem);

            setItemName('');
            setItemQuantity(0);
            setItemUnit('');
        }


    }








    return (<>


        <form onSubmit= {handleSubmit}>
            <h2>Add Item</h2>
            <input 
            type="text"
            placeholder="Item"
            required
            value={newItemName}
            onChange={(evt)=> setItemName(evt.target.value) }
            ></input>


            <input 
            type="number"
            placeholder="Quantity"
            required
            value={itemQuantity}
            onChange={(evt)=> setItemQuantity(evt.target.value)}
            ></input>



            <input 
            placeholder="Unit"
            value={itemUnit}
            onChange={(evt) => setItemUnit(evt.target.value)}
            
            ></input>


            <button>Submit</button>
        </form>




    </>)
}


export default ItemForm;