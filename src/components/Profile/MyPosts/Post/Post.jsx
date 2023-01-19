import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://www.moia.in/wp-content/uploads/1768.jpg' />
      {props.message}
      <span>Likes: {props.likeqty}</span>
    </div>
  );
};

export default Post;
