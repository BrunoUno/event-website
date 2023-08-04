import EventCard from "./EventCard";

export default function Events(props) {
  const { event_Data, currentUser_id, setEventData, users } = props;

  return (
    <>
      <div className="events-container">
        <div className="events-header">
          <h1>Events</h1>
        </div>
        <div className="events-block">
          {event_Data?.map((event) => {
            return (
              <EventCard
                key={event.id}
                id={event.id}
                date={event.date}
                location={event.location}
                eventName={event.event_name}
                time={event.time}
                user_id={event.user_id}
                image={event.image}
                currentUser_id={currentUser_id}
                isLiked={event.isliked}
                setEventData={setEventData}
                eventData={event_Data}
                users={users}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
