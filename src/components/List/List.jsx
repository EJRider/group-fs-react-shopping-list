function List({list}) {
   return (
    <>
    {list.map(item => (
       <tr key={item.id}>
           <td>{item.item}</td>
           <td>{item.quantity}</td>
           <td>{item.unit}</td>
       </tr>
   ))}
   </>

   )
   
  
}

export default List;