import React from 'react';

const Table = ({item, handleDelete}) => {
  const { _id, name, image, supplier } = item;
  return (
    <div className='md:w-2/4 block mx-auto'>
      <table className="min-w-full border">
                <tbody>
                  <tr className="hover:bg-white border-b transition duration-300 ease-in-out bg-gray-100 hover:shadow-lg">

                    <td className="w-5/12 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="hidden md:block w-5/12 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.supplier}
                    </td>
                    <td className="w-2/12 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                     <button onClick={()=>handleDelete(item._id)}
                     className='bg-hotpink hover:bg-base-black text-white py-1 px-6'
                     >Delete</button>
                     
                    </td>
                  </tr>

                </tbody>
              </table>
    </div>
  );
};

export default Table;