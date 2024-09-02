import Header from '../components/Header';

function Contact() {
  return (
    <div className="relative">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="bg-cover bg-center h-[700px] relative" style={{ backgroundImage: "url('/path-to-background-image.jpg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="container mx-auto px-4 py-16 bg-white rounded-lg shadow-lg flex flex-col md:flex-row">
            {/* Left Column */}
            <div className="w-full md:w-1/2 p-6">
              <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
              <p className="text-lg mb-6">
                We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us using the form on the right or contact us through the details below.
              </p>
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 2a.75.75 0 00-.75.75v14.5A.75.75 0 002.5 18h15a.75.75 0 00.75-.75V2.75A.75.75 0 0017.5 2h-15zM3 3h14v14H3V3z"></path>
                </svg>
                <p className="text-lg">123 Healthcare St., Cityville, ST 12345</p>
              </div>
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a6 6 0 00-6 6v1.5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V8a6 6 0 00-6-6zm0 1a5 5 0 015 5v.5H5V8a5 5 0 015-5z"></path>
                </svg>
                <p className="text-lg">info@healthcare.com</p>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2h16v16H2V2z"></path>
                </svg>
                <p className="text-lg">+1 (123) 456-7890</p>
              </div>
            </div>

            {/* Right Column (Contact Form) */}
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-lg p-3" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-lg p-3" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                  <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-lg p-3" required></textarea>
                </div>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
