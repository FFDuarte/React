import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import PostCard from '../../../components/PostCard'

const useStyles = makeStyles((theme) => ({
    root:{

    }
}));
const posts = [
    {
        id:1,
        author:{
            id:1,
            name:'Fabricio Fernando',
            username: 'fabricio',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: "Criando um app do zero utilizando React.js",
        date: "15 de Agosto de 2021",
        description: "Fala pessoal! Qual o Framework favorio de vcs?",
        hashtags: "#dotnet, #javascript, #reactjs, #developer",
        image: "/images/posts/post9.jpeg"
    },
    {
        id:2,
        author:{
            id:1,
            name:'Fabricio Fernando',
            username: 'fabricio',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: "Teste",
        date: "20 de Dezembro de 2020",
        description: "Fala pessoal! Qual o Framework favorio de vcs?",
        hashtags: "#dotnet, #javascript, #reactjs, #developer",
        image: "/images/posts/post2.png"
    }
    

];

function Feed(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post}></PostCard>
                ))
            }
        </div>
    )
}

export default Feed;