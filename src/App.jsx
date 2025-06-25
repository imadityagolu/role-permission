import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      {/* roles and permissions container */}
      <div className="container-fluid py-3 mx-auto">

        {/* header*/}
        <h4 className='py-2' style={{color:'rgb(11, 109, 237)'}}>Roles & Permissions</h4>

        {/* box */}
        <ul className="list-group">

        <li className="list-group-item p-2 px-4" style={{backgroundColor:'rgb(181, 184, 183)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>

          <div>Admin / Super Admin</div>

          <div style={{display:'flex', justifyContent:'space-around', gap:'20px', alignItems:'center'}}>

            <span style={{color:'green'}}>Assign All</span>

            <span style={{color:'rgb(213, 60, 60)'}}>Unassign All</span>
            
            <button type="button" className="btn btn-primary btn-sm">Save All</button>

          </div>

        </li>

        <li className="list-group-item">
        {/* user */}
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                Create User
              </label>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                Update User
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="form-check form-switch d-flex align-items-md-center">
              <input className="form-check-input d-flex align-items-md-center" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label d-flex align-items-md-center" for="checkNativeSwitch">
                Delete User
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                View User
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                View Own User
              </label>
              </div>
          </div>

        </div>
        </li>

        <li className="list-group-item">
        {/* role */}
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                Create Role
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                Update Role
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                Delete Role
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                View Role
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                View Own Role
              </label>
              </div>
          </div>

        </div>

        </li>

        <li className="list-group-item">
        {/* product */}
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                Create Product
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                Update Product
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                Delete Product
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                View Product
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                View Own Product
              </label>
              </div>
          </div>

        </div>

        </li>

        <li className="list-group-item"> 
        {/* order */}
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                Create Order
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                Update Order
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                Delete Order
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                View Order
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                View Own Order
              </label>
              </div>
          </div>

        </div>

        </li>

        <li className="list-group-item">
        {/* supplier */}
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                Create Supplier
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                Update Supplier
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                Delete Supplier
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                View Supplier
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                View Own Supplier
              </label>
              </div>
          </div>

        </div>

        </li>

        <li className="list-group-item">
        {/* report */}
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                Create Report
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                Update Report
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                Delete Report
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                View Report
              </label>
              </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
              <label className="form-check-label" for="checkNativeSwitch">
                View Own Report
              </label>
              </div>
          </div>

        </div>

        </li>

        </ul>

      </div>
    </>
  )
}

export default App
