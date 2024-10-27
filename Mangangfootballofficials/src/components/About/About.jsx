import React from 'react';
import blogger from "../../assets/blogger.png";
import grammarly from "../../assets/grammarly.png";
import unsplash from "../../assets/unsplash.png";
import wordpress from "../../assets/wordpress.png";
import medium from "../../assets/medium.png";

function About() {
    return (
        <>
            <section className="text-center w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 mx-auto py-10">
                {/* Main heading */}
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-10 leading-relaxed">
                    <span className="text-white bg-black px-2 py-1 mr-2">Dreamers is a place</span>
                    where you can find <br />
                    <span className="mt-2 inline-block">your perfect blogs</span>
                </h1>

                {/* Description */}
                <p className="mt-8 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-prose mx-auto">
                    Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. 
                    Completely streamline functionalized models and out-of-the-box functionalities. Authoritatively target proactive vortals vis-a-vis exceptional results. Compellingly 
                    brand emerging sources and compelling materials. Globally iterate parallel content.
                </p>

                {/* Sub-heading */}
                <h1 className="font-bold mt-6 text-lg sm:text-xl lg:text-2xl">
                    The best ideas can change who we are.
                </h1>

                <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-prose mx-auto">
                    Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change.
                </p>

                {/* Featured on Section */}
                <h2 className="font-bold mt-8 text-lg sm:text-xl lg:text-2xl">
                    <span className="bg-black text-white px-2 py-1 mr-2">We are</span>featured on
                </h2>

                {/* Logos */}
                <ul className="flex flex-wrap justify-center gap-8 sm:gap-10 pt-8">
                    <li><img className="w-32 sm:w-40 lg:w-48 h-auto" src={blogger} alt="Blogger" /></li>
                    <li><img className="w-32 sm:w-40 lg:w-48 h-auto" src={grammarly} alt="Grammarly" /></li>
                    <li><img className="w-32 sm:w-40 lg:w-48 h-auto" src={unsplash} alt="Unsplash" /></li>
                    <li><img className="w-32 sm:w-40 lg:w-48 h-auto" src={wordpress} alt="Wordpress" /></li>
                    <li><img className="w-32 sm:w-40 lg:w-48 h-auto" src={medium} alt="Medium" /></li>
                </ul>
            </section>
        </>
    );
}

export default About;
