import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BiError } from "react-icons/bi"


const SignUp = () => {
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
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8000/api/user/create";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("generateToken", res.data);
            navigate("/Wellcome_page");
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
            <div className="container-fluid hpadding">
                <div className="container-fluid zerocol homepage">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="logo"><Link to="#"><img src="images/logo.png" alt="" /></Link></div>
                            <div className="home_form">
                                <div className="sign_up">
                                    <h1>SIGN UP</h1>
                                    <p>Welcome to The Investory!</p>
                                    <div className="contact_form">
                                        <form className="needs-validation" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label>FIRST NAME</label>
                                                <input type="text" name="firstname" className="form-control" onChange={handleChange} value={data.firstname} placeholder="FIRST NAME" required />
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
                                                <select className="wide select select1 " name="timezone" onChange={handleChange} value={data.timezone} placeholder=" " required>
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
                                                <input type="tel" name="mobile" className="form-control" onChange={handleChange} value={data.mobile} placeholder="PHONE NUMBER" required />
                                            </div>
                                            <div className="form-group">
                                                <label>WHATSAPP NUMBER (OPTIONAL)</label>
                                                <input type="tel" name="whatsappno" className="form-control" onChange={handleChange} value={data.whatsappno} placeholder="WHATSAPP NUMBER (OPTIONAL)" />
                                            </div>
                                            <div className="form-group">
                                                <label>EMAIL</label>
                                                <input type="email" name="email" className="form-control" onChange={handleChange} value={data.email} placeholder="EMAIL" required />
                                            </div>
                                            <div className="form-group checkbox">
                                                <label><input type="checkbox" /><span /> Same as phone number</label>
                                            </div>
                                            <div className="form-group">
                                                <label>PASSWORD</label>
                                                <input type="password" name="password" className="form-control" onChange={handleChange} value={data.password} placeholder=" " required />
                                            </div>
                                            <div className="form-group">
                                                <label>CONFIRM PASSWORD</label>
                                                <input type="password" className="form-control" placeholder=" " required />
                                            </div>
                                            <div className="form-group submit">
                                                <button type="submit" defaultValue="Sign Up">Sign Up</button>
                                            </div>
                                            <div className="interlink">Already have an account? <Link to="/Login" className="login2">Login</Link></div>
                                        </form>
                                        {error && <div className="error-tab"><BiError /> {error}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-none d-md-block">
                            <div className="home_pic"><img src="images/home_pic.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;