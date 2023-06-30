import Inputfield from "../User/Userlist/Inputfield"
const AddCategory = () => {
  return (
    <div style={{boxShadow:"none"}}>
        <div style={{padding:"24px"}}>
            <form action="">
                <div className="row">
                    <Inputfield type={'text'} name={'Category'}/>
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

export default AddCategory
