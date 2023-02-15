import { Card, Grid } from '@mui/material';
import React from 'react';

class DashboardPage extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <Grid xs={12}>
                <Grid item >
                <Card sx={{ minWidth: 275 }}>2123</Card>
                </Grid>
                <Grid item >
                <Card sx={{ minWidth: 275 }}>2123</Card>
                </Grid>
            </Grid>
        )
    }
}
export default DashboardPage