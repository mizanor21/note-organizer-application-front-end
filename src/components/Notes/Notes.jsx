import React, { useEffect, useState } from "react";
import Note from "./Note";
import noteAddLogo from "../../assets/icons/note-add-logo.png";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="flex justify-center">
          <img
            className="cursor-pointer "
            title="Write Your Note"
            src={noteAddLogo}
            alt=""
          />
        </div>
        {notes.map((note) => (
          <Note key={note._id} note={note}></Note>
        ))}
      </div>
    </div>
  );
};

export default Notes;
