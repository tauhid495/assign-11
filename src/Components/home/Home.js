import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import Carousel from '../header/Carousel';
import Items from '../ItemSection/Items';

const Home = () => {
    const [items, setItems] = useItems();

    return (
        <div>
            <Carousel />
            <div className='container w-full mx-auto my-7'>
                <div className='p-4 grid sm:grid-cols-1 md:grid-cols-3 gap-y-7'>
                    {
                        items.map(item => <Items
                            key={item._id}
                            item={item} />)
                    }

                </div>
                <div className='text-center'>
                    <Link className='drop-shadow-sm text-xl text-hotpink hover:text-base-black'
                        to='/manageinventories'>Manage Inventories</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;