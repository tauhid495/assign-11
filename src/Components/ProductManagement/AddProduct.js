import React from 'react';

const AddProduct = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const name =e.target.name.value;
        const image =e.target.image.value;
        const price =e.target.price.value;
        const supplier =e.target.supplier.value;
        const description =e.target.description.value;

        const item={name, image, price, supplier, description };

        // sending data to server
        fetch('http://localhost:5000/item', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(item)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data, 'success');
            alert('user added')
            e.target.reset();
        })

    }

    return (
        <div className='md:flex md:flex-row h-screen items-center'>
            {/* image sec */}
            <div className='basis-1/2 p-4'>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
            </div>

            {/* form section */}
            <div className="basis-1/2 mx-auto block p-4 rounded-lg shadow-lg bg-white max-w-sm">
                <form onSubmit={handleSubmit} className=''>
                    <div className='text-xl text-center'> Add Product</div>
                    <div className="form-group mb-6">
                        <label htmlFor="name" className="form-label inline-block mb-2 text-gray-700">Product Name</label>
                        <input type="text" name = 'name'className="form-control
                            block  w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded
                            transition ease-in-out m-0
                            " placeholder="Name" />
                    </div>

                    <div className="form-group mb-6">
                        <label htmlFor="picture" className="form-label inline-block mb-2 text-gray-700">Product Image</label>
                        <input type="text" name = 'image' className="form-control
                            block  w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded
                            transition ease-in-out m-0
                            " placeholder="Img URL" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="supplier" className="form-label inline-block mb-2 text-gray-700">Supplier Name</label>
                        <input type="text" name = 'supplier' className="form-control
                            block  w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded
                            transition ease-in-out m-0
                            " placeholder="Supplier" />
                    </div>

                    <div className="form-group mb-6">
                        <label htmlFor="price" className="form-label inline-block mb-2 text-gray-700">Product Price</label>
                        <input type="number" name = 'price' className="form-control
                            block  w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded
                            transition ease-in-out m-0
                            " placeholder="Price" />
                    </div>

                    <div className="form-group mb-6">
                        <label htmlFor="description" className="form-label inline-block mb-2 text-gray-700">Product Description</label>
                        <textarea type="textarea" name = 'description' className="form-control
                            block  w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded
                            transition ease-in-out m-0
                            " placeholder="Short Description" />
                    </div>



                    <button type="submit" className=" block mx-auto
                        px-6 py-2.5 bg-blue-600 text-white font-medium text-xs
                        leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Click to Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;