import React from "react";

const Note = ({ note }) => {
  const { title, subject } = note;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="note banner"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-between">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{subject}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
