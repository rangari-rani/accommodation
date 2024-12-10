import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faHackerrank } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className=" py-6 px-4"> {/* Changed to bg-gray-900 for dark background */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <a
            href="https://github.com/rangari-rani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-400 transition-all"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/rani-rangari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-400 transition-all"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.hackerrank.com/profile/ranirangari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-400 transition-all"
          >
            <FontAwesomeIcon icon={faHackerrank} size="2x" />
          </a>
          <a
            href="mailto:ranirangari2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-400 transition-all"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
        <p className="text-sm text-center text-black">
          © Rani Rangari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
