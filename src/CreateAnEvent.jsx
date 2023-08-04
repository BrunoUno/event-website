import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function CreateAnEvent(props) {
  const params = useParams();
  const navigate = useNavigate();
  const {
    event_Data,
    setEventData,
    eventName,
    setEventName,
    date,
    time,
    setTime,
    location,
    imageLink,
    setDate,
    setLocation,
    setImageLink,
    users,
  } = props;

  // const user = users?.find((user) => user.user_id === parseInt(params.user_id));
  function handleCreateEventOnSubmit(event) {
    event.preventDefault();
    if (
      eventName.trim() !== "" &&
      location.trim() !== "" &&
      imageLink.trim() !== "" &&
      date.trim() !== "" &&
      time.trim() !== ""
    ) {
      setEventData([
        ...event_Data,
        {
          id: event_Data.length + 1,
          event_name: eventName,
          date: date,
          time: time,
          location: location,
          image: imageLink,
          isliked: [],
          user_id: params.user_id,
        },
      ]);
      setEventName("");
      setLocation("");
      setImageLink("");
      setDate("");
      setTime("");
      navigate(`/${params.user_id}`);
    }
  }
  // useEffect(() => {
  //   if (user === undefined) {
  //     navigate("/");
  //   }
  // }, []);
  return (
    <>
      <div className="login-container">
        <div className="login-enter-details">
          <div className="login-inner-block">
            <div className="login-header">
              <h1>Create an event</h1>
            </div>
            <form onSubmit={handleCreateEventOnSubmit}>
              <div className="event-name">
                <input
                  type="text"
                  placeholder="Event name"
                  value={eventName}
                  onChange={(event) => setEventName(event.target.value)}
                  required
                />
              </div>
              <div className="event-date">
                <input
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  required
                />
              </div>
              <div className="event-date">
                <input
                  type="time"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  required
                />
              </div>
              <div className="event-location">
                <input
                  type="text"
                  placeholder="Event location"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  required
                />
              </div>
              <div className="event-image">
                <input
                  type="text"
                  placeholder="Enter image link"
                  value={imageLink}
                  onChange={(event) => setImageLink(event.target.value)}
                  required
                />
              </div>
              <div className="login-button">
                <input type="submit" value="Create" className="btn" />
              </div>
            </form>
          </div>
        </div>
        <div className="login-display-image">
          <img
            src="https://images.pexels.com/photos/2238912/pexels-photo-2238912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
