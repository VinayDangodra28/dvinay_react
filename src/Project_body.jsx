import React from 'react';
import {  Link } from "react-router-dom";



function Project_body() {
  return (
    <React.StrictMode>
  <main className="main">
      <header>
        {/* navigation bar */}
        <nav className="navbar-c navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="">
            <Link className="navbar-brand-c" to="/">
              dvinay∖
            </Link>
            <Link className="navbar-brand-c" to="/projects">
              Projects
            </Link>
            <button
              className="navbar-brand-button navbar-toggler"
              onclick="myFunction()"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            ></div>
          </div>
        </nav>
        {/* navigation ends here */}
        {/* carousel */}
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
      aria-current="true" aria-label="Slide 1" ></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
      aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
      aria-label="Slide 3"></button>
  </div> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/back4.jpeg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>~Vinay Dangodra~</h5>
                <p>I convert caffeine into code.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="images/back2.jpeg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Coding</h5>
                <p>Code is like humor. When you have to explain it, it’s bad.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="images/back5.jpeg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Habbit</h5>
                <p>Make it work, make it right, make it fast.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            style={{ zIndex: 0 }}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            style={{ zIndex: 0 }}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* carousel ends here */}
      </header>
    {/* header ends here */}
    {/* projects start here */}
    <div>
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">Flask</strong>
            <h3 className="mb-0">Compound Interest Calculator</h3>
            <div className="mb-1 text-muted">December 5 2021</div>
            <p className="card-text mb-auto">
              This is a compound interest calculator that calculates compound
              interest of bulk amount as well as monthly or yearly
              contributions.
            </p>
            <Link to="/projects/1" className="stretched-link">
              Continue reading
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <svg
              className="bd-placeholder-img"
              width={200}
              height={250}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
            </svg>
            <img src="images/project_1.png" width={200} height={250} />
          </div>
        </div>
      </div>
      {/*
    <div class="col-md-6">
<div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
  <div class="col p-4 d-flex flex-column position-static">
    <strong class="d-inline-block mb-2 text-success">Design</strong>
    <h3 class="mb-0">Post title</h3>
    <div class="mb-1 text-muted">Nov 11</div>
    <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.
    </p>
    <a href="post.html" class="stretched-link">Continue reading</a>
  </div>
  <div class="col-auto d-none d-lg-block">
    <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"
      aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
        dy=".3em">Thumbnail</text>
    </svg>

  </div>
</div>
    </div>*/}
    </div>
  </main>
    </React.StrictMode>
  );
}

export default Project_body;