
const InvoiceUpload = () => {
  return (
    <form className="row p-24">
        <div className="col-12 mb-3">
            <div>
                <label htmlFor="invoice" className="mb-3 fs-5 fw-bold">Invoice Upload:</label>
            </div>
            <input type="file" className="bank-input" />
        </div>
        <div className="col-12 mb-3">
            <button className="btn btn-dark">Upload</button>
        </div>
    </form>
  )
}

export default InvoiceUpload
