import { useState } from "react";

// State is an internal data which owned by a component; meanwhile, props are external data which is passed from a parent component.

const Form = () => {

    const [description, setDescription] = useState("");

    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!description) return;

        const newItem = { description, quantity, packed: false, id: Date.now() }; {/* create new object with the values of description and quantity on the form */ }
        console.log(newItem)
        setDescription(""); {/* set the description to "" after submit */ }
        setQuantity(1); {/* set the quantity to 1 after submit */ }
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you for your 😍 trip?</h3>
            <select className="px-8" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {/* Number is a method that converts string to number */}
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => <option value={num} key={num}>{num}</option>)}
                {/*Array.from is a method that creates new instance of an array which passes parameter to render  */}
            </select>
            <input className="indent-6" type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className="lg:px-12">Add</button>
        </form>

    );
}

export default Form;

