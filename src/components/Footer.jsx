import React from "react";
import { Link } from "react-router-dom";

const FooterLi = ({ href, title }) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        className="cursor-pointer hover:text-blue-600"
      >
        {title}
      </a>
    </li>
  );
};

const Footer = () => {
  return (
    <>
      <footer className="border-b-2 my-6 py-6 px-4 flex items-center flex-wrap">
        <div className="w-full lg:w-1/2 lg:px-12">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900">About us</h1>
          {/* Description */}
          <p className="my-2 text-md tracking-wide font-normal text-gray-600">
            Buy something you love. We ship to over 150 countries. We're a
            global company. We have branches in 13 countries: Canada, Japan,
            Mexico, Spain, the United States, and more. We're committed to
            building a better future for all of us.
          </p>
        </div>
        {/* LIST */}
        <div className="flex flex-wrap w-full lg:w-1/2">
          {/* Products */}
          <div className="my-4 w-1/2 lg:w-1/3">
            <h1 className="mb-3 font-bold tracking-wide text-lg text-gray-900">
              Products
            </h1>
            <ul className="list-none text-md text-gray-600 tracking-wide leading-relaxed">
              <FooterLi
                href="https://www.linkedin.com/in/siddharth-sahu-10/"
                title="Kitchen"
              />
              <FooterLi
                href="https://github.com/siddharth20190428"
                title="Smartphone"
              />
              <FooterLi
                href="https://twitter.com/_SiddharthSahu"
                title="Sunglasses"
              />
              <FooterLi
                href="https://www.instagram.com/_._siddharth_sahu_._/"
                title="Laptops"
              />
            </ul>
          </div>
          {/* Features */}
          <div className="my-4 w-1/2 lg:w-1/3">
            <h1 className="mb-3 font-bold tracking-wide text-lg text-gray-900">
              Features
            </h1>
            <ul className="list-none text-md text-gray-600 tracking-wide leading-relaxed">
              <FooterLi
                href="https://www.linkedin.com/in/vinitpal-singh-0718a3191/"
                title="Kitchen"
              />
              <FooterLi href="https://github.com/Vinitpal" title="Smartphone" />
              <FooterLi
                href="https://twitter.com/vinitpal_arora"
                title="Sunglasses"
              />
              <FooterLi
                href="https://www.instagram.com/vinitpal_arora/"
                title="Laptops"
              />
            </ul>
          </div>
          {/* Company */}
          <div className="my-4 w-1/2 lg:w-1/3">
            <h1 className="mb-3 font-bold tracking-wide text-lg text-gray-900">
              Company
            </h1>
            <ul className="list-none text-md text-gray-600 tracking-wide leading-relaxed">
              <FooterLi
                href="https://github.com/panthchristian"
                title="Kitchen"
              />
              <FooterLi
                href="https://github.com/panthchristian"
                title="Smartphone"
              />
              <FooterLi
                href="https://www.linkedin.com/in/vansh-shah-9464a9137/"
                title="Sunglasses"
              />
              <FooterLi
                href="https://www.linkedin.com/in/vansh-shah-9464a9137/"
                title="Laptops"
              />
            </ul>
          </div>
        </div>
      </footer>
      {/* Links */}
      <div className="my-4 flex justify-around lg:justify-center items-center ">
        <Link to="#">
          <i className="hover:text-blue-600 lg:mx-6 text-xl fab fa-facebook-f"></i>
        </Link>
        <Link to="#">
          <i className="hover:text-blue-600 lg:mx-6 text-xl fab fa-linkedin-in"></i>
        </Link>
        <Link to="#">
          <i className="hover:text-blue-600 lg:mx-6 text-xl fab fa-twitter"></i>
        </Link>
        <Link to="#">
          <i className="hover:text-blue-600 lg:mx-6 text-xl fab fa-github"></i>
        </Link>
      </div>
      {/* @ 2021 team */}
      <div className="text-center mb-4">@ 2021 Devsnest Hackathon</div>
    </>
  );
};

export default Footer;
