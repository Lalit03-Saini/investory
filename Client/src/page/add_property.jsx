import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BiError } from "react-icons/bi";
import '../App.css';

const Add_property = () => {

    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/Wellcome_page");
    };

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8000/api/product/create";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            navigate("/Add_property");
            res.status(204).send({ message: "You are successfully Login" })
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
                            <li><Link to="/Account_management">Account Management</Link></li>
                            <li><Link to="/Team_member">Team</Link></li>
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
                    <div className="row acmanage">
                        <div className="col-12 add_property">
                            <div className="add_block">
                                <form className="needs-validation" noValidate>
                                    <h2>Add Property</h2>
                                    <div className="all_status left">
                                        <label>ACCOUNT</label>
                                        <select className="wide select" placeholder="ALL STATUSES" required>
                                            <option defaultValue >ALL STATUSES</option>
                                            <option>Value</option>
                                            <option>Value</option>
                                        </select>
                                    </div>
                                    <div className="all_status right">
                                        <label>ENGAGEMENT</label>
                                        <select className="wide select" placeholder="ALL STATUSES" required>
                                            <option defaultValue >ALL STATUSES</option>
                                            <option>Value</option>
                                            <option>Value</option>
                                        </select>
                                    </div>
                                    <div className="mlsid">
                                        <div className="mls_title">
                                            <h3>MLS ID</h3>
                                            <i><img src="images/tooltip_icon.svg" alt="" /></i>
                                            <div className="tooltip_box">
                                                <p>You’re able to find this information on the property overview page. On Zillow, It’s located in the overview section as in the screenshot below.</p>
                                                <p><img src="images/tooltip.png" alt="" /></p>
                                            </div>
                                        </div>
                                        <Link to="#" className="yesmls">Use MLS ID</Link>
                                        <div className="mlsblock1">
                                            <p>To simplify the process, you can add property using MLS ID</p>
                                            <div className="form-group all_status">
                                                <label>SOURCE</label>
                                                <select className="wide select" placeholder="" required>
                                                    <option defaultValue >ALL STATUSES</option>
                                                    <option>Value</option>
                                                    <option>Value</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>MLS ID</label>
                                                <input type="text" className="form-control" placeholder="MLS ID" />
                                            </div>
                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#editprofile"className="nomls">I don’t have MLS ID</Link>
                                        </div>
                                    </div>
                                    <div className="mlsblock2">
                                        <div className="form-group">
                                            <label>ADDRESS*</label>
                                            <input type="text" className="form-control" placeholder="ADDRESS" required />
                                        </div>
                                        <div className="form-group">
                                            <label>SQFT*</label>
                                            <input type="text" className="form-control" placeholder="SQFT" required />
                                        </div>
                                        <div className="form-group">
                                            <label>LAYOUT</label>
                                            <input type="text" className="form-control" placeholder="LAYOUT" required />
                                        </div>
                                        <div className="form-group">
                                            <label>STORIES</label>
                                            <input type="text" className="form-control" placeholder="STORIES" required />
                                        </div>
                                        <div className="form-group">
                                            <label>YEAR BUILT</label>
                                            <input type="text" className="form-control" placeholder="YEAR BUILT" />
                                        </div>
                                        <div className="form-group">
                                            <label>PROPERTY TAX</label>
                                            <input type="text" className="form-control" placeholder="PROPERTY TAX" />
                                        </div>
                                        <div className="form-group">
                                            <label>TAX ASSESSMENT</label>
                                            <input type="text" className="form-control" placeholder="TAX ASSESSMENT" />
                                        </div>
                                        <div className="form-group">
                                            <label>TAX ASSESSMENT</label>
                                            <input type="text" className="form-control" placeholder="TAX ASSESSMENT" />
                                        </div>
                                        <div className="form-group">
                                            <label>SCHOOL GRADES <img src="images/tooltip_icon.svg" alt="" /></label>
                                            <span><input type="text" className="form-control" placeholder=" " /></span>
                                            <span><input type="text" className="form-control" placeholder=" " /></span>
                                            <span><input type="text" className="form-control" placeholder=" " /></span>
                                        </div>
                                        <div className="form-group">
                                            <label>LOT SIZE</label>
                                            <input type="text" className="form-control" placeholder="LOT SIZE" />
                                        </div>
                                        <div className="form-group">
                                            <label>ASKING PRICE</label>
                                            <input type="text" className="form-control" placeholder="ASKING PRICE" />
                                        </div>
                                        <div className="form-group">
                                            <label>PROJECTED RENTAL</label>
                                            <input type="text" className="form-control" placeholder="PROJECTED RENTAL" />
                                        </div>
                                    </div>
                                    <div className="form-group submit">
                                        <input type="submit" defaultValue="Add Property" /> <Link to="#" style={{border: "1px solid #C8B38A",background: "rgba(200, 179, 138, 0)",color: "#C8B38A",textAlign: "center",height:"36px"}}>Cancel</Link>
                                    </div>
                                </form>
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
                                        <select className="wide select" style={{marginTop:"23px"}} placeholder="EST" required>
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
                                        <label><input type="checkbox" /><span style={{marginTop:"15px"}} /> Same as phone number</label>
                                    </div>
                                    <div className="form-group submit">
                                        <Link to="#" data-bs-dismiss="modal" aria-label="Close">Cancel</Link> <input type="submit" defaultValue="Save" />
                                    </div>
                                    {error && <div className="error-tab"><BiError /> {error}</div>}
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
                            <p><Link to="/" data-bs-dismiss="modal" aria-label="Close">Cancel</Link> <button onClick={handleLogout} >Log Out</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add_property;
