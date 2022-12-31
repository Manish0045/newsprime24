import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'80%', width:'40%'}}>{source}</span>
          <img src={!imageUrl?"https://socprime.com/wp-content/uploads/Threat-Bounty-Program-November.png":imageUrl} className="card-img-top" alt="News Prime 24/7.." />
          <div className="card-body">
            <h5 className="card-title text-black-50">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-dark mt-5 text-white btn-outline-info" rel="noreferrer">
              Read in details
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
