function Testimonials (props){
    return(
        <section className="testimonials">
            <h3 className="title">Testimonials from our adventurers:</h3>
            <p className="quote">{props.quote1}</p>
            <p className="author">- {props.author1}</p>
            <p className="quote">{props.quote2}</p>
            <p className="author">- {props.author2}</p>
            <p className="quote">{props.quote3}</p>
            <p className="author">- {props.author3}</p>
        </section>
    )
}

export default Testimonials;
