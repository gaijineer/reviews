import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  function changePerson(offset) {
    setIndex((currState) => {
      return currState + offset;
    });
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}様</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() => {
            changePerson(-1);
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => {
            changePerson(1);
          }}
        >
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn">誰が出るかな？</button>
    </article>
  );
};

export default Review;
