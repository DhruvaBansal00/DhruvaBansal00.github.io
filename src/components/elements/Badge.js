import React from "react";

// className="control"

function Badge(props) {
  const faIcon = "fas fa-1x " + props.faIcon;
  const rightToggleStyle = {
    paddingLeft: props.leftTimeline ? 12 : null,
    paddingBottom: props.leftTimeline ? 12 : null
 };
  return (
    <div className={`${props.leftTimeline ? "" : "control"}`} style={rightToggleStyle}>
      <div className="tags has-addons">
        <span className="tag is-dark">{props.text}</span>
        <span className="tag is-success">
          <i className={faIcon}></i>
        </span>
      </div>
    </div>
  );
}

export default Badge;
