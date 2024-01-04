import React from "react";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";

import Image1 from "../assets/img/satellite-dish.png";
import Image2 from "../assets/img/plane.png";
import Image3 from "../assets/img/mic.png";
import Image4 from "../assets/img/power-supply.png";

import Logo1 from "../assets/img/icon/logo2.png";
import Logo2 from "../assets/img/icon/logo3.png";
import Logo3 from "../assets/img/icon/logo4.png";
import Logo4 from "../assets/img/icon/Shopee.svg";
import Logo5 from "../assets/img/icon/Logo-Tokopedia.png";

const index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section>
        <div className="hero py-8 bg-base-100">
          <div className="hero-content text-center">
            <div className="w-full">
              <p className="text-based font-bold uppercase text-slate-500">Category</p>
              <h1 className="text-4xl font-bold mt-3">We Offer Best Services</h1>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 px-4 md:w-1/4">
            <div className="card w-230 rounded-3xl hover:shadow-xl">
              <figure className="h-24">
                <img src={Image1} />
              </figure>
              <div class="card-body text-center">
                <h2 className="text-xl font-semibold">Best Flights</h2>
                <p className="text-base text-slate-500">Engrossed listening. Park gate sell they west hard for the.</p>
              </div>
            </div>
          </div>
          <div className="mb-12 px-4 md:w-1/4">
            <div className="card w-230 rounded-3xl hover:shadow-xl">
              <figure className="h-24">
                <img src={Image2} />
              </figure>
              <div class="card-body text-center">
                <h2 className="text-xl font-semibold">Best Flights</h2>
                <p className="text-base text-slate-500">Engrossed listening. Park gate sell they west hard for the.</p>
              </div>
            </div>
          </div>
          <div className="mb-12 px-4 md:w-1/4">
            <div className="card w-230 rounded-3xl hover:shadow-xl">
              <figure className="h-24">
                <img src={Image3} />
              </figure>
              <div class="card-body text-center">
                <h2 className="text-xl font-semibold">Best Flights</h2>
                <p className="text-base text-slate-500">Engrossed listening. Park gate sell they west hard for the.</p>
              </div>
            </div>
          </div>
          <div className="mb-12 px-4 md:w-1/4">
            <div className="card w-230 rounded-3xl hover:shadow-xl">
              <figure className="h-24">
                <img src={Image4} />
              </figure>
              <div class="card-body text-center">
                <h2 className="text-xl font-semibold">Best Flights</h2>
                <p className="text-base text-slate-500">Engrossed listening. Park gate sell they west hard for the.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="hero py-8 bg-base-100">
          <div className="hero-content text-center">
            <div className="w-full">
              <p className="text-based font-bold text-slate-500">Top Selling</p>
              <h1 className="text-4xl font-bold mt-3">Top Destinations</h1>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 px-4 md:w-1/4">
            <div className="card w-230 rounded-3xl hover:shadow-xl">
              <figure>
                <img src="https://source.unsplash.com/random/512x620?Indonesian&1" />
              </figure>
              <div class="card-body">
                <h2 className="text-xl font-semibold">Best Flights</h2>
                <div className="card-actions justify-between">
                  <div className="text-xl">
                    <p className="text-base text-slate-500">7 Days Trip</p>
                  </div>
                  <div className="text-xl">
                    <button className="btn btn-ghost text-accent rounded-full text-xl">
                      <i class="fa-regular fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-12 px-4 md:w-1/4">
            <div className="card w-230 rounded-3xl hover:shadow-xl">
              <figure>
                <img src="https://source.unsplash.com/random/512x620?London&2" />
              </figure>
              <div class="card-body">
                <h2 className="text-xl font-semibold">Best Flights</h2>
                <div className="card-actions justify-between">
                  <div className="text-xl">
                    <p className="text-base text-slate-500">10 Days Trip</p>
                  </div>
                  <div className="text-xl">
                    <button className="btn btn-ghost text-accent rounded-full text-xl">
                      <i class="fa-regular fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-12 px-4 md:w-1/4">
            <div className="card card-compact w-230 rounded-3xl hover:shadow-xl">
              <figure>
                <img src="https://source.unsplash.com/random/512x620?Japan&3" />
              </figure>
              <div class="card-body">
                <h2 className="text-xl font-semibold">Best Flights</h2>
                <div className="card-actions justify-between">
                  <div className="text-xl">
                    <p className="text-base text-slate-500">14 Days Trip</p>
                  </div>
                  <div className="text-xl">
                    <button className="btn btn-ghost text-accent rounded-full text-xl">
                      <i class="fa-regular fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="hero py-4 bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="max-w-md">
              <p className="text-based font-bold text-slate-500">Easy to Fast</p>
              <h1 className="text-2xl font-bold lg:text-4xl">Book your next trip in 3 easy steps</h1>

              <div className="flex mt-4">
                <button className="btn btn-ghost bg-accent hover:bg-accent mr-4">
                  <i class="fa-solid fa-bag-shopping"></i>
                </button>
                <div>
                  <p className="text-based font-bold">Choose Destination</p>
                  <p className="text-based text-slate-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam asperiores natus sed! Ratione vitae magnam.</p>
                </div>
              </div>
              <div className="flex mt-4">
                <button className="btn btn-ghost bg-primary hover:bg-primary mr-4">
                  <i class="fa-solid fa-money-bill"></i>
                </button>
                <div>
                  <p className="text-based font-bold">Make Payment</p>
                  <p className="text-based text-slate-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam! Ratione vitae magnam explicabo possimus excepturi molestias necessitatibus.</p>
                </div>
              </div>
              <div className="flex mt-4">
                <button className="btn btn-ghost bg-secondary hover:bg-secondary mr-4">
                  <i class="fa-solid fa-plane"></i>
                </button>
                <div>
                  <p className="text-based font-bold">Reach Airport on Selected Date</p>
                  <p className="text-based text-slate-500">Lorem ipsum dolor sit amet consectetur, elit. possimus excepturi molestias necessitatibus.</p>
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src="https://source.unsplash.com/random/720x512?Japan" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Trip to Japan</h2>
                <p className="text-base text-slate-500">14-29 June</p>
                <div className="card-actions justify-between">
                  <div className="text-xl flex items-center">
                    <button className="btn btn-ghost text-accent rounded-full text-xl">
                      <i class="fa-regular fa-building"></i>
                    </button>
                    <p className="text-base text-slate-500">24 people going</p>
                  </div>
                  <div className="text-xl">
                    <button className="btn btn-ghost text-accent rounded-full text-xl">
                      <i class="fa-regular fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="hero py-8 bg-base-100 h-96">
          <div className="hero-content flex-col lg:flex-row">
            <div className="max-w-md">
              <p className="text-based font-bold text-slate-500 uppercase">Testinomials</p>
              <h1 className="text-2xl font-bold lg:text-4xl">What people say about Us.</h1>
            </div>
            <div className="max-w-md mt-4">
              <p className="text-based text-slate-500">“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
              <div className="mt-4">
                <p className="text-base font-bold text-slate-700">Luthfi Halimawan</p>
                <p className="text-base text-slate-500">Youtuber</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="w-full flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 px-4 md:w-1/5">
            <div className="w-230 grayscale hover:grayscale-0">
              <figure className="h-24">
                <img src={Logo2} />
              </figure>
            </div>
          </div>
          <div className="mb-12 px-4 md:w-1/5">
            <div className="min-h-24 grayscale hover:grayscale-0">
              <figure>
                <img src={Logo3} className="h-24" />
              </figure>
            </div>
          </div>
          <div className="mb-12 px-4 md:w-1/5">
            <div className="w-230 grayscale hover:grayscale-0">
              <figure className="h-24">
                <img src={Logo2} />
              </figure>
            </div>
          </div>
          <div className="mb-12 px-4 md:w-1/5">
            <div className="min-h-24 grayscale hover:grayscale-0">
              <figure>
                <img src={Logo3} className="h-24" />
              </figure>
            </div>
          </div>
          <div className="mb-12 px-4 md:w-1/5">
            <div className="w-230 grayscale hover:grayscale-0">
              <figure className="h-24">
                <img src={Logo2} />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content text-center">
            <div className="w-full">
              <h1 className="text-2xl lg:text-5xl font-bold text-slate-500">Subscribe to get information, latest news and other interesting offers about Jadoo</h1>
              <div className="text-center mt-4">
              <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
              <button className="btn btn-primary mx-4">Subcribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default index;
