import React, { useContext, useEffect, useRef, useState } from "react";
import Note from "./Note";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/UserContext";
import { toast } from "react-hot-toast";
import NotesModel from "./NotesModel";
import { FaPen, FaSearch } from "react-icons/fa";

const Notes = () => {
  const { user } = useContext(AuthContext);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState([]);

  const { register, handleSubmit } = useForm();
  const [currentDateTime, setCurrentDateTime] = useState("");

  const searchRef = useRef();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    setSearch(searchRef.current.value);
    toast.success("Future implement!");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString();
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const url = `https://notes-backend-mizanor21.vercel.app/notes?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const onSubmit = (data) => {
    setNotes([...notes, data]);
    fetch("https://notes-backend-mizanor21.vercel.app/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Note Added.");
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };

  const handleNoteDelete = (deletedId) => {
    const remainingNotes = notes.filter((note) => note._id !== deletedId);
    setNotes(remainingNotes);
  };

  return (
    <div className="mx-5 md:mx-20">
      <div className=" mb-5 ">
        {/* Open the modal using ID.showModal() method */}
        <div className="flex items-center gap-5">
          <button
            className="w-full"
            onClick={() => window.my_modal_2.showModal()}
          >
            <div className="flex items-center gap-3 border-2 rounded-lg pl-5 py-6">
              <FaPen></FaPen>
              <p>Write Your Note</p>
            </div>
          </button>
          <input
            type="search"
            ref={searchRef}
            placeholder="Search Note..."
            className="input input-bordered input-lg border-2"
          />
          <button onClick={handleSearch} className="btn">
            Search
          </button>
        </div>
        <dialog id="my_modal_2" className="modal">
          <form
            className="bg-white p-10 modal-box"
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
          >
            <div className="form-control w-full hidden">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                defaultValue={user?.email}
                type="email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">
                  Created Time <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                {...register("createdAt")}
                readOnly
                defaultValue={currentDateTime}
                type="name"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">
                  Title <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                {...register("title")}
                type="name"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                {...register("bannerURL")}
                type="url"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">
                  Description <span className="text-red-500">*</span>
                </span>
              </label>
              <textarea
                {...register("description")}
                required
                type="text"
                placeholder="Enter your message here..."
                className="input input-bordered w-full min-h-[100px] lg:min-h-[200px]"
              />
            </div>
            <input className="btn btn-black w-full mt-5 mb-3" type="submit" />
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
      {notes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {notes.map((note) => (
            <Note
              key={note?._id}
              note={note}
              setSelectedNote={setSelectedNote}
              handleNoteDelete={handleNoteDelete}
            ></Note>
          ))}
        </div>
      ) : (
        <p>Notes you add appear here</p>
      )}
      {selectedNote && <NotesModel selectedNote={selectedNote}></NotesModel>}
    </div>
  );
};

export default Notes;
