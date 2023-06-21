import React from 'react';


const SinglePaper = ({img, paperTitle, paperDetails, bgClass}) => {
    return (
<div className={`card lg:card-side shadow-xl p-2 ${bgClass}`}>
  <figure><img src={img} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{paperTitle}</h2>
    <p>{paperDetails}</p>
    <div>
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    );
};

export default SinglePaper;