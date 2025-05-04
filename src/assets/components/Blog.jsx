import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import bgImage from "../image/BGRND.jpg";
import collageImage from "../image/collage.jpg";

const imageImports = import.meta.glob("../image/day*-*.jpg", { eager: true });

const Blog = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const days = [
    {
      day: "Day 1 - Rizal Park, Intramuros and SM Moa",
      images: [
        { src: imageImports["../image/day1-1.jpg"]?.default || "", alt: "Day 1 - Image 1" },
        { src: imageImports["../image/day1-2.jpg"]?.default || "", alt: "Day 1 - Image 2" },
        { src: imageImports["../image/day1-3.jpg"]?.default || "", alt: "Day 1 - Image 3" },
        { src: imageImports["../image/day1-4.jpg"]?.default || "", alt: "Day 1 - Image 4" },
        { src: imageImports["../image/day1-5.jpg"]?.default || "", alt: "Day 1 - Image 5" },
        { src: imageImports["../image/day1-6.jpg"]?.default || "", alt: "Day 1 - Image 6" },
      ],
      description: `On April 7, our BSIT Educational Tour began with a historical deep dive through Manila’s iconic Rizal Park and Intramuros. 
      The experience brought to life the lessons of our classrooms, as we stood where history unfolded—from José Rizal’s monument to the ancient walls of Fort Santiago.
      Our day concluded with a stop at SM Mall of Asia, one of Asia’s largest malls, where we had time to relax and bond with classmates. This blend of learning and leisure set the tone for an exciting week ahead.`,
    },
    {
      day: "Day 2 - Subic Freeport",
      images: [
        { src: imageImports["../image/day2-1.jpg"]?.default || "", alt: "Day 2 - Image 1" },
        { src: imageImports["../image/day2-2.jpg"]?.default || "", alt: "Day 2 - Image 2" },
        { src: imageImports["../image/day2-3.jpg"]?.default || "", alt: "Day 2 - Image 3" },
        { src: imageImports["../image/day2-4.jpg"]?.default || "", alt: "Day 2 - Image 4" },
        { src: imageImports["../image/day2-5.jpg"]?.default || "", alt: "Day 2 - Image 5" },
        { src: imageImports["../image/day2-6.jpg"]?.default || "", alt: "Day 2 - Image 6" },
      ],
      description: `Day two took us to the Subic Freeport Zone, a hub of industry and innovation. We explored the port monitoring systems and learned how Subic's operations 
      differ from traditional Philippine localities due to its unique economic and regulatory structure. The visit emphasized the importance of global trade logistics and 
      technology infrastructure, offering a glimpse into real-world applications of our IT curriculum.`,
    },
    {
      day: "Day 3 - National Museum and Quezon Memorial Park",
      images: [
        { src: imageImports["../image/day3-1.jpg"]?.default || "", alt: "Day 3 - Image 1" },
        { src: imageImports["../image/day3-2.jpg"]?.default || "", alt: "Day 3 - Image 2" },
        { src: imageImports["../image/day3-3.jpg"]?.default || "", alt: "Day 3 - Image 3" },
        { src: imageImports["../image/day3-4.jpg"]?.default || "", alt: "Day 3 - Image 4" },
        { src: imageImports["../image/day3-5.jpg"]?.default || "", alt: "Day 3 - Image 5" },
        { src: imageImports["../image/day3-6.jpg"]?.default || "", alt: "Day 3 - Image 6" },
      ],
      description: `On April 9, we immersed ourselves in culture at the National Museum of the Philippines. Surrounded by centuries of art, artifacts, and natural history, 
      we reflected on the rich heritage that shaped our identity as Filipinos. Later, we visited Quezon Memorial Park, where we learned more about former President Manuel L. 
      Quezon’s legacy and viewed historical documents and exhibits. It was a meaningful day of national pride and cultural appreciation.`,
    },
    {
      day: "Day 4 - HyTec Power Inc.",
      images: [
        { src: imageImports["../image/day4-1.jpg"]?.default || "", alt: "Day 4 - Image 1" },
        { src: imageImports["../image/day4-2.jpg"]?.default || "", alt: "Day 4 - Image 2" },
        { src: imageImports["../image/day4-3.jpg"]?.default || "", alt: "Day 4 - Image 3" },
        { src: imageImports["../image/day4-4.jpg"]?.default || "", alt: "Day 4 - Image 4" },
        { src: imageImports["../image/day4-5.jpg"]?.default || "", alt: "Day 4 - Image 5" },
        { src: imageImports["../image/day4-6.jpg"]?.default || "", alt: "Day 4 - Image 6" },
      ],
      description: `The fourth day of our tour was all about future technologies. We visited HyTec Power Inc., where we were introduced to cutting-edge energy systems 
      and green technologies currently shaping the local power industry. From control panels to alternative energy solutions, we saw firsthand how innovation can drive 
      sustainability. It was a powerful reminder of the roles we, as future IT professionals, could play in shaping smart energy solutions.`,
    },
    {
      day: "Day 5 - LRT2 Station and MMDA Office",
      images: [
        { src: imageImports["../image/day5-1.jpg"]?.default || "", alt: "Day 5 - Image 1" },
        { src: imageImports["../image/day5-2.jpg"]?.default || "", alt: "Day 5 - Image 2" },
        { src: imageImports["../image/day5-3.jpg"]?.default || "", alt: "Day 5 - Image 3" },
        { src: imageImports["../image/day5-4.jpg"]?.default || "", alt: "Day 5 - Image 4" },
        { src: imageImports["../image/day5-5.jpg"]?.default || "", alt: "Day 5 - Image 5" },
        { src: imageImports["../image/day5-6.jpg"]?.default || "", alt: "Day 5 - Image 6" },
      ],
      description: `On April 11, we studied public infrastructure in motion. At the LRT2 station, we observed how train operations are managed with the help of software 
      systems and real-time data monitoring. The day continued with a visit to the MMDA Command Center, where we learned about traffic control, urban management systems, 
      and how big data and surveillance are used to improve Metro Manila’s mobility. It was an inspiring look at tech-enabled urban planning.`,
    },
    {
      day: "Day 6 - Baguio (Strawberry Farm, PMA, Mines View)",
      images: [
        { src: imageImports["../image/day6-1.jpg"]?.default || "", alt: "Day 6 - Image 1" },
        { src: imageImports["../image/day6-2.jpg"]?.default || "", alt: "Day 6 - Image 2" },
        { src: imageImports["../image/day6-3.jpg"]?.default || "", alt: "Day 6 - Image 3" },
        { src: imageImports["../image/day6-4.jpg"]?.default || "", alt: "Day 6 - Image 4" },
        { src: imageImports["../image/day6-5.jpg"]?.default || "", alt: "Day 6 - Image 5" },
        { src: imageImports["../image/day6-6.jpg"]?.default || "", alt: "Day 6 - Image 6" },
      ],
      description: `Day six took us up north to the scenic highlands of Baguio. We visited the famous Strawberry Farm in La Trinidad, where we had a hands-on experience 
      picking strawberries and learning about sustainable farming practices. Next, we toured the Philippine Military Academy, gaining insight into military training and 
      discipline. The day ended with a panoramic view from Mines View Park—a perfect mix of education and exploration.`,
    },
    {
      day: "Day 7 - Baguio Stroll",
      images: [
        { src: imageImports["../image/day7-1.jpg"]?.default || "", alt: "Day 7 - Image 1" },
        { src: imageImports["../image/day7-2.jpg"]?.default || "", alt: "Day 7 - Image 2" },
        { src: imageImports["../image/day7-3.jpg"]?.default || "", alt: "Day 7 - Image 3" },
        { src: imageImports["../image/day7-4.jpg"]?.default || "", alt: "Day 7 - Image 4" },
        { src: imageImports["../image/day7-5.jpg"]?.default || "", alt: "Day 7 - Image 5" },
        { src: imageImports["../image/day7-6.jpg"]?.default || "", alt: "Day 7 - Image 6" },
      ],
      description: `Our final day was more relaxed but no less meaningful. We explored Baguio’s public parks and landmarks, breathing in the crisp mountain air and reflecting 
      on everything we had learned over the past week. It was a day of bonding and gratitude—a moment to celebrate friendships, new knowledge, and unforgettable memories 
      made during our BSIT Educational Tour.`,
    },
  ];

  return (
    <div className="blog-wrapper" style={{ backgroundImage: `url(${bgImage})` }}>
      <nav className="navbar">
        <div className="navbar-left">
          <h1>My Portfolio</h1>
        </div>
        <div className="navbar-right">
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </nav>

      <div className="blog-content">
        <img src={collageImage} alt="Tour Collage" className="collage-image" />

        {days.map((day, idx) => (
          <div className="day-section" key={idx}>
            <h2>{day.day}</h2>
            <p>{day.description}</p>
            <div className="image-grid">
              {day.images.map(
                (img, i) =>
                  img.src && (
                    <img
                      key={i}
                      src={img.src}
                      alt={img.alt}
                      className="grid-image"
                      onClick={() => setSelectedImage(img.src)}
                    />
                  )
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full view" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default Blog;
