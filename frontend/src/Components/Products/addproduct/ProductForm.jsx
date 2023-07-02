import React from 'react'

const ProductForm = () => {
    return (
        <div className='card p-3'>
            <form className="row g-3">
                <div className='col-12 mb-3 d-flex flex-column'>
                    <label htmlFor="productImg" className='mb-3 fs-4 '>Images</label>
                    <input type="file" id="productImg" multiple='' data-max_length="10"/>
                </div>  
                <div className="col-12 col-md-4 col-lg-4 mb-3">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="name" className="form-control" id="inputName"/>
                </div>
                <div className="col-12 col-md-4 col-lg-4 mb-3">
                    <label htmlFor="inputPrice" className="form-label">Price</label>
                    <input type="number" className="form-control" id="inputPrice"/>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="inputState" className="form-label">Category</label>
                    <select id="inputState" className="form-select">
                        <option selected>Computers</option>
                        <option>phones</option>
                        <option>headsets</option>
                    </select>
                </div>
                <div className="col-12 col-md-4 col-lg-4 mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="col-2 mb-3">
                    <label htmlFor="inputCity" className="form-label">color</label>
                    <input type="color" className="form-control" id="inputCity"/>
                </div>
                <div className="col-12 mb-3">
                    <button type="submit" className="btn btn-dark">Create</button>
                </div>
            </form>
        </div>
    )
}

export default ProductForm
