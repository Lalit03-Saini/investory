import { Link } from "react-router-dom";

const Client_profit_engagement = () => {
    return (
        <>
            <div className="container-fluid hpadding">
                <div className="header">
                    <div className="logo"><Link to="index.html"><img src="images/logo.png" alt="" /></Link></div>
                    <div className="wdropdown btn-group">
                        <div className="search">
                            <button type="button" className="sarrow dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" />
                            <input type="text" id="search" className="searchfilter" placeholder="ENGAGEMENTS" />
                            <div className="search_filter dropdown-menu">
                                <ul className="search-list">
                                    <li>
                                        <Link to="#">
                                            <strong>Home</strong> Acc Alias
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <strong>Investment</strong> Acc Alias
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <strong>Home</strong> Acc Alias
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <strong>Investment</strong> Acc Alias
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="client_nav">
                        <ul>
                            <li><Link to="#" data-bs-toggle="modal" data-bs-target="#logout">Jane Admin (Log Out)</Link></li>
                            <li><Link to="account_management.html">Account Management</Link></li>
                            <li><Link to="team_members.html">Team</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="container-fluid welcome">
                    <div className="welcome_left">
                        <div className="left_section ulogin">
                            <h1> Acc Alias</h1>
                            <div className="left_form">
                                <button type="button" data-bs-toggle="collapse" data-bs-target="#john1" aria-expanded="false" aria-controls="john1">John Middle Doe</button>
                                <div className="collapse" id="john1">
                                    <div className="card card-body">
                                        <p>johndoe@gmail.com</p>
                                        <p>+1 312523124</p>
                                    </div>
                                </div>
                                <button type="button" data-bs-toggle="collapse" data-bs-target="#john2" aria-expanded="false" aria-controls="john2">John Middle Doe</button>
                                <div className="collapse" id="john2">
                                    <div className="card card-body">
                                        <p>johndoe@gmail.com</p>
                                        <p>+1 312523124</p>
                                    </div>
                                </div>
                            </div>
                            <div className="statistics_wrap">
                                <button className="collapse_button" type="button" data-bs-toggle="collapse" data-bs-target="#area1" aria-expanded="true" aria-controls="area1">Statistics</button>
                                <div className="collapse show" id="area1">
                                    <ul>
                                        <li>Status</li>
                                        <li>Active</li>
                                        <li>Active Time</li>
                                        <li>27 days</li>
                                        <li>Your Last Activity</li>
                                        <li>7/4/2022 1:30 PM</li>
                                        <li>Last Update</li>
                                        <li>7/4/2022 1:30 PM</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="contact"> <Link to="#">Edit Client</Link> <Link to="#">Delete Client</Link></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 breadcamp_bar">
                            <div className="breadcamp">
                                <ul>
                                    <li><Link to="client_profile.html">JOHN MIDDLE CLIENT</Link></li>
                                    <li>ACC ALIAS</li>
                                </ul>
                            </div>
                            <div className="button_wrap accountpage">
                                <div className="search_account">
                                    <input type="text" className="form-control" placeholder="SEARCH ENGAGEMENTS" />
                                </div>
                                <div className="all_status">
                                    <select className="wide select" placeholder="ALL STATUSES" required>
                                        <option defaultValue >ALL STATUSES</option>
                                        <option>Value</option>
                                        <option>Value</option>
                                    </select>
                                </div>
                                <div className="all_status types">
                                    <select className="wide select" placeholder="ALL STATUSES" required>
                                        <option defaultValue >ALL STATUSES</option>
                                        <option>Value</option>
                                        <option>Value</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row account_product">
                                <div className="col-md-6 col-lg-4 col-xxl-3">
                                    <div className="slider_block">
                                        <p><img src="images/thumbnail1.png" alt="" /><img src="images/thumbnail1.png" alt="" /></p>
                                        <h3>Home</h3>
                                        <p>Active</p>
                                        <ol>
                                            <li>
                                                Type <strong>Rental</strong>
                                            </li>
                                            <li>
                                                AM <strong>Ben Manager</strong>
                                            </li>
                                        </ol>
                                        <p><Link to="client_view_engagement.html">View Engagement</Link></p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xxl-3">
                                    <div className="slider_block">
                                        <p><img src="images/thumbnail1.png" alt="" /><img src="images/thumbnail1.png" alt="" /></p>
                                        <h3>Home</h3>
                                        <p>Active</p>
                                        <ol>
                                            <li>
                                                Type <strong>Rental</strong>
                                            </li>
                                            <li>
                                                AM <strong>Ben Manager</strong>
                                            </li>
                                        </ol>
                                        <p><Link to="client_view_engagement.html">View Engagement</Link></p>	</div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xxl-3">
                                    <div className="slider_block">
                                        <p><img src="images/thumbnail1.png" alt="" /><img src="images/thumbnail1.png" alt="" /></p>
                                        <h3>Home</h3>
                                        <p>Active</p>
                                        <ol>
                                            <li>
                                                Type <strong>Rental</strong>
                                            </li>
                                            <li>
                                                AM <strong>Ben Manager</strong>
                                            </li>
                                        </ol>
                                        <p><Link to="client_view_engagement.html">View Engagement</Link></p>	</div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xxl-3">
                                    <div className="slider_block">
                                        <p><img src="images/thumbnail1.png" alt="" /><img src="images/thumbnail1.png" alt="" /></p>
                                        <h3>Home</h3>
                                        <p>Active</p>
                                        <ol>
                                            <li>
                                                Type <strong>Rental</strong>
                                            </li>
                                            <li>
                                                AM <strong>Ben Manager</strong>
                                            </li>
                                        </ol>
                                        <p><Link to="client_view_engagement.html">View Engagement</Link></p>	</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="collapse_bar">Collapse</button>
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
        </>
    )
};

export default Client_profit_engagement;