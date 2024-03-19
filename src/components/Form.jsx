const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you for your 😍 trip?</h3>
            <select className="px-8">
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => <option value={num} key={num}>{num}</option>)}
                {/*Array.from is a method that creates new instance of an array which passes parameter to render  */}
            </select>
            <input className="indent-6" type="text" placeholder="Item..." />
            <button className="lg:px-12" type="submit">Add</button>
        </form>

    );
}

export default Form;

