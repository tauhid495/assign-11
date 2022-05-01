import React from 'react';
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
            </div>
        </div>
    );
};

export default Home;