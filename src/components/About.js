import React from "react";

function About({bio}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
    </div>
  );
}

function Links({ githubUrl, linkedinUrl }) {
  return (
    <div>
      <h3>Links</h3>
      <ul>
        <li><a href={githubUrl}>{githubUrl}</a></li>
        <li><a href={linkedinUrl}>{linkedinUrl}</a></li>
      </ul>
    </div>
  );
}