import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({ 
    footer: {
      padding: theme.spacing(2, 2),
      marginTop: 'auto',
      backgroundColor: '#3f51b5',
      color:'white',
      position:"sticky",
      textAlign:"center"
    },
  }));

const Footer = () => {
    const classes = useStyles();
    return (
        <div >
            <footer className={classes.footer}>
                <Container maxWidth="sm" >
                    <Typography variant="body1">Website designed and developed by Sudarshan Achaler.</Typography>
                    <Typography variant="body2" style={{ color: '#f9f9f9' }}>
                        {'Copyright © '}
                        <Link color="inherit" href="/">
                            CodeQuiz
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Container>
            </footer>
        </div>
    )
}

export default Footer
