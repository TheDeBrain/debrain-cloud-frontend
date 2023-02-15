import React from 'react';

import productTree from './data/product_tree.json'
import menuTree from './data/menu_tree.json'
import { Link, Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import CategoryMenu from '../menus/CategoryMenu/CategoryMenu';

class Head extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <>
                <nav style={{ position: 'sticky', top: 0, zIndex: 10,padding:0 }} className="navbar horizontal-layout">
                    <div className="nav-bottom">
                        <div className="container" style={{paddingTop:0,paddingBottom:0,paddingLeft:50,paddingRight:50,maxWidth:'100%'}}>
                            <ul className="nav page-navigation">
                                <li className="nav-item">
                                    <a href="index.html" className="nav-link">
                                        <Link className='link' to='/Tab1'>
                                            <i className="link-icon icon-screen-desktop"></i>
                                            <span className="menu-title">Dashboard</span>
                                        </Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                    <Link className='link' to='/fileManagePage'>
                                        <i className="link-icon icon-disc"></i>
                                        <span className="menu-title">Disk</span>
                                        </Link>
                                    </a>
                                </li>
                                <li className="nav-item mega-menu">
                                    <a href="#" className="nav-link"><i className="link-icon icon-film"></i><span className="menu-title">UI Elements</span><i className="menu-arrow"></i></a>
                                    <div className="submenu" style={{ height: 450 }}>
                                        <CategoryMenu categoryMenuData={productTree} />
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link"><i className="link-icon icon-book-open"></i><span className="menu-title">Forms</span><i className="menu-arrow"></i></a>
                                    <div className="submenu" >
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
                                    <div className="submenu" >
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
                                    <div className="submenu" >
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
                                    <a href="pages/documentation/documentation.html" className="nav-link"><i className="link-icon icon-docs"></i><span className="menu-title">Documentation</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
export default Head