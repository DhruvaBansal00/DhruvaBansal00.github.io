import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import Resume from "../../resume.json"
import AwardCard from "../elements/AwardCard"

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,
      prevIdx: -1
    };
  }

  //state = { value: 0, previous: 0 };

  render() {
    const { curIdx } = this.state;
    const currDescription = Resume.Awards[curIdx].description;
    const currName = Resume.Awards[curIdx].name;
    const currUrl = Resume.Awards[curIdx].html_url;
    const currImage = Resume.Awards[curIdx].image;
    return (
      <div className="is-centered">
        {/* Bounding box for the Timeline */}
        <div
          style={{
            width: "100%",
            height: "100px",
            margin: "0 auto",
            marginTop: "20px",
            fontSize: "15px"
          }}
        >
            <HorizontalTimeline
            styles={{
                background: "#f8f8f8",
                foreground: "#1A79AD",
                outline: "#dfdfdf"
            }}
            index={this.state.curIdx}
            indexClick={index => {
                const curIdx = this.state.curIdx;
                this.setState({ curIdx: index });
            }}
            values={Resume.Awards.map(x => x.date)}
            />
        </div>
        <br></br>
        <div className="columns is-centered">
        {/* any arbitrary component can go here */}
        {/* {currDescription}
        {currName}
        {currUrl}
        {currImage} */}
        <AwardCard award={Resume.Awards[curIdx]} />
        </div>
      </div>
    );
  }
}
