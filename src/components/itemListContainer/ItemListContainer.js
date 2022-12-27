import { useEffect, useState } from "react";
import { getProductData } from "../../helpers/getData";
import ItemList from "../itemList/itemList";

const ItemListContainer = () => {
  const [products, setProductos] = useState([]);

  useEffect(() => {
    getProductData()
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ItemList products={ products } />
    </div>
  );
};

export default ItemListContainer;
