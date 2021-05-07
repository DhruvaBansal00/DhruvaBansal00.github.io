import React from "react";
import Badge from "../elements/Badge";
import TimelineContent from "./TimelineContent";

function dates(props) {
  if (props.endDate === 'None') {
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
        <div className={`field is-grouped ${props.expIndex % 2 == 0 && window.screen.width > 768 ? "is-grouped-right" : "is-grouped-left"} is-grouped-multiline`}>
          {props.badge.map((value, index) => {
            return (
              <Badge key={index} text={value.name} faIcon={value.x_icon} leftTimeline={props.expIndex % 2 == 0 && window.screen.width > 768}/>
            )
          })}
        </div>
        <TimelineContent
          summary={props.summary}
          summary1={props.summary1}
          summary2={props.summary2}
        />
      </div>
    </div>
  );
}

export default TimelineItem;
