import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"

const Client_profile = () => {
    const { user, isAuthenticatied } = useAuth0();
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
                <div className="container-fluid welcome clientprofile">
                    <div className="welcome_left">
                        <div className="left_section ulogin">
                            <h1>John Middle Client</h1>
                            <ul>
                                {isAuthenticatied &&
                                    <>
                                        <li>Email</li>
                                        <li>{user.email}</li>
                                        <li>Phone</li>
                                        <li>{user.mobile}</li>
                                        <li>WhatsApp</li>
                                        <li>{user.whatsappno}</li>
                                        <li>{user.timezone}</li>
                                        <li>CEST</li>
                                        <li>Client Activity</li>
                                        <li>7/4/2022 1:30 PM</li>
                                        <li>Last Update</li>
                                        <li>Now</li>
                                    </>
                                }
                            </ul>
                            <div className="contact"> <Link to="#">Edit Client</Link> <Link to="#">Delete Client</Link></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 breadcamp_bar">
                            <div className="breadcamp">
                                <ul>
                                    <li>JOHN MIDDLE CLIENT</li>
                                </ul>
                            </div>
                            <div className="button_wrap accountpage">
                                <div className="add_account"><Link to="#">Add Account</Link></div>
                                <div className="search_account">
                                    <input type="text" className="form-control" placeholder="SEARCH ACCOUNTS" />
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
                        <div className="col-12">
                            <div className="property_block">
                                <div className="property_left">
                                    <div className="btn-group pedit">
                                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> </button>
                                        <ol className="dropdown-menu">
                                            <li><Link to="#">Edit</Link></li>
                                            <li><Link to="#">Add Engagement</Link></li>
                                            <li><Link to="#">Delete</Link></li>
                                        </ol>
                                    </div>
                                    <h2>Acc Alias</h2>
                                    <p>Active</p>
                                    <div className="property_info">
                                        <button className="collapse_button" type="button" data-bs-toggle="collapse" data-bs-target="#area1" aria-expanded="true" aria-controls="area1">Account Information</button>
                                        <div className="collapse show" id="area1">
                                            <ul>
                                                <li>Active Time</li>
                                                <li>27 days</li>
                                                <li>Last Activity</li>
                                                <li>Today</li>
                                                <li>Offers Won</li>
                                                <li>3</li>
                                                <li>Offers lost</li>
                                                <li>1</li>
                                                <li>Properties Skipped</li>
                                                <li>6</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p><Link to="client_profile_engagement.html">View Account Page</Link></p>
                                </div>
                                <div className="property_right">
                                    <div id="spliders" className="splide">
                                        <div className="splide__track">
                                            <ul className="splide__list">
                                                <li className="splide__slide">
                                                    <div className="slider_block">
                                                        <p><img src="images/thumbnail1.png" alt="" /><img src="images/thumbnail1.png" alt="" /></p>
                                                        <h3>Acc Alias</h3>
                                                        <p>Active</p>
                                                        <ol>
                                                            <li>
                                                                Type <strong>Rental</strong>
                                                            </li>
                                                            <li>
                                                                AM <strong>Ben Manager</strong>
                                                            </li>
                                                        </ol>
                                                        <p><Link to="client_profile_engagement.html">View Engagement</Link></p>
                                                    </div>
                                                </li>
                                                <li className="splide__slide">
                                                    <div className="slider_block">
                                                        <p><img src="images/thumbnail1.png" alt="" /><img src="images/thumbnail1.png" alt="" /></p>
                                                        <h3>Acc Alias</h3>
                                                        <p>Active</p>
                                                        <ol>
                                                            <li>
                                                                Type <strong>Rental</strong>
                                                            </li>
                                                            <li>
                                                                AM <strong>Ben Manager</strong>
                                                            </li>
                                                        </ol>
                                                        <p><Link to="client_profile_engagement.html">View Engagement</Link></p>
                                                    </div>
                                                </li>
                                                <li className="splide__slide">
                                                    <div className="slider_block">
                                                        <p><img src="images/thumbnail1.png" alt="" /><img src="images/thumbnail1.png" alt="" /></p>
                                                        <h3>Acc Alias</h3>
                                                        <p>Active</p>
                                                        <ol>
                                                            <li>
                                                                Type <strong>Rental</strong>
                                                            </li>
                                                            <li>
                                                                AM <strong>Ben Manager</strong>
                                                            </li>
                                                        </ol>
                                                        <p><Link to="client_profile_engagement.html">View Engagement</Link></p>
                                                    </div>
                                                </li>
                                                <li className="splide__slide">
                                                    <div className="slider_block">
                                                        <p><img src="images/thumbnail1.png" alt="" /><img src="images/thumbnail1.png" alt="" /></p>
                                                        <h3>Acc Alias</h3>
                                                        <p>Active</p>
                                                        <ol>
                                                            <li>
                                                                Type <strong>Rental</strong>
                                                            </li>
                                                            <li>
                                                                AM <strong>Ben Manager</strong>
                                                            </li>
                                                        </ol>
                                                        <p><Link to="client_profile_engagement.html">View Engagement</Link></p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="property_block">
                                <div className="property_left">
                                    <div className="btn-group pedit">
                                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" />
                                        <ol className="dropdown-menu">
                                            <li><Link to="#">Edit</Link></li>
                                            <li><Link to="#">Add Engagement</Link></li>
                                            <li><Link to="#">Delete</Link></li>
                                        </ol>
                                    </div>
                                    <h2>Acc Alias</h2>
                                    <p>Active</p>
                                    <div className="property_info">
                                        <button className="collapse_button" type="button" data-bs-toggle="collapse" data-bs-target="#area2" aria-expanded="true" aria-controls="area2">Account Information</button>
                                        <div className="collapse show" id="area2">
                                            <ul>
                                                <li>Active Time</li>
                                                <li>27 days</li>
                                                <li>Last Activity</li>
                                                <li>Today</li>
                                                <li>Offers Won</li>
                                                <li>3</li>
                                                <li>Offers lost</li>
                                                <li>1</li>
                                                <li>Properties Skipped</li>
                                                <li>6</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p><Link to="client_profile_engagement.html">View Account Page</Link></p>
                                </div>
                                <div className="property_right">
                                    <div id="spliders" className="splide">
                                        <div className="splide__track">
                                            <ul className="splide__list">
                                                <li className="splide__slide">
                                                    <div className="slider_block">
                                                        <p><img src="images/thumbnail1.png" alt="" /><img src="images/thumbnail1.png" alt="" /></p>
                                                        <h3>Acc Alias</h3>
                                                        <p>Active</p>
                                                        <ol>
                                                            <li>
                                                                Type <strong>Rental</strong>
                                                            </li>
                                                            <li>
                                                                AM <strong>Ben Manager</strong>
                                                            </li>
                                                        </ol>
                                                        <p><Link to="client_profile_engagement.html">View Engagement</Link></p>
                                                    </div>
                                                </li>
                                                <li className="splide__slide">
                                                    <div className="slider_block">
                                                        <p><img src="images/thumbnail1.png" alt="" /><img src="images/thumbnail1.png" alt="" /></p>
                                                        <h3>Acc Alias</h3>
                                                        <p>Active</p>
                                                        <ol>
                                                            <li>
                                                                Type <strong>Rental</strong>
                                                            </li>
                                                            <li>
                                                                AM <strong>Ben Manager</strong>
                                                            </li>
                                                        </ol>
                                                        <p><Link to="client_profile_engagement.html">View Engagement</Link></p>
                                                    </div>
                                                </li>
                                                <li className="splide__slide">
                                                    <div className="slider_block">
                                                        <p><img src="images/thumbnail1.png" alt="" /><img src="images/thumbnail1.png" alt="" /></p>
                                                        <h3>Acc Alias</h3>
                                                        <p>Active</p>
                                                        <ol>
                                                            <li>
                                                                Type <strong>Rental</strong>
                                                            </li>
                                                            <li>
                                                                AM <strong>Ben Manager</strong>
                                                            </li>
                                                        </ol>
                                                        <p><Link to="client_profile_engagement.html">View Engagement</Link></p>
                                                    </div>
                                                </li>
                                                <li className="splide__slide">
                                                    <div className="slider_block">
                                                        <p><img src="images/thumbnail1.png" alt="" /><img src="images/thumbnail1.png" alt="" /></p>
                                                        <h3>Acc Alias</h3>
                                                        <p>Active</p>
                                                        <ol>
                                                            <li>
                                                                Type <strong>Rental</strong>
                                                            </li>
                                                            <li>
                                                                AM <strong>Ben Manager</strong>
                                                            </li>
                                                        </ol>
                                                        <p><Link to="client_profile_engagement.html">View Engagement</Link></p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
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
}

export default Client_profile;