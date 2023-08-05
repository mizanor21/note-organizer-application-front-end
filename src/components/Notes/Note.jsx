import React from "react";
import { FaTrash } from "react-icons/fa";

const Note = ({ note }) => {
  const { title, subject, bannerURL, createdAt } = note;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl hover:-translate-y-1 duration-200 rounded-md">
        {bannerURL?.length > 10 && (
          <figure>
            <img className="h-48" src={bannerURL} alt="note banner" />
          </figure>
        )}

        <div className="card-body border-b-4 rounded-md border-green-500">
          <h2 className="card-title justify-between">
            {title}
            <button className="text-sm">
              <FaTrash />
            </button>
          </h2>
          <p className="text-ellipsis line-clamp-2">{subject}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{createdAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
