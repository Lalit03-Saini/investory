import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';

export default function Slider() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (
        <>
            <Carousel responsive={responsive}>
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
            </Carousel>
        </>
    )
}