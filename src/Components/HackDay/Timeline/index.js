import React from "react";
import "./Timeline.css";

const Timeline = () => {
  const events = [
    { date: "21 March", time: "12:00 AM", event: "Registration begins" },
    { date: "1 April", time: "11:59 PM", event: "Registration ends" },
    { date: "4 April", time: "12:00 AM", event: "Hackathon begins" },
    { date: "6 April", time: "12:00 PM", event: "Hackathon ends" },
    { date: "7 April", time: "9:00 AM - 5:00 PM", event: "Offline Presentation Round" },
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Event Timeline</h2>

      <div className="timeline">
        {events.map((item, index) => (
          <div key={index} className="timeline-event">
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-details">
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-description">{item.event}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
