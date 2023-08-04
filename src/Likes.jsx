export default function Likes(props) {
  const { eventData, currentUser_id } = props;
  const filteredEventData = eventData.filter((event) =>
    event.isliked.includes(currentUser_id)
  );
  return (
    <>
      <div className="likes-container">
        <div className="likes-header">
          <h1>Likes</h1>
        </div>
        {filteredEventData?.map((event, index) => {
          return (
            <div className="likes-content" key={index}>
              <div className="likes-card-content">
                <div className="likes-card-heading">
                  <h2>{event.event_name}</h2>
                </div>
                <div className="likes-card-date">
                  <p>Date - {event.date}</p>
                </div>
                <div className="likes-card-time">
                  <p>Time - {event.time}</p>
                </div>
                <div className="likes-card-location">
                  <p>Venue - {event.location}</p>
                </div>
              </div>
              <div className="likes-card-image">
                <img src={event.image} alt="" />
                <i className="fa fa-heart"></i>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
