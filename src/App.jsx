import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import eventData from "./data";
import websiteUsers from "./users";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Events from "./Events";
import Footer from "./Footer";
import LogIn from "./LogIn";
import Register from "./Register";
import CreateAnEvent from "./CreateAnEvent";
import Likes from "./Likes";

function App() {
  const [event_Data, setEventData] = useState(eventData);
  const [users, setUsers] = useState(websiteUsers);
  const [username, setUsername] = useState("");
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [registerEmailId, setRegisterEmailId] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmailId, setLoginEmailId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [currentUser_id, setCurrentUser_id] = useState("");

  let currentLoggedIn;
  const user = users?.find((user) => user.user_id === currentUser_id);
  currentLoggedIn = user?.isLoggedIn;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Hero />
                <div className="container">
                  <Events
                    event_Data={event_Data}
                    currentUser_id={currentUser_id}
                    users={users}
                  />
                </div>
                <Footer />
              </div>
            }
          />
          {currentLoggedIn && (
            <Route
              path="/:user_id"
              element={
                <div>
                  <Navbar users={users} currentUser_id={currentUser_id} />
                  <Hero />
                  <div className="container">
                    <Events
                      event_Data={event_Data}
                      currentUser_id={currentUser_id}
                      setEventData={setEventData}
                      users={users}
                    />
                  </div>
                  <Footer />
                </div>
              }
            />
          )}
          <Route
            path="/login"
            element={
              <LogIn
                emailId={loginEmailId}
                setEmailId={setLoginEmailId}
                password={loginPassword}
                setPassword={setLoginPassword}
                users={users}
                setCurrentUser_id={setCurrentUser_id}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                username={username}
                setUsername={setUsername}
                emailId={registerEmailId}
                setEmailId={setRegisterEmailId}
                password={registerPassword}
                setPassword={setRegisterPassword}
                users={users}
                setUsers={setUsers}
              />
            }
          />

          {currentLoggedIn && (
            <Route
              path="/createanevent/:user_id"
              element={
                <CreateAnEvent
                  event_Data={event_Data}
                  setEventData={setEventData}
                  eventName={eventName}
                  setEventName={setEventName}
                  date={date}
                  time={time}
                  setTime={setTime}
                  setDate={setDate}
                  location={location}
                  setLocation={setLocation}
                  imageLink={imageLink}
                  setImageLink={setImageLink}
                  users={users}
                />
              }
            />
          )}
          {currentLoggedIn && (
            <Route
              path="/:user_id/Likes"
              element={
                <div>
                  <Navbar users={users} currentUser_id={currentUser_id} />
                  <div className="container">
                    <Likes
                      currentUser_id={currentUser_id}
                      eventData={event_Data}
                    />
                  </div>
                </div>
              }
            />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
