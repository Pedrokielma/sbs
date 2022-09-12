import React from "react";

import "./ServiceCard.scss";

function ServiceCard(props) {
  const { title, content, Icon } = props;
  return (
    <div className="card-services">
      <div className="icon-section">
        <div className="transparent-div"></div>
        <div className="icon">
          <Icon />
        </div>
      </div>
      <div className="card-content">
        <p className="card-title">{title}</p>
        <div className="content-list">
          {content.map((item, index) => {
            return (
              <div className="item-list">
                <div className="marker"></div>
                <p key={index}>{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
