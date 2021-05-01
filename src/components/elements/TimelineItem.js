import React from "react";

function dates(props) {
  if (props.endDate == 'None') {
    return <p className="heading">{props.date}</p>;
  } else {
    return <p className="heading">{props.date}-{props.endDate}</p>;
  }
}

function TimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-48x48">
      <a href={props.website}>
        <img src={props.image} alt="" class="center"/>
      </a>
      </div>
      <div className="timeline-content">
        {dates(props)}
        <h1 className="title is-4">{props.company}</h1>
        <p className="subtitle is-6">{props.position}</p>
        <p style={{ maxWidth: "25em" }}>{props.summary}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
