import { NavLink, useNavigate } from "react-router-dom";

export default function LogIn(props) {
  const {
    emailId,
    setEmailId,
    password,
    setPassword,
    users,
    setCurrentUser_id,
  } = props;
  const navigate = useNavigate();

  function handleLoginOnSubmit(event) {
    event.preventDefault();
    users.map((user) => {
      if (user.email_id === emailId && user.password === password) {
        user.isLoggedIn = true;
        setCurrentUser_id(user.user_id);
        navigate(`/${user.user_id}`);
      }
    });
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
              <h1>Log In</h1>
            </div>
            <form onSubmit={handleLoginOnSubmit}>
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
                <input type="submit" value="Log in" className="btn" />
              </div>
            </form>
            <div className="redirect-link">
              <NavLink to="/register" className="btn">
                Sign Up <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="login-display-image">
          <img
            src="https://images.pexels.com/photos/315843/pexels-photo-315843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
