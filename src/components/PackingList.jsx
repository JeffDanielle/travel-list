import itemData from '../data/itemData.jsx'
import Item from './ItemRender.jsx'

const PackingList = ({ items }) => {
    return (
        <div className="list" style={{ overflow: 'hidden' }}>
            <ul style={{ overflow: 'hidden' }}>
                {items.map((item) => {
                    return <Item key={item.id} item={item} />
                })}
            </ul>
        </div>
    );
}

export default PackingList;