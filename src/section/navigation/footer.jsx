import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3B2A1A] px-4 md:px-16 lg:px-28 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-white font-bold mb-4"> About US</h2>

          <p className="text-gray-300">
            We are a team dedicated to providing the best products and services
            to our customers
          </p>
        </div>
        <div>
          <h2 className="text-white font-bold mb-4"> Quick Links</h2>
          <ul>
            <li>
              <a href="" className="hover:underline text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:underline text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="" className="hover:underline text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="" className="hover:underline text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-bold mb-4 "> Follow US</h2>
          <ul className="flex space-x-4">
            <li>
              {" "}
              <FaFacebook className="text-blue-500" />
              <a href="" className="hover:underline text-gray-300">
                Facebook
              </a>
            </li>
            <li>
              <FaInstagram className="text-orange-500" />
              <a href="" className="hover:underline text-gray-300">
                Instagram
              </a>
            </li>
            <li>
              <FaTwitter className="text-sky-500" />
              <a href="" className="hover:underline text-gray-300">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hover:underline border-t border-gray-600 pt-6 text-gray-300 text-center mt-6">
        <p>© 2026 Code With Yousaf. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
