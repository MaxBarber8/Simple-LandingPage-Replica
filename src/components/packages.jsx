function Packages(props) {
    return (
        <section className="packages">
            <h3 className="title">Tour Packages</h3>
            <p>We offer a variety of group (minimum 5 people) packages. Whether you've spent some summers together or this might be your first adventure, we've got the perfect vacation for you.</p>

            <ul className="grid">
                <li>
                    <i className={`fa fa-${props.icon1} fa-4x`}></i>
                    <h4>{props.title1}</h4>
                    <p>{props.description1}</p>
                </li>
                <li>
                    <i className={`fa fa-${props.icon2} fa-4x`}></i>
                    <h4>{props.title2}</h4>
                    <p>{props.description2}</p>
                </li>
                <li>
                    <i className={`fa fa-${props.icon3} fa-4x`}></i>
                    <h4>{props.title3}</h4>
                    <p>{props.description3}</p>
                </li>
                <li>
                    <i className={`fa fa-${props.icon4} fa-4x`}></i>
                    <h4>{props.title4}</h4>
                    <p>{props.description4}</p>
                </li>
            </ul>
        </section>
    );
}

export default Packages;
