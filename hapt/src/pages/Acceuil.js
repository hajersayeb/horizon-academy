import '../pages/style/Acceuil.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Link } from "react-router-dom";
import { faUserTie, faGraduationCap, faBriefcase, faPersonDress, faChalkboardUser, faUserGroup, faMoneyCheckDollar, faLaptopFile } from '@fortawesome/free-solid-svg-icons';
const Acceuil = () => {
    return(
        <>
        <div className='container'>
            <div className='row'>
<div className='col-3'>
<div className="card text-center bg-success-subtle">
<FontAwesomeIcon icon={faUserTie} />
  <div className="card-body">
    <h5 className="card-title">Add admin</h5>
    <p className="card-text">Exemple:student,Instructors,Team work,Admin</p>
    <Link to={'/admin'} className="btn btn-success btn-size">Add</Link>
  </div>
</div>
</div>
<div className='col-3'>
<div className="card text-center bg-success-subtle">
<FontAwesomeIcon icon={faGraduationCap} />
  <div className="card-body">
    <h5 className="card-title">Add students</h5>
    <p className="card-text">Exemple:student,Instructors,Team work,Admin</p>
    <Link to={'/students'} className="btn btn-success btn-size">Add</Link>
  </div>
</div>
</div>
<div className='col-3'>
<div className="card text-center bg-success-subtle">
<FontAwesomeIcon icon={faBriefcase} />
  <div className="card-body">
    <h5 className="card-title">Add Director</h5>
    <p className="card-text">Exemple:student,Instructors,Team work,Admin</p>
    <Link to={'/diretor'} className="btn btn-success btn-size">Add</Link>
  </div>
</div>
</div>
<div className='col-3'>
<div className="card text-center bg-success-subtle">
<FontAwesomeIcon icon={faPersonDress} />
  <div className="card-body">
    <h5 className="card-title">Add Assistant</h5>
    <p className="card-text">Exemple:student,Instructors,Team work,Admin</p>
    <a href="#" className="btn btn-success btn-size">Add</a>
  </div>
</div>
</div>
            </div>
            <br></br>
            <div className='row'>
<div className='col-3'>
<div className="card text-center bg-success-subtle">
<FontAwesomeIcon icon={faChalkboardUser} />
  <div className="card-body">
    <h5 className="card-title">Add Instructors</h5>
    <p className="card-text">Exemple:student,Instructors,Team work,Admin</p>
    <a href="#" className="btn btn-success btn-size">Add</a>
  </div>
</div>
</div>
<div className='col-3'>
<div className="card text-center bg-success-subtle">
<FontAwesomeIcon icon={faUserGroup} />
  <div className="card-body">
    <h5 className="card-title">Crud Groups</h5>
    <p className="card-text">Exemple:student,Instructors,Team work,Admin</p>
    <a href="#" className="btn btn-success btn-size">Add</a>
  </div>
</div>
</div>
<div className='col-3'>
<div className="card text-center bg-success-subtle">
<FontAwesomeIcon icon={faMoneyCheckDollar} />
  <div className="card-body">
    <h5 className="card-title">Crud Payments</h5>
    <p className="card-text">Exemple:student,Instructors,Team work,Admin</p>
    <a href="#" className="btn btn-success btn-size">Add</a>
  </div>
</div>
</div>
<div className='col-3'>
<div className="card text-center bg-success-subtle">
<FontAwesomeIcon icon={faLaptopFile} />
  <div className="card-body">
    <h5 className="card-title">Crud Formation</h5>
    <p className="card-text">Exemple:student,Instructors,Team work,Admin</p>
    <a href="#" className="btn btn-success btn-size">Add</a>
  </div>
</div>
</div>
            </div>
        </div>
        </>
    )
};
export default Acceuil;

