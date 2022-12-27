import "./item.css"

const Item = ( {id, description, category, img, price} ) => {
    console.log("../../data/img/" + img )
    return (
        <div className="col-3 m-3 item">
             <h2>{category}</h2>
            <img src={"img/" + img } alt={img}/>
            <p>{description}</p>
            <p>Price: <b>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price)}</b></p>
            <button className="btn btn-outline-primary">Ver más</button>
        </div>
    )
}

export default Item

