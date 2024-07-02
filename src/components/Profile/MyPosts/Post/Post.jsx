import classes from './Post.module.css'
const Post = (props) => {
    return <li className={classes.item__link}>
            <article className={classes.item}>{props.message}</article>
            <div><span>{props.likesCount}</span></div>
          </li >

  
};

export default Post;