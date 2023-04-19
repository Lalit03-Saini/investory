import { Link } from "react-router-dom";

const Property_filter = () => {
    return (
        <>
            <div className="container-fluid hpadding">
                <div className="header">
                    <div className="logo"><Link to="index.html"><img src="images/logo.png" alt="" /></Link></div>
                    <div className="wdropdown btn-group">
                        <div className="search">
                            <button type="button" className="sarrow dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false" />
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
                            <li className="active"><Link to="add_property.html">All Properties</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="container-fluid welcome">
                    <div className="welcome_left">
                        <div className="left_section ulogin property_filter">
                            <div className="info_display">
                                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">INFO TO DISPLAY </button>
                                <div className="dropdown-menu">
                                    <ol>
                                        <li>
                                            <label>PRIMARY</label>
                                            <select className="wide select" placeholder="PRICE" required>
                                                <option>High to Low</option>
                                                <option>Low to High</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label>SECONDARY</label>
                                            <select className="wide select" placeholder="OUT OF POCKET" required>
                                                <option>High to Low</option>
                                                <option>Low to High</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label>TERTIARY</label>
                                            <select className="wide select" placeholder="OUT OF POCKET" required>
                                                <option>High to Low</option>
                                                <option>Low to High</option>
                                            </select>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <h1> Filter Properties</h1>
                            <div className="common_wrap">
                                <div className="range common" data-id={1}>
                                    <button type="button" className="delete_item" />
                                    <label>PRICE RANGE</label>
                                    <div className="all_status">
                                        <select className="wide select" placeholder="SORT BY: PRICE" required>
                                            <option>High to Low</option>
                                            <option>Low to High</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="range common" data-id={2}>
                                    <button type="button" className="delete_item" />
                                    <label>NUMBER OF BEDROOMS</label>
                                    <div className="all_status">
                                        <select className="wide select" placeholder="SORT BY: BEDROOM" required>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="range common" data-id={3}>
                                    <button type="button" className="delete_item" />
                                    <label>NUMBER OF BATHROOMS</label>
                                    <div className="all_status">
                                        <select className="wide select" placeholder="SORT BY: BATHROOM" required>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="range common" data-id={4}>
                                    <button type="button" className="delete_item" />
                                    <label>SQUARE FOOTAGE RANGE</label>
                                    <div className="all_status">
                                        <select className="wide select" placeholder="SORT BY: FOOTAGE" required>
                                            <option>High to Low</option>
                                            <option>Low to High</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="add_filter">
                                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Add Filter </button>
                                <div className="dropdown-menu">
                                    <ol>
                                        <li><label><input type="checkbox" data-target={1} /> <span /><strong>Price Range</strong></label></li>
                                        <li><label><input type="checkbox" data-target={2} /> <span /><strong>Number of Bedrooms</strong></label></li>
                                        <li><label><input type="checkbox" data-target={3} /> <span /><strong>Number of Bathrooms</strong></label></li>
                                        <li><label><input type="checkbox" data-target={4} /> <span /><strong>Square Footage Range</strong></label></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row acmanage filterpage">
                        <div className="col-12">
                            <div className="filtering_wrap">
                                <div className="add_account"><Link to="/Add_property" className="addbutton">Add Property</Link> <Link to="#" className="assignbutton">Assign</Link></div>
                                <div className="last_update">Last Updated 01/01/23</div>
                                <ul className="filtering">
                                    <li className="active" onclick="showAll()"><Link to="#">ALL (22)</Link></li>
                                    <li onclick="showCategory('category-1')"><Link to="#">UNASSIGNED (3)</Link></li>
                                    <li onclick="showCategory('category-2')"><Link to="#">ASSIGNED (19)</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="card-body">
                                <button type="button" className="map_view categories1">Map View</button>
                                <div className="engagement_left">
                                    <div className="row account_product newmanage">
                                        <div className="col-md-6 col-xl-4 col-xxl-3 category-1 item" data-id={1}>
                                            <div className="slider_block">
                                                <div>
                                                    <i className="star"><img src="images/star_hover.svg" alt="" /></i>
                                                    <i className="new">Not Assigned</i>
                                                    <p><img src="images/thumbnail3.png" alt="" /></p>
                                                </div>
                                                <div>
                                                    <h3>1102 Middle Brook Dr</h3>
                                                    <p><button type="button" className="position2 active">Active</button></p>
                                                    <ol>
                                                        <li>Price <strong>$441,000</strong></li>									
                                                        <li>Out of pocket <strong>$143,230</strong></li>
                                                        <li>Gains <strong>$19,001</strong></li>
                                                    </ol>
                                                    <div className="bottom_button">
                                                        <span><Link to="property_filter_view.html">View Property</Link></span>
                                                        <span className="vclient">
                                                            <label><input type="checkbox" className="checkbox" data-target={1} /> <i />Assign Property</label>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-4 col-xxl-3 category-1 item" data-id={2}>
                                            <div className="slider_block">
                                                <div>
                                                    <i className="star"><img src="images/star_hover.svg" alt="" /></i>
                                                    <i className="new">Not Assigned</i>
                                                    <p><img src="images/thumbnail3.png" alt="" /></p>
                                                </div>
                                                <div>
                                                    <h3>1102 Middle Brook Dr</h3>
                                                    <p><button type="button" className="position2 active">Active</button></p>
                                                    <ol>
                                                        <li>Price <strong>$441,000</strong></li>									<li>Out of pocket <strong>$143,230</strong></li>
                                                        <li>Gains <strong>$19,001</strong></li>
                                                    </ol>
                                                    <div className="bottom_button">
                                                        <span><Link to="property_filter_view.html">View Property</Link></span>
                                                        <span className="vclient">
                                                            <label><input type="checkbox" className="checkbox" data-target={2} /> <i />Assign Property</label>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-4 col-xxl-3 category-2 item">
                                            <div className="slider_block">
                                                <div>
                                                    <i className="star"><img src="images/star_hover.svg" alt="" /></i>
                                                    <p><img src="images/thumbnail3.png" alt="" /></p>
                                                </div>
                                                <div>
                                                    <h3>1102 Middle Brook Dr</h3>
                                                    <p><button type="button" className="position2 active">Active</button></p>
                                                    <ol>
                                                        <li>Price <strong>$441,000</strong></li>									
                                                        <li>Out of pocket <strong>$143,230</strong></li>
                                                        <li>Gains <strong>$19,001</strong></li>
                                                    </ol>
                                                    <div className="bottom_button">
                                                        <span><Link to="property_filter_view.html">View Property</Link></span>
                                                        <span className="vclient">
                                                            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="true">View Clients </button>
                                                            <div className="dropdown-menu">
                                                                <ul>
                                                                    <li><Link to="#">John Doe</Link></li>
                                                                    <li><Link to="#">Another Client</Link></li>
                                                                    <li><Link to="#">Client with quite a long name</Link></li>
                                                                    <li><Link to="#">Another Client</Link></li>
                                                                </ul>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-4 col-xxl-3 category-2 item">
                                            <div className="slider_block">
                                                <div>
                                                    <i className="star"><img src="images/star_hover.svg" alt="" /></i>
                                                    <p><img src="images/thumbnail3.png" alt="" /></p>
                                                </div>
                                                <div>
                                                    <h3>1102 Middle Brook Dr</h3>
                                                    <p><button type="button" className="position2 active">Active</button></p>
                                                    <ol>
                                                        <li>Price <strong>$441,000</strong></li>									
                                                        <li>Out of pocket <strong>$143,230</strong></li>
                                                        <li>Gains <strong>$19,001</strong></li>
                                                    </ol>
                                                    <div className="bottom_button">
                                                        <span><Link to="property_filter_view.html">View Property</Link></span>
                                                        <span className="vclient">
                                                            <label><input type="checkbox" className="checkbox" /> <i />Assign Property</label>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-4 col-xxl-3 category-2 item">
                                            <div className="slider_block">
                                                <div>
                                                    <i className="star"><img src="images/star_hover.svg" alt="" /></i>
                                                    <p><img src="images/thumbnail3.png" alt="" /></p>
                                                </div>
                                                <div>
                                                    <h3>1102 Middle Brook Dr</h3>
                                                    <p><button type="button" className="position2 active">Active</button></p>
                                                    <ol>
                                                        <li>Price <strong>$441,000</strong></li>									
                                                        <li>Out of pocket <strong>$143,230</strong></li>
                                                        <li>Gains <strong>$19,001</strong></li>
                                                    </ol>
                                                    <div className="bottom_button">
                                                        <span><Link to="property_filter_view.html">View Property</Link></span>
                                                        <span className="vclient">
                                                            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="true">View Clients </button>
                                                            <div className="dropdown-menu">
                                                                <ul>
                                                                    <li><Link to="#">John Doe</Link></li>
                                                                    <li><Link to="#">Another Client</Link></li>
                                                                    <li><Link to="#">Client with quite a long name</Link></li>
                                                                    <li><Link to="#">Another Client</Link></li>
                                                                </ul>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-4 col-xxl-3 category-2 item">
                                            <div className="slider_block">
                                                <div>
                                                    <i className="star"><img src="images/star_hover.svg" alt="" /></i>
                                                    <p><img src="images/thumbnail3.png" alt="" /></p>
                                                </div>
                                                <div>
                                                    <h3>1102 Middle Brook Dr</h3>
                                                    <p><button type="button" className="position2 active">Active</button></p>
                                                    <ol>
                                                        <li>Price <strong>$441,000</strong></li>									
                                                        <li>Out of pocket <strong>$143,230</strong></li>
                                                        <li>Gains <strong>$19,001</strong></li>
                                                    </ol>
                                                    <div className="bottom_button">
                                                        <span><Link to="property_filter_view.html">View Property</Link></span>
                                                        <span className="vclient">
                                                            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="true">View Clients </button>
                                                            <div className="dropdown-menu">
                                                                <ul>
                                                                    <li><Link to="#">John Doe</Link></li>
                                                                    <li><Link to="#">Another Client</Link></li>
                                                                    <li><Link to="#">Client with quite a long name</Link></li>
                                                                    <li><Link to="#">Another Client</Link></li>
                                                                </ul>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-4 col-xxl-3 category-2 item">
                                            <div className="slider_block">
                                                <div>
                                                    <i className="star"><img src="images/star_hover.svg" alt="" /></i>
                                                    <p><img src="images/thumbnail3.png" alt="" /></p>
                                                </div>
                                                <div>
                                                    <h3>1102 Middle Brook Dr</h3>
                                                    <p><button type="button" className="position2 active">Active</button></p>
                                                    <ol>
                                                        <li>Price <strong>$441,000</strong></li>									
                                                        <li>Out of pocket <strong>$143,230</strong></li>
                                                        <li>Gains <strong>$19,001</strong></li>
                                                    </ol>
                                                    <div className="bottom_button">
                                                        <span><Link to="property_filter_view.html">View Property</Link></span>
                                                        <span className="vclient">
                                                            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="true">View Clients </button>
                                                            <div className="dropdown-menu">
                                                                <ul>
                                                                    <li><Link to="#">John Doe</Link></li>
                                                                    <li><Link to="#">Another Client</Link></li>
                                                                    <li><Link to="#">Client with quite a long name</Link></li>
                                                                    <li><Link to="#">Another Client</Link></li>
                                                                </ul>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-4 col-xxl-3 category-2 item">
                                            <div className="slider_block">
                                                <div>
                                                    <i className="star"><img src="images/star_hover.svg" alt="" /></i>
                                                    <p><img src="images/thumbnail3.png" alt="" /></p>
                                                </div>
                                                <div>
                                                    <h3>1102 Middle Brook Dr</h3>
                                                    <p><button type="button" className="position2 active">Active</button></p>
                                                    <ol>
                                                        <li>Price <strong>$441,000</strong></li>									
                                                        <li>Out of pocket <strong>$143,230</strong></li>
                                                        <li>Gains <strong>$19,001</strong></li>
                                                    </ol>
                                                    <div className="bottom_button">
                                                        <span><Link to="property_filter_view.html">View Property</Link></span>
                                                        <span className="vclient">
                                                            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="true">View Clients </button>
                                                            <div className="dropdown-menu">
                                                                <ul>
                                                                    <li><Link to="#">John Doe</Link></li>
                                                                    <li><Link to="#">Another Client</Link></li>
                                                                    <li><Link to="#">Client with quite a long name</Link></li>
                                                                    <li><Link to="#">Another Client</Link></li>
                                                                </ul>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="engagement_right">
                                    <img src="images/map.png" alt="" /> </div>
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

export default Property_filter;