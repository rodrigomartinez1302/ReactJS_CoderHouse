
const Item = ({ id, description, category, img, price }) => {
  return (
    <div className="col-2 m-3">
      <h2>{category}</h2>
      <img src={"img/" + img} alt={img} />
      <p>{description}</p>
      <p>
        Price:{" "}
        <b>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </b>
      </p>
      <button className="btn btn-outline-primary">Ver más</button>
    </div>
  );
};

export default Item;
