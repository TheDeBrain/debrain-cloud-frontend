import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


interface Props {
    categoryMenuData: any;
}

interface State {
    treeData: any;
    lfTreeData: any;
    rgTreeData: any;
}

class CategoryMenu extends React.Component<Props, State> {

    // switch right tree
    switchRightTree = (treeIndex) => {
        this.setState(state => ({
            treeData: this.props.categoryMenuData,
            lfTreeData: this.props.categoryMenuData[treeIndex],
            rgTreeData: this.props.categoryMenuData[treeIndex].middleClass
        }));
    }

    constructor(props: any) {
        super(props);
        this.state = {
            treeData: this.props.categoryMenuData,
            lfTreeData: this.props.categoryMenuData[0],
            rgTreeData: this.props.categoryMenuData[0].middleClass
        }
    }
    render() {
        return (
            <>
                <Grid container>
                    <Grid item xl={3} lg={3} md={3} sm={3} xs={3} >
                        <div className="col-group-wrapper row" style={{ maxHeight: 400, overflowY: 'auto', overflowX: 'hidden' }}>
                            <div className="col-group">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="submenu-item">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <ul>
                                                        {this.state.treeData.map((item, index) => {
                                                            return <li key={index} className="nav-item" onMouseMove={() => { this.switchRightTree(index) }}><a className="nav-link" href="#">{item.name}</a></li>
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                        <div className="col-group-wrapper row" style={{ maxHeight: 400, overflowY: 'auto', overflowX: 'hidden' }}>
                            {
                                this.state.rgTreeData.map((item, index) => {
                                    var smallClass = item.smallClass
                                    return <div className="col-group col-md-4" key={index}>
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="category-heading">{item.name}</p>
                                                <div className="submenu-item">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <ul>
                                                                {
                                                                    smallClass.map((item, index) => {
                                                                        return <li key={index} className="nav-item" ><a className="nav-link" href='#'>{item.name}</a></li>
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </Grid>
                </Grid>
            </>
        )
    }
}
export default CategoryMenu