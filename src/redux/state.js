const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_DIALOG_TEXT = "UPDATE-NEW-DIALOG-TEXT";
const ADD_DIALOG = "ADD-DIALOG";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "Its my first post", likesCount: 0 },
      ],
      newPostText: "Valia is cool",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Valia" },
        { id: 3, name: "Olena" },
        { id: 4, name: "Anna" },
        { id: 5, name: "Lora" },
        { id: 6, name: "Yanina" },
        { id: 7, name: "Vita" },
        { id: 8, name: "Oksana" },
        { id: 9, name: "Olia" },
      ],
      messages: [
        { id: 1, message: "Hello!" },
        { id: 2, message: "Yo!" },
        { id: 3, message: "Good evening!" },
      ],
      newDialogText: "Hello Valia",
    },
    sidebar: {
      friends: [
        { id: 1, name: "Oleg" },
        { id: 2, name: "Alla" },
        { id: 3, name: "Anna" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._rerenderEntireTree(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addDialog() {
    let newDialog = {
      id: 5,
      message: this._state.dialogsPage.newDialogText,
    };
    this._state.dialogsPage.messages.push(newDialog);
    this._state.dialogsPage.newDialogText = "";
    this._callSubscriber(this._state);
  },
  updateNewDialogText(newText) {
    this._state.dialogsPage.newDialogText = newText;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    ///type: 'ADD-POST'
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._rerenderEntireTree(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-DIALOG") {
      let newDialog = {
        id: 5,
        message: this._state.dialogsPage.newDialogText,
      };
      this._state.dialogsPage.messages.push(newDialog);
      this._state.dialogsPage.newDialogText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-DIALOG-TEXT") {
      this._state.dialogsPage.newDialogText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const updateNewDialogTextActionCreator = (dialogText) => ({
  type: UPDATE_NEW_DIALOG_TEXT,
  newText: dialogText,
});

export const addDialogActionCreator = () => ({
  type: ADD_DIALOG,
});

window.store = store;

export default store;
