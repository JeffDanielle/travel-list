import { useState } from 'react';
import itemData from '../data/itemData.jsx'
import Item from './ItemRender.jsx'

const PackingList = ({ items, onDelete, onCheck }) => {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === "input") {
        sortedItems = items
    } else if (sortBy === "description") {
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortBy === "packed") {
        sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    return (
        <div className="list" style={{ overflow: 'hidden' }}>
            <ul style={{ overflow: 'hidden' }}>
                {sortedItems.map((item) => {
                    return <Item key={item.id} item={item} onDelete={onDelete} onCheck={onCheck} />
                })}
            </ul>

            <div className="actions text-black">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
            </div>
        </div>
    );
}

export default PackingList;