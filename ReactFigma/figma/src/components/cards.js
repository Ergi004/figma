import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/card.css";

const Card = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/cards")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCards(data);
      });
  }, []);

  useEffect(() => {
    const revealSection = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("cards--hidden");
        observer.unobserve(entry.target);
      });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.8,
    });
    cards.forEach((card) => {
      const cardEle = document.getElementById(`card-${card.id}`);
      if (cardEle) {
        sectionObserver.observe(cardEle);
        cardEle.classList.add("card--hidden");
      }
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, [cards]);

  return (
    <div className="card-container">
      {cards &&
        cards.map((card) => (
          <div className="card-item cards--hidden" key={card.id} id={`card-${card.id}`}>
            <img src={card.img} alt="ok"></img>
            <h2>{card.title}</h2>
            <p>{card.body}</p>
          </div>
        ))}
    </div>
  );
};

export default Card;
