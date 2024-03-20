const itemRender = ({ item, onDelete, onCheck }) => {
    return (
        <li>
            <input type="checkbox" value={item.packed} onChange={() => onCheck(item.id)} />
            <span style={item.packed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDelete(item.id)}>❌</button>
        </li>
    );
}

export default itemRender;