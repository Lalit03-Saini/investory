import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Team_member = () => {
    return (
        <>
            <div className="teammember">
                <div className="container-fluid hpadding">
                    <div className="header">
                        <div className="logo"></div><Link to="index.html"><img src="images/logo.png" style={{ height: "70px", width: "108px", marginLeft: "51px" }} alt="" /></Link></div>
                    <div className="client_nav" style={{ position: "fixed" }}>
                        <ul>
                            <li><Link to="#" data-bs-toggle="modal" data-bs-target="#logout">Jane Admin (Log Out)</Link></li>
                            <li><Link to="account_management.html">Account Management</Link></li>
                            <li className="active"><Link to="team_members.html">Team</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="container-fluid welcome clientprofile">
                    <div className="row">
                        <div className="col-12">
                            <h1>Team Members</h1>
                        </div>
                        <div className="col-12">
                            <div className="datatable">
                                <div className="datable_top">
                                    <div className="search_account">
                                        <input type="text" className="form-control" placeholder="SEARCH TEAM MEMBERS" />
                                    </div>
                                    <Link className="createmember" to="#" data-bs-toggle="modal" data-bs-target="#addmember">Create Member</Link>
                                </div>
                                <div className="datatable_table">
                                    <table className="table" id="myTable4">
                                        <thead>
                                            <tr>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Role</th>
                                                <th>Last Activity</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Admin</td>
                                                <td>do1</td>
                                                <td>admin@mail.com</td>
                                                <td>+1 312523</td>
                                                <td>Head of Sales</td>
                                                <td>Yesterday 1:30 PM</td>
                                                <td><button type="button" className="edit_row" /><button type="button" className="delete_row" data-bs-toggle="modal" data-bs-target="#deletemember" /></td>
                                            </tr>
                                            <tr>
                                                <td>Admin</td>
                                                <td>do1</td>
                                                <td>ddmin@mail.com</td>
                                                <td>+2 312523</td>
                                                <td>Head of Sales</td>
                                                <td>Yesterday 1:30 PM</td>
                                                <td><button type="button" className="edit_row" /><button type="button" className="delete_row" data-bs-toggle="modal" data-bs-target="#deletemember" /></td>
                                            </tr>
                                            <tr>
                                                <td>Admin</td>
                                                <td>no1</td>
                                                <td>admin@mail.com</td>
                                                <td>+1 312523</td>
                                                <td>Head of Sales</td>
                                                <td>Yesterday 1:30 PM</td>
                                                <td><button type="button" className="edit_row" /><button type="button" className="delete_row" data-bs-toggle="modal" data-bs-target="#deletemember" /></td>
                                            </tr>
                                            <tr>
                                                <td>Admin</td>
                                                <td>do1</td>
                                                <td>ddmin@mail.com</td>
                                                <td>+2 312523</td>
                                                <td>Head of Sales</td>
                                                <td>Yesterday 1:30 PM</td>
                                                <td><button type="button" className="edit_row" /><button type="button" className="delete_row" data-bs-toggle="modal" data-bs-target="#deletemember" /></td>
                                            </tr>
                                            <tr>
                                                <td>Admin</td>
                                                <td>no1</td>
                                                <td>admin@mail.com</td>
                                                <td>+1 312523</td>
                                                <td>Head of Sales</td>
                                                <td>Yesterday 1:30 PM</td>
                                                <td><button type="button" className="edit_row" /><button type="button" className="delete_row" data-bs-toggle="modal" data-bs-target="#deletemember" /></td>
                                            </tr>
                                            <tr>
                                                <td>Admin</td>
                                                <td>do1</td>
                                                <td>ddmin@mail.com</td>
                                                <td>+2 312523</td>
                                                <td>Head of Sales</td>
                                                <td>Yesterday 1:30 PM</td>
                                                <td><button type="button" className="edit_row" /><button type="button" className="delete_row" data-bs-toggle="modal" data-bs-target="#deletemember" /></td>
                                            </tr>
                                            <tr>
                                                <td>Admin</td>
                                                <td>no1</td>
                                                <td>admin@mail.com</td>
                                                <td>+1 312523</td>
                                                <td>Head of Sales</td>
                                                <td>Yesterday 1:30 PM</td>
                                                <td><button type="button" className="edit_row" /><button type="button" className="delete_row" data-bs-toggle="modal" data-bs-target="#deletemember" /></td>
                                            </tr>
                                            <tr>
                                                <td>Admin</td>
                                                <td>do1</td>
                                                <td>ddmin@mail.com</td>
                                                <td>+2 312523</td>
                                                <td>Head of Sales</td>
                                                <td>Yesterday 1:30 PM</td>
                                                <td><button type="button" className="edit_row" /><button type="button" className="delete_row" data-bs-toggle="modal" data-bs-target="#deletemember" /></td>
                                            </tr>
                                            <tr>
                                                <td>Admin</td>
                                                <td>no1</td>
                                                <td>admin@mail.com</td>
                                                <td>+1 312523</td>
                                                <td>Head of Sales</td>
                                                <td>Yesterday 1:30 PM</td>
                                                <td><button type="button" className="edit_row" /><button type="button" className="delete_row" data-bs-toggle="modal" data-bs-target="#deletemember" /></td>
                                            </tr>
                                            <tr>
                                                <td>Admin</td>
                                                <td>do1</td>
                                                <td>ddmin@mail.com</td>
                                                <td>+2 312523</td>
                                                <td>Head of Sales</td>
                                                <td>Yesterday 1:30 PM</td>
                                                <td><button type="button" className="edit_row" /><button type="button" className="delete_row" data-bs-toggle="modal" data-bs-target="#deletemember" /></td>
                                            </tr>
                                            <tr>
                                                <td>Admin</td>
                                                <td>no1</td>
                                                <td>admin@mail.com</td>
                                                <td>+1 312523</td>
                                                <td>Head of Sales</td>
                                                <td>Yesterday 1:30 PM</td>
                                                <td><button type="button" className="edit_row" /><button type="button" className="delete_row" data-bs-toggle="modal" data-bs-target="#deletemember" /></td>
                                            </tr>
                                            <tr>
                                                <td>Admin</td>
                                                <td>do1</td>
                                                <td>ddmin@mail.com</td>
                                                <td>+2 312523</td>
                                                <td>Head of Sales</td>
                                                <td>Yesterday 1:30 PM</td>
                                                <td><button type="button" className="edit_row" /><button type="button" className="delete_row" data-bs-toggle="modal" data-bs-target="#deletemember" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade editprofile" id="editprofile" tabIndex={-1} aria-labelledby="editprofileLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>Edit Profile</p>
                            <div className="contact_form">
                                <form className="needs-validation" noValidate>
                                    <div className="form-group">
                                        <label>FIRST NAME</label>
                                        <input type="text" className="form-control" placeholder="FIRST NAME" defaultValue="JOHN" required />
                                    </div>
                                    <div className="form-group">
                                        <label>MIDDLE NAME (OPTIONAL)</label>
                                        <input type="text" className="form-control" placeholder="MIDDLE NAME (OPTIONAL)" />
                                    </div>
                                    <div className="form-group">
                                        <label>LAST NAME</label>
                                        <input type="text" className="form-control" placeholder="LAST NAME" defaultValue="DOE" required />
                                    </div>
                                    <div className="form-group">
                                        <label>TIMEZONE</label>
                                        <select className="wide select" placeholder="EST" required>
                                            <option>GMT +6</option>
                                            <option>GMT +6</option>
                                            <option>GMT +6</option>
                                            <option>GMT +6</option>
                                            <option>GMT +6</option>
                                            <option>GMT +6</option>
                                            <option>GMT +6</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>PHONE NUMBER</label>
                                        <input type="tel" className="form-control" placeholder="PHONE NUMBER" defaultValue="+1 3126123" required />
                                    </div>
                                    <div className="form-group">
                                        <label>EMAIL</label>
                                        <input type="email" className="form-control" placeholder="EMAIL" defaultValue="JOHNDOE@GMAIL.COM" required />
                                    </div>
                                    <div className="form-group">
                                        <label>WHATSAPP (OPTIONAL)</label>
                                        <input type="tel" className="form-control" placeholder="WHATSAPP NUMBER (OPTIONAL)" />
                                    </div>
                                    <div className="form-group checkbox">
                                        <label><input type="checkbox" /><span /> Same as phone number</label>
                                    </div>
                                    <div className="form-group submit">
                                        <Link to="#" data-bs-dismiss="modal" aria-label="Close">Cancel</Link> <input type="submit" defaultValue="Save" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade logout" id="logout" tabIndex={-1} aria-labelledby="logoutLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>Are you sure you want to log out?</p>
                            <p><Link to="#" data-bs-dismiss="modal" aria-label="Close">Cancel</Link> <Link to="#">Log Out</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade deletemember" id="deletemember" tabIndex={-1} aria-labelledby="logoutLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>Delete Team Member?</p>
                            <p>Are you sure you want to delete <strong>John Doe</strong></p>
                            <p><Link to="#" data-bs-dismiss="modal" aria-label="Close">Cancel</Link> <button type="button" className="tdelete">Delete</button></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade editprofile addmember" id="addmember" tabIndex={-1} aria-labelledby="editprofileLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>Add Team Member</p>
                            <div className="contact_form">
                                <form className="needs-validation">
                                    <div className="form-group">
                                        <label>FIRST NAME</label>
                                        <input type="text" className="form-control" placeholder="FIRST NAME" required />
                                    </div>
                                    <div className="form-group">
                                        <label>LAST NAME</label>
                                        <input type="text" className="form-control" placeholder="LAST NAME" required />
                                    </div>
                                    <div className="form-group">
                                        <label>EMAIL</label>
                                        <input type="email" className="form-control" placeholder="EMAIL" required />
                                    </div>
                                    <div className="form-group">
                                        <label>PHONE NUMBER</label>
                                        <input type="tel" className="form-control" placeholder="PHONE NUMBER" required />
                                    </div>
                                    <div className="form-group">
                                        <label>ROLE</label>
                                        <select style={{ marginTop: "22px" }} className="wide select" placeholder=" " reqired="true" >
                                            <option>Admin</option>
                                            <option>Head of Sales</option>
                                            <option>User</option>
                                        </select>
                                    </div>
                                    <div className="form-group submit">
                                        <Link to="#" data-bs-dismiss="modal" aria-label="Close">Cancel</Link> <button type="button" data-bs-target="#addedmenber" data-bs-toggle="modal">Invite</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade addedmenber" id="addedmenber" tabIndex={-1} aria-labelledby="logoutLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p> Team Member Added?</p>
                            <p>A New Investory team member had been created, and the invitation is sent to the <strong>johndoe@mail.com</strong></p>
                            <p><Link to="#" data-bs-target="#addmember" data-bs-toggle="modal">Add another member</Link> <button type="button" data-bs-dismiss="modal" aria-label="Close">Close</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Team_member;


