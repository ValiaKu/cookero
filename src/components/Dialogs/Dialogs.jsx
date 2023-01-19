import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {
  addDialogActionCreator,
  updateNewDialogTextActionCreator,
} from "../../redux/state";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let dialogAnswer = React.createRef();

  let onDialogChange = () => {
    let dialogText = dialogAnswer.current.value;
    props.dispatch(updateNewDialogTextActionCreator(dialogText));
    //props.updateNewDialogText(dialogText);
  };

  let addDialog = () => {
    //props.addDialog();
    props.dispatch(addDialogActionCreator);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <textarea
        ref={dialogAnswer}
        onChange={onDialogChange}
        value={props.newDialogText}></textarea>
      <button onClick={addDialog}>Add text</button>
    </div>
  );
};

export default Dialogs;
