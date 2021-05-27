import React, { useState } from 'react'
import {Avatar, Button,  Card, CardActions, CardContent, CardHeader, IconButton, makeStyles, Typography} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from 'react-router-dom';

const useStyles= makeStyles((theme)=>({
    avatar:{
        backgroundColor: "red"
    },
    attemptbtn:{
        marginLeft: 5
    },
    

}));

export const QuizCard = (props) => {
    const classes= useStyles();
    var attemptLink= "/attemptQuiz/" + props.quiz.id;
    const [liked, setLiked] = useState(false);

    const handleLike= () =>{
        setLiked(!liked)
    }
    return (
        <div>
            <Card elevation={3}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            {props.quiz.title[0]}
                        </Avatar>
                    }

                    action={
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                    }

                    title={props.quiz.title}
                    subheader={props.quiz.createdOn}
                />

                <CardContent  >
                    <Typography variant="body2" color="textSecondary" component="p" >
                        {props.quiz.description}
                    </Typography>
                </CardContent>

                <CardActions disableSpacing>
                    <IconButton onClick={handleLike} >
                        {liked ? <FavoriteIcon color="secondary" /> : <FavoriteIcon />}
                    </IconButton>
                    <Button size="small" color="primary" variant="contained" className={classes.attemptbtn} component={Link}  to={attemptLink}>
                        Attempt Quiz
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}
