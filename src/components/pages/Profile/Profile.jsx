import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Book from "../Book/Book";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>

      {/* Profile Info */}
      <section className="profile-section mb-20">
        <div className="flex justify-center md:container mx-auto mt-10">
          <ProfileInfo></ProfileInfo>
        </div>
      </section>

      {/* Book section  */}
      <section className="book-section mt-0 my-20 flex justify-center">
        <Book></Book>
      </section>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Profile;
