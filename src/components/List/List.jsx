import ListItem from "../App/ListItem/ListItem";
function List({list, deleteItem, putPurchase}) {

    
   return (
    list.map(item => (
       <ListItem item={item} key={item.id} deleteItem={deleteItem} putPurchase={putPurchase}/>
   ))

   )
   
  
}

export default List;