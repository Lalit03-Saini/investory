import axios from "axios";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiError } from "react-icons/bi"
import Popup from 'reactjs-popup';
import '../App.css';

const Welcome_page = () => {
    const navigate = useNavigate();
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
            localStorage.setItem("generateToken", res.data);
            navigate("/Wellcome_page");
            res.status(200).send({ message: "You are update Your Profie" })
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


    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <>
            <div className="container-fluid hpadding">
                <div className="header">
                    <div className="logo"><Link href="index.html"><img src="images/logo.png" alt="" /></Link></div>
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
                    <div className="btn-group username">
                        <Popup trigger={<button className="button" type="button">Jane Client</button>} position="bottom center">
                            <Link to="#" data-bs-toggle="modal" data-bs-target="#editprofile" style={{ textDecoration: "none", textAlign: "center", color: "gold", display: "block", padding: "5px" }}>Edit Profile</Link>
                            <Link to="#" data-bs-toggle="modal" data-bs-target="#logout" style={{ textDecoration: "none", textAlign: "center", color: "gold", display: "block", padding: "5px" }}>Log Out</Link>
                            <div className=""></div>
                        </Popup>
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
                                <li>Client Activity</li>
                                <li>7/4/2022 1:30 PM</li>
                                <li>Last Update</li>
                                <li>Now</li>
                            </ul>
                            <div className="contact"><Link to="#">Contact Us</Link></div>
                        </div>
                    </div>
                    <div className="welcome_message">
                        <h2>WELCOME, JOHN!</h2>
                        <p>Our team will be in touch with you soon, feel free to contact us with any questions in the interim.</p>
                    </div>
                    <button type="button" className="collapse_bar">Collapse</button>
                </div>
            </div>
            {/* <!-- Modal --> */}
            <div className="modal fade editprofile" id="editprofile" tabIndex="-1" aria-labelledby="editprofileLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>Edit Profile</p>
                            <div className="contact_form">
                                <form className="needs-validation" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>FIRST NAME</label>
                                        <input type="text" name="firstname" onChange={handleChange} value={data.firstname} className="form-control" placeholder="FIRST NAME" required />
                                    </div>
                                    <div className="form-group">
                                        <label>MIDDLE NAME (OPTIONAL)</label>
                                        <input type="text" name="middlename" className="form-control" onChange={handleChange} value={data.middlename} placeholder="MIDDLE NAME (OPTIONAL)" />
                                    </div>
                                    <div className="form-group">
                                        <label>LAST NAME</label>
                                        <input type="text" name="lastname" className="form-control" onChange={handleChange} value={data.lastname} placeholder="LAST NAME" required />
                                    </div>
                                    <div className="form-group">
                                        <label>TIMEZONE</label>
                                        <select style={{ marginTop: "21px" }} name="timezone" onChange={handleChange} value={data.timezone} placeholder="EST" required>
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
                                        <input type="tel" name="mobile" className="form-control" onChange={handleChange} value={data.mobile} required />
                                    </div>
                                    <div className="form-group">
                                        <label>WHATSAPP (OPTIONAL)</label>
                                        <input type="tel" name="whatsappno" className="form-control" onChange={handleChange} value={data.whatsappno} placeholder="WHATSAPP NUMBER (OPTIONAL)" />
                                    </div>
                                    <div className="form-group">
                                        <label>EMAIL</label>
                                        <input type="email" name="email" className="form-control" onChange={handleChange} value={data.email} placeholder="EMAIL" required />
                                    </div>
                                    <div className="form-group checkbox">
                                        <label><input type="checkbox" /><span></span> Same as phone number</label>
                                    </div>
                                    <div className="form-group submit">
                                        <Link to="#" data-bs-dismiss="modal" aria-label="Close">Cancel</Link>
                                        <button to="#" type="submit">Save</button>
                                    </div>
                                    {error && <div className="error-tab"><BiError /> {error}</div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal --> */}
            <div className="modal fade logout" id="logout" tabIndex="-1" aria-labelledby="logoutLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>Are you sure you want to log out?</p>
                            <Link to="#" style={{ margin: "5px", padding: "5px", border: "1px solid #C8B38A", background: "rgba(200, 179, 138, 0)", color: "#C8B38A", textAlign: "center" }} data-bs-dismiss="modal" aria-label="Close">Cancel</Link>
                            <button onClick={handleLogout} style={{ margin: "5px", padding: "5px", background: "#FFDA94", color: "#1A1A1A", border: "1px solid #C8B38A" }} >Log Out</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Welcome_page;
