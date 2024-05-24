import frame1 from "../assets/slides/65c3ba3d7c11b927c4f2800d_graphic-home-slider-1.png";
import frame2 from "../assets/slides/654bc1620c965f95ef43e2f2_Frame 1347-p-500.webp";
import frame3 from "../assets/slides/654bc160163065bb77f1dc96_Frame 1346.webp";
import frame4 from "../assets/slides/656e35aebfe989c36edbb70d_Hero - Measurements.png";
import frame5 from "../assets/slides/66108c3aa3de6dd9843d5fd1_graphic-home-slider-payment-p-800.webp";
import { useEffect, useState } from "react";

const Home = () => {
  const images = [frame1, frame2, frame3, frame4, frame5];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="Home">
      <div className="flex flex-col lg:flex-row">
        <div>
          <h1>One platform.</h1>
          <h1>All the tools for your roofing business.</h1>

          <p>
            Managing your leads, customers, roof measurements, proposals,
            material ordering, invoicing and payments has never been easier.
          </p>
          <p>Sign up for free with email. No credit card required.</p>

          <div>
            <img src="" alt="" />
            <div>|</div>
            <h1>
              Rated 4.7/5 stars <span>with over</span> <span>1,000+ reviews</span>
            </h1>
          </div>
        </div>
        <div className="overflow-hidden relative w-full h-full">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="flex-none w-full h-full">
                <img src={image} alt={`Slide ${index}`} className="w-fit h-fit object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
