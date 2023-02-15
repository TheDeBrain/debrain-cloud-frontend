import { Grid } from '@mui/material';
import React from 'react';

class FileManagePage extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <>
                <div id="main-wrapper" className=" show">
                    <div className="nav-header">
                        <a href="index.html" className="brand-logo">
                            <svg className="logo-abbr" width="40" height="40" viewBox="0 0 576 672" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00292 165C-30.9998 505 180 618 288.003 672C289.669 671.183 291.364 670.354 293.088 669.511C396.895 618.73 602.494 518.153 572.003 166L288.003 0L4.00292 165ZM63.0234 202.7C35.6872 467.9 203.473 559.88 287.82 602C288.895 601.474 289.986 600.94 291.094 600.399C372.093 560.798 539.498 478.953 515.617 203.48L287.82 74L63.0234 202.7Z" fill="white" />
                                <path d="M499 392L235 238L289 204L514 336L499 392Z" fill="white" />
                                <path d="M499 392L235 238L289 204L514 336L499 392Z" stroke="white" />
                                <path d="M59 278L336 434L290 476L44 334L59 278Z" fill="white" />
                                <path d="M59 278L336 434L290 476L44 334L59 278Z" stroke="white" />
                            </svg>
                            <div className="brand-title">
                                <h1 className="mb-0">Salreo</h1>
                            </div>

                        </a>
                        <div className="nav-control">
                            <div className="hamburger">
                                <span className="line"></span><span className="line"></span><span className="line"></span>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="22" y="11" width="4" height="4" rx="2" fill="#2A353A" />
                                    <rect x="11" width="4" height="4" rx="2" fill="#2A353A" />
                                    <rect x="22" width="4" height="4" rx="2" fill="#2A353A" />
                                    <rect x="11" y="11" width="4" height="4" rx="2" fill="#2A353A" />
                                    <rect x="11" y="22" width="4" height="4" rx="2" fill="#2A353A" />
                                    <rect width="4" height="4" rx="2" fill="#2A353A" />
                                    <rect y="11" width="4" height="4" rx="2" fill="#2A353A" />
                                    <rect x="22" y="22" width="4" height="4" rx="2" fill="#2A353A" />
                                    <rect y="22" width="4" height="4" rx="2" fill="#2A353A" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="chatbox">
                        <div className="chatbox-close"></div>
                        <div className="custom-tab-1">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#notes">Notes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#alerts">Alerts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#chat">Chat</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="chat" role="tabpanel">
                                    <div className="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box">
                                        <div className="card-header chat-list-header text-center">
                                            <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect fill="#000000" x="4" y="11" width="16" height="2" rx="1" /><rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x="4" y="11" width="16" height="2" rx="1" /></g></svg></a>
                                            <div>
                                                <h6 className="mb-1">Chat List</h6>
                                                <p className="mb-0">Show All</p>
                                            </div>
                                            <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24" /><circle fill="#000000" cx="5" cy="12" r="2" /><circle fill="#000000" cx="12" cy="12" r="2" /><circle fill="#000000" cx="19" cy="12" r="2" /></g></svg></a>
                                        </div>
                                        <div className="card-body contacts_body p-0 dz-scroll  " id="DZ_W_Contacts_Body">
                                            <ul className="contacts">
                                                <li className="name-first-letter">A</li>
                                                <li className="active dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img src="images/avatar/1.jpg" className="rounded-circle user_img" alt=""></img>
                                                            <span className="online_icon"></span>
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Archie Parker</span>
                                                            <p>Kalid is online</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img src="images/avatar/2.jpg" className="rounded-circle user_img" alt=""></img>
                                                            <span className="online_icon offline"></span>
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Alfie Mason</span>
                                                            <p>Taherah left 7 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img src="images/avatar/3.jpg" className="rounded-circle user_img" alt=""></img>
                                                            <span className="online_icon"></span>
                                                        </div>
                                                        <div className="user_info">
                                                            <span>AharlieKane</span>
                                                            <p>Sami is online</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img src="images/avatar/4.jpg" className="rounded-circle user_img" alt=""></img>
                                                            <span className="online_icon offline"></span>
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Athan Jacoby</span>
                                                            <p>Nargis left 30 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="name-first-letter">B</li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img src="images/avatar/5.jpg" className="rounded-circle user_img" alt=""></img>
                                                            <span className="online_icon offline"></span>
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Bashid Samim</span>
                                                            <p>Rashid left 50 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img src="images/avatar/1.jpg" className="rounded-circle user_img" alt=""></img>
                                                            <span className="online_icon"></span>
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Breddie Ronan</span>
                                                            <p>Kalid is online</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img src="images/avatar/2.jpg" className="rounded-circle user_img" alt=""></img>
                                                            <span className="online_icon offline"></span>
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Ceorge Carson</span>
                                                            <p>Taherah left 7 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="name-first-letter">D</li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img src="images/avatar/3.jpg" className="rounded-circle user_img" alt=""></img>
                                                            <span className="online_icon"></span>
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Darry Parker</span>
                                                            <p>Sami is online</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img src="images/avatar/4.jpg" className="rounded-circle user_img" alt=""></img>
                                                            <span className="online_icon offline"></span>
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Denry Hunter</span>
                                                            <p>Nargis left 30 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="name-first-letter">J</li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img src="images/avatar/5.jpg" className="rounded-circle user_img" alt=""></img>
                                                            <span className="online_icon offline"></span>
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Jack Ronan</span>
                                                            <p>Rashid left 50 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img src="images/avatar/1.jpg" className="rounded-circle user_img" alt=""></img>
                                                            <span className="online_icon"></span>
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Jacob Tucker</span>
                                                            <p>Kalid is online</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img src="images/avatar/2.jpg" className="rounded-circle user_img" alt=""></img>
                                                            <span className="online_icon offline"></span>
                                                        </div>
                                                        <div className="user_info">
                                                            <span>James Logan</span>
                                                            <p>Taherah left 7 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img src="images/avatar/3.jpg" className="rounded-circle user_img" alt=""></img>
                                                            <span className="online_icon"></span>
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Joshua Weston</span>
                                                            <p>Sami is online</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="name-first-letter">O</li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img src="images/avatar/4.jpg" className="rounded-circle user_img" alt=""></img>
                                                            <span className="online_icon offline"></span>
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Oliver Acker</span>
                                                            <p>Nargis left 30 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img src="images/avatar/5.jpg" className="rounded-circle user_img" alt=""></img>
                                                            <span className="online_icon offline"></span>
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Oscar Weston</span>
                                                            <p>Rashid left 50 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card chat dz-chat-history-box d-none">
                                        <div className="card-header chat-list-header text-center">
                                            <a href="javascript:void(0);" className="dz-chat-history-back">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon points="0 0 24 0 24 24 0 24" /><rect fill="#000000" opacity="0.3" transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) " x="14" y="7" width="2" height="10" rx="1" /><path d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) " /></g></svg>
                                            </a>
                                            <div>
                                                <h6 className="mb-1">Chat with Khelesh</h6>
                                                <p className="mb-0 text-success">Online</p>
                                            </div>
                                            <div className="dropdown">
                                                <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <rect x="0" y="0" width="24" height="24" />
                                                            <circle fill="#000000" cx="5" cy="12" r="2" />
                                                            <circle fill="#000000" cx="12" cy="12" r="2" />
                                                            <circle fill="#000000" cx="19" cy="12" r="2" />
                                                        </g>
                                                    </svg>
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li className="dropdown-item"><i className="fa fa-user-circle text-primary me-2"></i> View profile</li>
                                                    <li className="dropdown-item"><i className="fa fa-users text-primary me-2"></i> Add to btn-close friends</li>
                                                    <li className="dropdown-item"><i className="fa fa-plus text-primary me-2"></i> Add to group</li>
                                                    <li className="dropdown-item"><i className="fa fa-ban text-primary me-2"></i> Block</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body msg_card_body dz-scroll" id="DZ_W_Contacts_Body3">
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""></img>
                                                </div>
                                                <div className="msg_cotainer">
                                                    Hi, how are you samim?
                                                    <span className="msg_time">8:40 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Hi Khalid i am good tnx how about you?
                                                    <span className="msg_time_send">8:55 AM, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                    <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""></img>
                                                </div>
                                                <div className="msg_cotainer">
                                                    I am good too, thank you for your chat template
                                                    <span className="msg_time">9:00 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    You are welcome
                                                    <span className="msg_time_send">9:05 AM, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                    <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""></img>
                                                </div>
                                                <div className="msg_cotainer">
                                                    I am looking for your next templates
                                                    <span className="msg_time">9:07 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Ok, thank you have a good day
                                                    <span className="msg_time_send">9:10 AM, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                    <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""></img>
                                                </div>
                                                <div className="msg_cotainer">
                                                    Bye, see you
                                                    <span className="msg_time">9:12 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""></img>
                                                </div>
                                                <div className="msg_cotainer">
                                                    Hi, how are you samim?
                                                    <span className="msg_time">8:40 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Hi Khalid i am good tnx how about you?
                                                    <span className="msg_time_send">8:55 AM, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                    <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""></img>
                                                </div>
                                                <div className="msg_cotainer">
                                                    I am good too, thank you for your chat template
                                                    <span className="msg_time">9:00 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    You are welcome
                                                    <span className="msg_time_send">9:05 AM, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                    <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""></img>
                                                </div>
                                                <div className="msg_cotainer">
                                                    I am looking for your next templates
                                                    <span className="msg_time">9:07 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Ok, thank you have a good day
                                                    <span className="msg_time_send">9:10 AM, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                    <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt=""></img>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt=""></img>
                                                </div>
                                                <div className="msg_cotainer">
                                                    Bye, see you
                                                    <span className="msg_time">9:12 AM, Today</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer type_msg">
                                            <div className="input-group">
                                                <textarea className="form-control" placeholder="Type your message..."></textarea>
                                                <div className="input-group-append">
                                                    <button type="button" className="btn btn-primary"><i className="fa fa-location-arrow"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="alerts" role="tabpanel">
                                    <div className="card mb-sm-3 mb-md-0 contacts_card">
                                        <div className="card-header chat-list-header text-center">
                                            <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24" /><circle fill="#000000" cx="5" cy="12" r="2" /><circle fill="#000000" cx="12" cy="12" r="2" /><circle fill="#000000" cx="19" cy="12" r="2" /></g></svg></a>
                                            <div>
                                                <h6 className="mb-1">Notications</h6>
                                                <p className="mb-0">Show All</p>
                                            </div>
                                            <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24" /><path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" /><path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fill-rule="nonzero" /></g></svg></a>
                                        </div>
                                        <div className="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body1">
                                            <ul className="contacts">
                                                <li className="name-first-letter">SEVER STATUS</li>
                                                <li className="active">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont primary">KK</div>
                                                        <div className="user_info">
                                                            <span>David Nester Birthday</span>
                                                            <p className="text-primary">Today</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="name-first-letter">SOCIAL</li>
                                                <li>
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont success">RU</div>
                                                        <div className="user_info">
                                                            <span>Perfection Simplified</span>
                                                            <p>Jame Smith commented on your status</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="name-first-letter">SEVER STATUS</li>
                                                <li>
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont primary">AU</div>
                                                        <div className="user_info">
                                                            <span>AharlieKane</span>
                                                            <p>Sami is online</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont info">MO</div>
                                                        <div className="user_info">
                                                            <span>Athan Jacoby</span>
                                                            <p>Nargis left 30 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer"></div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="notes">
                                    <div className="card mb-sm-3 mb-md-0 note_card">
                                        <div className="card-header chat-list-header text-center">
                                            <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect fill="#000000" x="4" y="11" width="16" height="2" rx="1" /><rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x="4" y="11" width="16" height="2" rx="1" /></g></svg></a>
                                            <div>
                                                <h6 className="mb-1">Notes</h6>
                                                <p className="mb-0">Add New Nots</p>
                                            </div>
                                            <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24" /><path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" /><path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fill-rule="nonzero" /></g></svg></a>
                                        </div>
                                        <div className="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body2">
                                            <ul className="contacts">
                                                <li className="active">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="user_info">
                                                            <span>New order placed..</span>
                                                            <p>10 Aug 2020</p>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt"></i></a>
                                                            <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex bd-highlight">
                                                        <div className="user_info">
                                                            <span>Youtube, a video-sharing website..</span>
                                                            <p>10 Aug 2020</p>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt"></i></a>
                                                            <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex bd-highlight">
                                                        <div className="user_info">
                                                            <span>john just buy your product..</span>
                                                            <p>10 Aug 2020</p>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt"></i></a>
                                                            <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex bd-highlight">
                                                        <div className="user_info">
                                                            <span>Athan Jacoby</span>
                                                            <p>10 Aug 2020</p>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fas fa-pencil-alt"></i></a>
                                                            <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash"></i></a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header">
                        <div className="header-content">
                            <nav className="navbar navbar-expand">
                                <div className="collapse navbar-collapse justify-content-between">
                                    <div className="header-left">
                                        <div className="header-title">
                                            <h3>File Manager</h3>
                                        </div>
                                    </div>
                                    <ul className="navbar-nav header-right">
                                        <li className="nav-item">
                                            <div className="input-group search-area me-3">
                                                <input type="text" className="form-control" placeholder="Search"></input>
                                                <span className="input-group-text"><a href="javascript:void(0)">
                                                    <svg className="me-3 mb-1 user-search" width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.625 16.3125C4.3875 16.3125 0.9375 12.8625 0.9375 8.625C0.9375 4.3875 4.3875 0.9375 8.625 0.9375C12.8625 0.9375 16.3125 4.3875 16.3125 8.625C16.3125 12.8625 12.8625 16.3125 8.625 16.3125ZM8.625 2.0625C5.0025 2.0625 2.0625 5.01 2.0625 8.625C2.0625 12.24 5.0025 15.1875 8.625 15.1875C12.2475 15.1875 15.1875 12.24 15.1875 8.625C15.1875 5.01 12.2475 2.0625 8.625 2.0625Z" fill="#2696FD" />
                                                        <path d="M16.5001 17.0626C16.3576 17.0626 16.2151 17.0101 16.1026 16.8976L14.6026 15.3976C14.3851 15.1801 14.3851 14.8201 14.6026 14.6026C14.8201 14.3851 15.1801 14.3851 15.3976 14.6026L16.8976 16.1026C17.1151 16.3201 17.1151 16.6801 16.8976 16.8976C16.7851 17.0101 16.6426 17.0626 16.5001 17.0626Z" fill="var(--primary)" />
                                                    </svg>
                                                </a></span>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown notification_dropdown">
                                            <a className="nav-link " href="javascript:void(0);" data-bs-toggle="dropdown">
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11 14.4375C9.1025 14.4375 7.5625 12.8975 7.5625 11C7.5625 9.1025 9.1025 7.5625 11 7.5625C12.8975 7.5625 14.4375 9.1025 14.4375 11C14.4375 12.8975 12.8975 14.4375 11 14.4375ZM11 8.9375C9.86333 8.9375 8.9375 9.86333 8.9375 11C8.9375 12.1367 9.86333 13.0625 11 13.0625C12.1367 13.0625 13.0625 12.1367 13.0625 11C13.0625 9.86333 12.1367 8.9375 11 8.9375Z" fill="var(--primary)" />
                                                    <path d="M13.9424 20.3408C13.7499 20.3408 13.5574 20.3133 13.3649 20.2674C12.7966 20.1116 12.3199 19.7541 12.0174 19.2499L11.9074 19.0666C11.3666 18.1316 10.6241 18.1316 10.0833 19.0666L9.98242 19.2408C9.67992 19.7541 9.20325 20.1208 8.63492 20.2674C8.05742 20.4233 7.46158 20.3408 6.95742 20.0383L5.38075 19.1308C4.82158 18.8099 4.41825 18.2874 4.24409 17.6549C4.07909 17.0224 4.16158 16.3716 4.48242 15.8124C4.74825 15.3449 4.82159 14.9233 4.66575 14.6574C4.50992 14.3916 4.11575 14.2358 3.57492 14.2358C2.23659 14.2358 1.14575 13.1449 1.14575 11.8066V10.1933C1.14575 8.85494 2.23659 7.7641 3.57492 7.7641C4.11575 7.7641 4.50992 7.60827 4.66575 7.34244C4.82159 7.0766 4.75742 6.65494 4.48242 6.18744C4.16158 5.62827 4.07909 4.96827 4.24409 4.34494C4.40909 3.71244 4.81242 3.18994 5.38075 2.8691L6.96658 1.9616C8.00242 1.34744 9.36825 1.70494 9.99158 2.7591L10.1016 2.94244C10.6424 3.87744 11.3849 3.87744 11.9258 2.94244L12.0266 2.76827C12.6499 1.70494 14.0158 1.34744 15.0608 1.97077L16.6374 2.87827C17.1966 3.1991 17.5999 3.7216 17.7741 4.3541C17.9391 4.9866 17.8566 5.63744 17.5357 6.1966C17.2699 6.6641 17.1966 7.08577 17.3524 7.3516C17.5083 7.61744 17.9024 7.77327 18.4433 7.77327C19.7816 7.77327 20.8724 8.8641 20.8724 10.2024V11.8158C20.8724 13.1541 19.7816 14.2449 18.4433 14.2449C17.9024 14.2449 17.5083 14.4008 17.3524 14.6666C17.1966 14.9324 17.2607 15.3541 17.5357 15.8216C17.8566 16.3808 17.9482 17.0408 17.7741 17.6641C17.6091 18.2966 17.2057 18.8191 16.6374 19.1399L15.0516 20.0474C14.7033 20.2399 14.3274 20.3408 13.9424 20.3408ZM10.9999 16.9491C11.8158 16.9491 12.5766 17.4624 13.0991 18.3699L13.1999 18.5441C13.3099 18.7366 13.4933 18.8741 13.7133 18.9291C13.9333 18.9841 14.1533 18.9566 14.3366 18.8466L15.9224 17.9299C16.1608 17.7924 16.3441 17.5633 16.4174 17.2883C16.4908 17.0133 16.4541 16.7291 16.3166 16.4908C15.7941 15.5924 15.7299 14.6666 16.1333 13.9608C16.5366 13.2549 17.3708 12.8516 18.4158 12.8516C19.0024 12.8516 19.4699 12.3841 19.4699 11.7974V10.1841C19.4699 9.6066 19.0024 9.12994 18.4158 9.12994C17.3708 9.12994 16.5366 8.7266 16.1333 8.02077C15.7299 7.31494 15.7941 6.3891 16.3166 5.49077C16.4541 5.25244 16.4908 4.96827 16.4174 4.69327C16.3441 4.41827 16.1699 4.19827 15.9316 4.0516L14.3458 3.1441C13.9516 2.90577 13.4291 3.04327 13.1908 3.4466L13.0899 3.62077C12.5674 4.52827 11.8066 5.0416 10.9908 5.0416C10.1749 5.0416 9.41408 4.52827 8.89158 3.62077L8.79075 3.43744C8.56158 3.05244 8.04825 2.91494 7.65408 3.1441L6.06825 4.06077C5.82992 4.19827 5.64658 4.42744 5.57325 4.70244C5.49992 4.97744 5.53658 5.2616 5.67408 5.49994C6.19658 6.39827 6.26075 7.3241 5.85742 8.02994C5.45408 8.73577 4.61992 9.1391 3.57492 9.1391C2.98825 9.1391 2.52075 9.6066 2.52075 10.1933V11.8066C2.52075 12.3841 2.98825 12.8608 3.57492 12.8608C4.61992 12.8608 5.45408 13.2641 5.85742 13.9699C6.26075 14.6758 6.19658 15.6016 5.67408 16.4999C5.53658 16.7383 5.49992 17.0224 5.57325 17.2974C5.64658 17.5724 5.82075 17.7924 6.05908 17.9391L7.64492 18.8466C7.83742 18.9658 8.06658 18.9933 8.27742 18.9383C8.49742 18.8833 8.68075 18.7366 8.79992 18.5441L8.90075 18.3699C9.42325 17.4716 10.1841 16.9491 10.9999 16.9491Z" fill="var(--primary)" />
                                                </svg>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <div id="DZ_W_TimeLine02" className="widget-timeline dz-scroll style-1  p-3 height370">
                                                    <ul className="timeline">
                                                        <li>
                                                            <div className="timeline-badge primary"></div>
                                                            <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                                <span>10 minutes ago</span>
                                                                <h6 className="mb-0">Youtube, a video-sharing website, goes live <strong className="text-primary">$500</strong>.</h6>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-badge info">
                                                            </div>
                                                            <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                                <span>20 minutes ago</span>
                                                                <h6 className="mb-0">New order placed <strong className="text-info">#XF-2356.</strong></h6>
                                                                <p className="mb-0">Quisque a consequat ante Sit amet magna at volutapt...</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-badge danger">
                                                            </div>
                                                            <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                                <span>30 minutes ago</span>
                                                                <h6 className="mb-0">john just buy your product <strong className="text-warning">Sell $250</strong></h6>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-badge success">
                                                            </div>
                                                            <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                                <span>15 minutes ago</span>
                                                                <h6 className="mb-0">StumbleUpon is acquired by eBay. </h6>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-badge warning">
                                                            </div>
                                                            <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                                <span>20 minutes ago</span>
                                                                <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-badge dark">
                                                            </div>
                                                            <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                                <span>20 minutes ago</span>
                                                                <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown notification_dropdown">
                                            <a className="nav-link bell-icon " href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
                                                <svg className="bell-animi" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.0183 18.8193C8.88246 18.8193 6.74663 18.4801 4.72079 17.8018C3.95079 17.5359 3.36413 16.9951 3.10746 16.2893C2.84163 15.5834 2.93329 14.8043 3.35496 14.1076L4.40913 12.3568C4.62913 11.9901 4.83079 11.2568 4.83079 10.8259V8.17676C4.83079 4.76676 7.6083 1.98926 11.0183 1.98926C14.4283 1.98926 17.2058 4.76676 17.2058 8.17676V10.8259C17.2058 11.2476 17.4075 11.9901 17.6275 12.3659L18.6725 14.1076C19.0666 14.7676 19.14 15.5651 18.8741 16.2893C18.6083 17.0134 18.0308 17.5634 17.3066 17.8018C15.29 18.4801 13.1541 18.8193 11.0183 18.8193ZM11.0183 3.36426C8.36913 3.36426 6.20579 5.51842 6.20579 8.17676V10.8259C6.20579 11.4951 5.93079 12.4851 5.59163 13.0626L4.53746 14.8134C4.33579 15.1526 4.28079 15.5101 4.39996 15.8126C4.50996 16.1243 4.78496 16.3626 5.16079 16.4909C8.99246 17.7743 13.0533 17.7743 16.885 16.4909C17.215 16.3809 17.4716 16.1334 17.5908 15.8034C17.71 15.4734 17.6825 15.1159 17.4991 14.8134L16.445 13.0626C16.0966 12.4668 15.8308 11.4859 15.8308 10.8168V8.17676C15.8308 5.51842 13.6766 3.36426 11.0183 3.36426Z" fill="var(--primary)" />
                                                    <path d="M12.7232 3.61203C12.6591 3.61203 12.5949 3.60286 12.5307 3.58453C12.2649 3.5112 12.0082 3.4562 11.7607 3.41953C10.9816 3.3187 10.2299 3.3737 9.52407 3.58453C9.2674 3.66703 8.9924 3.58453 8.81823 3.39203C8.64407 3.19953 8.58907 2.92453 8.6899 2.67703C9.06573 1.71453 9.9824 1.08203 11.0274 1.08203C12.0724 1.08203 12.9891 1.70536 13.3649 2.67703C13.4566 2.92453 13.4107 3.19953 13.2366 3.39203C13.0991 3.5387 12.9066 3.61203 12.7232 3.61203Z" fill="var(--primary)" />
                                                    <path d="M11.0183 20.9092C10.1108 20.9092 9.23081 20.5425 8.58914 19.9008C7.94748 19.2592 7.58081 18.3792 7.58081 17.4717H8.95581C8.95581 18.0125 9.17581 18.5442 9.56081 18.9292C9.94581 19.3142 10.4775 19.5342 11.0183 19.5342C12.155 19.5342 13.0808 18.6083 13.0808 17.4717H14.4558C14.4558 19.3692 12.9158 20.9092 11.0183 20.9092Z" fill="var(--primary)" />
                                                </svg>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end of-visible">
                                                <div className="dropdown-header">
                                                    <h4 className="title mb-0">Notification</h4>
                                                    <a href="javascript:void(0);" className="d-none"><i className="flaticon-381-settings-6"></i></a>
                                                </div>
                                                <div id="DZ_W_Notification1" className="widget-media dz-scroll p-3" style={{ height: 380 }}>
                                                    <ul className="timeline">
                                                        <li>
                                                            <div className="timeline-panel">
                                                                <div className="media me-2">
                                                                    <img alt="image" width="50" src="images/avatar/1.jpg"></img>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                                    <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-panel">
                                                                <div className="media me-2 media-info">
                                                                    KG
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-1">Resport created successfully</h6>
                                                                    <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-panel">
                                                                <div className="media me-2 media-success">
                                                                    <i className="fa fa-home"></i>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                                    <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-panel">
                                                                <div className="media me-2">
                                                                    <img alt="image" width="50" src="images/avatar/1.jpg"></img>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                                    <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-panel">
                                                                <div className="media me-2 media-danger">
                                                                    KG
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-1">Resport created successfully</h6>
                                                                    <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-panel">
                                                                <div className="media me-2 media-primary">
                                                                    <i className="fa fa-home"></i>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                                    <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <a className="all-notification" href="javascript:void(0);">See all notifications <i className="ti-arrow-end"></i></a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown notification_dropdown">
                                            <a className="nav-link bell-link" href="javascript:void(0);">
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.5833 19.4788H6.41659C3.07075 19.4788 1.14575 17.5538 1.14575 14.208V7.79134C1.14575 4.44551 3.07075 2.52051 6.41659 2.52051H15.5833C18.9291 2.52051 20.8541 4.44551 20.8541 7.79134V14.208C20.8541 17.5538 18.9291 19.4788 15.5833 19.4788ZM6.41659 3.89551C3.79492 3.89551 2.52075 5.16967 2.52075 7.79134V14.208C2.52075 16.8297 3.79492 18.1038 6.41659 18.1038H15.5833C18.2049 18.1038 19.4791 16.8297 19.4791 14.208V7.79134C19.4791 5.16967 18.2049 3.89551 15.5833 3.89551H6.41659Z" fill="var(--primary)" />
                                                    <path d="M10.9999 11.797C10.2299 11.797 9.45071 11.5587 8.85488 11.0728L5.98571 8.78115C5.69238 8.54282 5.63738 8.11198 5.87571 7.81865C6.11405 7.52532 6.54488 7.47032 6.83822 7.70865L9.70737 10.0003C10.404 10.5595 11.5865 10.5595 12.2832 10.0003L15.1524 7.70865C15.4457 7.47032 15.8857 7.51615 16.1149 7.81865C16.3532 8.11198 16.3074 8.55199 16.0049 8.78115L13.1357 11.0728C12.549 11.5587 11.7699 11.797 10.9999 11.797Z" fill="var(--primary)" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <div className="dropdown header-profile2">
                                                <a className="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <div className="header-info2 d-flex align-items-center">
                                                        <div className="d-flex align-items-center sidebar-info">
                                                            <div>
                                                                <h4 className="mb-0">Nella Vita</h4>
                                                                <span className="d-block text-end">Admin</span>
                                                            </div>
                                                        </div>
                                                        <img src="images/user.jpg" alt=""></img>
                                                    </div>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end" >
                                                    <a href="app-profile.html" className="dropdown-item ai-icon ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="svg-main-icon">
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <polygon points="0 0 24 0 24 24 0 24" />
                                                                <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                                <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="var(--primary)" fill-rule="nonzero" />
                                                            </g>
                                                        </svg>
                                                        <span className="ms-2">Profile </span>
                                                    </a>
                                                    <a href="chat.html" className="dropdown-item ai-icon ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="svg-main-icon">
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <rect x="0" y="0" width="24" height="24" />
                                                                <path d="M21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L5,18 C3.34314575,18 2,16.6568542 2,15 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 Z M6.16794971,10.5547002 C7.67758127,12.8191475 9.64566871,14 12,14 C14.3543313,14 16.3224187,12.8191475 17.8320503,10.5547002 C18.1384028,10.0951715 18.0142289,9.47430216 17.5547002,9.16794971 C17.0951715,8.86159725 16.4743022,8.98577112 16.1679497,9.4452998 C15.0109146,11.1808525 13.6456687,12 12,12 C10.3543313,12 8.9890854,11.1808525 7.83205029,9.4452998 C7.52569784,8.98577112 6.90482849,8.86159725 6.4452998,9.16794971 C5.98577112,9.47430216 5.86159725,10.0951715 6.16794971,10.5547002 Z" fill="var(--primary)" />
                                                            </g>
                                                        </svg>
                                                        <span className="ms-2">Message </span>
                                                    </a>
                                                    <a href="email-inbox.html" className="dropdown-item ai-icon ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="svg-main-icon">
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <rect x="0" y="0" width="24" height="24" />
                                                                <path d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z" fill="#000000" />
                                                                <circle fill="var(--primary)" opacity="0.3" cx="19.5" cy="17.5" r="2.5" />
                                                            </g>
                                                        </svg>
                                                        <span className="ms-2">Notification </span>
                                                    </a>
                                                    <a href="javascript:void(0);" className="dropdown-item ai-icon ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="svg-main-icon">
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <rect x="0" y="0" width="24" height="24" />
                                                                <path d="M18.6225,9.75 L18.75,9.75 C19.9926407,9.75 21,10.7573593 21,12 C21,13.2426407 19.9926407,14.25 18.75,14.25 L18.6854912,14.249994 C18.4911876,14.250769 18.3158978,14.366855 18.2393549,14.5454486 C18.1556809,14.7351461 18.1942911,14.948087 18.3278301,15.0846699 L18.372535,15.129375 C18.7950334,15.5514036 19.03243,16.1240792 19.03243,16.72125 C19.03243,17.3184208 18.7950334,17.8910964 18.373125,18.312535 C17.9510964,18.7350334 17.3784208,18.97243 16.78125,18.97243 C16.1840792,18.97243 15.6114036,18.7350334 15.1896699,18.3128301 L15.1505513,18.2736469 C15.008087,18.1342911 14.7951461,18.0956809 14.6054486,18.1793549 C14.426855,18.2558978 14.310769,18.4311876 14.31,18.6225 L14.31,18.75 C14.31,19.9926407 13.3026407,21 12.06,21 C10.8173593,21 9.81,19.9926407 9.81,18.75 C9.80552409,18.4999185 9.67898539,18.3229986 9.44717599,18.2361469 C9.26485393,18.1556809 9.05191298,18.1942911 8.91533009,18.3278301 L8.870625,18.372535 C8.44859642,18.7950334 7.87592081,19.03243 7.27875,19.03243 C6.68157919,19.03243 6.10890358,18.7950334 5.68746499,18.373125 C5.26496665,17.9510964 5.02757002,17.3784208 5.02757002,16.78125 C5.02757002,16.1840792 5.26496665,15.6114036 5.68716991,15.1896699 L5.72635306,15.1505513 C5.86570889,15.008087 5.90431906,14.7951461 5.82064513,14.6054486 C5.74410223,14.426855 5.56881236,14.310769 5.3775,14.31 L5.25,14.31 C4.00735931,14.31 3,13.3026407 3,12.06 C3,10.8173593 4.00735931,9.81 5.25,9.81 C5.50008154,9.80552409 5.67700139,9.67898539 5.76385306,9.44717599 C5.84431906,9.26485393 5.80570889,9.05191298 5.67216991,8.91533009 L5.62746499,8.870625 C5.20496665,8.44859642 4.96757002,7.87592081 4.96757002,7.27875 C4.96757002,6.68157919 5.20496665,6.10890358 5.626875,5.68746499 C6.04890358,5.26496665 6.62157919,5.02757002 7.21875,5.02757002 C7.81592081,5.02757002 8.38859642,5.26496665 8.81033009,5.68716991 L8.84944872,5.72635306 C8.99191298,5.86570889 9.20485393,5.90431906 9.38717599,5.82385306 L9.49484664,5.80114977 C9.65041313,5.71688974 9.7492905,5.55401473 9.75,5.3775 L9.75,5.25 C9.75,4.00735931 10.7573593,3 12,3 C13.2426407,3 14.25,4.00735931 14.25,5.25 L14.249994,5.31450877 C14.250769,5.50881236 14.366855,5.68410223 14.552824,5.76385306 C14.7351461,5.84431906 14.948087,5.80570889 15.0846699,5.67216991 L15.129375,5.62746499 C15.5514036,5.20496665 16.1240792,4.96757002 16.72125,4.96757002 C17.3184208,4.96757002 17.8910964,5.20496665 18.312535,5.626875 C18.7350334,6.04890358 18.97243,6.62157919 18.97243,7.21875 C18.97243,7.81592081 18.7350334,8.38859642 18.3128301,8.81033009 L18.2736469,8.84944872 C18.1342911,8.99191298 18.0956809,9.20485393 18.1761469,9.38717599 L18.1988502,9.49484664 C18.2831103,9.65041313 18.4459853,9.7492905 18.6225,9.75 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                                <path d="M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000" />
                                                            </g>
                                                        </svg>
                                                        <span className="ms-2">Settings </span>
                                                    </a>
                                                    <a href="page-login.html" className="dropdown-item ai-icon">
                                                        <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                                        <span className="ms-2">Logout </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="deznav">
                        <div className="deznav-scroll">
                            <ul className="metismenu" id="menu">
                                <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                                    <div className="menu-icon">
                                        <svg id="icon-home" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.3077 20.8538H5.69266C3.181 20.8538 1.146 18.8097 1.146 16.298V9.50548C1.146 8.25882 1.916 6.69132 2.906 5.92132L7.84683 2.07132C9.33183 0.916317 11.706 0.861317 13.246 1.94298L18.911 5.91215C20.0018 6.67298 20.8543 8.30465 20.8543 9.63382V16.3072C20.8543 18.8097 18.8193 20.8538 16.3077 20.8538ZM8.69016 3.15298L3.74933 7.00298C3.0985 7.51632 2.521 8.68048 2.521 9.50548V16.298C2.521 18.0488 3.94183 19.4788 5.69266 19.4788H16.3077C18.0585 19.4788 19.4793 18.058 19.4793 16.3072V9.63382C19.4793 8.75382 18.8468 7.53465 18.1227 7.03965L12.4577 3.07048C11.4127 2.33715 9.68933 2.37382 8.69016 3.15298Z" fill="#9C99FF" />
                                            <path d="M11 17.1875C10.6242 17.1875 10.3125 16.8758 10.3125 16.5V13.75C10.3125 13.3742 10.6242 13.0625 11 13.0625C11.3758 13.0625 11.6875 13.3742 11.6875 13.75V16.5C11.6875 16.8758 11.3758 17.1875 11 17.1875Z" fill="#9C99FF" />
                                        </svg>
                                    </div>
                                    <span className="nav-text">Dashboard</span>
                                </a>
                                    <ul aria-expanded="false">
                                        <li><a href="index.html">Dashboard Light</a></li>
                                        <li><a href="index-2.html">Dashboard Dark</a></li>
                                        <li><a href="index-3.html">Dashboard 2</a></li>
                                        <li><a href="banking.html">Banking</a></li>
                                        <li><a href="ticketing.html">Ticketing</a></li>
                                        <li><a href="crypto.html">Crypto</a></li>
                                        <li><a href="invoice.html">Invoice</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="kanban.html">Kanban</a></li>
                                    </ul>

                                </li>
                                <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                                    <div className="menu-icon">
                                        <svg id="icon-home1" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.7502 20.8538H8.25016C3.27266 20.8538 1.146 18.7272 1.146 13.7497V8.24967C1.146 3.27217 3.27266 1.14551 8.25016 1.14551H13.7502C18.7277 1.14551 20.8543 3.27217 20.8543 8.24967V13.7497C20.8543 18.7272 18.7277 20.8538 13.7502 20.8538ZM8.25016 2.52051C4.02433 2.52051 2.521 4.02384 2.521 8.24967V13.7497C2.521 17.9755 4.02433 19.4788 8.25016 19.4788H13.7502C17.976 19.4788 19.4793 17.9755 19.4793 13.7497V8.24967C19.4793 4.02384 17.976 2.52051 13.7502 2.52051H8.25016Z" fill="#9C99FF" />
                                            <path d="M14.2817 17.6463C13.9059 17.6463 13.5942 17.3346 13.5942 16.9588V13.3838C13.5942 13.008 13.9059 12.6963 14.2817 12.6963C14.6576 12.6963 14.9692 13.008 14.9692 13.3838V16.9588C14.9692 17.3346 14.6576 17.6463 14.2817 17.6463Z" fill="#9C99FF" />
                                            <path d="M14.2817 7.51699C13.9059 7.51699 13.5942 7.20533 13.5942 6.82949V5.04199C13.5942 4.66616 13.9059 4.35449 14.2817 4.35449C14.6576 4.35449 14.9692 4.66616 14.9692 5.04199V6.82949C14.9692 7.20533 14.6576 7.51699 14.2817 7.51699Z" fill="#9C99FF" />
                                            <path d="M14.2818 12.2833C12.5859 12.2833 11.2109 10.9083 11.2109 9.21244C11.2109 7.5166 12.5859 6.1416 14.2818 6.1416C15.9776 6.1416 17.3526 7.5166 17.3526 9.21244C17.3526 10.9083 15.9684 12.2833 14.2818 12.2833ZM14.2818 7.5166C13.3468 7.5166 12.5859 8.27744 12.5859 9.21244C12.5859 10.1474 13.3468 10.9083 14.2818 10.9083C15.2168 10.9083 15.9776 10.1474 15.9776 9.21244C15.9776 8.27744 15.2076 7.5166 14.2818 7.5166Z" fill="#9C99FF" />
                                            <path d="M7.71826 17.6459C7.34243 17.6459 7.03076 17.3342 7.03076 16.9584V15.1709C7.03076 14.7951 7.34243 14.4834 7.71826 14.4834C8.0941 14.4834 8.40576 14.7951 8.40576 15.1709V16.9584C8.40576 17.3342 8.10326 17.6459 7.71826 17.6459Z" fill="#9C99FF" />
                                            <path d="M7.71826 9.30449C7.34243 9.30449 7.03076 8.99283 7.03076 8.61699V5.04199C7.03076 4.66616 7.34243 4.35449 7.71826 4.35449C8.0941 4.35449 8.40576 4.66616 8.40576 5.04199V8.61699C8.40576 8.99283 8.10326 9.30449 7.71826 9.30449Z" fill="#9C99FF" />
                                            <path d="M7.71829 15.8585C6.02246 15.8585 4.64746 14.4835 4.64746 12.7876C4.64746 11.0918 6.02246 9.7168 7.71829 9.7168C9.41413 9.7168 10.7891 11.0918 10.7891 12.7876C10.7891 14.4835 9.41413 15.8585 7.71829 15.8585ZM7.71829 11.0918C6.78329 11.0918 6.02246 11.8526 6.02246 12.7876C6.02246 13.7226 6.78329 14.4835 7.71829 14.4835C8.65329 14.4835 9.41413 13.7226 9.41413 12.7876C9.41413 11.8526 8.66246 11.0918 7.71829 11.0918Z" fill="#9C99FF" />
                                        </svg>
                                    </div>
                                    <span className="nav-text">File Manager</span>
                                </a>
                                    <ul aria-expanded="false">
                                        <li><a href="file-manager.html">File Manager</a></li>
                                        <li><a href="user.html">User</a></li>
                                        <li><a href="celandar.html">Calendar</a></li>
                                        <li><a href="to-do-list.html">To Do List</a></li>
                                        <li><a href="chat.html">Chat</a></li>
                                        <li><a href="activity.html">Activity</a></li>
                                    </ul>
                                </li>
                                <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                                    <div className="menu-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" id="cms-icon" className="cms-svg" viewBox="0 0 60 60" width="22" height="22"><path d="M30,10A20,20,0,1,0,50,30,20.023,20.023,0,0,0,30,10Zm0,38A18,18,0,1,1,48,30,18.021,18.021,0,0,1,30,48Z" /><path d="M59.849,27.168a2.8,2.8,0,0,0-2.336-2.415l-3.183-.521a24.733,24.733,0,0,0-3.052-7.351l1.88-2.626A2.8,2.8,0,0,0,53.1,10.88a24.812,24.812,0,0,0-1.9-2.086A28.1,28.1,0,0,0,49.1,6.878a2.782,2.782,0,0,0-3.351-.039L43.119,8.722A24.733,24.733,0,0,0,35.768,5.67l-.521-3.182A2.8,2.8,0,0,0,32.819.149a26.3,26.3,0,0,0-5.651,0,2.8,2.8,0,0,0-2.415,2.336L24.232,5.67a24.733,24.733,0,0,0-7.351,3.052l-2.626-1.88a2.789,2.789,0,0,0-3.374.053A27.541,27.541,0,0,0,8.805,8.783a24.827,24.827,0,0,0-1.918,2.108,2.793,2.793,0,0,0-.048,3.36l1.883,2.63A24.733,24.733,0,0,0,5.67,24.232l-3.182.521A2.8,2.8,0,0,0,.149,27.181a26.715,26.715,0,0,0,0,5.654,2.8,2.8,0,0,0,2.336,2.412l3.183.521a24.733,24.733,0,0,0,3.052,7.351L6.851,45.734A2.8,2.8,0,0,0,6.9,49.12c.561.687,1.2,1.389,1.9,2.086A25.306,25.306,0,0,0,10.9,53.122a2.756,2.756,0,0,0,3.351.039l2.629-1.883a24.733,24.733,0,0,0,7.351,3.052l.521,3.182a2.8,2.8,0,0,0,2.428,2.339,26.687,26.687,0,0,0,5.651,0,2.8,2.8,0,0,0,2.415-2.336l.521-3.183a24.733,24.733,0,0,0,7.351-3.052l2.626,1.88a2.765,2.765,0,0,0,3.387-.063,25.238,25.238,0,0,0,2.074-1.888q1.047-1.047,1.916-2.108a2.789,2.789,0,0,0,.039-3.35l-1.883-2.63a24.733,24.733,0,0,0,3.052-7.351l3.182-.521a2.8,2.8,0,0,0,2.339-2.428,26.741,26.741,0,0,0,0-5.638ZM57.862,32.6a.81.81,0,0,1-.674.669l-3.85.631a1,1,0,0,0-.817.785A22.766,22.766,0,0,1,49.236,42.6a1,1,0,0,0,.023,1.13l2.287,3.2a.791.791,0,0,1,.01.926,25.934,25.934,0,0,1-1.765,1.938,23.493,23.493,0,0,1-1.915,1.746.789.789,0,0,1-.964,0l-3.179-2.275a1,1,0,0,0-1.13-.023,22.766,22.766,0,0,1-7.915,3.285,1,1,0,0,0-.785.817l-.631,3.851a.782.782,0,0,1-.654.671,24.514,24.514,0,0,1-5.223,0,.786.786,0,0,1-.667-.674l-.631-3.85a1,1,0,0,0-.785-.817A22.766,22.766,0,0,1,17.4,49.236a1,1,0,0,0-1.13.023l-3.182,2.278a.782.782,0,0,1-.928.028,22.89,22.89,0,0,1-1.949-1.774,25.814,25.814,0,0,1-1.746-1.915.8.8,0,0,1,0-.963l2.275-3.18a1,1,0,0,0,.023-1.13,22.766,22.766,0,0,1-3.285-7.915,1,1,0,0,0-.817-.785l-3.851-.631a.806.806,0,0,1-.671-.654,24.6,24.6,0,0,1,0-5.223.786.786,0,0,1,.674-.667l3.85-.631a1,1,0,0,0,.817-.785A22.766,22.766,0,0,1,10.764,17.4a1,1,0,0,0-.023-1.13L8.463,13.083a.8.8,0,0,1-.019-.937,22.471,22.471,0,0,1,1.765-1.938,25.613,25.613,0,0,1,1.915-1.746.8.8,0,0,1,.964,0l3.179,2.275a1,1,0,0,0,1.13.023,22.766,22.766,0,0,1,7.915-3.285,1,1,0,0,0,.785-.817l.631-3.851a.782.782,0,0,1,.654-.671,24.514,24.514,0,0,1,5.223,0,.786.786,0,0,1,.667.674l.631,3.85a1,1,0,0,0,.785.817A22.766,22.766,0,0,1,42.6,10.764a1,1,0,0,0,1.13-.023l3.182-2.278a.794.794,0,0,1,.94-.018A25.975,25.975,0,0,1,49.8,10.219a22.447,22.447,0,0,1,1.744,1.916.8.8,0,0,1-.013.952l-2.275,3.18a1,1,0,0,0-.023,1.13,22.766,22.766,0,0,1,3.285,7.915,1,1,0,0,0,.817.785l3.851.631a.786.786,0,0,1,.672.661,24.605,24.605,0,0,1,0,5.214Z" /><path d="M20,25a2,2,0,0,1,2,2,1,1,0,0,0,2,0,4,4,0,0,0-8,0v6a4,4,0,0,0,8,0,1,1,0,0,0-2,0,2,2,0,0,1-4,0V27A2,2,0,0,1,20,25Z" /><path d="M33.179,23.016a1,1,0,0,0-1.116.632L30,29.152l-2.063-5.5A1,1,0,0,0,26,24V36a1,1,0,0,0,2,0V29.515l1.063,2.837a1,1,0,0,0,1.874,0L32,29.515V36a1,1,0,0,0,2,0V24A1,1,0,0,0,33.179,23.016Z" /><path d="M36,27a4,4,0,0,0,4,4,2,2,0,1,1-2,2,1,1,0,0,0-2,0,4,4,0,1,0,4-4,2,2,0,1,1,2-2,1,1,0,0,0,2,0,4,4,0,0,0-8,0Z" /></svg>
                                    </div>
                                    <span className="nav-text">CMS</span>
                                </a>
                                    <ul aria-expanded="false">
                                        <li><a href="content.html">Content</a></li>
                                        <li><a href="menu.html">Menu</a></li>
                                        <li><a href="email-template.html">Email Template</a></li>
                                        <li><a href="blog.html">Blog</a></li>

                                    </ul>
                                </li>
                                <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                                    <div className="menu-icon">
                                        <svg id="icon-apps" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 12.1921C10.8808 12.1921 10.7617 12.1646 10.6517 12.1004L2.5575 7.41627C2.23666 7.22377 2.1175 6.8021 2.31 6.4721C2.5025 6.1421 2.92416 6.03211 3.25416 6.22461L11 10.7071L18.7 6.25211C19.03 6.05961 19.4517 6.17877 19.6442 6.49961C19.8367 6.82961 19.7175 7.25127 19.3967 7.44377L11.3575 12.1004C11.2383 12.1554 11.1192 12.1921 11 12.1921Z" fill="#9C99FF" />
                                            <path d="M11 20.4968C10.6242 20.4968 10.3125 20.1851 10.3125 19.8093V11.4951C10.3125 11.1193 10.6242 10.8076 11 10.8076C11.3758 10.8076 11.6875 11.1193 11.6875 11.4951V19.8093C11.6875 20.1851 11.3758 20.4968 11 20.4968Z" fill="#9C99FF" />
                                            <path d="M11.0001 20.8538C10.1934 20.8538 9.39592 20.6797 8.76342 20.3313L3.86842 17.6088C2.53925 16.8755 1.50342 15.1063 1.50342 13.5847V8.40551C1.50342 6.88384 2.53925 5.12384 3.86842 4.38134L8.76342 1.66801C10.0193 0.971341 11.9809 0.971341 13.2368 1.66801L18.1318 4.39051C19.4609 5.12384 20.4968 6.89301 20.4968 8.41467V13.5938C20.4968 15.1155 19.4609 16.8755 18.1318 17.618L13.2368 20.3313C12.6043 20.6797 11.8068 20.8538 11.0001 20.8538ZM11.0001 2.52051C10.4226 2.52051 9.85425 2.63967 9.43258 2.86884L4.53758 5.59134C3.65758 6.07717 2.87842 7.39717 2.87842 8.40551V13.5847C2.87842 14.593 3.65758 15.913 4.53758 16.408L9.43258 19.1305C10.2668 19.598 11.7334 19.598 12.5676 19.1305L17.4626 16.408C18.3426 15.913 19.1218 14.6022 19.1218 13.5847V8.40551C19.1218 7.39717 18.3426 6.07717 17.4626 5.58217L12.5676 2.85967C12.1459 2.63967 11.5776 2.52051 11.0001 2.52051Z" fill="#9C99FF" />
                                        </svg>
                                    </div>
                                    <span className="nav-text">Apps</span>
                                </a>
                                    <ul aria-expanded="false">
                                        <li><a href="./app-profile.html">Profile</a></li>
                                        <li><a href="./edit-profile.html">Edit Profile</a></li>
                                        <li><a href="./post-details.html">Post Details</a></li>
                                        <li><a className="has-arrow" href="javascript:void(0);" aria-expanded="false">Email</a>
                                            <ul aria-expanded="false">
                                                <li><a href="./email-compose.html">Compose</a></li>
                                                <li><a href="./email-inbox.html">Inbox</a></li>
                                                <li><a href="./email-read.html">Read</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="./app-calender.html">Calendar</a></li>
                                        <li><a className="has-arrow" href="javascript:void(0);" aria-expanded="false">Shop</a>
                                            <ul aria-expanded="false">
                                                <li><a href="./ecom-product-grid.html">Product Grid</a></li>
                                                <li><a href="./ecom-product-list.html">Product List</a></li>
                                                <li><a href="./ecom-product-detail.html">Product Details</a></li>
                                                <li><a href="./ecom-product-order.html">Order</a></li>
                                                <li><a href="./ecom-checkout.html">Checkout</a></li>
                                                <li><a href="./ecom-invoice.html">Invoice</a></li>
                                                <li><a href="./ecom-customers.html">Customers</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                                    <div className="menu-icon">
                                        <svg id="icon-chart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="22" height="22" stroke-width="3"><g id="_17_Pie_Chart" data-name="17 Pie Chart"><path d="M4.648,44.321C-3.759,25.663,9.471,3.466,29.933,2.083A1.017,1.017,0,0,1,31,3.08V29.8a1,1,0,0,1-.5.866L6.06,44.776A1.016,1.016,0,0,1,4.648,44.321ZM29,4.17C10.893,6.094-.809,25.566,6.036,42.48L29,29.223Zm1.5,26.5L6.06,44.776a.922.922,0,0,1-1.412-.456M32,62A29.881,29.881,0,0,1,6.6,47.963a1.015,1.015,0,0,1,.346-1.4L31,32.684a1,1,0,0,1,1,0l24.78,14.31a1.015,1.015,0,0,1,.336,1.414A29.94,29.94,0,0,1,32,62ZM8.867,47.767a27.995,27.995,0,0,0,45.98.42L31.5,34.7ZM57.73,45.236,33.5,31.246a1,1,0,0,1-.5-.866V3.08a1.017,1.017,0,0,1,1.067-1C54.714,3.479,67.988,26.091,59.134,44.8A.968.968,0,0,1,57.73,45.236ZM35,29.8,57.772,42.951C65.015,25.99,53.3,6.114,35,4.17Z" fill="#9C99FF" /></g></svg>
                                    </div>
                                    <span className="nav-text">Charts</span>
                                </a>
                                    <ul aria-expanded="false">
                                        <li><a href="./chart-flot.html">Flot</a></li>
                                        <li><a href="./chart-morris.html">Morris</a></li>
                                        <li><a href="./chart-chartjs.html">Chartjs</a></li>
                                        <li><a href="./chart-chartist.html">Chartist</a></li>
                                        <li><a href="./chart-sparkline.html">Sparkline</a></li>
                                        <li><a href="./chart-peity.html">Peity</a></li>
                                    </ul>
                                </li>
                                <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                                    <div className="menu-icon">
                                        <svg id="icon-bootstrap" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.50026 20.8544C5.22526 20.8544 4.93193 20.827 4.6386 20.772C4.48276 20.7353 4.34526 20.6986 4.20776 20.6619C4.05193 20.6161 3.90525 20.5611 3.76775 20.5061C3.73108 20.4969 3.70361 20.4786 3.67611 20.4694C3.35527 20.3044 3.08026 20.1395 2.83276 19.9561C2.81443 19.947 2.80527 19.9286 2.78694 19.9194C2.64944 19.8094 2.52109 19.6995 2.40193 19.5711C2.27359 19.4336 2.18192 19.3236 2.08109 19.2136C1.87025 18.9386 1.69609 18.6636 1.54026 18.3428C1.52192 18.3153 1.51278 18.2786 1.50361 18.2419C1.44861 18.1136 1.40276 17.9853 1.36609 17.8478C1.31109 17.6553 1.27442 17.5269 1.24692 17.3894C1.18275 17.0686 1.15527 16.7844 1.15527 16.5094V4.13444C1.15527 2.38361 2.38361 1.15527 4.13444 1.15527H6.88444C8.63527 1.15527 9.86361 2.38361 9.86361 4.13444V16.5003C9.86361 17.6369 9.4236 18.7186 8.6261 19.5344C8.47944 19.6811 8.36942 19.7819 8.26859 19.8644C7.97526 20.1211 7.59944 20.3503 7.1961 20.5153C7.10444 20.552 6.99443 20.5978 6.87526 20.6436C6.4261 20.7811 5.9586 20.8544 5.50026 20.8544ZM4.34526 19.2503C4.43692 19.2869 4.52861 19.3145 4.62027 19.342C4.72111 19.3695 4.82193 19.3969 4.92276 19.4244C5.42693 19.5161 5.96777 19.4886 6.39861 19.342C6.46278 19.3145 6.55442 19.2869 6.63692 19.2503C6.93026 19.1311 7.16859 18.9845 7.37942 18.8103C7.47109 18.737 7.53527 18.6728 7.59944 18.6178C8.17694 18.0219 8.47943 17.2886 8.47943 16.5094V4.13444C8.47943 3.14444 7.86527 2.53027 6.87526 2.53027H4.12526C3.13526 2.53027 2.5211 3.14444 2.5211 4.13444V16.5003C2.5211 16.6928 2.53944 16.8944 2.58527 17.1053C2.6036 17.1878 2.63109 17.2886 2.65859 17.3986C2.69526 17.4994 2.72277 17.5819 2.75944 17.6736C2.77777 17.7011 2.78692 17.7286 2.79609 17.7469C2.80525 17.7653 2.81442 17.7928 2.82359 17.8111C2.93359 18.0128 3.04361 18.1869 3.16278 18.3428C3.22694 18.4161 3.30944 18.5078 3.39194 18.5994C3.49278 18.7094 3.57526 18.7736 3.66693 18.8469C3.6761 18.8561 3.69444 18.8653 3.70361 18.8744C3.85027 18.9844 4.01526 19.0853 4.20776 19.1861C4.22609 19.1953 4.24443 19.1953 4.26276 19.2044C4.28109 19.2136 4.30859 19.2319 4.34526 19.2503Z" fill="#9C99FF" />
                                            <path d="M17.875 20.8544H5.5C5.12417 20.8544 4.8125 20.5428 4.8125 20.1669C4.8125 19.7911 5.12417 19.4794 5.5 19.4794C5.82083 19.4794 6.13251 19.4336 6.39834 19.342C6.46251 19.3145 6.55416 19.2869 6.63666 19.2503C6.92999 19.1311 7.16832 18.9844 7.37916 18.8103C7.47082 18.7369 7.53501 18.6728 7.59917 18.6178L13.8692 12.3569C13.9975 12.2286 14.1717 12.1553 14.355 12.1553H17.875C19.6258 12.1553 20.8542 13.3836 20.8542 15.1344V17.8844C20.8542 19.6261 19.6258 20.8544 17.875 20.8544ZM8.67166 19.4794H17.875C18.865 19.4794 19.4792 18.8653 19.4792 17.8753V15.1253C19.4792 14.1353 18.865 13.5211 17.875 13.5211H14.6392L8.67166 19.4794Z" fill="#9C99FF" />
                                            <path d="M4.40902 20.6894C4.34486 20.6894 4.2807 20.6802 4.21653 20.6619C3.5382 20.4602 2.91487 20.0844 2.41987 19.5802C1.92487 19.0944 1.54903 18.471 1.34736 17.7927C1.23736 17.426 1.43903 17.0502 1.80569 16.9402C2.17236 16.8302 2.5482 17.0319 2.66736 17.3894C2.9607 18.3244 3.69402 19.0577 4.62902 19.351C4.98652 19.461 5.1882 19.846 5.0782 20.2127C4.97737 20.4969 4.70236 20.6894 4.40902 20.6894Z" fill="#9C99FF" />
                                            <path d="M8.12148 19.7444C7.94731 19.7444 7.77315 19.6803 7.63565 19.5428C7.36982 19.277 7.36067 18.8461 7.6265 18.5711C8.1765 18.0119 8.47899 17.2694 8.47899 16.4903V7.63528C8.47899 7.45195 8.55233 7.27778 8.68066 7.14945L11.1648 4.66527C12.3657 3.46444 14.1807 3.46444 15.3815 4.66527L17.3248 6.60862C18.5623 7.84612 18.5623 9.58777 17.3248 10.8253L8.60734 19.5336C8.46984 19.6803 8.29565 19.7444 8.12148 19.7444ZM9.85399 7.9286V16.3528L16.3532 9.86277C17.0498 9.16611 17.0498 8.29528 16.3532 7.58944L14.4098 5.64611C13.7223 4.95861 12.824 4.95861 12.1365 5.64611L9.85399 7.9286Z" fill="#9C99FF" />
                                            <path d="M5.49967 18.1038C4.61967 18.1038 3.89551 17.3797 3.89551 16.4997C3.89551 15.6197 4.61967 14.8955 5.49967 14.8955C6.37967 14.8955 7.10384 15.6197 7.10384 16.4997C7.10384 17.3797 6.37967 18.1038 5.49967 18.1038ZM5.49967 16.2705C5.37134 16.2705 5.27051 16.3713 5.27051 16.4997C5.27051 16.7563 5.72884 16.7563 5.72884 16.4997C5.72884 16.3713 5.62801 16.2705 5.49967 16.2705Z" fill="#9C99FF" />
                                        </svg>
                                    </div>
                                    <span className="nav-text">Bootstrap</span>
                                </a>
                                    <ul aria-expanded="false">
                                        <li><a href="./ui-accordion.html">Accordion</a></li>
                                        <li><a href="./ui-alert.html">Alert</a></li>
                                        <li><a href="./ui-badge.html">Badge</a></li>
                                        <li><a href="./ui-button.html">Button</a></li>
                                        <li><a href="./ui-modal.html">Modal</a></li>
                                        <li><a href="./ui-button-group.html">Button Group</a></li>
                                        <li><a href="./ui-list-group.html">List Group</a></li>
                                        <li><a href="./ui-card.html">Cards</a></li>
                                        <li><a href="./ui-carousel.html">Carousel</a></li>
                                        <li><a href="./ui-dropdown.html">Dropdown</a></li>
                                        <li><a href="./ui-popover.html">Popover</a></li>
                                        <li><a href="./ui-progressbar.html">Progressbar</a></li>
                                        <li><a href="./ui-tab.html">Tab</a></li>
                                        <li><a href="./ui-typography.html">Typography</a></li>
                                        <li><a href="./ui-pagination.html">Pagination</a></li>
                                        <li><a href="./ui-grid.html">Grid</a></li>

                                    </ul>
                                </li>
                                <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                                    <div className="menu-icon">
                                        <svg id="icon-forms" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.0001 16.3905C10.7709 16.3905 10.5326 16.308 10.3492 16.143L7.98425 14.0713C7.09508 13.2921 6.97591 11.9538 7.71841 11.028C8.47008 10.093 9.80841 9.9188 10.7709 10.643L11.0001 10.8171L11.2384 10.6338C12.2009 9.90963 13.5392 10.0838 14.2909 11.0188C15.0334 11.9446 14.9142 13.283 14.0251 14.0621L11.6601 16.1338C11.4676 16.308 11.2292 16.3905 11.0001 16.3905ZM8.88258 13.0355L11.0001 14.8871L13.1176 13.0355C13.4567 12.7421 13.5026 12.238 13.2184 11.8896C12.9342 11.5321 12.4301 11.468 12.0634 11.743L11.4126 12.2288C11.1651 12.4121 10.8351 12.4121 10.5876 12.2288L9.93675 11.743C9.57925 11.468 9.06591 11.5321 8.78175 11.8896C8.50675 12.238 8.55258 12.7421 8.88258 13.0355Z" fill="#9C99FF" />
                                            <path d="M15.5835 20.8538H6.41683C2.37433 20.8538 1.146 19.6255 1.146 15.583V6.41634C1.146 2.37384 2.37433 1.14551 6.41683 1.14551H7.79183C9.396 1.14551 9.90016 1.66801 10.5418 2.52051L11.9168 4.35384C12.2193 4.75717 12.2652 4.81217 12.8335 4.81217H15.5835C19.626 4.81217 20.8543 6.04051 20.8543 10.083V15.583C20.8543 19.6255 19.626 20.8538 15.5835 20.8538ZM6.41683 2.52051C3.13516 2.52051 2.521 3.14384 2.521 6.41634V15.583C2.521 18.8555 3.13516 19.4788 6.41683 19.4788H15.5835C18.8652 19.4788 19.4793 18.8555 19.4793 15.583V10.083C19.4793 6.81051 18.8652 6.18717 15.5835 6.18717H12.8335C11.6602 6.18717 11.2752 5.78384 10.8168 5.17884L9.44183 3.34551C8.96516 2.71301 8.8185 2.52051 7.79183 2.52051H6.41683V2.52051Z" fill="#9C99FF" />
                                        </svg>
                                    </div>
                                    <span className="nav-text">Plugins</span>
                                </a>
                                    <ul aria-expanded="false">
                                        <li><a href="./uc-select2.html">Select 2</a></li>
                                        <li><a href="./uc-nestable.html">Nestedable</a></li>
                                        <li><a href="./uc-noui-slider.html">Noui Slider</a></li>
                                        <li><a href="./uc-sweetalert.html">Sweet Alert</a></li>
                                        <li><a href="./uc-toastr.html">Toastr</a></li>
                                        <li><a href="./map-jqvmap.html">Jqv Map</a></li>
                                        <li><a href="./uc-lightgallery.html">Light Gallery</a></li>
                                    </ul>
                                </li>
                                <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                                    <div className="menu-icon">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.41683 9.85433H4.5835C2.36516 9.85433 1.146 8.63516 1.146 6.41683V4.5835C1.146 2.36516 2.36516 1.146 4.5835 1.146H6.41683C8.63516 1.146 9.85433 2.36516 9.85433 4.5835V6.41683C9.85433 8.63516 8.63516 9.85433 6.41683 9.85433ZM4.5835 2.521C3.13516 2.521 2.521 3.13516 2.521 4.5835V6.41683C2.521 7.86516 3.13516 8.47933 4.5835 8.47933H6.41683C7.86516 8.47933 8.47933 7.86516 8.47933 6.41683V4.5835C8.47933 3.13516 7.86516 2.521 6.41683 2.521H4.5835Z" fill="#9C99FF" />
                                            <path d="M17.4168 9.85433H15.5835C13.3652 9.85433 12.146 8.63516 12.146 6.41683V4.5835C12.146 2.36516 13.3652 1.146 15.5835 1.146H17.4168C19.6352 1.146 20.8543 2.36516 20.8543 4.5835V6.41683C20.8543 8.63516 19.6352 9.85433 17.4168 9.85433ZM15.5835 2.521C14.1352 2.521 13.521 3.13516 13.521 4.5835V6.41683C13.521 7.86516 14.1352 8.47933 15.5835 8.47933H17.4168C18.8652 8.47933 19.4793 7.86516 19.4793 6.41683V4.5835C19.4793 3.13516 18.8652 2.521 17.4168 2.521H15.5835Z" fill="#9C99FF" />
                                            <path d="M17.4168 20.8543H15.5835C13.3652 20.8543 12.146 19.6352 12.146 17.4168V15.5835C12.146 13.3652 13.3652 12.146 15.5835 12.146H17.4168C19.6352 12.146 20.8543 13.3652 20.8543 15.5835V17.4168C20.8543 19.6352 19.6352 20.8543 17.4168 20.8543ZM15.5835 13.521C14.1352 13.521 13.521 14.1352 13.521 15.5835V17.4168C13.521 18.8652 14.1352 19.4793 15.5835 19.4793H17.4168C18.8652 19.4793 19.4793 18.8652 19.4793 17.4168V15.5835C19.4793 14.1352 18.8652 13.521 17.4168 13.521H15.5835Z" fill="#9C99FF" />
                                            <path d="M6.41683 20.8543H4.5835C2.36516 20.8543 1.146 19.6352 1.146 17.4168V15.5835C1.146 13.3652 2.36516 12.146 4.5835 12.146H6.41683C8.63516 12.146 9.85433 13.3652 9.85433 15.5835V17.4168C9.85433 19.6352 8.63516 20.8543 6.41683 20.8543ZM4.5835 13.521C3.13516 13.521 2.521 14.1352 2.521 15.5835V17.4168C2.521 18.8652 3.13516 19.4793 4.5835 19.4793H6.41683C7.86516 19.4793 8.47933 18.8652 8.47933 17.4168V15.5835C8.47933 14.1352 7.86516 13.521 6.41683 13.521H4.5835Z" fill="#9C99FF" />
                                        </svg>
                                    </div>
                                    <span className="nav-text">Widget</span>
                                </a>
                                    <ul aria-expanded="false">
                                        <li><a href="./widget-chart.html">Chart</a></li>
                                        <li><a href="./widget-card.html">Card</a></li>
                                        <li><a href="./widget-list.html">List</a></li>
                                    </ul>
                                </li>
                                <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                                    <div className="menu-icon">
                                        <svg id="Layer_1" height="22" viewBox="0 0 512 512" width="22" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m383.7 108.665-105.652-106.305a8 8 0 0 0 -5.674-2.36h-231.374a33.038 33.038 0 0 0 -33 33v446a33.038 33.038 0 0 0 33 33h312.029a33.038 33.038 0 0 0 33-33v-156.2l104.287-104.289a46.879 46.879 0 1 0 -66.3-66.3l-37.99 37.99v-75.9a8 8 0 0 0 -2.326-5.636zm14.74 91.751 43.671 43.671-153.1 153.1-43.671-43.671zm22.064-22.065 43.671 43.671-10.751 10.751-43.668-43.673zm-182.396 190.549 35.36 35.361-44.128 8.228zm46.219-337.525 69.9 70.327h-69.9zm85.702 447.625a17.019 17.019 0 0 1 -17 17h-312.029a17.019 17.019 0 0 1 -17-17v-446a17.019 17.019 0 0 1 17-17h227.327v93.7a8 8 0 0 0 8 8h93.7v88.5l-142.889 142.893a8 8 0 0 0 -2.186 4.079l-13.634 67.779a8 8 0 0 0 9.309 9.442l68.619-12.793a8 8 0 0 0 4.191-2.207l76.592-76.593zm108.971-315.474a30.994 30.994 0 0 1 0 43.671l-3.512 3.512-43.67-43.671 3.511-3.512a30.915 30.915 0 0 1 43.671 0zm-276.96 211.481a8 8 0 0 1 -8 8h-124.903a8 8 0 0 1 0-16h124.9a8 8 0 0 1 8.003 8zm-140.9-69.72a8 8 0 0 1 8-8h165.035a8 8 0 0 1 0 16h-165.038a8 8 0 0 1 -8-8zm0-69.72a8 8 0 0 1 8-8h255.752a8 8 0 1 1 0 16h-255.755a8 8 0 0 1 -8-8zm0-69.719a8 8 0 0 1 8-8h255.752a8 8 0 0 1 0 16h-255.755a8 8 0 0 1 -8-8zm0-69.72a8 8 0 0 1 8-8h169.352a8 8 0 0 1 0 16h-169.355a8 8 0 0 1 -8-8z" fill="#9C99FF" /></svg>
                                    </div>
                                    <span className="nav-text">Forms</span>
                                </a>
                                    <ul aria-expanded="false">
                                        <li><a href="./form-element.html">Form Elements</a></li>
                                        <li><a href="./form-wizard.html">Wizard</a></li>
                                        <li><a href="./form-ckeditor.html">CkEditor</a></li>
                                        <li><a href="form-pickers.html">Pickers</a></li>
                                        <li><a href="form-validation.html">Form Validate</a></li>
                                    </ul>
                                </li>
                                <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                                    <div className="menu-icon">
                                        <svg id="icon-table" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.7502 11.8711H7.3335C6.95766 11.8711 6.646 11.5594 6.646 11.1836C6.646 10.8078 6.95766 10.4961 7.3335 10.4961H13.7502C14.126 10.4961 14.4377 10.8078 14.4377 11.1836C14.4377 11.5594 14.126 11.8711 13.7502 11.8711Z" fill="#9C99FF" />
                                            <path d="M11.3485 15.5371H7.3335C6.95766 15.5371 6.646 15.2254 6.646 14.8496C6.646 14.4738 6.95766 14.1621 7.3335 14.1621H11.3485C11.7243 14.1621 12.036 14.4738 12.036 14.8496C12.036 15.2254 11.7243 15.5371 11.3485 15.5371Z" fill="#9C99FF" />
                                            <path d="M12.8335 6.18717H9.16683C8.28683 6.18717 6.646 6.18717 6.646 3.66634C6.646 1.14551 8.28683 1.14551 9.16683 1.14551H12.8335C13.7135 1.14551 15.3543 1.14551 15.3543 3.66634C15.3543 4.54634 15.3543 6.18717 12.8335 6.18717ZM9.16683 2.52051C8.25933 2.52051 8.021 2.52051 8.021 3.66634C8.021 4.81217 8.25933 4.81217 9.16683 4.81217H12.8335C13.9793 4.81217 13.9793 4.57384 13.9793 3.66634C13.9793 2.52051 13.741 2.52051 12.8335 2.52051H9.16683Z" fill="#9C99FF" />
                                            <path d="M13.75 20.8545H8.25C3.09833 20.8545 2.0625 18.4895 2.0625 14.6671V9.16705C2.0625 4.98705 3.575 3.19955 7.29667 3.00705C7.66333 2.98872 8.0025 3.27289 8.02083 3.65789C8.03917 4.04288 7.74583 4.35455 7.37 4.37288C4.76667 4.51955 3.4375 5.29872 3.4375 9.16705V14.6671C3.4375 18.0587 4.10667 19.4795 8.25 19.4795H13.75C17.8933 19.4795 18.5625 18.0587 18.5625 14.6671V9.16705C18.5625 5.29872 17.2333 4.51955 14.63 4.37288C14.2542 4.35455 13.9608 4.02455 13.9792 3.64872C13.9975 3.27289 14.3275 2.97955 14.7033 2.99789C18.425 3.19955 19.9375 4.98705 19.9375 9.15788V14.6579C19.9375 18.4895 18.9017 20.8545 13.75 20.8545Z" fill="#9C99FF" />
                                        </svg>
                                    </div>
                                    <span className="nav-text">Table</span>
                                </a>
                                    <ul aria-expanded="false">
                                        <li><a href="table-bootstrap-basic.html">Bootstrap</a></li>
                                        <li><a href="table-datatable-basic.html">Datatable</a></li>
                                    </ul>
                                </li>
                                <li><a className="has-arrow " href="javascript:void(0);" aria-expanded="false">
                                    <div className="menu-icon">
                                        <svg id="icon-pages" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.7502 20.8538H8.25016C3.27266 20.8538 1.146 18.7272 1.146 13.7497V8.24967C1.146 3.27217 3.27266 1.14551 8.25016 1.14551H13.7502C18.7277 1.14551 20.8543 3.27217 20.8543 8.24967V13.7497C20.8543 18.7272 18.7277 20.8538 13.7502 20.8538ZM8.25016 2.52051C4.02433 2.52051 2.521 4.02384 2.521 8.24967V13.7497C2.521 17.9755 4.02433 19.4788 8.25016 19.4788H13.7502C17.976 19.4788 19.4793 17.9755 19.4793 13.7497V8.24967C19.4793 4.02384 17.976 2.52051 13.7502 2.52051H8.25016Z" fill="#9C99FF" />
                                            <path d="M20.1668 9.85449H1.8335C1.45766 9.85449 1.146 9.54283 1.146 9.16699C1.146 8.79116 1.45766 8.47949 1.8335 8.47949H20.1668C20.5427 8.47949 20.8543 8.79116 20.8543 9.16699C20.8543 9.54283 20.5427 9.85449 20.1668 9.85449Z" fill="#9C99FF" />
                                            <path d="M11 20.8545C10.6242 20.8545 10.3125 20.5428 10.3125 20.167V9.16699C10.3125 8.79116 10.6242 8.47949 11 8.47949C11.3758 8.47949 11.6875 8.79116 11.6875 9.16699V20.167C11.6875 20.5428 11.3758 20.8545 11 20.8545Z" fill="#9C99FF" />
                                        </svg>
                                    </div>
                                    <span className="nav-text">Pages</span>
                                </a>
                                    <ul aria-expanded="false">
                                        <li><a href="./page-login.html">Login</a></li>
                                        <li><a href="./page-register.html">Register</a></li>
                                        <li><a className="has-arrow" href="javascript:void(0);" aria-expanded="false">Error</a>
                                            <ul aria-expanded="false">
                                                <li><a href="./page-error-400.html">Error 400</a></li>
                                                <li><a href="./page-error-403.html">Error 403</a></li>
                                                <li><a href="./page-error-404.html">Error 404</a></li>
                                                <li><a href="./page-error-500.html">Error 500</a></li>
                                                <li><a href="./page-error-503.html">Error 503</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="./page-lock-screen.html">Lock Screen</a></li>
                                        <li><a href="./empty-page.html">Empty Page</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="plus-box">
                                <div className="media">
                                    <span>
                                        <svg width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.74982 1.40323C2.74982 2.17821 2.13421 2.80645 1.37482 2.80645C0.615425 2.80645 -0.000183105 2.17821 -0.000183105 1.40323C-0.000183105 0.628246 0.615425 0 1.37482 0C2.13421 0 2.74982 0.628246 2.74982 1.40323Z" fill="#FCFCFC" />
                                            <path d="M9.16648 1.40323C9.16648 2.17821 8.55088 2.80645 7.79148 2.80645C7.03209 2.80645 6.41648 2.17821 6.41648 1.40323C6.41648 0.628246 7.03209 0 7.79148 0C8.55088 0 9.16648 0.628246 9.16648 1.40323Z" fill="#FCFCFC" />
                                            <path d="M15.5832 1.40323C15.5832 2.17821 14.9675 2.80645 14.2082 2.80645C13.4488 2.80645 12.8332 2.17821 12.8332 1.40323C12.8332 0.628246 13.4488 0 14.2082 0C14.9675 0 15.5832 0.628246 15.5832 1.40323Z" fill="#FCFCFC" />
                                            <path d="M21.9998 1.40323C21.9998 2.17821 21.3842 2.80645 20.6248 2.80645C19.8654 2.80645 19.2498 2.17821 19.2498 1.40323C19.2498 0.628246 19.8654 0 20.6248 0C21.3842 0 21.9998 0.628246 21.9998 1.40323Z" fill="#FCFCFC" />
                                            <path d="M2.74982 7.95161C2.74982 8.72659 2.13421 9.35484 1.37482 9.35484C0.615425 9.35484 -0.000183105 8.72659 -0.000183105 7.95161C-0.000183105 7.17663 0.615425 6.54839 1.37482 6.54839C2.13421 6.54839 2.74982 7.17663 2.74982 7.95161Z" fill="#FCFCFC" />
                                            <path d="M9.16648 7.95161C9.16648 8.72659 8.55088 9.35484 7.79148 9.35484C7.03209 9.35484 6.41648 8.72659 6.41648 7.95161C6.41648 7.17663 7.03209 6.54839 7.79148 6.54839C8.55088 6.54839 9.16648 7.17663 9.16648 7.95161Z" fill="#FCFCFC" />
                                            <path d="M15.5832 7.95161C15.5832 8.72659 14.9675 9.35484 14.2082 9.35484C13.4488 9.35484 12.8332 8.72659 12.8332 7.95161C12.8332 7.17663 13.4488 6.54839 14.2082 6.54839C14.9675 6.54839 15.5832 7.17663 15.5832 7.95161Z" fill="#FCFCFC" />
                                            <path d="M21.9998 7.95161C21.9998 8.72659 21.3842 9.35484 20.6248 9.35484C19.8654 9.35484 19.2498 8.72659 19.2498 7.95161C19.2498 7.17663 19.8654 6.54839 20.6248 6.54839C21.3842 6.54839 21.9998 7.17663 21.9998 7.95161Z" fill="#FCFCFC" />
                                            <path d="M2.74982 14.5C2.74982 15.275 2.13421 15.9032 1.37482 15.9032C0.615425 15.9032 -0.000183105 15.275 -0.000183105 14.5C-0.000183105 13.725 0.615425 13.0968 1.37482 13.0968C2.13421 13.0968 2.74982 13.725 2.74982 14.5Z" fill="#FCFCFC" />
                                            <path d="M9.16648 14.5C9.16648 15.275 8.55088 15.9032 7.79148 15.9032C7.03209 15.9032 6.41648 15.275 6.41648 14.5C6.41648 13.725 7.03209 13.0968 7.79148 13.0968C8.55088 13.0968 9.16648 13.725 9.16648 14.5Z" fill="#FCFCFC" />
                                            <path d="M15.5832 14.5C15.5832 15.275 14.9675 15.9032 14.2082 15.9032C13.4488 15.9032 12.8332 15.275 12.8332 14.5C12.8332 13.725 13.4488 13.0968 14.2082 13.0968C14.9675 13.0968 15.5832 13.725 15.5832 14.5Z" fill="#FCFCFC" />
                                            <path d="M21.9998 14.5C21.9998 15.275 21.3842 15.9032 20.6248 15.9032C19.8654 15.9032 19.2498 15.275 19.2498 14.5C19.2498 13.725 19.8654 13.0968 20.6248 13.0968C21.3842 13.0968 21.9998 13.725 21.9998 14.5Z" fill="#FCFCFC" />
                                            <path d="M2.74982 21.0484C2.74982 21.8234 2.13421 22.4516 1.37482 22.4516C0.615425 22.4516 -0.000183105 21.8234 -0.000183105 21.0484C-0.000183105 20.2734 0.615425 19.6452 1.37482 19.6452C2.13421 19.6452 2.74982 20.2734 2.74982 21.0484Z" fill="#FCFCFC" />
                                            <path d="M9.16648 21.0484C9.16648 21.8234 8.55088 22.4516 7.79148 22.4516C7.03209 22.4516 6.41648 21.8234 6.41648 21.0484C6.41648 20.2734 7.03209 19.6452 7.79148 19.6452C8.55088 19.6452 9.16648 20.2734 9.16648 21.0484Z" fill="#FCFCFC" />
                                            <path d="M15.5832 21.0484C15.5832 21.8234 14.9675 22.4516 14.2082 22.4516C13.4488 22.4516 12.8332 21.8234 12.8332 21.0484C12.8332 20.2734 13.4488 19.6452 14.2082 19.6452C14.9675 19.6452 15.5832 20.2734 15.5832 21.0484Z" fill="#FCFCFC" />
                                            <path d="M21.9998 21.0484C21.9998 21.8234 21.3842 22.4516 20.6248 22.4516C19.8654 22.4516 19.2498 21.8234 19.2498 21.0484C19.2498 20.2734 19.8654 19.6452 20.6248 19.6452C21.3842 19.6452 21.9998 20.2734 21.9998 21.0484Z" fill="#FCFCFC" />
                                            <path d="M2.74982 27.5968C2.74982 28.3718 2.13421 29 1.37482 29C0.615425 29 -0.000183105 28.3718 -0.000183105 27.5968C-0.000183105 26.8218 0.615425 26.1935 1.37482 26.1935C2.13421 26.1935 2.74982 26.8218 2.74982 27.5968Z" fill="#FCFCFC" />
                                            <path d="M9.16648 27.5968C9.16648 28.3718 8.55088 29 7.79148 29C7.03209 29 6.41648 28.3718 6.41648 27.5968C6.41648 26.8218 7.03209 26.1935 7.79148 26.1935C8.55088 26.1935 9.16648 26.8218 9.16648 27.5968Z" fill="#FCFCFC" />
                                            <path d="M15.5832 27.5968C15.5832 28.3718 14.9675 29 14.2082 29C13.4488 29 12.8332 28.3718 12.8332 27.5968C12.8332 26.8218 13.4488 26.1935 14.2082 26.1935C14.9675 26.1935 15.5832 26.8218 15.5832 27.5968Z" fill="#FCFCFC" />
                                            <path d="M21.9998 27.5968C21.9998 28.3718 21.3842 29 20.6248 29C19.8654 29 19.2498 28.3718 19.2498 27.5968C19.2498 26.8218 19.8654 26.1935 20.6248 26.1935C21.3842 26.1935 21.9998 26.8218 21.9998 27.5968Z" fill="#FCFCFC" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="info">
                                    <h3 className="fs-20">Upgrade you <br />Account to Pro</h3>
                                    <a href="javascript:void(0);" className="btn bg-white btn-sm">Upgrade</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-body mh-auto">
                        <div className="container-fluid p-0 mh-auto">
                            <div className="card p-0 rounded-0 file_area mb-0">
                                <div className="row gx-0">
                                    <div className="col-xl-2 col-xxl-3 col-lg-3 col-md-4">
                                        <div className="email-left-box border-end  dz-scroll" id="email-left">
                                            <div className="p-0">
                                                <a href="email-compose.html" className="btn text-white btn-block"><i className="fa-solid fa-plus me-3"></i>Upload</a>
                                            </div>
                                            <div className="mail-list rounded ">
                                                <a href="email-inbox.html" className="list-group-item active"><i className="fa-regular fa-envelope align-middle"></i>Inbox <span className="badge badge-purple badge-sm float-end rounded">2</span> </a>
                                                <a href="javascript:void(0);" className="list-group-item"><i className="fa-regular fa-paper-plane align-middle"></i>Sent</a>
                                                <a href="javascript:void(0);" className="list-group-item"><i className="fa-regular fa-star align-middle"></i>Favorite </a>
                                                <a href="javascript:void(0);" className="list-group-item"><i className="fa-regular fa-file align-middle"></i>Draft</a>
                                                <a href="javascript:void(0);" className="list-group-item ">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                        <path d="M15.4425 10.0575L10.065 15.435C9.92569 15.5745 9.76026 15.6851 9.57816 15.7606C9.39606 15.8361
										9.20087 15.8749 9.00375 15.8749C8.80663 15.8749 8.61144 15.8361 8.42934 15.7606C8.24724 15.6851 8.08181 15.5745 7.9425 15.435L1.5 9V1.5H9L15.4425
										7.9425C15.7219 8.22354 15.8787 8.60372 15.8787 9C15.8787 9.39628 15.7219 9.77646 15.4425 10.0575Z"
                                                            stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M5.25 5.25H5.268" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>Important</a>
                                                <a href="javascript:void(0);" className="list-group-item"><i className="fa-regular fa-clock align-middle"></i> Scheduled</a>


                                                <a href="javascript:void(0);" className="list-group-item">
                                                    <svg width="15" height="15" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.5 8.25L11 13.75L16.5 8.25" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    Move
                                                </a>
                                            </div>
                                            <div className="mail-list rounded overflow-hidden mt-4">
                                                <div className="intro-title d-flex justify-content-between my-0">
                                                    <h5>Categories</h5>
                                                </div>
                                                <a href="email-inbox.html" className="list-group-item change">Work </a>
                                                <a href="email-inbox.html" className="list-group-item change">Private </a>
                                                <a href="email-inbox.html" className="list-group-item change">Support </a>
                                                <a href="email-inbox.html" className="list-group-item change">Social </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-10 col-xxl-9 col-lg-9 col-md-8">
                                        <div className="row  gx-0">
                                            <div className="col-xl-12">
                                                <div className="file-drive">
                                                    <div className="card-body p-3">
                                                        <div className="row gx-0">
                                                            <div className="col-xl-3 col-sm-6">
                                                                <div className="drive">
                                                                    <div className="dz-folder">
                                                                        <svg width="79" height="62" viewBox="0 0 79 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.7" d="M75.1668 20.5H68.3334V13.6667C68.3343 12.9934 68.2024 12.3266 67.9451 11.7044C67.6879 11.0822 67.3104 10.5168 66.8343 10.0407C66.3583 9.56467 65.7929 9.1872 65.1707 8.92996C64.5485 8.67272 63.8817 8.54078 63.2084 8.54168H37.1563C36.3935 8.54184 35.6403 8.37168 34.9517 8.04362C34.2631 7.71556 33.6564 7.23787 33.1759 6.64543L29.8276 2.52834C29.1893 1.73859 28.3825 1.10165 27.4661 0.664169C26.5498 0.226689 25.5472 -0.000241404 24.5317 4.56815e-06H5.12506C4.45179 -0.000894936 3.78495 0.131054 3.16275 0.38829C2.54055 0.645527 1.97521 1.023 1.49913 1.49908C1.02305 1.97516 0.645583 2.54049 0.388346 3.16269C0.131109 3.78489 -0.000838865 4.45173 6.06388e-05 5.12501V55.6404C-0.00347238 56.4099 0.147413 57.1723 0.443784 57.8824C0.740155 58.5925 1.17599 59.236 1.72548 59.7746C2.26414 60.3241 2.90758 60.7599 3.6177 61.0563C4.32781 61.3527 5.09017 61.5036 5.85965 61.5H63.3622C64.6314 61.4996 65.8665 61.0884 66.8827 60.3278C67.8988 59.5672 68.6415 58.4981 68.9997 57.2804L78.4468 24.8734C78.5942 24.3642 78.6213 23.8278 78.5259 23.3063C78.4306 22.7849 78.2154 22.2928 77.8974 21.8687C77.5793 21.4447 77.1671 21.1003 76.6933 20.8628C76.2194 20.6253 75.6968 20.5011 75.1668 20.5Z" fill="#01A3FF" />
                                                                            <path d="M75.1645 20.5H26.6031C25.3352 20.5002 24.1016 20.9115 23.0875 21.6723C22.0733 22.4332 21.3332 23.5024 20.9784 24.7196L11.48 57.2828C11.1252 58.4994 10.3853 59.5681 9.3715 60.3285C8.35766 61.0889 7.12455 61.5 5.85724 61.5H63.3662C64.6343 61.5001 65.8682 61.0889 66.8826 60.3281C67.8971 59.5672 68.6374 58.4978 68.9923 57.2804L78.4446 24.8733C78.5932 24.3641 78.6211 23.8273 78.5262 23.3054C78.4313 22.7836 78.2162 22.2909 77.8979 21.8666C77.5797 21.4423 77.167 21.0979 76.6925 20.8607C76.2181 20.6235 75.6949 20.5 75.1645 20.5Z" fill="#01A3FF" />
                                                                        </svg>
                                                                    </div>
                                                                    <div className="drive-content">
                                                                        <h4 className="title">D Drive </h4>
                                                                        <div className="progress default-progress">
                                                                            <div className="progress-bar bg-vigit progress-animated bg-primary" style={{ width: 60, height: 100 }} role="progressbar">
                                                                                <span className="sr-only">60% Complete</span>
                                                                            </div>
                                                                        </div>
                                                                        <span>40 GB / 50GB</span>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="col-xl-3 col-sm-6">
                                                                <div className="drive">
                                                                    <div className="dz-folder">
                                                                        <svg width="79" height="62" viewBox="0 0 79 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.7" d="M75.1668 20.5H68.3334V13.6667C68.3343 12.9934 68.2024 12.3266 67.9451 11.7044C67.6879 11.0822 67.3104 10.5168 66.8343 10.0407C66.3583 9.56467 65.7929 9.1872 65.1707 8.92996C64.5485 8.67272 63.8817 8.54078 63.2084 8.54168H37.1563C36.3935 8.54184 35.6403 8.37168 34.9517 8.04362C34.2631 7.71556 33.6564 7.23787 33.1759 6.64543L29.8276 2.52834C29.1893 1.73859 28.3825 1.10165 27.4661 0.664169C26.5498 0.226689 25.5472 -0.000241404 24.5317 4.56815e-06H5.12506C4.45179 -0.000894936 3.78495 0.131054 3.16275 0.38829C2.54055 0.645527 1.97521 1.023 1.49913 1.49908C1.02305 1.97516 0.645583 2.54049 0.388346 3.16269C0.131109 3.78489 -0.000838865 4.45173 6.06388e-05 5.12501V55.6404C-0.00347238 56.4099 0.147413 57.1723 0.443784 57.8824C0.740155 58.5925 1.17599 59.236 1.72548 59.7746C2.26414 60.3241 2.90758 60.7599 3.6177 61.0563C4.32781 61.3527 5.09017 61.5036 5.85965 61.5H63.3622C64.6314 61.4996 65.8665 61.0884 66.8827 60.3278C67.8988 59.5672 68.6415 58.4981 68.9997 57.2804L78.4468 24.8734C78.5942 24.3642 78.6213 23.8278 78.5259 23.3063C78.4306 22.7849 78.2154 22.2928 77.8974 21.8687C77.5793 21.4447 77.1671 21.1003 76.6933 20.8628C76.2194 20.6253 75.6968 20.5011 75.1668 20.5Z" fill="#01A3FF" />
                                                                            <path d="M75.1645 20.5H26.6031C25.3352 20.5002 24.1016 20.9115 23.0875 21.6723C22.0733 22.4332 21.3332 23.5024 20.9784 24.7196L11.48 57.2828C11.1252 58.4994 10.3853 59.5681 9.3715 60.3285C8.35766 61.0889 7.12455 61.5 5.85724 61.5H63.3662C64.6343 61.5001 65.8682 61.0889 66.8826 60.3281C67.8971 59.5672 68.6374 58.4978 68.9923 57.2804L78.4446 24.8733C78.5932 24.3641 78.6211 23.8273 78.5262 23.3054C78.4313 22.7836 78.2162 22.2909 77.8979 21.8666C77.5797 21.4423 77.167 21.0979 76.6925 20.8607C76.2181 20.6235 75.6949 20.5 75.1645 20.5Z" fill="#01A3FF" />
                                                                        </svg>
                                                                    </div>
                                                                    <div className="drive-content">
                                                                        <h4 className="title">E Drive </h4>
                                                                        <div className="progress default-progress">
                                                                            <div className="progress-bar bg-vigit progress-animated bg-primary" style={{ width: 60, height: 100 }} role="progressbar">
                                                                                <span className="sr-only">60% Complete</span>
                                                                            </div>
                                                                        </div>
                                                                        <span>40 GB / 50GB</span>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="col-xl-3 col-sm-6">
                                                                <div className="drive">
                                                                    <div className="dz-folder">
                                                                        <svg width="79" height="62" viewBox="0 0 79 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.7" d="M75.1668 20.5H68.3334V13.6667C68.3343 12.9934 68.2024 12.3266 67.9451 11.7044C67.6879 11.0822 67.3104 10.5168 66.8343 10.0407C66.3583 9.56467 65.7929 9.1872 65.1707 8.92996C64.5485 8.67272 63.8817 8.54078 63.2084 8.54168H37.1563C36.3935 8.54184 35.6403 8.37168 34.9517 8.04362C34.2631 7.71556 33.6564 7.23787 33.1759 6.64543L29.8276 2.52834C29.1893 1.73859 28.3825 1.10165 27.4661 0.664169C26.5498 0.226689 25.5472 -0.000241404 24.5317 4.56815e-06H5.12506C4.45179 -0.000894936 3.78495 0.131054 3.16275 0.38829C2.54055 0.645527 1.97521 1.023 1.49913 1.49908C1.02305 1.97516 0.645583 2.54049 0.388346 3.16269C0.131109 3.78489 -0.000838865 4.45173 6.06388e-05 5.12501V55.6404C-0.00347238 56.4099 0.147413 57.1723 0.443784 57.8824C0.740155 58.5925 1.17599 59.236 1.72548 59.7746C2.26414 60.3241 2.90758 60.7599 3.6177 61.0563C4.32781 61.3527 5.09017 61.5036 5.85965 61.5H63.3622C64.6314 61.4996 65.8665 61.0884 66.8827 60.3278C67.8988 59.5672 68.6415 58.4981 68.9997 57.2804L78.4468 24.8734C78.5942 24.3642 78.6213 23.8278 78.5259 23.3063C78.4306 22.7849 78.2154 22.2928 77.8974 21.8687C77.5793 21.4447 77.1671 21.1003 76.6933 20.8628C76.2194 20.6253 75.6968 20.5011 75.1668 20.5Z" fill="#01A3FF" />
                                                                            <path d="M75.1645 20.5H26.6031C25.3352 20.5002 24.1016 20.9115 23.0875 21.6723C22.0733 22.4332 21.3332 23.5024 20.9784 24.7196L11.48 57.2828C11.1252 58.4994 10.3853 59.5681 9.3715 60.3285C8.35766 61.0889 7.12455 61.5 5.85724 61.5H63.3662C64.6343 61.5001 65.8682 61.0889 66.8826 60.3281C67.8971 59.5672 68.6374 58.4978 68.9923 57.2804L78.4446 24.8733C78.5932 24.3641 78.6211 23.8273 78.5262 23.3054C78.4313 22.7836 78.2162 22.2909 77.8979 21.8666C77.5797 21.4423 77.167 21.0979 76.6925 20.8607C76.2181 20.6235 75.6949 20.5 75.1645 20.5Z" fill="#01A3FF" />
                                                                        </svg>
                                                                    </div>
                                                                    <div className="drive-content">
                                                                        <h4 className="title">E Drive </h4>
                                                                        <div className="progress default-progress">
                                                                            <div className="progress-bar bg-vigit progress-animated bg-primary" style={{ width: 60, height: 100 }} role="progressbar">
                                                                                <span className="sr-only">60% Complete</span>
                                                                            </div>
                                                                        </div>
                                                                        <span>40 GB / 50GB</span>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="col-xl-3 col-sm-6">
                                                                <div className="drive">
                                                                    <div className="dz-folder">
                                                                        <svg width="79" height="62" viewBox="0 0 79 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.7" d="M75.1668 20.5H68.3334V13.6667C68.3343 12.9934 68.2024 12.3266 67.9451 11.7044C67.6879 11.0822 67.3104 10.5168 66.8343 10.0407C66.3583 9.56467 65.7929 9.1872 65.1707 8.92996C64.5485 8.67272 63.8817 8.54078 63.2084 8.54168H37.1563C36.3935 8.54184 35.6403 8.37168 34.9517 8.04362C34.2631 7.71556 33.6564 7.23787 33.1759 6.64543L29.8276 2.52834C29.1893 1.73859 28.3825 1.10165 27.4661 0.664169C26.5498 0.226689 25.5472 -0.000241404 24.5317 4.56815e-06H5.12506C4.45179 -0.000894936 3.78495 0.131054 3.16275 0.38829C2.54055 0.645527 1.97521 1.023 1.49913 1.49908C1.02305 1.97516 0.645583 2.54049 0.388346 3.16269C0.131109 3.78489 -0.000838865 4.45173 6.06388e-05 5.12501V55.6404C-0.00347238 56.4099 0.147413 57.1723 0.443784 57.8824C0.740155 58.5925 1.17599 59.236 1.72548 59.7746C2.26414 60.3241 2.90758 60.7599 3.6177 61.0563C4.32781 61.3527 5.09017 61.5036 5.85965 61.5H63.3622C64.6314 61.4996 65.8665 61.0884 66.8827 60.3278C67.8988 59.5672 68.6415 58.4981 68.9997 57.2804L78.4468 24.8734C78.5942 24.3642 78.6213 23.8278 78.5259 23.3063C78.4306 22.7849 78.2154 22.2928 77.8974 21.8687C77.5793 21.4447 77.1671 21.1003 76.6933 20.8628C76.2194 20.6253 75.6968 20.5011 75.1668 20.5Z" fill="#01A3FF" />
                                                                            <path d="M75.1645 20.5H26.6031C25.3352 20.5002 24.1016 20.9115 23.0875 21.6723C22.0733 22.4332 21.3332 23.5024 20.9784 24.7196L11.48 57.2828C11.1252 58.4994 10.3853 59.5681 9.3715 60.3285C8.35766 61.0889 7.12455 61.5 5.85724 61.5H63.3662C64.6343 61.5001 65.8682 61.0889 66.8826 60.3281C67.8971 59.5672 68.6374 58.4978 68.9923 57.2804L78.4446 24.8733C78.5932 24.3641 78.6211 23.8273 78.5262 23.3054C78.4313 22.7836 78.2162 22.2909 77.8979 21.8666C77.5797 21.4423 77.167 21.0979 76.6925 20.8607C76.2181 20.6235 75.6949 20.5 75.1645 20.5Z" fill="#01A3FF" />
                                                                        </svg>
                                                                    </div>
                                                                    <div className="drive-content">
                                                                        <h4 className="title">E Drive </h4>
                                                                        <div className="progress default-progress">
                                                                            <div className="progress-bar bg-vigit progress-animated bg-primary" style={{ width: 60, height: 100 }} role="progressbar">
                                                                                <span className="sr-only">60% Complete</span>
                                                                            </div>
                                                                        </div>
                                                                        <span>40 GB / 50GB</span>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="file-header">
                                                    <div className="card-body py-0">
                                                        <div className="page-titles">
                                                            <div className="my-2">
                                                                <h2 className="heading">Recent Files</h2>
                                                                <div className="file-path">
                                                                    <div className="me-2">
                                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M18.9833 6.64169C18.9049 6.545 18.8058 6.46712 18.6933 6.41376C18.5808 6.36041 18.4578 6.33293 18.3333 6.33335H16.6666V5.50002C16.6666 4.83698 16.4033 4.20109 15.9344 3.73225C15.4656 3.26341 14.8297 3.00002 14.1666 3.00002H8.93331L8.66665 2.16669C8.49377 1.67771 8.1731 1.2546 7.74906 0.955986C7.32502 0.657367 6.81861 0.498019 6.29998 0.500019H3.33331C2.67027 0.500019 2.03439 0.763411 1.56555 1.23225C1.09671 1.70109 0.833313 2.33698 0.833313 3.00002V13C0.833313 13.6631 1.09671 14.2989 1.56555 14.7678C2.03439 15.2366 2.67027 15.5 3.33331 15.5H15.3333C15.901 15.4984 16.4512 15.3036 16.8935 14.9476C17.3357 14.5917 17.6437 14.0959 17.7666 13.5417L19.1666 7.35002C19.192 7.22578 19.1886 7.0974 19.1569 6.97466C19.1251 6.85191 19.0657 6.73803 18.9833 6.64169ZM4.47498 13.1834C4.43264 13.3713 4.32647 13.5388 4.17453 13.6574C4.02259 13.7759 3.83428 13.8381 3.64165 13.8334H3.33331C3.1123 13.8334 2.90034 13.7456 2.74406 13.5893C2.58778 13.433 2.49998 13.221 2.49998 13V3.00002C2.49998 2.779 2.58778 2.56704 2.74406 2.41076C2.90034 2.25448 3.1123 2.16669 3.33331 2.16669H6.29998C6.4817 2.1572 6.66153 2.20746 6.81201 2.30978C6.96248 2.4121 7.07533 2.56087 7.13331 2.73335L7.58331 4.10002C7.63679 4.25897 7.73698 4.39809 7.87079 4.49919C8.0046 4.60029 8.1658 4.65867 8.33331 4.66669H14.1666C14.3877 4.66669 14.5996 4.75448 14.7559 4.91076C14.9122 5.06704 15 5.27901 15 5.50002V6.33335H6.66665C6.47401 6.32864 6.2857 6.39084 6.13376 6.50935C5.98182 6.62786 5.87565 6.79537 5.83331 6.98335L4.47498 13.1834ZM16.1416 13.1834C16.0993 13.3713 15.9931 13.5388 15.8412 13.6574C15.6893 13.7759 15.5009 13.8381 15.3083 13.8334H6.00831C6.05135 13.7405 6.08216 13.6425 6.09998 13.5417L7.33331 8.00002H17.3333L16.1416 13.1834Z" fill="#01A3FF" />
                                                                        </svg>
                                                                    </div>
                                                                    <h4><a href="#">All File /</a><a href="#">Folder /</a><a href="#">Library</a></h4>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex my-2">
                                                                <div className="input-group search-area">
                                                                    <input type="text" className="form-control" placeholder="Search here..."></input>
                                                                    <span className="input-group-text"><a href="javascript:void(0)"><svg className="me-1 mb-1 user-search" width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8.625 16.3125C4.3875 16.3125 0.9375 12.8625 0.9375 8.625C0.9375 4.3875 4.3875 0.9375 8.625 0.9375C12.8625 0.9375 16.3125 4.3875 16.3125 8.625C16.3125 12.8625 12.8625 16.3125 8.625 16.3125ZM8.625 2.0625C5.0025 2.0625 2.0625 5.01 2.0625 8.625C2.0625 12.24 5.0025 15.1875 8.625 15.1875C12.2475 15.1875 15.1875 12.24 15.1875 8.625C15.1875 5.01 12.2475 2.0625 8.625 2.0625Z" fill="#2696FD" />
                                                                        <path d="M16.5001 17.0626C16.3576 17.0626 16.2151 17.0101 16.1026 16.8976L14.6026 15.3976C14.3851 15.1801 14.3851 14.8201 14.6026 14.6026C14.8201 14.3851 15.1801 14.3851 15.3976 14.6026L16.8976 16.1026C17.1151 16.3201 17.1151 16.6801 16.8976 16.8976C16.7851 17.0101 16.6426 17.0626 16.5001 17.0626Z" fill="var(--primary)" />
                                                                    </svg>

                                                                    </a>
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center folder-layout-tab">
                                                                    <div className="feature-btn">
                                                                        <svg width="24" height="24" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="m7.1971 7.5684h-1.8203-2.8809c-0.23438 0-0.47852 0.01953-0.71289-0.00586 0.06836 0.00977 0.13867 0.01953 0.20703 0.02734-0.0625-0.00976-0.11914-0.02343-0.17774-0.04687 0.0625 0.02539 0.125 0.05273 0.1875 0.07812-0.05468-0.02539-0.10547-0.05468-0.15429-0.09179 0.05273 0.04101 0.10547 0.08203 0.1582 0.12304-0.03906-0.0332-0.07422-0.06836-0.10742-0.10742 0.04101 0.05274 0.08203 0.10547 0.12304 0.1582-0.0371-0.04882-0.0664-0.09765-0.09179-0.15429 0.02539 0.0625 0.05273 0.125 0.07812 0.1875-0.02343-0.0586-0.03906-0.11524-0.04687-0.17774 0.00976 0.06836 0.01953 0.13868 0.02734 0.20703-0.01953-0.19335-0.00586-0.39257-0.00586-0.58593v-1.2871-2.9082c0-0.23438-0.01953-0.47852 0.00586-0.7129-0.00976 0.06836-0.01953 0.13868-0.02734 0.20704 0.00976-0.0625 0.02344-0.11914 0.04687-0.17774-0.02539 0.0625-0.05273 0.125-0.07812 0.1875 0.02539-0.05469 0.05469-0.10547 0.09179-0.1543-0.04101 0.05274-0.08203 0.10547-0.12304 0.15821 0.0332-0.03907 0.06836-0.07422 0.10742-0.10742-0.05273 0.04101-0.10547 0.08203-0.1582 0.12304 0.04882-0.03711 0.09765-0.0664 0.15429-0.09179-0.0625 0.02539-0.125 0.05273-0.1875 0.07812 0.0586-0.02344 0.11524-0.03906 0.17774-0.04687-0.06836 0.00976-0.13867 0.01953-0.20703 0.02734 0.19336-0.01953 0.39257-0.00586 0.58593-0.00586h1.2871 2.9082c0.23437 0 0.47851-0.01953 0.71289 0.00586-0.06836-0.00977-0.13867-0.01953-0.20703-0.02734 0.0625 0.00976 0.11914 0.02343 0.17773 0.04687-0.0625-0.02539-0.125-0.05273-0.1875-0.07812 0.05469 0.02539 0.10547 0.05468 0.1543 0.09179-0.05274-0.04101-0.10547-0.08203-0.15821-0.12304 0.03907 0.0332 0.07422 0.06835 0.10743 0.10742-0.04102-0.05274-0.08203-0.10547-0.12305-0.15821 0.03711 0.04883 0.06641 0.09766 0.0918 0.1543-0.02539-0.0625-0.05274-0.125-0.07813-0.1875 0.02344 0.0586 0.03906 0.11524 0.04688 0.17774-0.00977-0.06836-0.01953-0.13868-0.02735-0.20704 0.01953 0.19336 0.00586 0.39258 0.00586 0.58594v1.2871 2.9082c0 0.23438 0.01953 0.47852-0.00586 0.71289 0.00977-0.06835 0.01953-0.13867 0.02735-0.20703-0.00977 0.0625-0.02344 0.11914-0.04688 0.17774 0.02539-0.0625 0.05274-0.125 0.07813-0.1875-0.02539 0.05469-0.05469 0.10547-0.0918 0.15429 0.04102-0.05273 0.08203-0.10546 0.12305-0.1582-0.03321 0.03906-0.06836 0.07422-0.10743 0.10742 0.05274-0.04101 0.10547-0.08203 0.15821-0.12304-0.04883 0.03711-0.09766 0.0664-0.1543 0.09179 0.0625-0.02539 0.125-0.05273 0.1875-0.07812-0.05859 0.02344-0.11523 0.03906-0.17773 0.04687 0.06836-0.00976 0.13867-0.01953 0.20703-0.02734-0.02539 0.00391-0.05274 0.00586-0.08008 0.00586-0.20312 0.00391-0.4082 0.08398-0.55273 0.22852-0.13477 0.13476-0.23829 0.35742-0.22852 0.55273 0.01953 0.41601 0.34375 0.79101 0.78125 0.78125 0.38281-0.00781 0.75-0.15039 1.0215-0.42383 0.26563-0.26562 0.40626-0.62109 0.42188-0.99414 0.00195-0.06445 0-0.12695 0-0.19141v-1.1387-3.2402c0-0.25977 0.00391-0.51953 0-0.7793-0.00781-0.53125-0.29883-1.0684-0.79297-1.2969-0.21875-0.10157-0.41601-0.15625-0.66211-0.15821h-0.08594-2.6777-2.5176c-0.39453 0-0.78125 0.14063-1.0625 0.42383-0.2832 0.2832-0.42383 0.66797-0.42383 1.0664v0.91601 3.252 1.0273 0.08398c0.001953 0.24415 0.058594 0.44532 0.1582 0.66211 0.22852 0.49414 0.76562 0.78516 1.2969 0.79297 0.78125 0.00977 1.5625 0 2.3438 0h2.8144 0.16407c0.4082 0 0.80078-0.35937 0.78125-0.78125-0.01563-0.42578-0.33985-0.7832-0.7793-0.7832zm0 3.3007h-2.1426-2.9414c-0.08007 0-0.16015-0.0019-0.24023 0-0.63281 0.0098-1.1641 0.4004-1.377 0.9922-0.10742 0.2969-0.076172 0.6524-0.076172 0.9649v3.1386 1.334 0.3125c0 0.4063 0.15234 0.8184 0.46094 1.0938 0.29102 0.2597 0.64453 0.3887 1.0332 0.3887h0.34375 1.3555 3.1152 0.38281c0.27735 0 0.53711-0.0508 0.78711-0.1817 0.4668-0.2422 0.74219-0.7617 0.7461-1.2773v-0.2676-2.9668-1.4805c0-0.2265 0.01562-0.4609-0.00586-0.6875-0.03125-0.3594-0.16602-0.709-0.4375-0.959-0.27735-0.2558-0.62305-0.3964-1.0039-0.4043-0.4082-0.0078-0.80078 0.3653-0.78125 0.7813 0.01953 0.4297 0.34375 0.7715 0.78125 0.7812 0.02734 0 0.05469 2e-3 0.08203 0.0059-0.06836-0.0098-0.13867-0.0195-0.20703-0.0273 0.0625 0.0097 0.11914 0.0234 0.17773 0.0468-0.0625-0.0254-0.125-0.0527-0.1875-0.0781 0.05469 0.0254 0.10547 0.0547 0.1543 0.0918-0.05273-0.041-0.10547-0.082-0.1582-0.123 0.03906 0.0332 0.07422 0.0683 0.10742 0.1074-0.04102-0.0528-0.08203-0.1055-0.12305-0.1582 0.03711 0.0488 0.06641 0.0976 0.0918 0.1543-0.02539-0.0625-0.05273-0.125-0.07813-0.1875 0.02344 0.0586 0.03907 0.1152 0.04688 0.1777-0.00977-0.0684-0.01953-0.1387-0.02734-0.207 0.01953 0.1933 0.00586 0.3926 0.00586 0.5859v1.2871 2.9082c0 0.2344 0.01953 0.4785-0.00586 0.7129 0.00976-0.0683 0.01953-0.1387 0.02734-0.207-0.00977 0.0625-0.02344 0.1191-0.04688 0.1777 0.0254-0.0625 0.05274-0.125 0.07813-0.1875-0.02539 0.0547-0.05469 0.1055-0.0918 0.1543 0.04102-0.0527 0.08203-0.1055 0.12305-0.1582-0.0332 0.0391-0.06836 0.0742-0.10742 0.1074 0.05273-0.041 0.10547-0.082 0.1582-0.123-0.04883 0.0371-0.09765 0.0664-0.1543 0.0918 0.0625-0.0254 0.125-0.0528 0.1875-0.0781-0.05859 0.0234-0.11523 0.039-0.17773 0.0468 0.06836-0.0097 0.13867-0.0195 0.20703-0.0273-0.19336 0.0195-0.39258 0.0058-0.58594 0.0058h-1.2871-2.9082c-0.23437 0-0.47852 0.0196-0.71289-0.0058 0.06836 0.0098 0.13867 0.0195 0.20703 0.0273-0.0625-0.0097-0.11914-0.0234-0.17773-0.0468 0.0625 0.0253 0.125 0.0527 0.1875 0.0781-0.05469-0.0254-0.10547-0.0547-0.1543-0.0918 0.05273 0.041 0.10547 0.082 0.1582 0.123-0.03906-0.0332-0.07422-0.0683-0.10742-0.1074 0.04102 0.0527 0.08203 0.1055 0.12305 0.1582-0.03711-0.0488-0.06641-0.0976-0.0918-0.1543 0.02539 0.0625 0.05274 0.125 0.07813 0.1875-0.02344-0.0586-0.03907-0.1152-0.04688-0.1777 0.00977 0.0683 0.01953 0.1387 0.02734 0.207-0.01953-0.1933-0.00585-0.3926-0.00585-0.5859v-1.2871-2.9082c0-0.2344-0.01954-0.4785 0.00585-0.7129-0.00976 0.0683-0.01953 0.1386-0.02734 0.207 0.00977-0.0625 0.02344-0.1191 0.04688-0.1777-0.02539 0.0625-0.05274 0.125-0.07813 0.1875 0.02539-0.0547 0.05469-0.1055 0.0918-0.1543-0.04102 0.0527-0.08203 0.1054-0.12305 0.1582 0.0332-0.0391 0.06836-0.0742 0.10742-0.1074-0.05273 0.041-0.10547 0.082-0.1582 0.123 0.04883-0.0371 0.09766-0.0664 0.1543-0.0918-0.0625 0.0254-0.125 0.0527-0.1875 0.0781 0.05859-0.0234 0.11523-0.039 0.17773-0.0468-0.06836 0.0097-0.13867 0.0195-0.20703 0.0273 0.19336-0.0195 0.39258-0.0059 0.58594-0.0059h1.2598 2.8965 0.67187c0.40821 0 0.80079-0.3593 0.78125-0.7812-0.01953-0.4238-0.34375-0.7813-0.7832-0.7813zm3.5039-6.8691h0.8066 1.9356 2.332 2.0254c0.3281 0 0.6563 0.00586 0.9844 0h0.0137c0.4082 0 0.8007-0.35938 0.7812-0.78125-0.0195-0.42383-0.3437-0.78125-0.7812-0.78125h-0.8067-1.9355-2.3321-2.0253c-0.3282 0-0.6563-0.00586-0.9844 0h-0.0137c-0.4082 0-0.80077 0.35938-0.78124 0.78125 0.01758 0.42187 0.34374 0.78125 0.78124 0.78125zm5.0313 2.0391h-1.7012-2.711-0.621c-0.4082 0-0.80083 0.35938-0.7813 0.78125 0.01954 0.42383 0.3438 0.78125 0.7813 0.78125h1.7011 2.711 0.6211c0.4082 0 0.8007-0.35937 0.7812-0.78125-0.0176-0.42383-0.3418-0.78125-0.7812-0.78125zm-5.0313 7.9218h0.8066 1.9356 2.332 2.0254c0.3281 0 0.6563 0.0059 0.9844 0h0.0137c0.4082 0 0.8007-0.3593 0.7812-0.7812-0.0195-0.4238-0.3437-0.7813-0.7812-0.7813h-0.8067-1.9355-2.3321-2.0253c-0.3282 0-0.6563-0.0058-0.9844 0h-0.0137c-0.4082 0-0.80077 0.3594-0.78124 0.7813 0.01758 0.4238 0.34374 0.7812 0.78124 0.7812zm5.0313 2.0391h-1.7012-2.711-0.621c-0.4082 0-0.80083 0.3594-0.7813 0.7812 0.01954 0.4239 0.3438 0.7813 0.7813 0.7813h1.7011 2.711 0.6211c0.4082 0 0.8007-0.3594 0.7812-0.7813-0.0176-0.4218-0.3418-0.7812-0.7812-0.7812z" fill="#01A3FF" />
                                                                        </svg>

                                                                    </div>
                                                                    <div className="feature-btn">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M9 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V9C3 9.53043 3.21071 10.0391 3.58579 10.4142C3.96086 10.7893 4.46957 11 5 11H9C9.53043 11 10.0391 10.7893 10.4142 10.4142C10.7893 10.0391 11 9.53043 11 9V5C11 4.46957 10.7893 3.96086 10.4142 3.58579C10.0391 3.21071 9.53043 3 9 3ZM5 9V5H9V9H5ZM19 3H15C14.4696 3 13.9609 3.21071 13.5858 3.58579C13.2107 3.96086 13 4.46957 13 5V9C13 9.53043 13.2107 10.0391 13.5858 10.4142C13.9609 10.7893 14.4696 11 15 11H19C19.5304 11 20.0391 10.7893 20.4142 10.4142C20.7893 10.0391 21 9.53043 21 9V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM15 9V5H19V9H15ZM9 13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H9C9.53043 21 10.0391 20.7893 10.4142 20.4142C10.7893 20.0391 11 19.5304 11 19V15C11 14.4696 10.7893 13.9609 10.4142 13.5858C10.0391 13.2107 9.53043 13 9 13ZM5 19V15H9V19H5ZM19 13H15C14.4696 13 13.9609 13.2107 13.5858 13.5858C13.2107 13.9609 13 14.4696 13 15V19C13 19.5304 13.2107 20.0391 13.5858 20.4142C13.9609 20.7893 14.4696 21 15 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V15C21 14.4696 20.7893 13.9609 20.4142 13.5858C20.0391 13.2107 19.5304 13 19 13ZM15 19V15H19V19H15Z" fill="#01A3FF"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <ul className="folder-structure dz-scroll" id="folder">
                                                    <li>
                                                        <div className="file-list">
                                                            <div className="dz-media">
                                                                <svg width="40" height="30" viewBox="0 0 79 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.7" d="M75.1668 20.5H68.3334V13.6667C68.3343 12.9934 68.2024 12.3266 67.9451 11.7044C67.6879 11.0822 67.3104 10.5168 66.8343 10.0407C66.3583 9.56467 65.7929 9.1872 65.1707 8.92996C64.5485 8.67272 63.8817 8.54078 63.2084 8.54168H37.1563C36.3935 8.54184 35.6403 8.37168 34.9517 8.04362C34.2631 7.71556 33.6564 7.23787 33.1759 6.64543L29.8276 2.52834C29.1893 1.73859 28.3825 1.10165 27.4661 0.664169C26.5498 0.226689 25.5472 -0.000241404 24.5317 4.56815e-06H5.12506C4.45179 -0.000894936 3.78495 0.131054 3.16275 0.38829C2.54055 0.645527 1.97521 1.023 1.49913 1.49908C1.02305 1.97516 0.645583 2.54049 0.388346 3.16269C0.131109 3.78489 -0.000838865 4.45173 6.06388e-05 5.12501V55.6404C-0.00347238 56.4099 0.147413 57.1723 0.443784 57.8824C0.740155 58.5925 1.17599 59.236 1.72548 59.7746C2.26414 60.3241 2.90758 60.7599 3.6177 61.0563C4.32781 61.3527 5.09017 61.5036 5.85965 61.5H63.3622C64.6314 61.4996 65.8665 61.0884 66.8827 60.3278C67.8988 59.5672 68.6415 58.4981 68.9997 57.2804L78.4468 24.8734C78.5942 24.3642 78.6213 23.8278 78.5259 23.3063C78.4306 22.7849 78.2154 22.2928 77.8974 21.8687C77.5793 21.4447 77.1671 21.1003 76.6933 20.8628C76.2194 20.6253 75.6968 20.5011 75.1668 20.5Z" fill="#01A3FF" />
                                                                    <path d="M75.1645 20.5H26.6031C25.3352 20.5002 24.1016 20.9115 23.0875 21.6723C22.0733 22.4332 21.3332 23.5024 20.9784 24.7196L11.48 57.2828C11.1252 58.4994 10.3853 59.5681 9.3715 60.3285C8.35766 61.0889 7.12455 61.5 5.85724 61.5H63.3662C64.6343 61.5001 65.8682 61.0889 66.8826 60.3281C67.8971 59.5672 68.6374 58.4978 68.9923 57.2804L78.4446 24.8733C78.5932 24.3641 78.6211 23.8273 78.5262 23.3054C78.4313 22.7836 78.2162 22.2909 77.8979 21.8666C77.5797 21.4423 77.167 21.0979 76.6925 20.8607C76.2181 20.6235 75.6949 20.5 75.1645 20.5Z" fill="#01A3FF" />
                                                                </svg>
                                                            </div>
                                                            <div className="dz-info">
                                                                <a href="#">
                                                                    <h4 className="title">Project 01</h4>
                                                                    <span>3 Items December 27th, 2021  04:56 AM - 10.0 MB</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="file-list">
                                                            <div className="dz-media">
                                                                <svg width="40" height="30" viewBox="0 0 79 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.7" d="M75.1668 20.5H68.3334V13.6667C68.3343 12.9934 68.2024 12.3266 67.9451 11.7044C67.6879 11.0822 67.3104 10.5168 66.8343 10.0407C66.3583 9.56467 65.7929 9.1872 65.1707 8.92996C64.5485 8.67272 63.8817 8.54078 63.2084 8.54168H37.1563C36.3935 8.54184 35.6403 8.37168 34.9517 8.04362C34.2631 7.71556 33.6564 7.23787 33.1759 6.64543L29.8276 2.52834C29.1893 1.73859 28.3825 1.10165 27.4661 0.664169C26.5498 0.226689 25.5472 -0.000241404 24.5317 4.56815e-06H5.12506C4.45179 -0.000894936 3.78495 0.131054 3.16275 0.38829C2.54055 0.645527 1.97521 1.023 1.49913 1.49908C1.02305 1.97516 0.645583 2.54049 0.388346 3.16269C0.131109 3.78489 -0.000838865 4.45173 6.06388e-05 5.12501V55.6404C-0.00347238 56.4099 0.147413 57.1723 0.443784 57.8824C0.740155 58.5925 1.17599 59.236 1.72548 59.7746C2.26414 60.3241 2.90758 60.7599 3.6177 61.0563C4.32781 61.3527 5.09017 61.5036 5.85965 61.5H63.3622C64.6314 61.4996 65.8665 61.0884 66.8827 60.3278C67.8988 59.5672 68.6415 58.4981 68.9997 57.2804L78.4468 24.8734C78.5942 24.3642 78.6213 23.8278 78.5259 23.3063C78.4306 22.7849 78.2154 22.2928 77.8974 21.8687C77.5793 21.4447 77.1671 21.1003 76.6933 20.8628C76.2194 20.6253 75.6968 20.5011 75.1668 20.5Z" fill="#01A3FF" />
                                                                    <path d="M75.1645 20.5H26.6031C25.3352 20.5002 24.1016 20.9115 23.0875 21.6723C22.0733 22.4332 21.3332 23.5024 20.9784 24.7196L11.48 57.2828C11.1252 58.4994 10.3853 59.5681 9.3715 60.3285C8.35766 61.0889 7.12455 61.5 5.85724 61.5H63.3662C64.6343 61.5001 65.8682 61.0889 66.8826 60.3281C67.8971 59.5672 68.6374 58.4978 68.9923 57.2804L78.4446 24.8733C78.5932 24.3641 78.6211 23.8273 78.5262 23.3054C78.4313 22.7836 78.2162 22.2909 77.8979 21.8666C77.5797 21.4423 77.167 21.0979 76.6925 20.8607C76.2181 20.6235 75.6949 20.5 75.1645 20.5Z" fill="#01A3FF" />
                                                                </svg>
                                                            </div>
                                                            <div className="dz-info">
                                                                <a href="#">
                                                                    <h4 className="title">Project 01</h4>
                                                                    <span>3 Items December 27th, 2021  04:56 AM - 10.0 MB</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="file-list">
                                                            <div className="dz-media">
                                                                <svg width="40" height="30" viewBox="0 0 79 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.7" d="M75.1668 20.5H68.3334V13.6667C68.3343 12.9934 68.2024 12.3266 67.9451 11.7044C67.6879 11.0822 67.3104 10.5168 66.8343 10.0407C66.3583 9.56467 65.7929 9.1872 65.1707 8.92996C64.5485 8.67272 63.8817 8.54078 63.2084 8.54168H37.1563C36.3935 8.54184 35.6403 8.37168 34.9517 8.04362C34.2631 7.71556 33.6564 7.23787 33.1759 6.64543L29.8276 2.52834C29.1893 1.73859 28.3825 1.10165 27.4661 0.664169C26.5498 0.226689 25.5472 -0.000241404 24.5317 4.56815e-06H5.12506C4.45179 -0.000894936 3.78495 0.131054 3.16275 0.38829C2.54055 0.645527 1.97521 1.023 1.49913 1.49908C1.02305 1.97516 0.645583 2.54049 0.388346 3.16269C0.131109 3.78489 -0.000838865 4.45173 6.06388e-05 5.12501V55.6404C-0.00347238 56.4099 0.147413 57.1723 0.443784 57.8824C0.740155 58.5925 1.17599 59.236 1.72548 59.7746C2.26414 60.3241 2.90758 60.7599 3.6177 61.0563C4.32781 61.3527 5.09017 61.5036 5.85965 61.5H63.3622C64.6314 61.4996 65.8665 61.0884 66.8827 60.3278C67.8988 59.5672 68.6415 58.4981 68.9997 57.2804L78.4468 24.8734C78.5942 24.3642 78.6213 23.8278 78.5259 23.3063C78.4306 22.7849 78.2154 22.2928 77.8974 21.8687C77.5793 21.4447 77.1671 21.1003 76.6933 20.8628C76.2194 20.6253 75.6968 20.5011 75.1668 20.5Z" fill="#01A3FF" />
                                                                    <path d="M75.1645 20.5H26.6031C25.3352 20.5002 24.1016 20.9115 23.0875 21.6723C22.0733 22.4332 21.3332 23.5024 20.9784 24.7196L11.48 57.2828C11.1252 58.4994 10.3853 59.5681 9.3715 60.3285C8.35766 61.0889 7.12455 61.5 5.85724 61.5H63.3662C64.6343 61.5001 65.8682 61.0889 66.8826 60.3281C67.8971 59.5672 68.6374 58.4978 68.9923 57.2804L78.4446 24.8733C78.5932 24.3641 78.6211 23.8273 78.5262 23.3054C78.4313 22.7836 78.2162 22.2909 77.8979 21.8666C77.5797 21.4423 77.167 21.0979 76.6925 20.8607C76.2181 20.6235 75.6949 20.5 75.1645 20.5Z" fill="#01A3FF" />
                                                                </svg>
                                                            </div>
                                                            <div className="dz-info">
                                                                <a href="#">
                                                                    <h4 className="title">Project 01</h4>
                                                                    <span>3 Items December 27th, 2021  04:56 AM - 10.0 MB</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="file-list">
                                                            <div className="dz-media">
                                                                <svg width="40" height="30" viewBox="0 0 79 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.7" d="M75.1668 20.5H68.3334V13.6667C68.3343 12.9934 68.2024 12.3266 67.9451 11.7044C67.6879 11.0822 67.3104 10.5168 66.8343 10.0407C66.3583 9.56467 65.7929 9.1872 65.1707 8.92996C64.5485 8.67272 63.8817 8.54078 63.2084 8.54168H37.1563C36.3935 8.54184 35.6403 8.37168 34.9517 8.04362C34.2631 7.71556 33.6564 7.23787 33.1759 6.64543L29.8276 2.52834C29.1893 1.73859 28.3825 1.10165 27.4661 0.664169C26.5498 0.226689 25.5472 -0.000241404 24.5317 4.56815e-06H5.12506C4.45179 -0.000894936 3.78495 0.131054 3.16275 0.38829C2.54055 0.645527 1.97521 1.023 1.49913 1.49908C1.02305 1.97516 0.645583 2.54049 0.388346 3.16269C0.131109 3.78489 -0.000838865 4.45173 6.06388e-05 5.12501V55.6404C-0.00347238 56.4099 0.147413 57.1723 0.443784 57.8824C0.740155 58.5925 1.17599 59.236 1.72548 59.7746C2.26414 60.3241 2.90758 60.7599 3.6177 61.0563C4.32781 61.3527 5.09017 61.5036 5.85965 61.5H63.3622C64.6314 61.4996 65.8665 61.0884 66.8827 60.3278C67.8988 59.5672 68.6415 58.4981 68.9997 57.2804L78.4468 24.8734C78.5942 24.3642 78.6213 23.8278 78.5259 23.3063C78.4306 22.7849 78.2154 22.2928 77.8974 21.8687C77.5793 21.4447 77.1671 21.1003 76.6933 20.8628C76.2194 20.6253 75.6968 20.5011 75.1668 20.5Z" fill="#01A3FF" />
                                                                    <path d="M75.1645 20.5H26.6031C25.3352 20.5002 24.1016 20.9115 23.0875 21.6723C22.0733 22.4332 21.3332 23.5024 20.9784 24.7196L11.48 57.2828C11.1252 58.4994 10.3853 59.5681 9.3715 60.3285C8.35766 61.0889 7.12455 61.5 5.85724 61.5H63.3662C64.6343 61.5001 65.8682 61.0889 66.8826 60.3281C67.8971 59.5672 68.6374 58.4978 68.9923 57.2804L78.4446 24.8733C78.5932 24.3641 78.6211 23.8273 78.5262 23.3054C78.4313 22.7836 78.2162 22.2909 77.8979 21.8666C77.5797 21.4423 77.167 21.0979 76.6925 20.8607C76.2181 20.6235 75.6949 20.5 75.1645 20.5Z" fill="#01A3FF" />
                                                                </svg>
                                                            </div>
                                                            <div className="dz-info">
                                                                <a href="#">
                                                                    <h4 className="title">Project 01</h4>
                                                                    <span>3 Items December 27th, 2021  04:56 AM - 10.0 MB</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="file-list">
                                                            <div className="dz-media">
                                                                <svg width="40" height="30" viewBox="0 0 79 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.7" d="M75.1668 20.5H68.3334V13.6667C68.3343 12.9934 68.2024 12.3266 67.9451 11.7044C67.6879 11.0822 67.3104 10.5168 66.8343 10.0407C66.3583 9.56467 65.7929 9.1872 65.1707 8.92996C64.5485 8.67272 63.8817 8.54078 63.2084 8.54168H37.1563C36.3935 8.54184 35.6403 8.37168 34.9517 8.04362C34.2631 7.71556 33.6564 7.23787 33.1759 6.64543L29.8276 2.52834C29.1893 1.73859 28.3825 1.10165 27.4661 0.664169C26.5498 0.226689 25.5472 -0.000241404 24.5317 4.56815e-06H5.12506C4.45179 -0.000894936 3.78495 0.131054 3.16275 0.38829C2.54055 0.645527 1.97521 1.023 1.49913 1.49908C1.02305 1.97516 0.645583 2.54049 0.388346 3.16269C0.131109 3.78489 -0.000838865 4.45173 6.06388e-05 5.12501V55.6404C-0.00347238 56.4099 0.147413 57.1723 0.443784 57.8824C0.740155 58.5925 1.17599 59.236 1.72548 59.7746C2.26414 60.3241 2.90758 60.7599 3.6177 61.0563C4.32781 61.3527 5.09017 61.5036 5.85965 61.5H63.3622C64.6314 61.4996 65.8665 61.0884 66.8827 60.3278C67.8988 59.5672 68.6415 58.4981 68.9997 57.2804L78.4468 24.8734C78.5942 24.3642 78.6213 23.8278 78.5259 23.3063C78.4306 22.7849 78.2154 22.2928 77.8974 21.8687C77.5793 21.4447 77.1671 21.1003 76.6933 20.8628C76.2194 20.6253 75.6968 20.5011 75.1668 20.5Z" fill="#01A3FF" />
                                                                    <path d="M75.1645 20.5H26.6031C25.3352 20.5002 24.1016 20.9115 23.0875 21.6723C22.0733 22.4332 21.3332 23.5024 20.9784 24.7196L11.48 57.2828C11.1252 58.4994 10.3853 59.5681 9.3715 60.3285C8.35766 61.0889 7.12455 61.5 5.85724 61.5H63.3662C64.6343 61.5001 65.8682 61.0889 66.8826 60.3281C67.8971 59.5672 68.6374 58.4978 68.9923 57.2804L78.4446 24.8733C78.5932 24.3641 78.6211 23.8273 78.5262 23.3054C78.4313 22.7836 78.2162 22.2909 77.8979 21.8666C77.5797 21.4423 77.167 21.0979 76.6925 20.8607C76.2181 20.6235 75.6949 20.5 75.1645 20.5Z" fill="#01A3FF" />
                                                                </svg>
                                                            </div>
                                                            <div className="dz-info">
                                                                <a href="#">
                                                                    <h4 className="title">Project 01</h4>
                                                                    <span>3 Items December 27th, 2021  04:56 AM - 10.0 MB</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="file-list">
                                                            <div className="dz-media">
                                                                <svg width="35" height="40" viewBox="0 0 59 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M53.1365 80H5.86371C3.13985 80 0.90918 77.7693 0.90918 75.0455V5.95453C0.90918 3.23067 3.13985 1 5.86371 1H38.3839L58.091 20.7071V75.0455C58.091 77.7693 55.8604 80 53.1365 80Z" fill="#D0E9FF" stroke="#1B87FF" />
                                                                    <path d="M38.5911 0.5L58.5911 20.5H38.5911V0.5Z" fill="#1B87FF" />
                                                                    <path d="M38.5911 0.5L58.5911 20.5H38.5911V0.5Z" stroke="#1B87FF" />
                                                                    <path d="M13.1365 31.4092H45.8638V35.9546H13.1365V31.4092Z" fill="#1B87FF" />
                                                                    <path d="M13.1365 31.4092H45.8638V35.9546H13.1365V31.4092Z" stroke="#1B87FF" />
                                                                    <path d="M13.1365 42.3184H45.8638V46.8638H13.1365V42.3184Z" fill="#1B87FF" />
                                                                    <path d="M13.1365 42.3184H45.8638V46.8638H13.1365V42.3184Z" stroke="#1B87FF" />
                                                                    <path d="M13.1365 53.2275H36.7729V57.773H13.1365V53.2275Z" fill="#1B87FF" />
                                                                    <path d="M13.1365 53.2275H36.7729V57.773H13.1365V53.2275Z" stroke="#1B87FF" />
                                                                </svg>
                                                            </div>
                                                            <div className="dz-info">
                                                                <a href="#">
                                                                    <h4 className="title">Project 01</h4>
                                                                    <span>3 Items December 27th, 2021  04:56 AM - 10.0 MB</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="file-list">
                                                            <div className="dz-media">
                                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M22.2656 36.4844C21.6179 36.4844 21.0938 35.9602 21.0938 35.3125V18.9062C21.0938 18.2585 21.6179 17.7344 22.2656 17.7344C22.9134 17.7344 23.4375 18.2585 23.4375 18.9062V35.3125C23.4375 35.9602 22.9134 36.4844 22.2656 36.4844Z" fill="#4DB5FF" />
                                                                    <path d="M38.8281 31.7969C38.1804 31.7969 37.6562 31.2727 37.6562 30.625V14.2188C37.6562 13.571 38.1804 13.0469 38.8281 13.0469C39.4759 13.0469 40 13.571 40 14.2188V30.625C40 31.2727 39.4759 31.7969 38.8281 31.7969Z" fill="#4D97FF" />
                                                                    <path d="M38.5 9.49974L30.5469 11.7497L21.9375 14.1872C21.4454 14.3278 21.0938 14.7965 21.0938 15.3122V23.8903L30.5469 21.2184L40 18.5467V10.6248C40 9.85131 39.25 9.28888 38.5 9.49974Z" fill="#4DB5FF" />
                                                                    <path d="M8.20312 25.8594C7.55539 25.8594 7.03125 25.3352 7.03125 24.6875V1.17188C7.03125 0.524141 7.55539 0 8.20312 0C8.85086 0 9.375 0.524141 9.375 1.17188V24.6875C9.375 25.3352 8.85086 25.8594 8.20312 25.8594Z" fill="#B999FF" />
                                                                    <path d="M13.4846 7.23867C11.1889 5.82992 9.375 4.63828 9.375 1.17188C9.375 0.524141 8.85086 0 8.20312 0C7.55539 0 7.03125 0.524141 7.03125 1.17188V10.0723C7.03125 13.4884 9.58328 14.9692 11.8343 16.275C14.288 17.6974 16.4062 18.9266 16.4062 22.3438C16.4062 22.9915 16.9304 23.5156 17.5781 23.5156C18.2259 23.5156 18.75 22.9915 18.75 22.3438V15.3125C18.75 10.4682 15.953 8.75273 13.4846 7.23867Z" fill="#B999FF" />
                                                                    <path d="M4.6875 30.5469C2.10227 30.5469 0 28.4446 0 25.8594C0 23.2741 2.10227 21.1719 4.6875 21.1719C7.27273 21.1719 9.375 23.2741 9.375 25.8594C9.375 28.4446 7.27273 30.5469 4.6875 30.5469Z" fill="#B999FF" />
                                                                    <path d="M18.75 40C16.1648 40 14.0625 37.8977 14.0625 35.3125C14.0625 32.7273 16.1648 30.625 18.75 30.625C21.3352 30.625 23.4375 32.7273 23.4375 35.3125C23.4375 37.8977 21.3352 40 18.75 40Z" fill="#4DB5FF" />
                                                                    <path d="M35.2344 35.3125C32.6491 35.3125 30.5469 33.2102 30.5469 30.625C30.5469 28.0398 32.6491 25.9375 35.2344 25.9375C37.8196 25.9375 40 28.0398 40 30.625C40 33.2102 37.8196 35.3125 35.2344 35.3125Z" fill="#4D97FF" />
                                                                    <path d="M40 10.6249V18.5467L30.5469 21.2185V11.7498L38.5 9.49971C39.25 9.28893 40 9.85136 40 10.6249Z" fill="#4D97FF" />
                                                                </svg>
                                                            </div>
                                                            <div className="dz-info">
                                                                <a href="#">
                                                                    <h4 className="title">Project 01</h4>
                                                                    <span>3 Items December 27th, 2021  04:56 AM - 10.0 MB</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="file-list">
                                                            <div className="dz-media">
                                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M39.984 19.984C39.984 30.832 31.36 39.664 20.592 39.968H19.472C8.672 39.68 0 30.848 0 19.968C0 9.088 8.656 0.272 19.456 0H20.576C31.36 0.32 39.984 9.136 39.984 19.984Z" fill="#4DBFFF" />
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M40.064 19.984C40.064 30.832 31.44 39.664 20.672 39.968H20.064V0H20.64C31.44 0.32 40.064 9.136 40.064 19.984Z" fill="#01A3FF" />
                                                                    <path d="M27.763 18.3285L17.7647 11.4837C17.303 11.1674 16.8378 11 16.451 11C15.7034 11 15.241 11.6 15.241 12.6044V27.398C15.241 28.4011 15.7029 29 16.4487 29C16.836 29 17.2938 28.8324 17.7566 28.5152L27.7595 21.6706C28.4028 21.2297 28.7591 20.6364 28.7591 19.9992C28.7592 19.3625 28.407 18.7693 27.763 18.3285Z" fill="white" />
                                                                </svg>
                                                            </div>
                                                            <div className="dz-info">
                                                                <a href="#">
                                                                    <h4 className="title">Project 01</h4>
                                                                    <span>3 Items December 27th, 2021  04:56 AM - 10.0 MB</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="file-list">
                                                            <div className="dz-media">
                                                                <img className="dz-img" src="images/media-1.png" alt=""></img>
                                                            </div>
                                                            <div className="dz-info">
                                                                <a href="#">
                                                                    <h4 className="title">Project 01</h4>
                                                                    <span>3 Items December 27th, 2021  04:56 AM - 10.0 MB</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="file-list">
                                                            <div className="dz-media">
                                                                <img className="dz-img" src="images/media-2.png" alt=""></img>
                                                            </div>
                                                            <div className="dz-info">
                                                                <a href="#">
                                                                    <h4 className="title">Project 01</h4>
                                                                    <span>3 Items December 27th, 2021  04:56 AM - 10.0 MB</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="file-list">
                                                            <div className="dz-media">
                                                                <img className="dz-img" src="images/media-3.png" alt=""></img>
                                                            </div>
                                                            <div className="dz-info">
                                                                <a href="#">
                                                                    <h4 className="title">Project 01</h4>
                                                                    <span>3 Items December 27th, 2021  04:56 AM - 10.0 MB</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="file-list">
                                                            <div className="dz-media">
                                                                <img className="dz-img" src="images/media-4.png" alt="">	</img>
                                                            </div>
                                                            <div className="dz-info">
                                                                <a href="#">
                                                                    <h4 className="title">Project 01</h4>
                                                                    <span>3 Items December 27th, 2021  04:56 AM - 10.0 MB</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="table-pagenation">
                                                    <p>Showing <span>1-5</span>from <span>100</span>data</p>
                                                    <nav>
                                                        <ul className="pagination pagination-gutter pagination-primary no-bg">
                                                            <li className="page-item page-indicator">
                                                                <a className="page-link" href="javascript:void(0)">
                                                                    <i className="fa-solid fa-angle-left"></i></a>
                                                            </li>
                                                            <li className="page-item "><a className="page-link" href="javascript:void(0)">1</a>
                                                            </li>
                                                            <li className="page-item active"><a className="page-link" href="javascript:void(0)">2</a></li>
                                                            <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                                                            <li className="page-item page-indicator">
                                                                <a className="page-link" href="javascript:void(0)">
                                                                    <i className="fa-solid fa-angle-right"></i></a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default FileManagePage