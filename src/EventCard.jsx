import clsx from "clsx";
export default function EventCard(props) {
  const {
    id,
    location,
    eventName,
    time,
    user_id,
    image,
    currentUser_id,
    isLiked,
    setEventData,
    eventData,
    date,
    users,
  } = props;

  const user = users?.find((user) => user.user_id === parseInt(user_id));
  console.log(user);
  const userName = user?.username;

  const classNames = clsx({
    "fa-heart": true,
    fa: isLiked.includes(currentUser_id),
    "fa-regular": !isLiked.includes(currentUser_id),
  });

  function handleHeartColorOnClick() {
    const newEventData = eventData.map((event) => {
      if (event.id === id) {
        if (event.isliked.includes(currentUser_id) === true) {
          const newisliked = event.isliked.filter(
            (user) => user !== currentUser_id
          );
          event.isliked = newisliked;
        } else {
          event.isliked = [...event.isliked, currentUser_id];
        }
      }
      return event;
    });
    setEventData(newEventData);
  }
  return (
    <>
      <div className="events-card" key={id}>
        <div className="events-image">
          {currentUser_id !== "" && (
            <button className="btn" onClick={handleHeartColorOnClick}>
              <i className={classNames}></i>
            </button>
          )}
          <img src={image} alt="" />
        </div>
        <div className="events-details">
          <h3>{eventName}</h3>
          <p className="events-time">Date - {date}</p>
          <p className="events-time">Time - {time}</p>
          <p className="events-location">Venue - {location}</p>
          <p className="events-organizer">Organized by {userName}</p>
        </div>
      </div>
    </>
  );
}
