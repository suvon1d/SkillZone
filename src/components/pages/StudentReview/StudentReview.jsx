import React from "react";
import { FaStar } from "react-icons/fa";

const StudentReview = () => {
  return (
    <div className="my-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-primary text-center mb-12">
          What Our Students Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 shadow-md rounded-2xl hover:shadow-xl transition bg-[#224469]">
            <img
              src="https://i.ibb.co.com/Q7L4cbd1/indian-businessman-with-his-white-car.jpg"
              alt=""
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Abdur Rahaman</h3>

            <div className="flex justify-center text-yellow-500 mb-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-amber-600">
              This course helped me get my first freelancing job! Very practical
              lessons.
            </p>
          </div>

          <div className="p-6 shadow-md rounded-2xl hover:shadow-xl transition bg-[#224469]">
            <img
              src="https://i.ibb.co.com/wH8fKNS/portrait-handsome-businessman-standing-crossed-hands-isolated-gray-wall.jpg"
              alt=""
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Tanvir Hasan</h3>

            <div className="flex justify-center text-yellow-500 mb-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="opacity-30" />
            </div>

            <p className="text-amber-600">
              The mentor explained everything step-by-step. Highly recommended.
            </p>
          </div>

          <div className="p-6 shadow-md rounded-2xl hover:shadow-xl transition bg-[#224469]">
            <img
              src="https://i.ibb.co.com/bjvKkP3f/cheerful-traditional-indian-woman-white-background-studio-shot.jpg"
              alt=""
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Sadia Akter</h3>

            <div className="flex justify-center text-yellow-500 mb-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="text-amber-600">
              The real projects helped me learn faster. I improved a lot!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentReview;
