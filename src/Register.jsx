import { NavLink, useNavigate } from "react-router-dom";

export default function Register(props) {
  const navigate = useNavigate();
  const {
    username,
    setUsername,
    emailId,
    setEmailId,
    password,
    setPassword,
    users,
    setUsers,
  } = props;

  function RegisterOnClickHandler(event) {
    event.preventDefault();
    if (
      username.trim() !== "" &&
      emailId.trim() !== "" &&
      password.trim() !== ""
    ) {
      setUsers([
        ...users,
        {
          user_id: users.length + 1,
          username: username.trimStart(),
          email_id: emailId.trimStart(),
          password: password.trimStart(),
          isLoggedIn: false,
        },
      ]);
      setUsername("");
      setEmailId("");
      setPassword("");
      navigate("/login");
    }
  }
  return (
    <>
      <div className="login-container">
        <div className="login-enter-details">
          <div className="login-inner-block">
            <NavLink to="/" className="btn">
              <img src="./assets/brand.png" alt="" />
            </NavLink>

            <div className="login-header">
              <h1>Sign Up</h1>
            </div>
            <form onSubmit={RegisterOnClickHandler}>
              <div className="login-username">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                />
              </div>
              <div className="login-email">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={emailId}
                  onChange={(event) => setEmailId(event.target.value)}
                  required
                />
              </div>
              <div className="login-password">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>
              <div className="login-button">
                <input type="submit" className="btn" />
              </div>
            </form>
            <div className="redirect-link">
              <NavLink to="/login" className="btn">
                Go to Login <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="login-display-image">
          <img
            src="https://images.pexels.com/photos/175659/pexels-photo-175659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
