import Button from "./Button"

function Header ({onAdd, addShow}) {
    return (
        <div className="header">
            <h1>Header</h1>
            <Button color={ addShow ? 'red' : 'green'} name={addShow ? 'Close' : 'Add'} onAdd={onAdd}/>
        </div>
    )
}

export default Header