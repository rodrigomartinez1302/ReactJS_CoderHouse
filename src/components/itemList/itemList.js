import Item from "../item/item";


const ItemList = ({ products }) => {
  return (
    <div className="container my-5">
      <h2>Photo Stock</h2>
      <hr />
      <section className="row my-4">
        {products.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </section>
    </div>
  );
};

export default ItemList;
