import 'bootstrap/dist/css/bootstrap.css';
import '../pages/style/Addadmin.css';

const Addadmin = () => {
    return(
    <>
     <div className='container-fluid'>
<div className='row'>


<div className='col-6 lg-6 sm-3'>
    <form>
        <h1>
            Add New Admin
        </h1>
    <label class="col-sm-2 col-form-label">Nom</label>
   
      <input type="text" class="form-control"  placeholder="Nom" />
   


    <label  class="col-sm-2 col-form-label">Prenom</label>
   
      <input type="text" class="form-control"  placeholder="Prenom" />


      <label class="col-sm-2 col-form-label">Email</label>
   
      <input type="email" class="form-control"  placeholder="Email" />
      <label class="col-sm-2 col-form-label">Password</label>
   
      <input type="password" class="form-control"  placeholder="Password" />


      <label class="col-sm-2 col-form-label">Phone</label>
   
      <input type="tel" class="form-control"  placeholder="Phone" />


      <label class="col-sm-2 col-form-label">Date de naissance</label>
   
      <input type="date" class="form-control"  placeholder="Date de naissance" />


      <label class="col-sm-2 col-form-label">Niveau d'etude</label>


      <select class="form-select">
  <option selected>niveau d'etude</option>
  <option value="1">Bac</option>
  <option value="2">Bac+1</option>
  <option value="3">Bac+2</option>
  <option value="4">Bac+3</option>
  <option value="5">Bac+4</option>
</select>
<label class="col-sm-2 col-form-label">Role</label>


      <select class="form-select">
  <option selected>Role</option>
  <option value="1">Etudiant</option>
  <option value="2">Formateur</option>
  <option value="3">Entreprise</option>
</select>

      </form>
      </div>
  </div>
 
  </div>

</>
    )
};
export default Addadmin;

