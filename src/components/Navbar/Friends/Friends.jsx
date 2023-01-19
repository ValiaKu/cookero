import React from "react";

const Friends = (props) => {
  let friendsElements = props.friends.map((friend) => <li>{friend.name}</li>);

  return <ul>{friendsElements}</ul>;
};
export default Friends;
