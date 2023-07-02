import React, { useState } from 'react'

const ProductForm = () => {
    const[file,setFile] = useState([])
    const[addItem,setItem] = useState([])
    const{img,name,price,category,description,color} = addItem

    const gettingData = (e) => {
        setItem((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const gettingImage = (e) => {
        const selectedFiles = Array.from(e.target.files).slice(0, 5)
        const fileObjects = selectedFiles.map((file) => ({
          file: URL.createObjectURL(file),
          name: file.name,
        }));
        setFile(fileObjects)
      }

      const retrieveData = (e) => {
        e.preventDefault()
        console.log(addItem)
      }

    return (
        <div className='card p-3'>
            <form className="row g-3" onSubmit={retrieveData}>
                <div className='col-12 mb-3 d-flex flex-column'>
                    <label htmlFor="productImg" className='mb-3 fs-4 '>Images</label>
                    <div className='d-flex flex-row flex-wrap mb-3'>
                    {file.map((file, index) => (
                        file.length == 0 ? '' : <img key={index} src={file.file} alt={file.name} className='me-2 mb-2' width='300px' height='300px'  />
                    ))}
                    </div>
                    <input type="file" value={img}  name='img' id="productImg" multiple data-max_length="5" onChange={gettingImage}/>
                </div>  
                <div className="col-12 col-md-4 col-lg-4 mb-3">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="name" value={name} onChange={gettingData} name='name'  className="form-control" id="inputName"/>
                </div>
                <div className="col-12 col-md-4 col-lg-4 mb-3">
                    <label htmlFor="inputPrice" className="form-label">Price</label>
                    <input type="number" value={price} onChange={gettingData} name='price'  className="form-control" id="inputPrice"/>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="inputState" className="form-label">Category</label>
                    <select id="inputState" value={category} onChange={gettingData} name='category'  className="form-select">
                        <option selected>None</option>
                        <option value='computer'>Computers</option>
                        <option value='phones'>phones</option>
                        <option value='headsets'>headsets</option>
                    </select>
                </div>
                <div className="col-12 col-md-4 col-lg-4 mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea value={description} onChange={gettingData} name='description' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="col-2 mb-3">
                    <label htmlFor="inputCity" className="form-label">color</label>
                    <input type="color" value={color} onChange={gettingData} name='color' className="form-control" id="inputCity"/>
                </div>
                <div className="col-12 mb-3">
                    <button type="submit" className="btn btn-dark">Create</button>
                </div>
            </form>
        </div>
    )
}

export default ProductForm
