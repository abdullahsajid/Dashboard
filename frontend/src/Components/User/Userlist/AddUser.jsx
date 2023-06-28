import Inputfield from "./Inputfield"
import { FormControl,Select, MenuItem } from "@mui/material"
const AddUser = () => {
  return (
    <div className="" style={{boxShadow:"none"}}>
        <div style={{padding:"24px"}}>
            <form action="">
                <div className="row">
                    <Inputfield type={'text'} name={'Username'}/>
                    <Inputfield type={'email'} name={'Email'}/>
                    <Inputfield type={'password'} name={'Password'}/>
                    <Inputfield type={'password'} name={'Confirm Password'}/>
                    <Inputfield type={'number'} name={'Mobile Number'}/>
                    <div className="col-12" style={{ padding: "12px" }}>
                        <label htmlFor="name" style={{ fontSize: ".875rem", fontWeight: '400', marginBottom: ".5rem" }}>Select Role</label>
                        <FormControl fullWidth>
                                        {/* <InputLabel id="demo-simple-select-label">Select item</InputLabel> */}
                            <Select
                                                // labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                            // value={age}
                                            // label="Name"
                            >
                                <MenuItem value={"Admin"}>Admin</MenuItem>
                                <MenuItem value={"User"}>User</MenuItem>
                                <MenuItem value={"Super Admin"}>Super Admin</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="navbtn primary--btn">Submit</button>
                        <button className="navbtn gray--btn">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddUser
