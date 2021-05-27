import React from 'react'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react'
import {  Button, makeStyles, Paper, Typography } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';
import ReplayIcon from '@material-ui/icons/Replay';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({ 
    root: {
        minHeight: '68vh',
        margin: 50,
        paddingTop: 50,
        paddingRight: 50,
        paddingLeft: 50,
      },
    loading: {
        margin: 'auto',
        width: 10,
        padding: 10,
    },
    questionSection:{
        marginTop:30,
    },
    scoreSection:{
        marginTop:50
    },
    scoreSectionButtons:{
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center'
    },
    questionCount:{
        fontWeight:800,
        marginBottom:10
    },
    questionText:{
        fontWeight:600,
    },

    answerSection:{
        marginTop:20
    },
     optionButtons:{
        textTransform: 'none',
        margin: 3,
        fontSize: '1.1rem'
     }
    
    
      
  }));
  

export const QuizPage = () => {
    const classes = useStyles();
    let {id}= useParams();
    const [questionAnswers, setQuestionAnswers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);


    const handleReattempt= () => {
        setScore(0)
        setCurrentQuestion(0)
        setShowScore(false)
    }

    const handleAnswerButtonClick = (isRight) => {
        if (isRight) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questionAnswers.question_set.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
            
        }
    };
    
    

    const fetchQuiz= ()=>{
        var url="http://127.0.0.1:8000/api/quiz/" + id + '/'
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            setQuestionAnswers(data);
            setIsLoading(false)
            
        })
    }

    useEffect(()=>{
        fetchQuiz()
    })

    

    return (
        <Paper className={classes.root} variant="outlined">
            
            {isLoading && (
                <div className={classes.loading}>
                    <CircularProgress color="secondary" />
                </div>
            )}



            {questionAnswers && (

                    <div>

                        <Typography variant="h3" align="center" color="primary" style={{fontWeight:800}}>
                            {questionAnswers.title}
                        </Typography>

                    {showScore ? (
                        <div className={classes.scoreSection}>
                            <Typography variant='h4' align='center' color='secondary' style={{fontWeight:700}}>
                                Result : You scored {score} out of {questionAnswers.question_set.length}
                            </Typography>

                            
                            <div className={classes.scoreSectionButtons}>
                                <Button variant="contained" color="primary" startIcon={<ReplayIcon/>} style={{margin:10}} onClick={handleReattempt} >
                                    Reattempt
                                </Button>
                                <Button variant="contained" color="secondary" startIcon={<HomeRoundedIcon/>} style={{margin:10}} component={Link} to='/'>
                                    Back to Quiz Home
                                </Button>
                            </div>

                        </div>
                    ) : (
                        <>
                            <Button variant="outlined" color="primary" startIcon={<HomeRoundedIcon/>}  component={Link} to='/'>
                                Back to Quiz Home
                            </Button>
                            <div className={classes.questionSection}>
                                <Typography className={classes.questionCount} variant="h5">
                                    <span>Question {currentQuestion + 1}</span>/{questionAnswers.question_set.length}
                                </Typography>
                                <Typography className={classes.questionText} color="textPrimary" variant="h5" component="span">{questionAnswers.question_set[currentQuestion].prompt}</Typography>
                            </div>
                            <div className={classes.answerSection}>
                                {questionAnswers.question_set[currentQuestion].answer_set.map((answer, index)=>(
                                    <Button key={index} onClick={() => handleAnswerButtonClick(answer.isRight) } color="secondary" className={classes.optionButtons} variant="text" fullWidth> {answer.ansText} </Button>
                                ))}
                            </div>
                        </>
                    )}
                    </div>
            )}

                    
        </Paper>
    )
}
