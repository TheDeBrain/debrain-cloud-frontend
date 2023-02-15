import React from 'react';

import './css/style.css'
import './vendors/iconfonts/simple-line-icon/css/simple-line-icons.css'
import './vendors/iconfonts/flag-icon-css/css/flag-icon.min.css'
import './vendors/css/vendor.bundle.base.css'
import './vendors/iconfonts/simple-line-icon/css/simple-line-icons.css'

import menuTree from './data/menu_tree.json'

class Head extends React.Component {
    constructor(props: any) {
        super(props);
        let script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.src = './js/template.js'
        document.body.appendChild(script)

        script.type = 'text/javascript'
        script.async = true
        script.src = './js/dashboard.js'
        document.body.appendChild(script)
        script.type = 'text/javascript'
        script.async = true
        script.src = './js/todolist.js'
        document.body.appendChild(script)

        script.type = 'text/javascript'
        script.async = true
        script.src = './vendors/js/vendor.bundle.base.js'
        document.body.appendChild(script)

        script.type = 'text/javascript'
        script.async = true
        script.src = './vendors/js/vendor.bundle.addons.js'
        document.head.appendChild(script)

    }
    render() {
        return (
            <>
                <nav className="navbar horizontal-layout col-lg-12 col-12 p-0">
                    <div className="nav-top flex-grow-1">
                        <div className="container d-flex flex-row h-100 align-items-center">
                            <div className="text-center navbar-brand-wrapper d-flex align-items-center">
                                <a className="navbar-brand brand-logo" href="index.html"><img src="{logo}" alt="logo" /></a>
                                <a className="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.svg" alt="logo" /></a>
                            </div>
                            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between flex-grow-1">
                                <form className="search-field d-none d-md-flex" action="#">
                                    <div className="form-group mb-0">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="icon-magnifier"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="search here..."></input>
                                        </div>
                                    </div>
                                </form>
                                <ul className="navbar-nav navbar-nav-right mr-0 ml-auto">
                                    <li className="nav-item dropdown d-none d-lg-flex nav-language">
                                        <div className="nav-link">
                                            <span className="dropdown-toggle btn btn-sm" id="languageDropdown" data-toggle="dropdown">English
                                                <i className="flag-icon flag-icon-gb ml-2"></i>
                                            </span>
                                            <div className="dropdown-menu navbar-dropdown" aria-labelledby="languageDropdown">
                                                <a className="dropdown-item font-weight-medium">
                                                    French
                                                    <i className="flag-icon flag-icon-fr ml-2"></i>
                                                </a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item font-weight-medium">
                                                    Espanol
                                                    <i className="flag-icon flag-icon-es ml-2"></i>
                                                </a>
                                                <div className="dropdown-divider"></div>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item font-weight-medium">
                                                    Arabic
                                                    <i className="flag-icon flag-icon-sa ml-2"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                                            <i className="icon-envelope mx-0"></i>
                                            <span className="count"></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                                            <div className="dropdown-item">
                                                <p className="mb-0 font-weight-normal float-left">You have 7 unread mails
                                                </p>
                                                <span className="badge badge-info badge-pill float-right">View all</span>
                                            </div>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item preview-item">
                                                <div className="preview-thumbnail">
                                                    <img src="https://via.placeholder.com/36x36" alt="image" className="profile-pic"></img>
                                                </div>
                                                <div className="preview-item-content flex-grow">
                                                    <h6 className="preview-subject ellipsis font-weight-medium">David Grey
                                                        <span className="float-right font-weight-light small-text">1 Minutes ago</span>
                                                    </h6>
                                                    <p className="font-weight-light small-text">
                                                        The meeting is cancelled
                                                    </p>
                                                </div>
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item preview-item">
                                                <div className="preview-thumbnail">
                                                    <img src="https://via.placeholder.com/36x36" alt="image" className="profile-pic"></img>
                                                </div>
                                                <div className="preview-item-content flex-grow">
                                                    <h6 className="preview-subject ellipsis font-weight-medium">Tim Cook
                                                        <span className="float-right font-weight-light small-text">15 Minutes ago</span>
                                                    </h6>
                                                    <p className="font-weight-light small-text">
                                                        New product launch
                                                    </p>
                                                </div>
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item preview-item">
                                                <div className="preview-thumbnail">
                                                    <img src="https://via.placeholder.com/36x36" alt="image" className="profile-pic"></img>
                                                </div>
                                                <div className="preview-item-content flex-grow">
                                                    <h6 className="preview-subject ellipsis font-weight-medium"> Johnson
                                                        <span className="float-right font-weight-light small-text">18 Minutes ago</span>
                                                    </h6>
                                                    <p className="font-weight-light small-text">
                                                        Upcoming board meeting
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                                            <i className="icon-bell"></i>
                                            <span className="count"></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                            <a className="dropdown-item py-3">
                                                <p className="mb-0 font-weight-medium float-left">You have 4 new notifications
                                                </p>
                                                <span className="badge badge-pill badge-info float-right">View all</span>
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item preview-item">
                                                <div className="preview-thumbnail">
                                                    <div className="preview-icon bg-success">
                                                        <i className="icon-exclamation mx-0"></i>
                                                    </div>
                                                </div>
                                                <div className="preview-item-content">
                                                    <h6 className="preview-subject font-weight-normal text-dark mb-1">Application Error</h6>
                                                    <p className="font-weight-light small-text mb-0">
                                                        Just now
                                                    </p>
                                                </div>
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item preview-item">
                                                <div className="preview-thumbnail">
                                                    <div className="preview-icon bg-warning">
                                                        <i className="icon-bubble mx-0"></i>
                                                    </div>
                                                </div>
                                                <div className="preview-item-content">
                                                    <h6 className="preview-subject font-weight-normal text-dark mb-1">Settings</h6>
                                                    <p className="font-weight-light small-text mb-0">
                                                        Private message
                                                    </p>
                                                </div>
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item preview-item">
                                                <div className="preview-thumbnail">
                                                    <div className="preview-icon bg-info">
                                                        <i className="icon-user-following mx-0"></i>
                                                    </div>
                                                </div>
                                                <div className="preview-item-content">
                                                    <h6 className="preview-subject font-weight-normal text-dark mb-1">New user registration</h6>
                                                    <p className="font-weight-light small-text mb-0">
                                                        2 days ago
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav-item nav-profile dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                                            <img src="https://via.placeholder.com/39x39" alt="profile" />
                                            <span className="nav-profile-name">Mittie McLaughlin</span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                                            <a className="dropdown-item">
                                                <i className="icon-settings text-primary mr-2"></i>
                                                Settings
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item">
                                                <i className="icon-logout text-primary mr-2"></i>
                                                Logout
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                                <button className="navbar-toggler align-self-center" type="button" data-toggle="minimize">
                                    <span className="icon-menu text-dark"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="nav-bottom">
                        <div className="container">
                            <ul className="nav page-navigation">
                                <li className="nav-item">
                                    <a href="index.html" className="nav-link"><i className="link-icon icon-screen-desktop"></i><span className="menu-title">Dashboard</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        <i className="link-icon icon-disc"></i>
                                        <span className="menu-title">Widgets</span>
                                    </a>
                                </li>
                                <li className="nav-item mega-menu">
                                    <a href="#" className="nav-link"><i className="link-icon icon-film"></i><span className="menu-title">UI Elements</span><i className="menu-arrow"></i></a>
                                    <div className="submenu">
                                        <div className="col-group-wrapper row">
                                            <div className="col-group col-md-4">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p className="category-heading">Basic Elements</p>
                                                        <div className="submenu-item">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <ul>
                                                                        <li className="nav-item"><a className="nav-link" href="pages/ui-features/accordions.html">Accordion</a></li>
                                                                        <li className="nav-item"><a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                                                                        <li className="nav-item"><a className="nav-link" href="pages/ui-features/badges.html">Badges</a></li>
                                                                        <li className="nav-item"><a className="nav-link" href="pages/ui-features/breadcrumbs.html">Breadcrumbs</a></li>
                                                                        <li className="nav-item"><a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdown</a></li>
                                                                        <li className="nav-item"><a className="nav-link" href="pages/ui-features/modals.html">Modals</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <ul>
                                                                        {
                                                                            menuTree.map((item, index) => {
                                                                                return <li className="nav-item"><a className="nav-link" href="pages/ui-features/progress.html">{item} - 8</a></li>
                                                                            })
                                                                        }
                                                                        <li className="nav-item"><a className="nav-link" href="pages/ui-features/progress.html">Progress bar</a></li>
                                                                        <li className="nav-item"><a className="nav-link" href="pages/ui-features/pagination.html">Pagination</a></li>
                                                                        <li className="nav-item"><a className="nav-link" href="pages/ui-features/tabs.html">Tabs</a></li>
                                                                        <li className="nav-item"><a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                                                                        <li className="nav-item"><a className="nav-link" href="pages/ui-features/tooltips.html">Tooltip</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-group col-md-4">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p className="category-heading">Advanced Elements</p>
                                                        <div className="submenu-item">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <ul>
                                                                        <li className="nav-item"><a className="nav-link" href="pages/ui-features/dragula.html">Dragula</a></li>
                                                                        <li className="nav-item"><a className="nav-link" href="pages/ui-features/carousel.html">Carousel</a></li>
                                                                        <li className="nav-item"><a className="nav-link" href="pages/ui-features/clipboard.html">Clipboard</a></li>
                                                                        <li className="nav-item"><a className="nav-link" href="pages/ui-features/context-menu.html">Context Menu</a></li>
                                                                        <li className="nav-item"><a className="nav-link" href="pages/ui-features/loaders.html">Loader</a></li>
                                                                        <li className="nav-item"><a className="nav-link" href="pages/ui-features/slider.html">Slider</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <ul>
                                                                        <li className="nav-item"><a className="nav-link" href="pages/ui-features/popups.html">Popup</a></li>
                                                                        <li className="nav-item"><a className="nav-link" href="pages/ui-features/notifications.html">Notification</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-group col-md-4">
                                                <p className="category-heading">Icons</p>
                                                <ul className="submenu-item">
                                                    <li className="nav-item"><a className="nav-link" href="pages/icons/flag-icons.html">Flag Icons</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/icons/font-awesome.html">Font Awesome</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/icons/simple-line-icon.html">Simple Line Icons</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/icons/themify.html">Themify Icons</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link"><i className="link-icon icon-book-open"></i><span className="menu-title">Forms</span><i className="menu-arrow"></i></a>
                                    <div className="submenu">
                                        <ul className="submenu-item">
                                            <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li>
                                            <li className="nav-item"><a className="nav-link" href="pages/forms/advanced_elements.html">Advanced Elements</a></li>
                                            <li className="nav-item"><a className="nav-link" href="pages/forms/validation.html">Validation</a></li>
                                            <li className="nav-item"><a className="nav-link" href="pages/forms/wizard.html">Wizard</a></li>
                                            <li className="nav-item"><a className="nav-link" href="pages/forms/text_editor.html">Text Editor</a></li>
                                            <li className="nav-item"><a className="nav-link" href="pages/forms/code_editor.html">Code Editor</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item mega-menu">
                                    <a href="#" className="nav-link"><i className="link-icon icon-pie-chart"></i><span className="menu-title">Data</span><i className="menu-arrow"></i></a>
                                    <div className="submenu">
                                        <div className="col-group-wrapper row">
                                            <div className="col-group col-md-6">
                                                <p className="category-heading">Charts</p>
                                                <div className="submenu-item">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <ul>
                                                                <li className="nav-item"><a className="nav-link" href="pages/charts/chartjs.html">Chart Js</a></li>
                                                                <li className="nav-item"><a className="nav-link" href="pages/charts/morris.html">Morris</a></li>
                                                                <li className="nav-item"><a className="nav-link" href="pages/charts/flot-chart.html">Flot</a></li>
                                                                <li className="nav-item"><a className="nav-link" href="pages/charts/google-charts.html">Google Chart</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <ul>
                                                                <li className="nav-item"><a className="nav-link" href="pages/charts/sparkline.html">Sparkline</a></li>
                                                                <li className="nav-item"><a className="nav-link" href="pages/charts/c3.html">C3 Chart</a></li>
                                                                <li className="nav-item"><a className="nav-link" href="pages/charts/chartist.html">Chartist</a></li>
                                                                <li className="nav-item"><a className="nav-link" href="pages/charts/justGage.html">JustGage</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-group col-md-3">
                                                <p className="category-heading">Table</p>
                                                <ul className="submenu-item">
                                                    <li className="nav-item"><a className="nav-link" href="pages/tables/basic-table.html">Basic Table</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/tables/data-table.html">Data Table</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/tables/js-grid.html">Js-grid</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/tables/sortable-table.html">Sortable Table</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-group col-md-3">
                                                <p className="category-heading">Maps</p>
                                                <ul className="submenu-item">
                                                    <li className="nav-item"><a className="nav-link" href="pages/maps/mapeal.html">Mapeal</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/maps/vector-map.html">Vector Map</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/maps/google-maps.html">Google Map</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item mega-menu">
                                    <a href="#" className="nav-link"><i className="link-icon icon-wallet"></i><span className="menu-title">Pages</span><i className="menu-arrow"></i></a>
                                    <div className="submenu">
                                        <div className="col-group-wrapper row">
                                            <div className="col-group col-md-3">
                                                <p className="category-heading">User Pages</p>
                                                <ul className="submenu-item">
                                                    <li className="nav-item"><a className="nav-link" href="pages/samples/login.html">Login</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/samples/login-2.html">Login 2</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/samples/register.html">Register</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/samples/register-2.html">Register 2</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/samples/lock-screen.html">Lockscreen</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-group col-md-3">
                                                <p className="category-heading">Error Pages</p>
                                                <ul className="submenu-item">
                                                    <li className="nav-item"><a className="nav-link" href="pages/samples/error-400.html">400</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/samples/error-404.html">404</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/samples/error-500.html">500</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/samples/error-505.html">505</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-group col-md-3">
                                                <p className="category-heading">E-commerce</p>
                                                <ul className="submenu-item">
                                                    <li className="nav-item"><a className="nav-link" href="pages/samples/invoice.html">Invoice</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/samples/pricing-table.html">Pricing Table</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/samples/orders.html">Orders</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-group col-md-3">
                                                <p className="category-heading">General</p>
                                                <ul className="submenu-item">
                                                    <li className="nav-item"><a className="nav-link" href="pages/samples/search-results.html">Search Results</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/samples/profile.html">Profile</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/samples/timeline.html">Timeline</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/samples/news-grid.html">News grid</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/samples/portfolio.html">Portfolio</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="pages/samples/faq.html">FAQ</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link"><i className="link-icon icon-calculator"></i><span className="menu-title">Apps</span><i className="menu-arrow"></i></a>
                                    <div className="submenu">
                                        <ul className="submenu-item">
                                            <li className="nav-item"><a className="nav-link" href="pages/apps/email.html">Email</a></li>
                                            <li className="nav-item"><a className="nav-link" href="pages/apps/calendar.html">Calendar</a></li>
                                            <li className="nav-item"><a className="nav-link" href="pages/apps/todo.html">Todo List</a></li>
                                            <li className="nav-item"><a className="nav-link" href="pages/apps/gallery.html">Gallery</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/documentation/documentation.html" className="nav-link"><i className="link-icon icon-docs"></i><span className="menu-title">Documentation</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel">
                        <div className="content-wrapper"></div></div>
                </div>
            </>
        )
    }
}
export default Head