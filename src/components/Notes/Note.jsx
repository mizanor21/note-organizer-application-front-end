import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Note = ({ note, setSelectedNote, handleNoteDelete }) => {
  const { _id, title, description, bannerURL, createdAt } = note;

  const handleDelete = () => {
    const agree = window.confirm(`Are you sure you want to delete?`);
    if (agree) {
      fetch(`http://localhost:5000/note/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            toast.success("Successfully deleted note.");
            handleNoteDelete(_id); // Call the onDelete function provided by the parent
          } else {
            toast.error("No documents matched the query.");
          }
        });
    }
  };

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
            <label
              onClick={() => setSelectedNote(note)}
              htmlFor="note-modal"
              className=""
            >
              <FaEdit></FaEdit>
            </label>
            <button onClick={handleDelete} className="text-sm">
              <FaTrash />
            </button>
          </h2>
          <p className="text-ellipsis line-clamp-2">{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{createdAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
