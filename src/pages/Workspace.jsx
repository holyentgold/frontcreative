import React from 'react';
import sugar from '../images/sugarfac.jpg';
import chattv from '../images/chattv.jpg';
import camera from '../images/camera.jpg';
import studio from '../images/studio.jpg';
import sectiond from '../images/sectiond.jpg';


const Workspace = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-10">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-6">
          Creative Workspaces
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Discover shared workspaces or rent equipment for your creative projects. Whether you're a designer, developer, or artist, we provide the perfect environment for your creativity to thrive.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Workspace 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img 
              src={sugar} 
              alt="Workspace 1" 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Sugar Factory Film Studio</h2>
            <p className="text-gray-700 mb-2">Location: Ilorin, Kwara State</p>
            <p className="text-gray-700 mb-4">Equipped with cyclorama studio; 2 TV production studios; large independent film production studio; Green Rooms; makeup facilities; training rooms; photography studios; co-working offices; buildings suites; and large canteen.</p>
            <p className="text-lg font-bold text-blue-600 mb-4">$2000 / Month</p>
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Book Now
              </button>
            </div>
          </div>

          {/* Workspace 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img 
              src={chattv}
              alt="Workspace 2" 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Ibrahim Chatta's film village</h2>
            <p className="text-gray-700 mb-2">Location: Oyo, Nigeria</p>
            <p className="text-gray-700 mb-4">The facility, which is set in a serene and picturesque location, offers a quiet atmosphere for artistic expression. It is also equipped with modern infrastructure, such as studios and state-of-the-art equipment.</p>
            <p className="text-lg font-bold text-blue-600 mb-4">$1500 / Month</p>
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Book Now
              </button>
            </div>
          </div>

          {/* Rent Equipment */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img 
              src={camera} 
              alt="Equipment Rental" 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Rent Equipment</h2>
            <p className="text-gray-700 mb-2">Available: Cameras, Audio Equipment, Graphic Tablets</p>
            <p className="text-lg font-bold text-blue-600 mb-4">$50 / Day</p>
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Rent Now
              </button>
            </div>
          </div>

           {/* Workspace 3 */}
           <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img 
              src={studio}
              alt="Workspace 3" 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Book a Studio Session</h2>
            <p className="text-gray-700 mb-2">Location: Ilorin, Nigeria</p>
            <p className="text-gray-700 mb-4">Fully equipped to provide high quality tracking for bands and artists to record songs and albums. We track through our amazing SSL AWS900 console and we can either perform ITB mixes or we can sum back out via the SSL for a fully analog flavor. The resulting audio can then either be taken away to mix in another recording studio or we can perform the mix utilising our state of the art equipment. A 12 core 2019 Mac Pro running Logic Audio X is the studio's main recording medium but other DAW software is also available for use by clients.</p>
            <p className="text-lg font-bold text-blue-600 mb-4">$50 / Day</p>
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Book Now
              </button>
            </div>
          </div>


          {/* Workspace 4 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img 
              src={sectiond}
              alt="Workspace 3" 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Book a Studio Session</h2>
            <p className="text-gray-700 mb-2">Location: Ilorin, Nigeria</p>
            <p className="text-gray-700 mb-4">Our unique music facilities support world-class recording and performing; along with classrooms, practice rooms, and a library.</p>
            <p className="text-lg font-bold text-blue-600 mb-4">$50 / Day</p>
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;