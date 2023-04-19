import { useState } from "react";
import axios from "axios";
import { BiError } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const Forgetpassword = () => {

    const [data, setData] = useState({password: "", confirmpassword: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8000/api/user/password";
            const { data: res } = await axios.put(url, data);
            localStorage.setItem("token")
            navigate("/Wellcome_page");
            res.status(200).send({ message: "You successfully create new Password" })
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
                                <div className="reset_password">
                                    <h1>Change Your Password</h1>
                                    <p>Let’s create your new password</p>
                                    <div className="contact_form">
                                        <form className="needs-validation" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label> New PASSWORD</label>
                                                <input type="password" name="password" onChange={handleChange} value={data.password} className="form-control" placeholder=" " required />
                                            </div>
                                            <div className="form-group">
                                                <label>CONFIRM PASSWORD</label>
                                                <input type="password" className="form-control" name="confirmpassword" onChange={handleChange} value={data.confirmpassword} placeholder=" " required />
                                            </div>
                                            <div className="form-group submit">
                                                <button type="submit" >Reset Password</button>
                                            </div>
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

export default Forgetpassword;