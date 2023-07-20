import React from 'react';
import thesis from "../../store/thesis.jpg"
import SharedButton from '../Shared/SharedButton';

const Banner = () => {
  return (
    <div className="">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2 justify-items-center	 gap-5">
        <div className=''>
          <h1 className="text-5xl font-bold">THESIS PAPER</h1>
          <p className="py-6">A thesis focuses on the research conducted, and is thus published as journal articles. However, in some cases, it may also be published as a book for a wider readership. While both thesis and book writing require effort, time, and are equally longer versions of documents, they are different in several ways.</p>
          <SharedButton>View More</SharedButton>
        </div>

        <img src={thesis} alt="img" className="max-w-sm rounded-lg shadow-2xl" />

      </div>
    </div>
  );
};

export default Banner;