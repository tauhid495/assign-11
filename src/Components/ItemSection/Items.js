import React, { } from 'react';
import { useNavigate } from 'react-router-dom';

const Items = ({ item }) => {
    const { _id, name, image, description, price, supplier, inventory } = item;

    const navigate = useNavigate();

    const navigateItemDetail = id => {
        navigate(`/item/${id}`);
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="md:w-[300px] h-[450px] shadow hover:shadow-2xl bg-gray-50 hover:bg-white max-w-sm transition duration-300 ease-in-out p-4 border border-gray-50 hover:border-gray-200">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                        <img className=" hover:scale-110 transition duration-300 ease-in-out" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                    </div>


                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{item.name}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            {item.description}
                        </p>
                        <p className="text-gray-700 text-base mb-4">
                            Supplier : {item.supplier}
                        </p>
                        <p className="text-gray-700 text-base mb-4">
                            Price: {item.price}
                            <span className='ml-7'> Stock : {item.inventory } pcs</span>
                        </p>
                        <button onClick={() => navigateItemDetail(_id)}
                            type="button" className=" inline-block px-6 py-2.5 bg-hotpink text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-base-black hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Update stock</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;