import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { IconButton, Toolbar, Typography } from '@material-ui/core'
import AssessmentIcon from '@material-ui/icons/Assessment';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton edge="start" color="inherit" component={Link}  to='/' >
                        <AssessmentIcon/>
                    </IconButton>

                    <Typography variant="h6" style={{fontWeight:800}}>
                        CodeQuiz
                    </Typography>

                    
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Navbar
