import React, { use } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaUserEdit } from "react-icons/fa";
import NavBar from "../../NavBar/NavBar";
import Loading from "../Loading/Loading";

const Profile = () => {
  const { user,loading } = use(AuthContext);

  if(loading){
    return <Loading></Loading>
  }
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>

      <section className="profile-section">
        <div className="flex justify-center md:container mx-auto mt-10">
          <div className=" text-center modal-middle">
            

            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-purple-400 shadow-lg"
            />

            <h2 className="mt-4 text-2xl font-semibold text-white tracking-wide">
              {user.displayName}
            </h2>

            <p className="text-gray-200 text-sm mt-1">{user.email}</p>
            <button className="mt-5 w-60 py-2 rounded-lg bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
              <FaUserEdit />
              Edit Profile
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
