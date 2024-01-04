import React from "react";

import HeroImg from "../assets/img/traveller1.png";
import PlaneImg from "../assets/img/plane.png";

const hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-100 ">
      <div class="absolute right-500 top-24 w-400 max-w-lg rotate-12 hidden lg:flex">
        <img src={PlaneImg} alt="" className="w-full" />
      </div>
      <div class="absolute right-16 top-26 w-400 max-w-lg rotate-12 hidden lg:flex">
        <img src={PlaneImg} alt="" className="w-full" />
      </div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={HeroImg} className="w-full" />
          <div>
            <p className="text-base font-bold uppercase text-accent">Best Destinations around the world</p>
            <h1 className="text-4xl font-bold lg:text-6xl">Travel, enjoy and live a new and full life</h1>
            <p className="py-6">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
            <button className="btn btn-primary">Find out more</button>
            <button class="btn btn-circle m-5">
            <i class="fa-solid fa-play"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default hero;
