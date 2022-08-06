import PropTypes from 'prop-types'

function Button ({color, name, onAdd}) {
    return (
        <button className="btn" style={{background: color}} onClick={onAdd}>{name}</button>
    )
}

Button.defaultProps = {
    color: "green",
    name: 'Default'
}

Button.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string
}

export default Button