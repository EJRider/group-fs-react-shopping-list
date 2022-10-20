// import {useState} from 'react';

function ListItem ({ item, deleteItem}){


    const deleteReq = ()=>{
        console.log('making deleteReq');
        let newId = item.id;
        deleteItem(newId);
    }
    return(
        <>
       <tr key={item.id}>
            <td>
                {item.item}
            </td>
            <td>
                {item.quantity} {item.unit}
            </td>
            <td>
                <button onClick={deleteReq}>Delete</button>
            </td>
       </tr>
        </>
    )
}

export default ListItem;