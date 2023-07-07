import Detailheader from "./Detailheader"
import InvoiceUpload from "./InvoiceUpload"
import OrdersTable from "./OrdersTable"
import Shipping from "./Shipping"
import TotalBill from "./TotalBill"

const ViewOrderDetail = () => {
    return (
        <div className="layout-content">
            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <Detailheader/>
                            <hr />
                            <Shipping/>
                            <hr />
                            <InvoiceUpload/>
                            <OrdersTable/>
                            <TotalBill/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewOrderDetail
