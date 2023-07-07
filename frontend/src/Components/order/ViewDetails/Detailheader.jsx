import { FormControl, Select, MenuItem} from "@mui/material";
const Detailheader = () => {
    return (
        
        <div className='d-flex flex-wrap justify-content-between gap-y-5 p-24'>
            <div>
                <h2 className="heading">HP Laptop</h2>
                <p className="mr-05">Hamza Sadiq</p>
                <p className="mr-05">xyz San Diego County, CA 91905, USA</p>
                <p className="mr-05">hamzasadiq@gmail.com</p>
                <p className="mr-05">12345678912</p>
            </div>
            <div>
                <div className="orderid--container">
                    <span style={{ fontWeight: "500" }}>Order ID # <span>123</span></span>
                </div>
                <div>
                    <label
                        htmlFor="status"
                        style={{
                            marginTop: "1rem",
                            fontSize: ".975rem",
                            fontWeight: '500',
                            marginBottom: ".5rem"
                        }}
                    >
                        Order Status
                    </label>
                    <FormControl fullWidth>
                        <Select
                            name="status"
                            id="status"
                            style={{ marginBottom: "12px", padding: '0' }}
                        >
                            <MenuItem value={'new'}>New</MenuItem>
                            <MenuItem value={'confirm'}>Confirmed</MenuItem>
                            <MenuItem value={'pack'}>Packed</MenuItem>
                            <MenuItem value={'ship'}>Shipped</MenuItem>
                            <MenuItem value={'delieve'}>Delivered</MenuItem>
                            <MenuItem value={'pending'}>Pending</MenuItem>
                            <MenuItem value={'cancel'}>Cancelled</MenuItem>
                            <MenuItem value={'fail'}>Failed</MenuItem>
                            <MenuItem value={'return'}>Returned</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

export default Detailheader
