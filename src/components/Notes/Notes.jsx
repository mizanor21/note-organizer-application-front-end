import React, { useEffect, useState } from "react";
import Note from "./Note";
import noteAddLogo from "../../assets/icons/note-add-logo.png";
import UserContext, { AuthContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";

const Notes = () => {
  const { user } = UserContext(AuthContext);
  const [notes, setNotes] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  useEffect(() => {
    fetch("http://localhost:5000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 md:mx-0">
        <div className="flex justify-center">
          {/* Open the modal using ID.showModal() method */}
          <button onClick={() => window.my_modal_2.showModal()}>
            <img
              className="cursor-pointer hover:-translate-y-1 duration-200"
              title="Write Your Note"
              src={noteAddLogo}
              alt=""
            />
          </button>
          <dialog id="my_modal_2" className="modal">
            <form
              className="bg-white p-10 modal-box"
              onSubmit={handleSubmit(onSubmit)}
              method="dialog"
            >
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Full Name *</span>
                </label>
                <input
                  {...register("name")}
                  type="name"
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email *</span>
                </label>
                <input
                  {...register("email")}
                  required
                  type="email"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password *</span>
                </label>
                <input
                  {...register("password")}
                  required
                  type="password"
                  className="input input-bordered w-full"
                />
              </div>
              <input className="btn btn-black w-full mt-5 mb-3" type="submit" />
            </form>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
        {notes.map((note) => (
          <Note key={note._id} note={note}></Note>
        ))}
      </div>
    </div>
  );
};

export default Notes;
