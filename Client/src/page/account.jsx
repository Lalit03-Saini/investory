import { Link, useNavigate } from "react-router-dom";
import Slider from "../components/slider";
import { BiError } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";

const Account = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8000/api/user/logout";
            const res = await axios.get(url);
            navigate("/Wellcome_page");
            console.log(res.message);
            res.status(200).send({ message: "You are Logout now" })
        } catch (error) {
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
                        <div className="logo"><Link to="/login"><img src="images/logo.png" alt="" /></Link></div>
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
                            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Jane Client</button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#editprofile">Edit Profile</a>
                                </li>
                                <li>
                                    <a href="#" onClick={handleSubmit} data-bs-toggle="modal" data-bs-target="">Log Out</a>
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
                                <h1>John Middle Client</h1>
                                <ul>
                                    <li>Email</li>
                                    <li>john@mail.com</li>
                                    <li>Phone</li>
                                    <li>+1 312523123</li>
                                    <li>WhatsApp</li>
                                    <li>+1 312523123</li>
                                    <li>Timezone</li>
                                    <li>CEST</li>
                                    <li>Your Last Activity</li>
                                    <li>Now</li>
                                    <li>Last Update</li>
                                    <li>7/4/2022 1:30 PM</li>
                                </ul>
                                <div className="contact"><Link to="#">Contact Us</Link></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 breadcamp_bar">
                                <div className="breadcamp">
                                    <ul>
                                        <li>ACCOUNTS</li>
                                    </ul>
                                </div>
                                <div className="button_wrap">
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
                                        <p><Link to="/Account_page">View Account Page</Link></p>
                                    </div>
                                    <div className="property_right">
                                        <div id="spliders" className="splide">
                                            <Slider />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="property_block">
                                <div className="property_left">
                                    <h2>Acc Alias</h2>
                                    <p>Active</p>
                                    <div className="property_info">
                                        <button className="collapse_button" type="button" data-bs-toggle="collapse" data-bs-target="#area2" aria-expanded="true" aria-controls="area2">Account Information</button>
                                        <div className="collapse show" id="area2">
                                            <ul>
                                                <li>Active Time</li>
                                                <li>30 days</li>
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
                                    <p><Link to="/Account-page">View Account Page</Link></p>
                                </div>
                                <div className="property_right">
                                    <div id="spliders" className="splide">
                                        <Slider />
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
                                        <select style={{ marginTop: "21px" }} className="wide select" placeholder="EST" required>
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
                                        <Link to="#" data-bs-dismiss="modal" aria-label="Close">Cancel</Link>
                                        <Link to="#" type="submit">Save</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {error && <div className="error-tab"><BiError /> {error}</div>}
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

export default Account;