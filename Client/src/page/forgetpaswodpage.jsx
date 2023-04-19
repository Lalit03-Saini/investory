import axios from "axios";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiError } from "react-icons/bi"

const ForgetpaswordPage = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ email: "" });
    const [error, setError] = useState("");
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8000/api/user/forgot-password-token";
            const { data: res } = await axios.post(url, data);
            navigate("/Login");
            window.alert("Please Check Your Indox for link if You not get so Check your span box")
            res.status(200).send({ message: "Check You Email Inbox" })
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
                <div className="container-fluid zerocol homepage">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="logo"><Link to="#"><img src="images/logo.png" alt="" /></Link></div>
                            <div className="home_form">
                                <div className="forgot_password">
                                    <h1>FORGOT PASSWORD</h1>
                                    <p>We’ll send you a link to reset your password.</p>
                                    <div className="contact_form">
                                        <form className="needs-validation" noValidate>
                                            <div className="form-group">
                                                <label>EMAIL</label>
                                                <input type="email" name="email" onChange={handleChange} value={data.email} className="form-control" placeholder="EMAIL" required />
                                            </div>
                                            <div className="form-group submit" onClick={handleSubmit}>
                                                <button style={{ background: "#FFDA94", display: "inline-block", borderRadius: "0px", textAlign: "center", cursor: "pointer", fontSize: "14px", lineHeight: "34px", color: "1A1A1A", padding: "0", border: "0", fontWeight: "700", height: "36px", width: "100%" }} >Send Link</button>
                                            </div>
                                            <div className="interlink double"><Link to="/Signup" className="signup2">Sign Up</Link> | <Link to="/login" className="login">Login</Link></div>
                                            {error && <div className="error-tab"><BiError /> {error}</div>}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-none d-md-block">
                            <div className="home_pic"><img src="images/home_pic.png" alt="" /></div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default ForgetpaswordPage;