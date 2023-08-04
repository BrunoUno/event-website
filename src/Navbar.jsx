import { NavLink, useParams, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const params = useParams();
  const navigate = useNavigate();
  const { users, currentUser_id } = props;
  const user = users?.find((user) => user.user_id === parseInt(params.user_id));

  function handleCreateEventOnClick() {
    if (params.user_id === undefined) {
      navigate("/login");
    } else {
      navigate(`/createanevent/${params.user_id}`);
    }
  }

  function handleLikesOnClick() {
    navigate(`/${params.user_id}/Likes`);
  }
  return (
    <>
      <div className="navbar-container">
        <div className="nav-brand">
          {currentUser_id === undefined ? (
            <NavLink to="/" className="btn">
              <img src="./assets/brand.png" alt="" />
            </NavLink>
          ) : (
            <NavLink to={`/${currentUser_id}`} className="btn">
              <img src="./assets/brand.png" alt="" />
            </NavLink>
          )}
        </div>
        <div className="navbar-button">
          <div className="nav-create-event">
            <button className="btn" onClick={handleCreateEventOnClick}>
              Create an event
            </button>
          </div>
          {user && (
            <div className="nav-likes">
              <button className="btn" onClick={handleLikesOnClick}>
                Likes
              </button>
            </div>
          )}
          {params.user_id === undefined && (
            <>
              <div className="nav-login">
                <NavLink to="/login" className="btn">
                  Login
                </NavLink>
              </div>
              <div className="nav-register">
                <NavLink to="/register" className="btn">
                  Sign Up
                </NavLink>
              </div>
            </>
          )}
          {user && (
            <>
              <div className="onOff">
                <div className="navbar-username">
                  <img
                    src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                    alt=""
                  />
                </div>
                <div className="nav-logout">
                  <NavLink to="/" className="btn">
                    Logout
                  </NavLink>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
