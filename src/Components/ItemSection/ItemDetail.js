import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ItemDetail = () => {

    const {itemId}= useParams();
    const [inventory, setInventory] = useState(0);

    const [itemData, setItemData] = useState({});
    
    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItemData(data));
    }, [useState(0)])

    const handleAddStock = (e) => {
        e.preventDefault();
        
        const stockInput = e.target.addStock.value;
        const stockInputInt = parseInt(stockInput)
        if (stockInputInt <= 0 || isNaN(stockInputInt)) {
            alert('Input a positive quantity')
            return;
        }else{
            console.log(itemData.inventory, stockInputInt);
        const newInventory = (itemData.inventory) + (stockInputInt);
        // setInventory(newInventory);
        console.log(newInventory);

        fetch(`http://localhost:5000/item/${itemId}`,{
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({newInventory}),
          })
            .then((res) => res.json())
            .then(data=>console.log(data))

        e.target.reset();
        }
    }

    const handleItemDelivery = () => {
        if (inventory <= 0) {
            alert('Stock is Empty')
            return;
        }
        const newStock = (inventory - 1);
        setInventory(newStock);
    }

// update stock section
// const handleUpdateStock=e=>{
//     console.log(inventory);

//     fetch(`http://localhost:5000/item/${itemId}`,{
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({inventory}),
//   })
//     .then((res) => res.json())
//     .then(data=>console.log(data))
// }




    return (
        <div className='h-screen'>
            <div className="my-7 flex justify-center">
                <div className=" shadow hover:shadow-2xl bg-gray-50 hover:bg-white max-w-sm transition duration-300 ease-in-out p-4 border border-gray-50 hover:border-gray-200">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                        <img className=" hover:scale-110 transition duration-300 ease-in-out" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                    </div>


                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Product Name : {itemData.name}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Product ID : {itemData._id}
                        </p>
                        <p className="text-gray-700 text-base mb-4">
                            Description : {itemData.description}
                        </p>
                        <p className="text-gray-700 text-base mb-4">
                            Supplier : {itemData.supplier}
                        </p>
                        <p className="text-gray-700 text-base mb-4">
                            Price: {itemData.price}
                        </p>
                        <div className='flex justify-between mb-3'>
                            <p>Available Item : {itemData.inventory} pcs</p>
                            <button onClick={handleItemDelivery}
                                type="submit" className="ml-7 inline-block px-6 py-2.5 bg-hotpink text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-base-black hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Delivered</button>
                        </div>


                        {/* stock add form */}
                        <form onSubmit={handleAddStock} className='flex justi'>
                            <input className='w-[175px] border border-gray-300 py-1' type="text" name='addStock' />

                            <button
                                type="submit" className=" inline-block px-6 py-2.5 bg-hotpink text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-base-black hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Add stock</button>
                        </form>

                        

                            {/* <button onClick={handleUpdateStock}
                                type="submit" className=" inline-block px-6 py-2.5 bg-hotpink text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-base-black hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Update stock</button> */}
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ItemDetail;