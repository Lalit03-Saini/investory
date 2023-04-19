import { Link } from "react-router-dom";
import "../allpage.css"

const All_page = () => {
    return (
        <>
            <div className="container">
                <h1>Page Names</h1>
                <ol>
                    <li><Link to="/Login" >Home</Link></li>
                    <li><Link to="/Signup" >welcome</Link></li>
                    <li><Link to="/Account" >accounts</Link></li>
                    <li><Link to="/Account_page" >accounts page</Link></li>
                    <li><Link to="/view_engagement" >view engagement</Link></li>
                    <li><Link to="/View_property" >view property</Link></li>
                    <li><Link to="/Team_member" >team members</Link></li>
                    <li><Link to="/Account_management">account management</Link></li>
                    <li><Link to="/Client_profile" >client profile</Link></li>
                    <li><Link to="/Client_profile_engagement" >client profile engagement</Link></li>
                    <li><Link to="/Client_view_engaement" >client view engagement</Link></li>
                    <li><Link to="/Client_view_property" >client view property</Link></li>
                    <li><Link to="/Add_property" >add property</Link></li>
                    <li><Link to="/Property_filter" >property filter</Link></li>
                    <li><Link to="/Property_filter_assign" >property filter assign</Link></li>
                    <li><Link to="/Property_filter_view" >property filter view</Link></li>
                </ol>
            </div>
        </>
    )
};

export default All_page;
