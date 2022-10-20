// import {useState} from 'react';

function ListItem ({ item, deleteItem, putPurchase}){


    const deleteReq = ()=>{
        console.log('making deleteReq');
        let newId = item.id;
        deleteItem(newId);
    }

    const purchaseReq = ()=>{
        console.log('making purchaseReq')
        let newId = item.id;
        putPurchase(newId);
    }

    if(item.purchased === true){
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
                Purchased
            </td>
       </tr>
        </>
    )}
    else{
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
                    <button onClick={purchaseReq}>Buy</button>
                    <button onClick={deleteReq}>Delete</button>
                </td>
           </tr>
            </>
    )}
}

export default ListItem;