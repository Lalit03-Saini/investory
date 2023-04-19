//import { Link } from "react-router-dom";
import React4 from 'react';
import Popup from 'reactjs-popup';
import '../App.css';

const Userprofile = () => {
    return (
        <>

            <Popup trigger={<button> Trigger</button>} position="left center">
                <div>Popup content here !!</div>
            </Popup>

        </>
    )
}

export default Userprofile;