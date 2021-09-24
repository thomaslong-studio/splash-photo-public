import React, { useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import search from './img/SVG/search.svg';
import download from './img/SVG/download.svg';

const unsplash = new Unsplash({
    accessKey: "Your KEY Goes Here",
});

function PhotoSearch() {

  const [query, setQuery] = useState("");
  console.log(query);
  const [pics, setPics] = useState([]);
  console.log(pics);

  const searchPhotos = async (e) => {
      e.preventDefault();
      unsplash.search
      .photos(query, 1, 50)
      .then(toJson)
      .then((json) => {
        setPics(json.results);
      });
      //console.log("Form Submitted");
  };

  return (
    <>
      <div className="hero">
      <h2 className="sub-head">Explore Free Stock Photos For Use In Your Projects</h2>
      <h1 className="main-head">High Quality Downloads</h1>
        <form className="form row" onSubmit={searchPhotos}>
          <div>
          <input
            type="text"
            name="query"
            className="input"
            placeholder={`Search For Photos`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="icon">
          <a onClick={searchPhotos}><img src={search} /></a>
          </div>
          </div>
        </form>
        <p className="quick-links">Quick Search Items: </p>
        <ul className="quick-links">
          <li><a href="#">Backgrounds</a></li>
          <li><a href="#">Cooking</a></li>
          <li><a href="#">Coffee</a></li>
        </ul>
      </div>
      <ul className="card-list">
        {
          pics.map((pic) => <li className="card">
              <a href={`${pic.links.download}?force=true`}
              download>
              <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.regular}
            ></img>
            </a>
          </li>)
          }
      </ul>
    </>
  );
}

export default PhotoSearch;
