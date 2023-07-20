import React from 'react';


const SinglePaper = ({ img, paperTitle, paperDetails }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 shadow-xl p-2 bg-green-900 p-4'>
      <figure><img className='w-52' src={img} alt="Album" /></figure>
      <div>
        <h2 className="font-bold text-2xl">{paperTitle}</h2>
        <p>{paperDetails}</p>
      </div>
    </div>
  );
};

export default SinglePaper;