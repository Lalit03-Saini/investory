import { Link } from "react-router-dom";

const View_engagement = () => {
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
                    <div className="btn-group username">
                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Jane Client</button>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#editprofile">Edit Profile</Link>
                            </li>
                            <li>
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#logout">Log Out</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="btn-group forcart">
                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i>3</i></button>
                        <ul className="dropdown-menu">
                            <li>
                                <p><strong>New Property</strong> <i>Yesterday 3:13 PM</i></p>
                                <p>New property is added to the “Investment” engagement.</p>
                            </li>
                            <li>
                                <p><strong>New Property</strong> <i>Yesterday 3:13 PM</i></p>
                                <p>New property is added to the “Investment” engagement.</p>
                            </li>
                            <li>
                                <p><strong>New Property</strong> <i>Yesterday 3:13 PM</i></p>
                                <p>New property is added to the “Investment” engagement.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container-fluid welcome">
                    <div className="welcome_left">
                        <div className="left_section ulogin">
                            <h1> Acc Alias</h1>
                            <ol>
                                <li>
                                    Type <strong>Rental</strong>
                                </li>
                                <li>
                                    AM <strong>Ben Manager</strong>
                                </li>
                            </ol>
                            <div className="left_form">
                                <input type="text" className="form-control" placeholder="John Middle Doe" />
                                <input type="text" className="form-control" placeholder="John Doe" />
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
                            <div className="contact"><Link to="#">Contact Us</Link></div>
                        </div>
                    </div>
                    <div className="row acmanage">
                        <div className="col-12 breadcamp_bar">
                            <div className="breadcamp">
                                <ul>
                                    <li><Link to="accounts.html">ACCOUNTS</Link></li>
                                    <li><Link to="accounts_page.html">ACC ALIAS</Link></li>
                                    <li>ENGAGEMENT NAME</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="add_account"><Link to="/Add_property">Add Property</Link></div>
                            <ul className="nav nav-tabs" role="tablist">
                                <li><Link id="tab-1" to="#pane-1" className="active" data-bs-toggle="tab" role="tab">PENDING (4)</Link></li>
                                <li><Link id="tab-2" to="#pane-2" className=" " data-bs-toggle="tab" role="tab">APPROVED (3)</Link></li>
                                <li><Link id="tab-3" to="#pane-3" className=" " data-bs-toggle="tab" role="tab">Won (6)</Link></li>
                                <li><Link id="tab-4" to="#pane-4" className=" " data-bs-toggle="tab" role="tab">Submitted (4)</Link></li>
                                <li><Link id="tab-5" to="#pane-5" className=" " data-bs-toggle="tab" role="tab">SKIPPED (6)</Link></li>
                                <li><Link id="tab-6" to="#pane-6" className=" " data-bs-toggle="tab" role="tab">lost (6)</Link></li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <div id="content" className="tab-content" role="tablist">
                                <div id="pane-1" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-1">
                                    <div className="card-header" role="tab" id="heading-1">
                                        <Link data-bs-toggle="collapse" to="#collapse-1" aria-expanded="true" aria-controls="collapse-1">PENDING (4)</Link>
                                    </div>
                                    <div id="collapse-1" className="collapse show" data-bs-parent="#content" role="tabpanel" aria-labelledby="heading-1">
                                        <div className="card-body">
                                            <button type="button" className="map_view categories1">Map View</button>
                                            <button className="ptootltip">2 new properties were added since your last login!</button>
                                            <div className="button_wrap">
                                                <div className="all_status">
                                                    <select className="wide select" placeholder="SORT BY: PRICE" required>
                                                        <option>High to Low</option>
                                                        <option>Low to High</option>
                                                    </select>
                                                </div>
                                                <div className="info_display">
                                                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">INFO TO DISPLAY </button>
                                                    <ol className="dropdown-menu">
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
                                            <div className="engagement_left">
                                                <div className="row account_product newmanage">
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <div>
                                                                <i className="star"><img src="images/star.svg" alt="" /></i>
                                                                <i className="new">New</i>
                                                                <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            </div>
                                                            <div>
                                                                <h3>1102 Middle Brook Dr</h3>
                                                                <p><button type="button" className="position2 pause">Pending</button></p>
                                                                <ol>
                                                                    <li>Price <strong>$441,000</strong></li>									<li>Out of pocket <strong>$143,230</strong></li>
                                                                    <li>Gains <strong>$19,001</strong></li>
                                                                </ol>
                                                                <p><Link to="/View_property">View Property</Link></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <div>
                                                                <i className="star"><img src="images/star_hover.svg" alt="" /></i>
                                                                <i className="new">New</i>
                                                                <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            </div>
                                                            <div>
                                                                <h3>1102 Middle Brook Dr</h3>
                                                                <p><button type="button" className="position2 pause">Pending</button></p>
                                                                <ol>
                                                                    <li>Price <strong>$441,000</strong></li>									
                                                                    <li>Out of pocket <strong>$143,230</strong></li>
                                                                    <li>Gains <strong>$19,001</strong></li>
                                                                </ol>
                                                                <p><Link to="/View_property">View Property</Link></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <div>
                                                                <i className="star"><img src="images/star.svg" alt="" /></i>
                                                                <i className="new">New</i>
                                                                <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            </div>
                                                            <div>
                                                                <h3>1102 Middle Brook Dr</h3>
                                                                <p><button type="button" className="position2 pause">Pending</button></p>
                                                                <ol>
                                                                    <li>Price <strong>$441,000</strong></li>									
                                                                    <li>Out of pocket <strong>$143,230</strong></li>
                                                                    <li>Gains <strong>$19,001</strong></li>
                                                                </ol>
                                                                <p><Link to="/View_property">View Property</Link></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <div>
                                                                <i className="star"><img src="images/star.svg" alt="" /></i>
                                                                <i className="new">New</i>
                                                                <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            </div>
                                                            <div>
                                                                <h3>1102 Middle Brook Dr</h3>
                                                                <p><button type="button" className="position2 pause">Pending</button></p>
                                                                <ol>
                                                                    <li>Price <strong>$441,000</strong></li>									
                                                                    <li>Out of pocket <strong>$143,230</strong></li>
                                                                    <li>Gains <strong>$19,001</strong></li>
                                                                </ol>
                                                                <p><Link to="/View_property">View Property</Link></p>
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
                                <div id="pane-2" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-2">
                                    <div className="card-header" role="tab" id="heading-2">
                                        <Link data-bs-toggle="collapse" to="#collapse-2" aria-expanded="false" aria-controls="collapse-2">APPROVED (3)</Link>
                                    </div>
                                    <div id="collapse-2" className="collapse" data-bs-parent="#content" role="tabpanel" aria-labelledby="heading-2">
                                        <div className="card-body">
                                            <button type="button" className="map_view categories2">Map View</button>
                                            <button className="ptootltip">2 new properties were added since your last login!</button>
                                            <div className="button_wrap">
                                                <div className="all_status">
                                                    <select className="wide select" placeholder="SORT BY: PRICE" required>
                                                        <option>High to Low</option>
                                                        <option>Low to High</option>
                                                    </select>
                                                </div>
                                                <div className="info_display">
                                                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">INFO TO DISPLAY </button>
                                                    <ol className="dropdown-menu">
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
                                            <div className="engagement_left">
                                                <div className="row account_product newmanage">
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 active">Active</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 active">Active</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 active">Active</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="engagement_right">
                                                <img src="images/map.png" alt="" /> </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="pane-3" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-3">
                                    <div className="card-header" role="tab" id="heading-3">
                                        <Link data-bs-toggle="collapse" to="#collapse-3" aria-expanded="false" aria-controls="collapse-3">WON (6)</Link>
                                    </div>
                                    <div id="collapse-3" className="collapse" data-bs-parent="#content" role="tabpanel" aria-labelledby="heading-3">
                                        <div className="card-body">
                                            <button type="button" className="map_view categories3">Map View</button>
                                            <button className="ptootltip">2 new properties were added since your last login!</button>
                                            <div className="button_wrap">
                                                <div className="all_status">
                                                    <select className="wide select" placeholder="SORT BY: PRICE" required>
                                                        <option>High to Low</option>
                                                        <option>Low to High</option>
                                                    </select>
                                                </div>
                                                <div className="info_display">
                                                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">INFO TO DISPLAY </button>
                                                    <ol className="dropdown-menu">
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
                                            <div className="engagement_left">
                                                <div className="row account_product newmanage">
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 active">Active</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 active">Active</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 active">Active</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star_hover.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 active">Active</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star_hover.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 active">Active</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star_hover.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 active">Active</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="engagement_right">
                                                <img src="images/map.png" alt="" /> </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="pane-4" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-4">
                                    <div className="card-header" role="tab" id="heading-4">
                                        <Link data-bs-toggle="collapse" to="#collapse-4" aria-expanded="false" aria-controls="collapse-4">SUBMITTED (1)</Link>
                                    </div>
                                    <div id="collapse-4" className="collapse" data-bs-parent="#content" role="tabpanel" aria-labelledby="heading-4">
                                        <div className="card-body">
                                            <button type="button" className="map_view categories4">Map View</button>
                                            <button className="ptootltip">2 new properties were added since your last login!</button>
                                            <div className="button_wrap">
                                                <div className="all_status">
                                                    <select className="wide select" placeholder="SORT BY: PRICE" required>
                                                        <option>High to Low</option>
                                                        <option>Low to High</option>
                                                    </select>
                                                </div>
                                                <div className="info_display">
                                                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">INFO TO DISPLAY </button>
                                                    <ol className="dropdown-menu">
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
                                            <div className="engagement_left">
                                                <div className="row account_product newmanage">
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 pending">Pending</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="engagement_right">
                                                <img src="images/map.png" alt="" /> </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="pane-5" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-5">
                                    <div className="card-header" role="tab" id="heading-5">
                                        <Link data-bs-toggle="collapse" to="#collapse-5" aria-expanded="false" aria-controls="collapse-5">SKIPPED (6)</Link>
                                    </div>
                                    <div id="collapse-5" className="collapse" data-bs-parent="#content" role="tabpanel" aria-labelledby="heading-5">
                                        <div className="card-body">
                                            <button type="button" className="map_view categories5">Map View</button>
                                            <button className="ptootltip">2 new properties were added since your last login!</button>
                                            <div className="button_wrap">
                                                <div className="all_status">
                                                    <select className="wide select" placeholder="SORT BY: PRICE" required>
                                                        <option>High to Low</option>
                                                        <option>Low to High</option>
                                                    </select>
                                                </div>
                                                <div className="info_display">
                                                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">INFO TO DISPLAY </button>
                                                    <ol className="dropdown-menu">
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
                                            <div className="engagement_left">
                                                <div className="row account_product newmanage">
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 inactive">Skipped</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 inactive">Skipped</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 inactive">Skipped</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star_hover.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 inactive">Skipped</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star_hover.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 inactive">Skipped</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star_hover.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 inactive">Skipped</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="engagement_right">
                                                <img src="images/map.png" alt="" /> </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="pane-6" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-6">
                                    <div className="card-header" role="tab" id="heading-6">
                                        <Link data-bs-toggle="collapse" to="#collapse-6" aria-expanded="false" aria-controls="collapse-6">LOST (6)</Link>
                                    </div>
                                    <div id="collapse-6" className="collapse" data-bs-parent="#content" role="tabpanel" aria-labelledby="heading-6">
                                        <div className="card-body">
                                            <button type="button" className="map_view categories6">Map View</button>
                                            <button className="ptootltip">2 new properties were added since your last login!</button>
                                            <div className="button_wrap">
                                                <div className="all_status">
                                                    <select className="wide select" placeholder="SORT BY: PRICE" required>
                                                        <option>High to Low</option>
                                                        <option>Low to High</option>
                                                    </select>
                                                </div>
                                                <div className="info_display">
                                                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">INFO TO DISPLAY </button>
                                                    <ol className="dropdown-menu">
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
                                            <div className="engagement_left">
                                                <div className="row account_product newmanage">
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 lost">Lost</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 lost">Lost</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 lost">Lost</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star_hover.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 lost">Lost</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star_hover.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 lost">Lost</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4 col-xxl-3">
                                                        <div className="slider_block">
                                                            <i className="star"><img src="images/star_hover.svg" alt="" /></i>
                                                            <i className="new">New</i>
                                                            <p><img src="images/thumbnail3.png" alt="" /></p>
                                                            <h3>1102 Middle Brook Dr</h3>
                                                            <p><button type="button" className="position2 lost">Lost</button></p>
                                                            <ol>
                                                                <li>Price <strong>$441,000</strong></li>									
                                                                <li>Out of pocket <strong>$143,230</strong></li>
                                                                <li>Gains <strong>$19,001</strong></li>
                                                            </ol>
                                                            <p><Link to="/View_property">View Property</Link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="engagement_right">
                                                <img src="images/map.png" alt="" /> </div>
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
};

export default View_engagement;