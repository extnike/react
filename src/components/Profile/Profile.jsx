import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import classes from './Profile.module.css'

const Profile = (props) => {
    return <div className={classes.content}>
        <ProfileInfo/>
        <MyPosts postsData={props.state.postsData} addPost={props.addPost}/>
    </div>
};

export default Profile;