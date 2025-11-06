import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router";
import icon from "../../assets/icons8-student-male-100.png";

const Footer = () => {
  return (
    <div>
      <hr className="border-[#1b2a3a] mt-2" />
      <footer className="footer footer-horizontal footer-center bg-base-100 text-base-content rounded p-10">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex justify-center items-center">
              <img src={icon} className="w-15" />
              <h2 className="text-3xl font-bold bg-linear-to-r from-[#6292c9] to-[#2d68a7] bg-clip-text text-transparent">
                SkillZone
              </h2>
            </div>
            <p className="mt-3 text-sm">
              A learning platform to grow your skills and career <br />
              with high-quality courses.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white mb-3">
              Contact Info
            </h3>
            <p>
              Email: <span className="text-gray-400">your-email@gmail.com</span>
            </p>
            <p>
              Phone: <span className="text-gray-400">+880 xxxxxxxxxx</span>
            </p>
            <p>
              Address: <span className="text-gray-400">Dhaka, Bangladesh</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Connect With Us
            </h3>

            <div className="flex space-x-4 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaLinkedin />
              </a>
            </div>

            <div className="mt-4">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white text-sm border-b border-gray-500"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <hr className="border-[#1b2a3a] mt-2 w-11/12" />
        <div>
          <p className="text-center text-sm text-gray-400 ">
            © {new Date().getFullYear()} SkillZone. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
