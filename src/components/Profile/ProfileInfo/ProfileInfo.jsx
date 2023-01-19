import React from "react";
import classes from "./ProfileInfo.Module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src='https://media.nationalgeographic.org/assets/photos/000/267/26734_c25-0-964-743_r800x633.jpg?c816ed0308ccc31a13f7c2113c697f9bd40ae230'
          alt='Beach'
        />
        <div className={classes.descriptionBlock}>ava 2 + description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
