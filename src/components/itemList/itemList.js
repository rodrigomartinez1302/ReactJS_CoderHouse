import Item from "../item/item";


const ItemList = ({ products }) => {
  return (
    <div className="container-fluid">
      <h2 clas>Photo Stock</h2>
      <hr />
      <section className="row my-3">
        {products.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </section>
    </div>
  );
};

export default ItemList;
