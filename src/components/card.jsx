function Card(props){
    return (
        <div className="card">
            <h1>{props.title}</h1>
            <img src={props.imgSrc} id= "sandwich" ></img>
            <p>{props.price}</p>
            <button>Purchase</button>
        </div>
    )
}

export default Card;