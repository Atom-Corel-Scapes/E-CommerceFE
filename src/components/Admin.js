import React from 'react';

function Admin() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const img = e.target.elements[0].value;
        const name = e.target.elements[1].value;
        const price = e.target.elements[2].value;
        console.log(img, name, price);
    }
    return (
        <div>
            {
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter product image url' required/>
                    <input type="text" placeholder='Enter product name' required/>
                    <input type="number" placeholder='Enter product price' required/>
                    <button>Submit</button>
                </form>
            }
        </div>
    )
}

export default Admin