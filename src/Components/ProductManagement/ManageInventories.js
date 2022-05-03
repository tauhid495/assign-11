import React from 'react';
import useItems from '../../hooks/useItems'
import Table from './table/Table';

const ManageInventories = () => {

    const [items, setItems]=useItems();
    

    const handleDelete=id=>{
        const proceed=window.confirm('Want to delete?')
        if(proceed){
          const url = `http://localhost:5000/item/${id}`
          
          fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = items.filter(item => item._id !== id);
            setItems(remaining);
        })
        }
      }


    return (
        <div className='h-screen'>
            <div className='text-center text-4xl my-6'>Manage Inventory Items</div>
            <p className='text-center text-xl my-2'>Total Items : {items.length}</p>
            {
                        items.map(item => <Table
                            key={item._id}
                            handleDelete={handleDelete}
                            item={item} />)
                    }
        </div>
    );
};

export default ManageInventories;