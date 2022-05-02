import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useItemById=()=>{

    const { itemId } = useParams();

    const [itemData, setItemData] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItemData(data));
    }, [])
    return [itemData, setItemData];

}
export default useItemById;