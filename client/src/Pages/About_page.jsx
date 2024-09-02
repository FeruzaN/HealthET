/* eslint-disable react/no-unescaped-entities */
import Header from '../components/Header';
import { FaUserMd, FaBriefcaseMedical, FaHeart } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel'; // For testimonials slider
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

function About() {
  return (
    <div className="relative">
      <Header />
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }}>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 opacity-80 flex flex-col justify-center items-center text-white p-6'></div>

        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg sm:text-xl mb-6 max-w-3xl">
            We are dedicated to providing top-notch healthcare services with a focus on quality and compassion. Meet our expert team and discover the range of services we offer.
          </p>
        </div>
      </div>

      {/* Doctor Profiles Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Doctors</h2>
          <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Doctor Card 1 */}
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6 text-center">
              <img src="/path-to-doctor-image-1.jpg" alt="Doctor 1" className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dr. John Smith</h3>
              <p className="text-gray-600">Cardiologist</p>
              <p className="mt-4">With over 20 years of experience, Dr. Smith specializes in advanced cardiac care and patient-focused treatment plans.</p>
            </div>
            {/* Doctor Card 2 */}
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6 text-center">
              <img src="/path-to-doctor-image-2.jpg" alt="Doctor 2" className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dr. Jane Doe</h3>
              <p className="text-gray-600">Orthopedic Surgeon</p>
              <p className="mt-4">Dr. Doe is renowned for her expertise in orthopedic surgery, with a focus on innovative and minimally invasive techniques.</p>
            </div>
            {/* Doctor Card 3 */}
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6 text-center">
              <img src="/path-to-doctor-image-3.jpg" alt="Doctor 3" className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dr. Emily Johnson</h3>
              <p className="text-gray-600">Pediatrician</p>
              <p className="mt-4">Dr. Johnson provides compassionate care for children and adolescents, with a focus on preventive health and family support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Service Card 1 */}
            <div className="w-full md:w-1/4 bg-blue-50 rounded-lg shadow-lg p-6 text-center">
              <FaBriefcaseMedical className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Emergency Care</h3>
              <p className="text-gray-600">24/7 emergency services to address urgent health needs with speed and efficiency.</p>
            </div>
            {/* Service Card 2 */}
            <div className="w-full md:w-1/4 bg-blue-50 rounded-lg shadow-lg p-6 text-center">
              <FaHeart className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Cardiology</h3>
              <p className="text-gray-600">Expert cardiac care, including diagnosis and treatment of heart conditions.</p>
            </div>
            {/* Service Card 3 */}
            <div className="w-full md:w-1/4 bg-blue-50 rounded-lg shadow-lg p-6 text-center">
              <FaUserMd className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Specialist Consultations</h3>
              <p className="text-gray-600">Access to specialized medical consultations for various health conditions.</p>
            </div>
            {/* Service Card 4 */}
            <div className="w-full md:w-1/4 bg-blue-50 rounded-lg shadow-lg p-6 text-center">
              <FaBriefcaseMedical className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Preventive Care</h3>
              <p className="text-gray-600">Comprehensive preventive services to maintain and improve overall health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Patients Say</h2>
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            className="text-center"
          >
            <div>
              <p className="text-lg italic mb-4">"The level of care and professionalism I received was outstanding. I highly recommend this facility!"</p>
              <p className="font-semibold">- Alex Brown</p>
            </div>
            <div>
              <p className="text-lg italic mb-4">"I felt truly cared for by the entire staff. The personalized treatment made all the difference."</p>
              <p className="font-semibold">- Sarah Williams</p>
            </div>
            <div>
              <p className="text-lg italic mb-4">"Excellent service and attentive care. The best experience I’ve had with a healthcare provider."</p>
              <p className="font-semibold">- David Lee</p>
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default About;
