import React from "react";

const Success = (props) => {
  return (
    <div className="success-container">
      <h1 className="success_heading">
        Thank you so much for getting in touch with us!
      </h1>
      <p className="success_message">
        We truly value your feedback and are here to help with anything you
        need. Your message means a lot to us, and we’ll get back to you as soon
        as we can. Have a wonderful day!
      </p>
      <div id="progress_bar" style={{ width: `${props.width}%` }}></div>
    </div>
  );
};

export default Success;
