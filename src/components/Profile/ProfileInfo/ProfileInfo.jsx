import classes from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return <div>

    <div >    <img
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9K46bR2-YYxEyhvHctFAlD67OzaRObWptcQ&s'
      alt=''
    /></div>
    <div className={classes.user__info}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2vHqzLsGJ62FExpmUkvPxJW06B3-J71_VhQ&s" alt="" />
        <p>Here is the user info</p>
    </div>
  </div>
};

export default ProfileInfo;