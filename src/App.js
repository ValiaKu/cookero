import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = (props) => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.sidebar} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route
              exact
              path='/dialogs/'
              element={
                <Dialogs
                  state={props.state.dialogsPage}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              exact
              path='/dialogs/1'
              element={<Dialogs state={props.state.dialogsPage} />}
            />
            <Route
              exact
              path='/dialogs/2'
              element={<Dialogs state={props.state.dialogsPage} />}
            />
            <Route
              exact
              path='/dialogs/3'
              element={<Dialogs state={props.state.dialogsPage} />}
            />
            <Route
              exact
              path='/dialogs/4'
              element={<Dialogs state={props.state.dialogsPage} />}
            />
            <Route
              exact
              path='/dialogs/5'
              element={<Dialogs state={props.state.dialogsPage} />}
            />
            <Route
              exact
              path='/profile'
              element={
                <Profile
                  profilePage={props.state.profilePage}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />

            {/* <Route path='/profile' render={() => <Dialogs />} />
            <Route path='/profile' render={() => <Profile />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
