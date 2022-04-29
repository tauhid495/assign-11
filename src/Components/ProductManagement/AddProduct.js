import React from 'react';

const AddProduct = () => {
    return (
        <div className='md:flex md:flex-row h-screen items-center'>
            {/* image sec */}
            <div className='basis-1/2 p-4'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image"/>
            </div>

            {/* form section */}
            <div class="basis-1/2 mx-auto block p-4 rounded-lg shadow-lg bg-white max-w-sm">
                <form>
                    <div className='text-xl text-center'> Add Product</div>
                    <div class="form-group mb-6">
                        <label for="product name" class="form-label inline-block mb-2 text-gray-700">Product Name</label>
                        <input type="text" class="form-control
                            block  w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded
                            transition ease-in-out m-0
                            " placeholder="Name"/>
                    </div>

                    <div class="form-group mb-6">
                        <label for="product image" class="form-label inline-block mb-2 text-gray-700">Product Image</label>
                        <input type="text" class="form-control
                            block  w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded
                            transition ease-in-out m-0
                            " placeholder="Img URL"/>
                    </div>

                    <div class="form-group mb-6">
                        <label for="product Price" class="form-label inline-block mb-2 text-gray-700">Product Price</label>
                        <input type="number" class="form-control
                            block  w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded
                            transition ease-in-out m-0
                            " placeholder="Price"/>
                    </div>

                    <div class="form-group mb-6">
                        <label for="product name" class="form-label inline-block mb-2 text-gray-700">Product Description</label>
                        <textarea type="textarea" class="form-control
                            block  w-full px-3 py-1.5 text-base font-normal
                            text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded
                            transition ease-in-out m-0
                            " placeholder="Short Description"/>
                    </div>
                    

                    
                    <button type="submit" class=" block mx-auto
                        px-6 py-2.5 bg-blue-600 text-white font-medium text-xs
                        leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;