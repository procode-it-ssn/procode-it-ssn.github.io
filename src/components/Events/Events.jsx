import "./events.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get("https://event-procode.herokuapp.com/getEvents")
            .then((response) => {
                if (response.data.data) {
                    setEvents(response.data.data);
                } else {
                    setEvents([]);
                }
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <h1>Events</h1>
            <div className="events">
                {(events.length > 0) ? (
                    events.map((event, i) => {
                        return (
                            <div className="event" key={i}>
                                <p className="ev-name">{event.eventName}</p>
                                <p className="desc">{event.description}</p>
                                <p className="speaker">Speaker: {event.speaker}</p>
                                <i><a href={event.regLink}>Link to Event</a></i>
                            </div>
                        );
                    })
                ) : (
                    <h3>
                        No Events have been posted yet
                    </h3>
                )}
            </div>
        </>
    );
}

export default Events;;