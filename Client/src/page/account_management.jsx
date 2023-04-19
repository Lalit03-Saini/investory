import { Link } from "react-router-dom";

const Account_management = () => {
  return (
    <>
      <div className="managements">
        <div className="container-fluid hpadding">
          <div className="header">
            <div className="logo"><Link to="#index.html"><img src="images/logo.png" alt="" /></Link></div>
            <div className="client_nav">
              <ul>
                <li><Link to="#" data-bs-toggle="modal" data-bs-target="#logout">Jane Admin (Log Out)</Link></li>
                <li className="active"><Link to="Account_management">Account Management</Link></li>
                <li><Link to="/Team_members">Team</Link></li>
              </ul>
            </div>
          </div>
          <div className="container-fluid welcome">
            <div className="row">
              <div className="col-12">
                <div className="datatable">
                  <ul className="nav nav-tabs" role="tablist">
                    <li>
                      <Link id="tab-1" href="#pane-1" className="active" data-bs-toggle="tab" role="tab">ACCOUNTS
                        (9)</Link>
                    </li>
                    <li>
                      <Link id="tab-2" href="#pane-2" className=" " data-bs-toggle="tab" role="tab">CLIENTS (3)</Link>
                    </li>
                    <li>
                      <Link id="tab-3" href="#pane-3" className=" " data-bs-toggle="tab" role="tab">ENGAGEMENTS
                        (6)</Link>
                    </li>
                  </ul>
                  <div id="content" className="tab-content" role="tablist">
                    <div id="pane-1" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-1">
                      <div className="card-header" role="tab" id="heading-1">
                        <Link data-bs-toggle="collapse" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1">ACCOUNTS (9)</Link>
                      </div>
                      <div id="collapse-1" className="collapse show" data-bs-parent="#content" role="tabpanel" aria-labelledby="heading-1">
                        <div className="card-body">
                          <div className="datable_top account_table">
                            <div className="search_account">
                              <input type="text" className="form-control" placeholder="SEARCH" />
                            </div>
                            <div className="button_wrap accountpage">
                              <div className="add_account"><Link to="#">Add Account</Link></div>
                              <div className="all_status">
                                <select className="wide select" placeholder="ALL STATUSES" required>
                                  <option defaultValue >ALL STATUSES</option>
                                  <option>Value</option>
                                  <option>Value</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="datatable_table account_table">
                            <table id="myTable">
                              <thead>
                                <tr>
                                  <th>Alias</th>
                                  <th>Members</th>
                                  <th>Engagements</th>
                                  <th>Last Activity</th>
                                  <th>Status</th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Account Alias</td>
                                  <td>2</td>
                                  <td>1</td>
                                  <td>Yesterday 1:30 PM</td>
                                  <td><button type="button" className="position active">Active</button></td>
                                  <td>
                                    <div className="btn-group pedit">
                                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      </button>
                                      <ol className="dropdown-menu">
                                        <li><Link to="#">Edit</Link></li>
                                        <li><Link to="#">Create Engagement</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#deletemember">Delete</Link>
                                        </li>
                                      </ol>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Account Alias</td>
                                  <td>2</td>
                                  <td>1</td>
                                  <td>Yesterday 1:30 PM</td>
                                  <td><button type="button" className="position pause">Paused</button>
                                  </td>
                                  <td>
                                    <div className="btn-group pedit">
                                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      </button>
                                      <ol className="dropdown-menu">
                                        <li><Link to="#">Edit</Link></li>
                                        <li><Link to="#">Create Engagement</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#deletemember">Delete</Link>
                                        </li>
                                      </ol>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Account Alias</td>
                                  <td>2</td>
                                  <td>1</td>
                                  <td>Yesterday 1:30 PM</td>
                                  <td><button type="button" className="position lost">Lost</button>
                                  </td>
                                  <td>
                                    <div className="btn-group pedit">
                                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      </button>
                                      <ol className="dropdown-menu">
                                        <li><Link to="#">Edit</Link></li>
                                        <li><Link to="#">Create Engagement</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#deletemember">Delete</Link>
                                        </li>
                                      </ol>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Account Alias</td>
                                  <td>2</td>
                                  <td>1</td>
                                  <td>Yesterday 1:30 PM</td>
                                  <td><button type="button" className="position inactive">Not
                                    Active</button></td>
                                  <td>
                                    <div className="btn-group pedit">
                                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      </button>
                                      <ol className="dropdown-menu">
                                        <li><Link to="#">Edit</Link></li>
                                        <li><Link to="#">Create Engagement</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#deletemember">Delete</Link>
                                        </li>
                                      </ol>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Account Alias</td>
                                  <td>2</td>
                                  <td>1</td>
                                  <td>Yesterday 1:30 PM</td>
                                  <td><button type="button" className="position inactive">Not
                                    Active</button></td>
                                  <td>
                                    <div className="btn-group pedit">
                                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      </button>
                                      <ol className="dropdown-menu">
                                        <li><Link to="#">Edit</Link></li>
                                        <li><Link to="#">Create Engagement</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#deletemember">Delete</Link>
                                        </li>
                                      </ol>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Account Alias</td>
                                  <td>2</td>
                                  <td>1</td>
                                  <td>Yesterday 1:30 PM</td>
                                  <td><button type="button" className="position inactive">Not
                                    Active</button></td>
                                  <td>
                                    <div className="btn-group pedit">
                                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      </button>
                                      <ol className="dropdown-menu">
                                        <li><Link to="#">Edit</Link></li>
                                        <li><Link to="#">Create Engagement</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#deletemember">Delete</Link>
                                        </li>
                                      </ol>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Account Alias</td>
                                  <td>2</td>
                                  <td>1</td>
                                  <td>Yesterday 1:30 PM</td>
                                  <td><button type="button" className="position inactive">Not
                                    Active</button></td>
                                  <td>
                                    <div className="btn-group pedit">
                                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      </button>
                                      <ol className="dropdown-menu">
                                        <li><Link to="#">Edit</Link></li>
                                        <li><Link to="#">Create Engagement</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#deletemember">Delete</Link>
                                        </li>
                                      </ol>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Account Alias</td>
                                  <td>2</td>
                                  <td>1</td>
                                  <td>Yesterday 1:30 PM</td>
                                  <td><button type="button" className="position inactive">Not
                                    Active</button></td>
                                  <td>
                                    <div className="btn-group pedit">
                                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      </button>
                                      <ol className="dropdown-menu">
                                        <li><Link to="#">Edit</Link></li>
                                        <li><Link to="#">Create Engagement</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#deletemember">Delete</Link>
                                        </li>
                                      </ol>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Account Alias</td>
                                  <td>2</td>
                                  <td>1</td>
                                  <td>Yesterday 1:30 PM</td>
                                  <td><button type="button" className="position inactive">Not
                                    Active</button></td>
                                  <td>
                                    <div className="btn-group pedit">
                                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      </button>
                                      <ol className="dropdown-menu">
                                        <li><Link to="#">Edit</Link></li>
                                        <li><Link to="#">Create Engagement</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#deletemember">Delete</Link>
                                        </li>
                                      </ol>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="pane-2" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-2">
                      <div className="card-header" role="tab" id="heading-2">
                        <Link data-bs-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">CLIENTS (3)</Link>
                      </div>
                      <div id="collapse-2" className="collapse" data-bs-parent="#content" role="tabpanel" aria-labelledby="heading-2">
                        <div className="card-body">
                          <div className="datable_top account_table">
                            <div className="search_account">
                              <input type="text" className="form-control" placeholder="SEARCH Client" />
                            </div>
                            <div className="button_wrap accountpage">
                              <div className="add_account"><Link to="#" data-bs-toggle="modal" data-bs-target="#editprofile">Add Client</Link></div>
                            </div>
                          </div>
                          <div className="datatable_table clients_table">
                            <table id="myTable2">
                              <thead>
                                <tr>
                                  <th>First Name</th>
                                  <th>Last Name</th>
                                  <th>Mail</th>
                                  <th>Phone</th>
                                  <th>WhatsApp</th>
                                  <th>Timezone</th>
                                  <th>Last Activity</th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Admin</td>
                                  <td>no1</td>
                                  <td>john@mail.com</td>
                                  <td>+1 312523124</td>
                                  <td>+1 312523124</td>
                                  <td>CEST</td>
                                  <td>Yesterday 1:30 PM</td>
                                  <td>
                                    <div className="btn-group pedit">
                                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      </button>
                                      <ol className="dropdown-menu">
                                        <li><Link to="#">Edit</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#editprofile">Create
                                          Account</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#deletemember">Delete</Link>
                                        </li>
                                      </ol>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Admin</td>
                                  <td>no1</td>
                                  <td>john@mail.com</td>
                                  <td>+1 312523124</td>
                                  <td>+1 312523124</td>
                                  <td>CEST</td>
                                  <td>Yesterday 1:30 PM</td>
                                  <td>
                                    <div className="btn-group pedit">
                                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      </button>
                                      <ol className="dropdown-menu">
                                        <li><Link to="#">Edit</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#editprofile">Create
                                          Account</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#deletemember">Delete</Link>
                                        </li>
                                      </ol>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Admin</td>
                                  <td>no1</td>
                                  <td>john@mail.com</td>
                                  <td>+1 312523124</td>
                                  <td>+1 312523124</td>
                                  <td>CEST</td>
                                  <td>Yesterday 1:30 PM</td>
                                  <td>
                                    <div className="btn-group pedit">
                                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      </button>
                                      <ol className="dropdown-menu">
                                        <li><Link to="#">Edit</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#editprofile">Create
                                          Account</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#deletemember">Delete</Link>
                                        </li>
                                      </ol>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="pane-3" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-3">
                      <div className="card-header" role="tab" id="heading-3">
                        <Link data-bs-toggle="collapse" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3">ENGAGEMENTS (6)</Link>
                      </div>
                      <div id="collapse-3" className="collapse" data-bs-parent="#content" role="tabpanel" aria-labelledby="heading-3">
                        <div className="card-body">
                          <div className="datable_top engagement_table">
                            <div className="search_account">
                              <input type="text" className="form-control" placeholder="SEARCH" />
                            </div>
                            <div className="button_wrap accountpage">
                              <div className="add_account"><Link to="#">Add Engagement</Link></div>
                              <div className="all_status">
                                <select className="wide select" placeholder="ALL STATUSES" required>
                                  <option defaultValue >ALL STATUSES</option>
                                  <option>Value</option>
                                  <option>Value</option>
                                </select>
                              </div>
                              <div className="all_status">
                                <select className="wide select" placeholder="ALL STATUSES" required>
                                  <option defaultValue >ALL STATUSES</option>
                                  <option>Value</option>
                                  <option>Value</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="datatable_table engagement_table">
                            <table id="myTable3">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Parties</th>
                                  <th>Type</th>
                                  <th>AM</th>
                                  <th>Status</th>
                                  <th>Last Activity</th>
                                  <th> </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Investment</td>
                                  <td>Acc Alias<br />JOHN DOE, JANE DOE</td>
                                  <td>Rental</td>
                                  <td>Ben Manager</td>
                                  <td><button type="button" className="position active">Active</button></td>
                                  <td>Yesterday 1:30 PM</td>
                                  <td>
                                    <div className="btn-group pedit">
                                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      </button>
                                      <ol className="dropdown-menu">
                                        <li><Link to="#">Edit</Link></li>
                                        <li><Link to="#">Add Property</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#deletemember">Delete</Link>
                                        </li>
                                      </ol>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Investment</td>
                                  <td>Acc Alias<br />JOHN DOE, JANE DOE</td>
                                  <td>Rental</td>
                                  <td>Ben Manager</td>
                                  <td><button type="button" className="position active">Active</button></td>
                                  <td>Yesterday 1:30 PM</td>
                                  <td>
                                    <div className="btn-group pedit">
                                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      </button>
                                      <ol className="dropdown-menu">
                                        <li><Link to="#">Edit</Link></li>
                                        <li><Link to="#">Add Property</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#deletemember">Delete</Link>
                                        </li>
                                      </ol>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Investment</td>
                                  <td>Acc Alias<br />JOHN DOE, JANE DOE</td>
                                  <td>Rental</td>
                                  <td>Ben Manager</td>
                                  <td><button type="button" className="position active">Active</button></td>
                                  <td>Yesterday 1:30 PM</td>
                                  <td>
                                    <div className="btn-group pedit">
                                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      </button>
                                      <ol className="dropdown-menu">
                                        <li><Link to="#">Edit</Link></li>
                                        <li><Link to="#">Add Property</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#deletemember">Delete</Link>
                                        </li>
                                      </ol>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Investment</td>
                                  <td>Acc Alias<br />JOHN DOE, JANE DOE</td>
                                  <td>Rental</td>
                                  <td>Ben Manager</td>
                                  <td><button type="button" className="position active">Active</button></td>
                                  <td>Yesterday 1:30 PM</td>
                                  <td>
                                    <div className="btn-group pedit">
                                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      </button>
                                      <ol className="dropdown-menu">
                                        <li><Link to="#">Edit</Link></li>
                                        <li><Link to="#">Add Property</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#deletemember">Delete</Link>
                                        </li>
                                      </ol>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Investment</td>
                                  <td>Acc Alias<br />JOHN DOE, JANE DOE</td>
                                  <td>Rental</td>
                                  <td>Ben Manager</td>
                                  <td><button type="button" className="position pending">Pending</button></td>
                                  <td>Yesterday 1:30 PM</td>
                                  <td>
                                    <div className="btn-group pedit">
                                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      </button>
                                      <ol className="dropdown-menu">
                                        <li><Link to="#">Edit</Link></li>
                                        <li><Link to="#">Add Property</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#deletemember">Delete</Link>
                                        </li>
                                      </ol>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Investment</td>
                                  <td>Acc Alias<br />JOHN DOE, JANE DOE</td>
                                  <td>Rental</td>
                                  <td>Ben Manager</td>
                                  <td><button type="button" className="position active">Active</button></td>
                                  <td>Yesterday 1:30 PM</td>
                                  <td>
                                    <div className="btn-group pedit">
                                      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      </button>
                                      <ol className="dropdown-menu">
                                        <li><Link to="#">Edit</Link></li>
                                        <li><Link to="#">Add Property</Link></li>
                                        <li><Link to="#" data-bs-toggle="modal" data-bs-target="#deletemember">Delete</Link>
                                        </li>
                                      </ol>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
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
                <p>Add Client</p>
                <div className="contact_form">
                  <form className="needs-validation" noValidate>
                    <div className="form-group">
                      <label>FIRST NAME</label>
                      <input type="text" className="form-control" placeholder="FIRST NAME" defaultValue required />
                    </div>
                    <div className="form-group">
                      <label>MIDDLE NAME (OPTIONAL)</label>
                      <input type="text" className="form-control" placeholder="MIDDLE NAME (OPTIONAL)" />
                    </div>
                    <div className="form-group">
                      <label>LAST NAME</label>
                      <input type="text" className="form-control" placeholder="LAST NAME" defaultValue required />
                    </div>
                    <div className="form-group">
                      <label>TIMEZONE</label>
                      <select className="wide select" placeholder=" " required>
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
                      <input type="tel" className="form-control" placeholder="PHONE NUMBER" defaultValue required />
                    </div>
                    <div className="form-group">
                      <label>EMAIL</label>
                      <input type="email" className="form-control" placeholder="EMAIL" defaultValue required />
                    </div>
                    <div className="form-group">
                      <label>WHATSAPP (OPTIONAL)</label>
                      <input type="tel" className="form-control" placeholder="WHATSAPP NUMBER (OPTIONAL)" />
                    </div>
                    <div className="form-group checkbox">
                      <label><input type="checkbox" /><span /> Same as phone number</label>
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
                <p>Delete Account?</p>
                <p>Are you sure you want to delete <strong>Account Alias?</strong></p>
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
                  <form className="needs-validation" noValidate>
                    <div className="form-group">
                      <label>FIRST NAME</label>
                      <input type="text" className="form-control" placeholder="FIRST NAME" defaultValue required />
                    </div>
                    <div className="form-group">
                      <label>LAST NAME</label>
                      <input type="text" className="form-control" placeholder="LAST NAME" defaultValue required />
                    </div>
                    <div className="form-group">
                      <label>EMAIL</label>
                      <input type="email" className="form-control" placeholder="EMAIL" defaultValue required />
                    </div>
                    <div className="form-group">
                      <label>PHONE NUMBER</label>
                      <input type="tel" className="form-control" placeholder="PHONE NUMBER" defaultValue required />
                    </div>
                    <div className="form-group">
                      <label>ROLE</label>
                      <select className="wide select" placeholder=" " reqired>
                        <option>GMT +6</option>
                        <option>GMT +6</option>
                        <option>GMT +6</option>
                        <option>GMT +6</option>
                        <option>GMT +6</option>
                        <option>GMT +6</option>
                        <option>GMT +6</option>
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
                <p> Client Added</p>
                <p>A New Investory account had been created, and the invitations is sent to the
                  <strong>johndoe@mail.com</strong></p>
                <p><Link to="#" data-bs-target="#editprofile" data-bs-toggle="modal">Add another client</Link> <button type="button" data-bs-dismiss="modal" aria-label="Close">Close</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Account_management;