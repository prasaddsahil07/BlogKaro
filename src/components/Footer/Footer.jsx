import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <Container>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline">Terms of Service</Link>
              </li>
              <li>
                <Link to="/cookie" className="hover:underline">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:underline">Disclaimer</Link>
              </li>
              <li>
                <Link to="/media" className="hover:underline">Media Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Links</h3>
            <ul className="space-y-2">
              <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                <FaTwitter className="mr-2" /> Twitter
              </a>
              </li>
              <li>
              <a href="https://www.instagram.com/prasaddsahil07/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                <FaInstagram className="mr-2" /> Instagram
              </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sahil-prasad-46a54924a/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                <FaLinkedin className="mr-2" /> Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-centre">
            <div className="pt-6">
            <a href="https://github.com/prasaddsahil07" target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="mt-4 inline-flex items-center gap-2 bg-white text-black font-semibold py-2 px-4 rounded hover:bg-white/80"
            >
              <FaGithub /> Created By Sahil
            </button>
          </a>
          </div>
          <h2 className="text-lg font-semibold mt-2 pt-3">© 2024 BlogKaro.</h2>
          <h2 className="text-lg font-semibold ">All rights reserved.</h2>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;
