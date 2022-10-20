import ListItem from "../App/ListItem/ListItem";
function List({list, deleteItem}) {

    
   return (
    list.map(item => (
       <ListItem item={item} key={item.id} deleteItem={deleteItem}/>
   ))

   )
   
  
}

export default List;