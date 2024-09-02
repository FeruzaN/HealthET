/* eslint-disable react/no-unescaped-entities */
import { FaStethoscope, FaUserMd, FaHeartbeat } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel'; // Use this library for a slideshow
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[700px]" style={{ backgroundImage: "url('/path-to-healthcare-image.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 opacity-80 flex flex-col justify-center items-center text-white p-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
            Your Health, Our Priority
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 text-center max-w-2xl">
            Dedicated to providing the best healthcare solutions tailored for you and your loved ones.
          </p>
          <button className="bg-white text-blue-600 hover:text-white hover:bg-blue-700 font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6 text-center">
              <FaStethoscope className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">General Check-ups</h3>
              <p className="text-gray-600">Comprehensive health check-ups and consultations to ensure your well-being.</p>
            </div>
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6 text-center">
              <FaUserMd className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Specialist Consultations</h3>
              <p className="text-gray-600">Access to top specialists across various fields for expert advice.</p>
            </div>
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6 text-center">
              <FaHeartbeat className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cardiac Care</h3>
              <p className="text-gray-600">State-of-the-art cardiac services to monitor and manage heart health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src="/path-to-about-us-image.jpg" alt="About Us" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-4">We are a dedicated team of healthcare professionals committed to delivering the highest standard of care. Our mission is to provide accessible, comprehensive, and compassionate healthcare services to our community.</p>
            <p className="text-lg">With a focus on personalized treatment and innovative solutions, we strive to ensure that every patient receives the care they deserve. Join us in our journey to a healthier life.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Slideshow) */}
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Patients Say</h2>
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
          >
            <div className="text-center">
              <p className="text-lg italic mb-4">"The care I received at this clinic was exceptional. The staff were kind and attentive."</p>
              <p className="font-semibold">- John Doe</p>
            </div>
            <div className="text-center">
              <p className="text-lg italic mb-4">"Thanks to the expert team, I was able to recover quickly and get back to my normal life."</p>
              <p className="font-semibold">- Jane Smith</p>
            </div>
            <div className="text-center">
              <p className="text-lg italic mb-4">"Highly recommend! Professional and compassionate care at its best."</p>
              <p className="font-semibold">- Michael Johnson</p>
            </div>
          </Carousel>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Make an Appointment?</h2>
          <p className="text-lg mb-6">Book your appointment today and take the first step towards better health.</p>
          <button className="bg-white text-blue-600 hover:bg-blue-700 font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Schedule Now
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Healthcare Services. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
