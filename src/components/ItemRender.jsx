const itemRender = ({ item }) => {
    return (
        <li>
            <span style={item.packed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>
    );
}

export default itemRender;