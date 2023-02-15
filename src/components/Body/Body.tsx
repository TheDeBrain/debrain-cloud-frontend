import React from 'react';

import { Link, Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import CategoryMenu from '../menus/CategoryMenu/CategoryMenu';

class Body extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="container-scroller">
                    <div className="container-fluid page-body-wrapper">
                        <div className="main-panel">
                            <div className="content-wrapper">
                                <Outlet />
                            </div></div>
                    </div>
                </div>
            </>
        )
    }
}
export default Body