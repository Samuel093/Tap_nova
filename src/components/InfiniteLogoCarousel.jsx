// src/components/InfiniteLogoCarousel.jsx
"use client";
import React from "react";
import "./../styles/carousel.css"; // external styles for animation
import stripe from "../assets/logos/stripe.png";
import productboard from "../assets/logos/productboard.png";
import outreach from "../assets/logos/outreach.png";
import microsoft from "../assets/logos/microsoft.png";
import hubspot from "../assets/logos/hubspot.png";
import webflow from "../assets/logos/webflow.png";
import github from "../assets/logos/github.png";
import pipedrive from "../assets/logos/pipedrive.png";
import plaid from "../assets/logos/plaid.png";
import fivetran from "../assets/logos/fivetran.png";
import asana from "../assets/logos/asana.png";
import elastic from "../assets/logos/elastic.png";
import amplitude from "../assets/logos/amplitude.png";
import calendly from "../assets/logos/calendly.png";
import databricks from "../assets/logos/databricks.png";
import discord from "../assets/logos/discord.png";
import doordash from "../assets/logos/doordash.png";
import evernote from "../assets/logos/evernote.png";
import gitlab from "../assets/logos/gitlab.png";


const logos = [
  { name: "Stripe", img: stripe },
  { name: "Productboard", img: productboard },
  { name: "Outreach", img: outreach },
  { name: "Microsoft", img: microsoft },
  { name: "Hubspot", img: hubspot },
  { name: "Webflow", img: webflow },
  { name: "Github", img: github },
  { name: "Pipedrive", img: pipedrive },
  { name: "Plaid", img: plaid },
  { name: "Fivetran", img: fivetran },
   { name: "asana", img: asana },
  { name: "Elastic", img: elastic },
  { name: "Amplitude", img: amplitude },
  { name: "Calendly", img: calendly },
  { name: "Databricks", img: databricks },
  { name: "Discord", img: discord },
  { name: "Doordash", img: doordash },
  { name: "Evernote", img: evernote },
  { name: "Gitlab", img: gitlab },
 
];
const InfiniteLogoCarousel = () => {
  const repeatedLogos = [...logos, ...logos]; // Create looping illusion

  return (
    <div className="carousel-wrapper bg-white dark:bg-gray-800 overflow-hidden w-full">
      <div className="carousel-track">
        {repeatedLogos.map((logo, index) => (
          <div className="carousel-item px-6 py-4" key={index}>
            <img
              src={logo.img}
              alt={logo.name}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLogoCarousel;
