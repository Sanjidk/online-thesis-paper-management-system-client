import React from 'react';


const SinglePaper = ({img, paperTitle, paperDetails, bgClass}) => {
    return (
<div class={`card lg:card-side shadow-xl p-2 ${bgClass}`}>
  <figure><img src={img} alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">{paperTitle}</h2>
    <p>{paperDetails}</p>
    <div>
      <button class="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    );
};

export default SinglePaper;