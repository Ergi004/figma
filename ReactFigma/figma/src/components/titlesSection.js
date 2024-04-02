import * as React from "react";
import '../styles/titleSection.css'


const TilesSection = () => {
  return (
    <section className="titlesSection">
      <img src="/img/list-icon.svg" alt="list-icon"/>
      <img src="/img/grid-icon.svg" alt="grid-icon"/>
      <li className="title">Javascript</li>
      <li className="title">DevOps</li>
      <li className="title">Cloud</li>
      <li className="title">Terraform</li>
      <li className="title">Architecture</li>
      <li className="title">Scalability</li>
      <li className="title">Explainers</li>
    </section>
  );
};

export default TilesSection;
