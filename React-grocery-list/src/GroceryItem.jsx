import PropTypes from 'prop-types'
export default function GroceryItem (props) {
    return(
        <>
        <div className="groceryitem">
            <p className="itemname">{props.name} </p>
            <p className="itemprice">(${props.price})</p>
        </div>
        </>
    )
}

GroceryItem.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string
}