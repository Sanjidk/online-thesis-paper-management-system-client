import React from 'react';
import thesis from "../../store/thesis.jpg"

const Banner = () => {
    return (
<div class="lg:mt-8">
  <div class="hero-content flex-col lg:flex-row">
  <div>
      <h1 class="text-5xl font-bold">THESIS PAPER</h1>
      <p class="py-6">A thesis focuses on the research conducted, and is thus published as journal articles. However, in some cases, it may also be published as a book for a wider readership. While both thesis and book writing require effort, time, and are equally longer versions of documents, they are different in several ways.</p>
      <button class="btn btn-primary mb-16">Get Started</button>
    </div>
    <img src={thesis} alt="img" class="max-w-sm rounded-lg shadow-2xl" />
   
  </div>
</div>
    );
};

export default Banner;