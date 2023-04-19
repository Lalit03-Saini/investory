import { useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BiError } from "react-icons/bi";


const Login = () => {

    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8000/api/user/login";
            const { data: res } = await axios.post(url, data);
            window.localStorage.setItem("token", res.data);
            window.localStorage.getItem(data);
            navigate("/Wellcome_page");
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
                <div className="container-fluid zerocol homepage">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="logo"><Link to="to"><img src="images/logo.png" alt="" /></Link></div>
                            <div className="home_form">
                                <div className="login_form">
                                    <h1>LOGIN</h1>
                                    <p>Welcome back to The Investory!</p>
                                    <div className="contact_form">
                                        <form className="needs-validation lform" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label>EMAIL</label>
                                                <input type="email" className="form-control" name="email" onChange={handleChange} value={data.email} placeholder="EMAIL" required />
                                            </div>
                                            <div className="form-group">
                                                <label>PASSWORD</label>
                                                <input type="password" className="form-control" name="password" onChange={handleChange} value={data.password} placeholder="PASSWORD" required />
                                            </div>
                                            <div className="interlink"><Link to="/forgetpaswodpage" className="forgot">Forgot Password?</Link></div>
                                            <div className="form-group submit">
                                                <button type="submit">Login</button>
                                            </div>
                                            <div className="interlink">Don’t have an account? <Link to="/Signup" className="signup">Sign Up</Link></div>
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

export default Login;