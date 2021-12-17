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

  function randomPerson() {
    let randomNum = Math.floor(Math.random() * people.length);
    randomNum == index && randomNum++;
    randomNum == people.length && (randomNum -= 2);
    setIndex(randomNum);
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
        {index > 0 ? (
          <button
            className="prev-btn"
            onClick={() => {
              changePerson(-1);
            }}
          >
            <FaChevronLeft />
          </button>
        ) : null}
        {index < people.length - 1 ? (
          <button
            className="next-btn"
            onClick={() => {
              changePerson(1);
            }}
          >
            <FaChevronRight />
          </button>
        ) : null}
      </div>
      <button
        className="random-btn"
        onClick={() => {
          randomPerson();
        }}
      >
        誰が出るかな？
      </button>
    </article>
  );
};

export default Review;
