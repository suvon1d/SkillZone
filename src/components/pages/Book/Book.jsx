import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Book = () => {
  const handleButton = (e) => {
    e.preventDefault();
    toast.success("Successfully toasted!");
  };
  return (
    <div className="card w-full max-w-lg my-20">
      <form className="card-body">
        <h2 className="font-extrabold text-5xl text-primary text-center ">
          Book Now
        </h2>
        <fieldset className="fieldset mt-5 space-y-4">
          <input
            name="email"
            type="email"
            className="input bg-base-300 w-full font-black p-5"
            placeholder="Email"
            required
          />
          <input
            name="name"
            type="text"
            className="input bg-base-300 w-full font-black p-5"
            placeholder="Name"
            required
          />
          <div>
            <button
              onClick={handleButton}
              className="w-full btn btn-primary font-black"
            >
              Submit
            </button>
            <Toaster />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Book;
