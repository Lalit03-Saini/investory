import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiError } from "react-icons/bi"

const Account_page = () => {
    const [data, setData] = useState({
        firstname: "",
        middlename: "",
        lastname: "",
        timezone: "",
        whatsappno: "",
        phonenumber: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8000/api/user/edit-user";
            const { data: res } = await axios.put(url, data);
            res.status(200).send({ message: "User created successfully,Wellcome" })
        }
        catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    }

    return (
        <>
            <div>
                <div className="container-fluid hpadding">
                    <div className="header">
                        <div className="logo"><Link to="/login"><img src="images/logo.png" alt="log" /></Link></div>
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
                        <div className="row">
                            <div className="col-12 breadcamp_bar">
                                <div className="breadcamp">
                                    <ul>
                                        <li><Link to="/Account">ACCOUNTS</Link></li>
                                        <li>ACC ALIAS</li>
                                    </ul>
                                </div>
                                <div className="button_wrap accountpage">
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
                                            <p><a href="/View_engagement">View Engagement</a></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xxl-3">
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
                                            <p><Link to="/View_engagement">View Engagement</Link></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xxl-3">
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
                                            <p><Link to="/View_engagement">View Engagement</Link></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xxl-3">
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
                                            <p><Link to="/View_engagement">View Engagement</Link></p>
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
                                            <label style={{ marginTop: "-20px", color: "black" }}>FIRST NAME</label>
                                            <input type="text" className="form-control" placeholder="FIRST NAME" defaultValue="JOHN" required />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ marginTop: "-20px", color: "black" }}>MIDDLE NAME (OPTIONAL)</label>
                                            <input type="text" className="form-control" placeholder="MIDDLE NAME (OPTIONAL)" />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ marginTop: "-20px", color: "black" }}>LAST NAME</label>
                                            <input type="text" className="form-control" placeholder="LAST NAME" defaultValue="DOE" required />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ marginTop: "-20px", color: "black" }}>TIMEZONE</label>
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
                                            <label style={{ marginTop: "-20px", color: "black" }}>PHONE NUMBER</label>
                                            <input type="tel" className="form-control" placeholder="PHONE NUMBER" defaultValue="+1 3126123" required />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ marginTop: "-20px", color: "black" }}>EMAIL</label>
                                            <input type="email" className="form-control" placeholder="EMAIL" defaultValue="JOHNDOE@GMAIL.COM" required />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ marginTop: "-20px", color: "black" }}>WHATSAPP (OPTIONAL)</label>
                                            <input type="tel" className="form-control" placeholder="WHATSAPP NUMBER (OPTIONAL)" />
                                        </div>
                                        <div className="form-group checkbox">
                                            <div className="input-group mb-3">
                                                <div className="input-group-text">
                                                    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                                                </div>
                                                <label type="checkbox" >Same as phone number</label>
                                            </div>
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
            </div>
        </>
    )
}
export default Account_page;