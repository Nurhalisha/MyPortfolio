import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./blog.css";
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
      description: `On April 7, our BSIT Educational Tour officially commenced, launching us into an immersive journey through Philippine history and culture. Our first destination was the iconic Rizal Park in Manila, where the towering monument of Dr. José Rizal stands in solemn tribute to the national hero’s sacrifice. Standing before the monument, we reflected on the powerful ideals of patriotism and freedom that we had previously encountered only in textbooks. From there, we ventured into the walled city of Intramuros, a living relic of the Spanish colonial era. Walking along its cobbled streets and centuries-old fortifications, we felt transported back in time.
A particularly moving stop was Fort Santiago, where we explored its ancient stone walls and the haunting underground prison cells once used by the Japanese during World War II. The dim corridors and preserved artifacts told stories of struggle, resilience, and sacrifice—leaving many of us in quiet contemplation.
As the day drew to a close, we shifted gears and headed to the SM Mall of Asia, one of the largest shopping malls in Asia. There, we enjoyed some well-earned downtime—bonding with classmates.. This perfect balance of education and recreation not only deepened our understanding of the country’s past but also set an energizing and collaborative tone for the days ahead.`,
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
      description: `Day two of our BSIT Educational Tour brought us to the Subic Freeport Zone, a dynamic center of commerce, logistics, and technological advancement. Known for its transformation from a former U.S. naval base into one of the country’s most progressive economic zones, Subic offered us a firsthand look at how innovation and strategic planning can reshape an entire region.
Our tour began with an in-depth overview of port monitoring systems, where we learned how Subic meticulously tracks maritime traffic. It was fascinating to see how ships from various parts of the world are identified, monitored, and guided as they enter the harbor. The systems utilize advanced radar, communication networks, and real-time data feeds—providing insight into the integration of IT in modern logistics.
We also discovered how Subic’s operations differ significantly from those of traditional Philippine localities. Due to its special economic and regulatory status, Subic has greater autonomy in implementing policies that attract foreign investment and streamline operations. One particularly interesting aspect was learning how they provide assistance to international vessels during emergencies—such as when a ship needs to make an unplanned stopover due to storms or technical issues. The protocols in place ensure safety, compliance, and efficient support, all of which are coordinated through a robust technological infrastructure.
This visit highlighted the critical role of global trade logistics, showcasing how IT professionals contribute to systems that support international commerce. It bridged the gap between classroom theory and real-world practice, giving us a deeper appreciation of how our future careers might shape—and be shaped by—complex, real-time operations like those at Subic.`,
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
      description: `On April 9, we immersed ourselves in the wonders of the natural world with a visit to the National Museum of Natural History in Manila. The museum, a stunning architectural landmark housed within a beautifully restored neoclassical building, took us on a journey through the diverse ecosystems that make up the Philippine archipelago. From lush rainforests to vibrant coral reefs, the exhibits highlighted the incredible biodiversity of our country and the importance of preserving it for future generations.
Inside, we marveled at detailed displays of native flora and fauna, interactive installations, and life-sized replicas of species like the Philippine Eagle—a powerful symbol of conservation. We also learned about the delicate balance within ecosystems, the threats posed by climate change and human activity, and the role of science and technology in protecting our environment. For IT students like us, it was eye-opening to see how digital tools such as data modeling, GIS, and environmental monitoring systems are used to study and safeguard natural habitats.
In the afternoon, we made our way to Quezon Memorial Park, where we deepened our knowledge of Philippine history. At the center of the park stands the Quezon Memorial Shrine, a monument and museum dedicated to President Manuel L. Quezon. There, we explored historical documents, personal artifacts, and exhibits that told the story of his leadership and his significant contributions—particularly his advocacy for the Filipino national language and social reform. The visit reminded us of how visionary leadership and a strong sense of identity are crucial to a nation’s growth.
It was a meaningful day that blended scientific awareness and cultural reflection, leaving us with a deeper appreciation for both our natural environment and national heritage.`,
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
      description: `The fourth day of our educational tour was focused on discovering how modern industry uses technology to improve operations, specifically in the energy sector. Our visit to HyTec Power Inc. provided a firsthand look at various industrial devices and equipment used in power generation and management.
During the tour, we were shown a range of electrical components and machinery, such as control panels, circuit breakers, transformers, and motor control systems. These are essential tools that help manage and regulate power distribution in industrial and commercial settings. The staff walked us through how each device functions and the role it plays in maintaining efficient and safe energy flow.
While the visit did not dive into software systems or advanced IT integrations, it was still a valuable learning experience. Seeing these technologies up close helped us appreciate the hardware side of the energy industry—the physical components that support the infrastructure we often take for granted.
It was a hands-on and practical day that reminded us that technology isn’t limited to screens and code. The physical tools used in industry are just as important in powering the systems that keep homes, businesses, and cities running. As students in the field of IT, it was eye-opening to explore a different side of the tech world—one grounded in engineering, machinery, and industrial application.`,
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
      description: `On April 11, we shifted our focus to public infrastructure and how technology is reshaping urban life, beginning with a visit to the LRT2 station in Metro Manila. As we stepped into the bustling station, we were given an inside look at how train operations are managed with precision using advanced software systems and real-time data monitoring. The control room, filled with screens and monitoring stations, demonstrated how operators track train movements, manage schedules, and respond to potential issues instantly. We saw firsthand how these systems ensure safety, efficiency, and punctuality, allowing thousands of passengers to commute daily with minimal delays.
The experience at the LRT2 station gave us a deeper understanding of how modern urban transit systems rely heavily on information technology to maintain smooth operations. From monitoring train conditions to communicating with stations along the route, it became clear that software integration and data analytics are at the core of this vital public service.
The day didn’t stop there—next, we visited the MMDA Command Center, where we were introduced to the complex world of traffic control and urban management systems. Inside the command center, we were shown how big data, sensors, and surveillance cameras are used to manage traffic flow across Metro Manila. The room was filled with real-time data on traffic patterns, weather conditions, and road incidents, all displayed on large screens. We learned how the MMDA uses this data to optimize traffic lights, divert traffic during peak hours, and plan for future urban development.
What struck us most was how technology-driven urban planning is not only about managing traffic but also improving the overall quality of life in a city. By using big data and surveillance, city planners can make data-informed decisions to reduce congestion, improve mobility, and even predict and prevent accidents. It was a fascinating look at how smart city technology is enhancing the way we live, work, and travel in modern urban environments.
This visit was both eye-opening and inspiring, showing us the profound impact that tech-enabled solutions have on urban development and public infrastructure. As future IT professionals, it motivated us to think about the endless possibilities of how our skills can contribute to building more efficient, sustainable, and livable cities.`,
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
      description: `Day six took us up north to the scenic highlands of Baguio We visited the famous Strawberry Farm in La Trinidad. Next, we went to Bell church and then toured the Philippine Military Academy where we saw The Air Power Park. The day ended with a panoramic view from Mines View Park—a perfect mix of education and exploration.`,
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
      description: `Our final day was more relaxed but no less meaningful. We explored Baguio’s public parks, breathing in the crisp mountain air and reflecting 
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
