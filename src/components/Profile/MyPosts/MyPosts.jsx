import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    return <div className={classes.user__posts}>
        <h3>My posts</h3>
        <div><textarea name="" id="" cols="30" rows="10"></textarea></div>
        <button>New post</button>
        <div className={classes.posts}>
            <ul className={classes.posts__list}>
                {props.postsData.map(post => <Post message={post.text} key={post.id} id={post.id} likesCount={post.likesCount}/>
                )}
            </ul>
        </div>
    </div>

};

export default MyPosts;