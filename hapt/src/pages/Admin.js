import '../pages/style/Admin.css';
import {  Link } from "react-router-dom";
const Admin = () => {
    return(
    <>
   <div className="container-fluid">
    <div className="row">
        <div className="col-12">
            <h1>Admin list</h1>
            <Link to={'/addadmin'} className="btn btn-success"> Add new admin</Link>
            <table class="table align-middle mb-0 bg-white">
  <thead class="bg-light">
    <tr>
        <th>Image</th>
        <th>Id</th>
      <th>Name</th>
      <th>Title</th>
      <th>Status</th>
      <th>Delete</th>
      <th>Update</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/7.jpg"
              alt=""
              class="rounded-circle"
              />
        </div>
      </td>
      <td>1</td>
      <td><div class="ms-3">
            <p class="fw-bold mb-1">Sayeb Hajer</p>
            <p class="text-muted mb-0">hajersayeb@gmail.com</p>
          </div></td>
      <td>
        <p class="fw-normal mb-1">Software engineer</p>
        <p class="text-muted mb-0">IT department</p>
      </td>
     
      <td>
        <span class="badge badge-success rounded-pill d-inline">Active</span>
      </td>
      <td>Delete</td>
      <td>
        <button type="button" class="btn btn-link btn-sm btn-rounded">
          Edit
        </button>
      </td>
    </tr>
 
  </tbody>
</table>
        </div>
    </div>
   </div>
</>
    )
};
export default Admin;

