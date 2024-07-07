import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return <div className={classes.user__posts}>
        <h3>My posts</h3>
        <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/></div>
        <button onClick={addPost}>New post</button>
        <div className={classes.posts}>
            <ul className={classes.posts__list}>
                {props.postsData.map(post => <Post message={post.text} key={post.id} id={post.id}
                                                   likesCount={post.likesCount}/>)}
            </ul>
        </div>
    </div>

};

export default MyPosts;