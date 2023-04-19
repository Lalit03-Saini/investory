import { Link } from "react-router-dom";

const View_Property = () => {
    return (
        <>
            <div className="container-fluid hpadding">
                <div className="header">
                    <div className="logo"><Link to="index.html"><img src="images/logo.png" alt="" /></Link></div>
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
                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Jane Client</button>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#editprofile">Edit Profile</Link>
                            </li>
                            <li>
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#logout">Log Out</Link>
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
                                <input type="text" className="form-control" placeholder="John Middle Doe" />
                                <input type="text" className="form-control" placeholder="John Doe" />
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
                            <div className="contact"><Link to="#">Contact Us</Link></div>
                        </div>
                    </div>
                    <div className="row acmanage vproperty">
                        <div className="col-12 col-lg-12 breadcamp_bar order-1 order-xl-1">
                            <div className="breadcamp">
                                <ul>
                                    <li><Link to="accounts.html">ACCOUNTS</Link></li>
                                    <li><Link to="accounts_page.html">ACC ALIAS</Link></li>
                                    <li><Link to="view_engagement.html">ENGAGEMENT NAME</Link></li>
                                    <li>2307 MOCKINGBIRD DRIVE, ROUND ROCK</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 pleft order-2 order-xl-2">
                            <div className="price_table">
                                <ul>
                                    <li><strong>Price</strong> $441,000</li>
                                    <li><strong>Out of Pocket</strong> $441,000</li>
                                    <li><strong>Gains</strong> $441,000</li>
                                </ul>
                            </div>
                            <div className="follow_up">
                                <i>STATUS</i>
                                <button id="btn-select" value className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outdide" />
                                <ul id="vodiapicker" className="dropdown-menu">
                                    <li value="en" data-thumbnail="images/yellow.svg">FOLLOW UP</li>
                                    <li value="en" data-thumbnail="images/green.svg">Approved</li>
                                    <li value="en" data-thumbnail="images/red.svg">Pending</li>
                                    <li value="en" data-thumbnail="images/sky.svg">Pending</li>
                                    <li value="en" data-thumbnail="images/blue.svg">Active</li>
                                    <li value="en" data-thumbnail="images/gray.svg">Pending</li>
                                </ul>
                                <Link to="#" className="chat"><img src="images/chat.svg" alt="" /></Link>
                            </div>
                            <p><img src="images/thumbnail4.png" alt="" /></p>
                            {/* select button */}
                        </div>
                        <div className="col-12 col-lg-4 pright order-3 order-xl-3">
                            <div className="year_table">
                                <ul>
                                    <li /><li>Year 1</li><li>Year 2</li>
                                </ul>
                                <ul>
                                    <li>Total Gains <img src="images/tooltip_icon.svg" alt="" /></li>
                                    <li>$19,001</li><li>#$201,946</li>
                                </ul>
                                <ul>
                                    <li>IRR <img src="images/tooltip_icon.svg" alt="" /></li><li>6.02%</li><li>15.64%</li>
                                </ul>
                                <ul>
                                    <li>Rent Gap <img src="images/tooltip_icon.svg" alt="" /></li><li>$168</li><li />
                                </ul>
                                <ul>
                                    <li>Projected $ <img src="images/tooltip_icon.svg" alt="" /></li><li>-$23</li><li />
                                </ul>
                                <ul>
                                    <li>Total Gains <img src="images/tooltip_icon.svg" alt="" /></li><li>$335</li><li />
                                </ul>
                                <ul>
                                    <li>Gains + App <img src="images/tooltip_icon.svg" alt="" /></li><li>$4,010</li><li />
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 pleft2 order-5 order-xl-4">
                            <div className="property_wrap">
                                <div className="propery_nav">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li><Link id="tab-1" to="#pane-1" className="active" data-bs-toggle="tab" role="tab">INFO <img src="images/tooltip_icon.svg" alt="" /></Link></li>
                                        <li><Link id="tab-2" to="#pane-2" className=" " data-bs-toggle="tab" role="tab">ABOUT THE PROPERTY <img src="images/tooltip_icon.svg" alt="" /></Link></li>
                                        <li><Link id="tab-3" to="#pane-3" className=" " data-bs-toggle="tab" role="tab">MORTGAGE <img src="images/tooltip_icon.svg" alt="" /></Link></li>
                                        <li><Link id="tab-4" to="#pane-4" className=" " data-bs-toggle="tab" role="tab">RENT <img src="images/tooltip_icon.svg" alt="" /></Link></li>
                                        <li><Link id="tab-5" to="#pane-5" className=" " data-bs-toggle="tab" role="tab">YEARLY ESTIMATE <img src="images/tooltip_icon.svg" alt="" /></Link></li>
                                        <li><Link id="tab-6" to="#pane-6" className=" " data-bs-toggle="tab" role="tab">GROWTH ASSUMPTIONS <img src="images/tooltip_icon.svg" alt="" /></Link></li>
                                    </ul>
                                </div>
                                <div id="content" className="tab-content" role="tablist">
                                    <div id="pane-1" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-1">
                                        <div className="card-header" role="tab" id="heading-1">
                                            <Link data-bs-toggle="collapse" to="#collapse-1" aria-expanded="true" aria-controls="collapse-1">INFO <img src="images/tooltip_icon.svg" alt="" /></Link>
                                        </div>
                                        <div id="collapse-1" className="collapse show" data-bs-parent="#content" role="tabpanel" aria-labelledby="heading-1">
                                            <div className="card-body">
                                                <div className="three_block top">
                                                    <div className="form-group">ADDRESS</div>
                                                    <div className="form-group"><img src="images/pin.svg" alt="" /> 2307 Mockingbird drive, Round Rock</div>
                                                    <div className="form-group"><Link to="#">View Link →</Link></div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">ASKING PRICE</div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="$441,000" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">OFFER PRICE</div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="$441,000" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">FINAL PRICE</div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="$441,000" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">RENO &amp; EXPENSES</div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="$3,000" />
                                                        <div className="reno_tootltip">
                                                            <img src="images/tooltip_icon.svg" alt="" />
                                                            <div>
                                                                <ul>
                                                                    <li>[OY]</li>
                                                                    <li>Yesterday 3:13 PM</li>
                                                                    <li>$4,000 → $3,000</li>
                                                                </ul>
                                                                <ul>
                                                                    <li>[OY]</li>
                                                                    <li>7/4/2022 1:30 PM</li>
                                                                    <li>$3,000 → $4,000</li>
                                                                </ul>
                                                                <ul>
                                                                    <li>[OY]</li>
                                                                    <li>7/4/2022 1:30 PM</li>
                                                                    <li>$1,000 → $4,000</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="three_block textarea">
                                                    <div className="form-group">RENO COMMENTS</div>
                                                    <div className="form-group">
                                                        <textarea className="form-control textbox" placeholder defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">CREDITS</div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">TAX ASSESSMENT</div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="$324,120" />
                                                    </div>
                                                    <div className="form-group">
                                                        <select className="wide select" placeholder="NEXT">
                                                            <option>Value</option>
                                                            <option>Value</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="escrow">
                                                    <div className="three_block">
                                                        <div className="form-group">Escrow</div>
                                                        <div className="form-group">Monthly</div>
                                                        <div className="form-group">Yearly</div>
                                                    </div>
                                                    <div className="three_block">
                                                        <div className="form-group">TAXES <img src="images/tooltip_icon.svg" alt="" /></div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control disable" placeholder="$786" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control disable" placeholder="$9,437" />
                                                        </div>
                                                    </div>
                                                    <div className="three_block">
                                                        <div className="form-group">INSURANCE <img src="images/tooltip_icon.svg" alt="" /></div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control disable" placeholder="$92" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control disable" placeholder="$1,100" />
                                                        </div>
                                                    </div>
                                                    <div className="three_block">
                                                        <div className="form-group">Total</div>
                                                        <div className="form-group">$878</div>
                                                        <div className="form-group">$10,537</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="pane-2" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-2">
                                        <div className="card-header" role="tab" id="heading-2">
                                            <Link data-bs-toggle="collapse" to="#collapse-2" aria-expanded="false" aria-controls="collapse-2">ABOUT THE PROPERTY <img src="images/tooltip_icon.svg" alt="" /></Link>
                                        </div>
                                        <div id="collapse-2" className="collapse" data-bs-parent="#content" role="tabpanel" aria-labelledby="heading-2">
                                            <div className="card-body">
                                                <div className="three_block">
                                                    <div className="form-group">SQFT <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">LAYOUT <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">STORIES <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">LOT SIZE <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">YEAR BUILT <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">PROPERTY CLASS <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">LOCATION GRADE <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">SCHOOL GRADES <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <span><input type="text" className="form-control disable" placeholder="Value" /></span>
                                                        <span><input type="text" className="form-control disable" placeholder="Value" /></span>
                                                        <span><input type="text" className="form-control disable" placeholder="Value" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="pane-3" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-3">
                                        <div className="card-header" role="tab" id="heading-3">
                                            <Link data-bs-toggle="collapse" to="#collapse-3" aria-expanded="false" aria-controls="collapse-3">MORTGAGE <img src="images/tooltip_icon.svg" alt="" /></Link>
                                        </div>
                                        <div id="collapse-3" className="collapse" data-bs-parent="#content" role="tabpanel" aria-labelledby="heading-3">
                                            <div className="card-body">
                                                <div className="three_block">
                                                    <div className="form-group">OFFER TYPE <img src="images/tooltip_icon.svg" alt="" /></div><div className="form-group">
                                                        <input type="text" className="form-control" placeholder=" " />
                                                    </div>
                                                    <div className="form-group">
                                                        <select className="wide select" placeholder=" ">
                                                            <option>Value</option>
                                                            <option>Value</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">PROJECT APPRAISAL <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder=" " />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">APPRAISAL <img src="images/tooltip_icon.svg" alt="" /></div><div className="form-group">
                                                        <input type="text" className="form-control" placeholder=" " />
                                                    </div>
                                                    <div className="form-group">
                                                        <select className="wide select" placeholder=" ">
                                                            <option>Value</option>
                                                            <option>Value</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">APPRAISAL CASH GAP <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">DOWN PAYMENT <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder=" " />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">CLOSING COST <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder=" " />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">CASH OF CLOSING <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder=" " />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">CLOSING COMISSION <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder=" " />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">COMMISSION GAP <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder=" " />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">OUT OF POCKET <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">MORTGAGE <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">MORTGAGE INTEREST <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder=" " />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">MORTGAGE TERM <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder=" " />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">MORTGAGE PAYMENT <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="pane-4" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-4">
                                        <div className="card-header" role="tab" id="heading-4">
                                            <Link data-bs-toggle="collapse" to="#collapse-4" aria-expanded="false" aria-controls="collapse-4">RENT <img src="images/tooltip_icon.svg" alt="" /></Link>
                                        </div>
                                        <div id="collapse-4" className="collapse" data-bs-parent="#content" role="tabpanel" aria-labelledby="heading-4">
                                            <div className="card-body">
                                                <div className="three_block">
                                                    <div className="form-group">RENT - MKT <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">RENT – INVESTORY <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">CURRENT RENT <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">RENT <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">MORTGAGE + ESCROW <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">TOTAL MONTHLY PAY. <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="pane-5" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-5">
                                        <div className="card-header" role="tab" id="heading-5">
                                            <Link data-bs-toggle="collapse" to="#collapse-5" aria-expanded="false" aria-controls="collapse-5">YEARLY ESTIMATE <img src="images/tooltip_icon.svg" alt="" /></Link>
                                        </div>
                                        <div id="collapse-5" className="collapse" data-bs-parent="#content" role="tabpanel" aria-labelledby="heading-5">
                                            <div className="card-body">
                                                <div className="three_block">
                                                    <div className="form-group">MAINTENANCE <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <select className="wide select" placeholder=" ">
                                                            <option>Value</option>
                                                            <option>Value</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder=" " />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">CAP-X <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <select className="wide select" placeholder=" ">
                                                            <option>Value</option>
                                                            <option>Value</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder=" " />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">REPLACEMENT <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <select className="wide select" placeholder=" ">
                                                            <option>Value</option>
                                                            <option>Value</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder=" " />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">PROPERTY MGMT <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <select className="wide select" placeholder=" ">
                                                            <option>Value</option>
                                                            <option>Value</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder=" " />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">INSURANCE <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <select className="wide select" placeholder=" ">
                                                            <option>Value</option>
                                                            <option>Value</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder=" " />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">PROPERTY TAX <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">HOA <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control disable" placeholder="Value" />
                                                    </div>
                                                </div>
                                                <div className="escrow">
                                                    <div className="three_block">
                                                        <div className="form-group">Projected Exp.</div>
                                                        <div className="form-group">Monthly</div>
                                                        <div className="form-group">Yearly</div>
                                                    </div>
                                                    <div className="three_block">
                                                        <div className="form-group">HOA <img src="images/tooltip_icon.svg" alt="" /></div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control disable" placeholder="Value" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control disable" placeholder="Value" />
                                                        </div>
                                                    </div>
                                                    <div className="three_block">
                                                        <div className="form-group">MAINTENENCE <img src="images/tooltip_icon.svg" alt="" /></div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control disable" placeholder="Value" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control disable" placeholder="Value" />
                                                        </div>
                                                    </div>
                                                    <div className="three_block">
                                                        <div className="form-group">CAP X <img src="images/tooltip_icon.svg" alt="" /></div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control disable" placeholder="Value" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control disable" placeholder="Value" />
                                                        </div>
                                                    </div>
                                                    <div className="three_block">
                                                        <div className="form-group">REPLACEMENT <img src="images/tooltip_icon.svg" alt="" /></div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control disable" placeholder="Value" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control disable" placeholder="Value" />
                                                        </div>
                                                    </div>
                                                    <div className="three_block">
                                                        <div className="form-group">MANAGEMENT <img src="images/tooltip_icon.svg" alt="" /></div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control disable" placeholder="Value" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control disable" placeholder="Value" />
                                                        </div>
                                                    </div>
                                                    <div className="three_block">
                                                        <div className="form-group">Total</div>
                                                        <div className="form-group">$100</div>
                                                        <div className="form-group">$1,200</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="pane-6" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-6">
                                        <div className="card-header" role="tab" id="heading-6">
                                            <Link data-bs-toggle="collapse" to="#collapse-6" aria-expanded="false" aria-controls="collapse-6">GROWTH ASSUMPTIONS <img src="images/tooltip_icon.svg" alt="" /></Link>
                                        </div>
                                        <div id="collapse-6" className="collapse" data-bs-parent="#content" role="tabpanel" aria-labelledby="heading-6">
                                            <div className="card-body">
                                                <div className="three_block">
                                                    <div className="form-group">APPRECIATION TODAY <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="11%" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">APPRECIATION 5Y <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="6%" />
                                                    </div>
                                                </div>
                                                <div className="three_block">
                                                    <div className="form-group">YEARLY RENT INC. <img src="images/tooltip_icon.svg" alt="" /></div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 pright2 order-4 order-xl-5">
                            <div className="property_wrap">
                                <div className="propery_nav">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li><Link id="tab-7" to="#pane-7" className="active" data-bs-toggle="tab" role="tab">10 YEAR PROJECTION</Link></li>
                                        <li><Link id="tab-8" to="#pane-8" className=" " data-bs-toggle="tab" role="tab">PROJECTION + APPRECIATION</Link></li>
                                    </ul>
                                </div>
                                <div id="content2" className="tab-content" role="tablist">
                                    <div id="pane-7" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-7">
                                        <div className="card-header" role="tab" id="heading-7">
                                            <Link data-bs-toggle="collapse" to="#collapse-7" aria-expanded="true" aria-controls="collapse-7">10 YEAR PROJECTION</Link>
                                        </div>
                                        <div id="collapse-7" className="collapse show" data-bs-parent="#content2" role="tabpanel" aria-labelledby="heading-7">
                                            <div className="card-body">
                                                <img src="images/chart1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div id="pane-8" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-8">
                                        <div className="card-header" role="tab" id="heading-8">
                                            <Link data-bs-toggle="collapse" to="#collapse-8" aria-expanded="false" aria-controls="collapse-8">PROJECTION + APPRECIATION</Link>
                                        </div>
                                        <div id="collapse-8" className="collapse" data-bs-parent="#content2" role="tabpanel" aria-labelledby="heading-8">
                                            <div className="card-body">
                                                <img src="images/chart2.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="property_wrap">
                                <div className="propery_nav">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li><Link id="tab-9" to="#pane-9" className="active" data-bs-toggle="tab" role="tab">YOUR COMMENTS</Link></li>
                                        <li><Link id="tab-10" to="#pane-10" className=" " data-bs-toggle="tab" role="tab">INVESTORY COMMENTS</Link></li>
                                    </ul>
                                </div>
                                <div id="content3" className="tab-content" role="tablist">
                                    <div id="pane-9" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-9">
                                        <div className="card-header" role="tab" id="heading-9">
                                            <Link data-bs-toggle="collapse" to="#collapse-9" aria-expanded="true" aria-controls="collapse-9">YOUR COMMENTS</Link>
                                        </div>
                                        <div id="collapse-9" className="collapse show" data-bs-parent="#content3" role="tabpanel" aria-labelledby="heading-9">
                                            <div className="card-body">
                                                <div className="comments">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="pane-10" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-10">
                                        <div className="card-header" role="tab" id="heading-10">
                                            <Link data-bs-toggle="collapse" to="#collapse-10" aria-expanded="false" aria-controls="collapse-10">INVESTORY COMMENTS</Link>
                                        </div>
                                        <div id="collapse-10" className="collapse" data-bs-parent="#content3" role="tabpanel" aria-labelledby="heading-10">
                                            <div className="card-body">
                                                <div className="comments">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
                                                </div>
                                            </div>
                                        </div>
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
                                        <select className="wide select" placeholder="EST" required>
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
                                        <Link to="#" data-bs-dismiss="modal" aria-label="Close">Cancel</Link> <input type="submit" defaultValue="Save" />
                                    </div>
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
                            <p><Link to="#" data-bs-dismiss="modal" aria-label="Close">Cancel</Link> <Link to="#">Log Out</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default View_Property;
