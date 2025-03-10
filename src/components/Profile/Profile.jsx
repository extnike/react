import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import classes from './Profile.module.css'

const Profile = (props) => {
    return <div className={classes.content}>
        <ProfileInfo/>
        <MyPosts postsData={props.state.postsData}
                 dispatch={props.dispatch}/>
    </div>
};

export default Profile;