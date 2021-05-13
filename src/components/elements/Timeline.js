import React from "react";
import TimelineItem from "./TimelineItem";
import TimelineHeader from "./TimelineHeader";
import Resume from "../../resume.json";

function Timeline() {
  let active = window.screen.width < 768;
  return (
    <div className={`timeline ${active ? "is-left" : "is-centered"}`}>    
    <header className="timeline-header">
    <span className="tag is-medium is-dark">
      {new Date().getFullYear()}
    </span>
  </header>
  <div className="timeline-item">
    <div className="timeline-marker is-success"></div>
    <div className="timeline-content"></div>
  </div>
  {Resume.work
    .map(item => {
      return new Date(item.startDate).getFullYear();
    }).filter((value, index, self) => self.indexOf(value) === index)
    .map((year, i) => {
      let content = [];
      content.push(
        <TimelineHeader key={i} year={year}/>
      );
      content.push(
        Resume.work
          .filter(work => new Date(work.startDate).getFullYear() === year)
          .map((item, j) => {
            return (
              <TimelineItem
                key={j}
                image={item.image}
                date={new Date(item.startDate).toLocaleString("en-UK", {
                  month: "long",
                  year: "numeric"
                })}
                company={item.company}
                summary={item.summary}
                summary1={item.summary1}
                summary2={item.summary2}
                position={item.position}
                website={item.website}
                endDate={item.endDate}
                badge={item.highlights}
                expIndex={item.index}
              />
            );
          })
      );
      return content;
    })}
    </div>
  );
}

export default Timeline;
