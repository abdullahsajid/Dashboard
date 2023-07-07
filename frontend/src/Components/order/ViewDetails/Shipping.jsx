const Shipping = () => {
  return (
    <div className="p-24">
        <form className="row">
            <div className="col-12 mb-3">
                <h2>Shipping</h2>
            </div>
            <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div>
                    <label htmlFor="courier" className="mb-3 fs-5">Courier Name: </label>
                </div>
                <input type="text" name="courier" id="courier" className="bank-input w-100" />
            </div>
            <div className="col-12 col-md-4 col-lg-4 mb-3">
                <div>
                    <label htmlFor="awb" className="mb-3 fs-5">AWB No: </label>
                </div>
                <input type="number" name="awb" id="awb" className="bank-input w-100" />
            </div>
            <div className="col-12 mb-3">
                <div>
                    <label htmlFor="courierurl" className="mb-3 fs-5">Courier URL:  </label>
                </div>
                <input type="url" name="courierurl" id="courierurl" className="bank-input w-100" />
            </div>
            <div className="col-12 mb-3">
                <button type="submit" className="btn btn-dark">Add</button>
            </div>
        </form>
    </div>
  )
}

export default Shipping
