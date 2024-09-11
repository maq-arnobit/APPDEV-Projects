import PropTypes from 'prop-types'
export default function Body(props) {
    return(
        <div className="profile">
            <div className="leftside">
                <img src="src/assets/pic.png" alt="person.jpg"/>
            </div>
            <div className="rightside">
                <p>ID: <strong>{props.id}</strong></p>
                <p>NAME: <strong>{props.name}</strong></p>
                <p>AGE: <strong>{props.age}</strong></p>
                <p>ADDRESS: <strong>{props.address}</strong></p>
            </div>
        </div>
    )
}

Body.defaultProps = {
    id: 0,
    name: "Guest",
    address: "Somewhere",
    age: 0
}

Body.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    address: PropTypes.string,
    age: PropTypes.number
}