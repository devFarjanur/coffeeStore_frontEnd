// eslint-disable-next-line no-unused-vars
import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.coffee.value;
        const quantity = form.quantity.value;
        const supplire = form.supplire.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplire, taste, category, details, photo}


        console.log(newCoffee);

        // sent data to the server

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })

    }

    // https://ibb.co/g7BfpQv
    // https://i.ibb.co/nLGDVc3/Rectangle-16.png

    return (

        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Add a Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* from row name & quantity */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='coffee' className="input input-bordered w-full bg-[#ffff]" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' className="input input-bordered w-full bg-[#ffff]" />
                        </label>
                    </div>
                </div>
                {/* from row supplire & taste */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplire</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplire' className="input input-bordered w-full bg-[#ffff]" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='taste' className="input input-bordered w-full bg-[#ffff]" />
                        </label>
                    </div>
                </div>
                {/* from row category and details */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' className="input input-bordered w-full bg-[#ffff]" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' className="input input-bordered w-full bg-[#ffff]" />
                        </label>
                    </div>
                </div>
                {/* from row photo*/}
                <div className='mb-8'>
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' className="input input-bordered w-full bg-[#ffff]" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className='btn btn-block' />
            </form>
        </div>

    );
};

export default AddCoffee;