import React, { useState, useEffect } from 'react'
import { Grid, makeStyles, Typography} from '@material-ui/core'
import {QuizCard} from '../components/QuizCard'

const useStyles = makeStyles((theme) => ({ 
    root: {
        minHeight: '75vh',
        margin: 50
      },
    header: {
        margin: 20,
        fontFamily:"Nunito",
        fontWeight: 800
    },
    quizGrid: {
        
    }
  }));
  
const Content = () => {
    const classes = useStyles();
    const [quizlist, setQuizlist] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const fetchQuiz= ()=>{
        fetch('http://127.0.0.1:8000/api/quiz/')
        .then(response=> response.json())
        .then(data=> {
            setQuizlist(data)
            setIsLoading(false)
        })
    }

    useEffect(()=>{
        fetchQuiz();
    }, [])


    return (
        <div className={classes.root}>
            <Typography color="secondary" variant="h4" align="center" className={classes.header}>
                All Quizzes
            </Typography>
            {isLoading &&  <div>Loading...</div>}

            <Grid container spacing={3} className={classes.quizGrid}>
                { quizlist && quizlist.map((quiz, index)=>(
                    <Grid item xs={12}  sm={6} md={4} key={index}>
                        <QuizCard quiz={quiz} />
                    </Grid>

                ))}
                

                
            </Grid>
        </div>
    )
}

export default Content
