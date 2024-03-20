const itemRender = ({ item, onDelete }) => {
    return (
        <li>
            <span style={item.packed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDelete(item.id)}>❌</button>
        </li>
    );
}

export default itemRender;