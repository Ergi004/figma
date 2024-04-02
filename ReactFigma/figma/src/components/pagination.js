import * as React from "react";
import '../styles/pagination.css'

const Pagination = () => {
  return (
    <div className="pagination">
      <a href="../App.js">&laquo;</a>
      <a href="../App.js">1</a>
      <a className="active" href="../App.js"> 2</a>
      <a href="../App.js">3</a>
      <a href="../App.js">4</a>
      <a href="../App.js">5</a>
      <a href="../App.js">6</a>
      <a href="../App.js">&raquo;</a>
    </div>
  );
};

export default Pagination;