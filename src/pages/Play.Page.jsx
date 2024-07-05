import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";

// components
import Poster from "../components/Poster/Poster.Component";
import PlayFilters from "../components/PlayFilters/PlayFilters.Component";

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <h2 className="text-2xl font-bold mb-4">Plays in Delhi</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f86e6743073063.56073c39c9ff8.jpg"
                title="Lend Me A Tenor"
                subtitle="Comedy Shows | English, Hindi | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://th.bing.com/th/id/OIP.1aEyiFbKiVjGkUaghXs6ZQHaLc?rs=1&pid=ImgDetMain"
                title="The Lion, The Witch and The Wardrobe"
                subtitle="Comedy Shows | English, Hindi | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://th.bing.com/th/id/OIP.YXwr-ocnT68ys6eNCeWo0gHaI9?rs=1&pid=ImgDetMain"
                title="Mac Beth"
                subtitle="Comedy Shows | English, Hindi | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://fusion.lehigh.edu/sites/fusion.lehigh.edu/files/theatre3.jpg"
                title="Romeo & Juliet"
                subtitle="Comedy Shows | English, Hindi | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://i.pinimg.com/originals/6e/24/b1/6e24b16209471e338514952004778ba5.jpg"
                title="The Tempest"
                subtitle="Comedy Shows | English, Hindi | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://th.bing.com/th/id/OIP.0Ncu0mO1xRWtTwYOtIEudwHaJ4?rs=1&pid=ImgDetMain"
                title="Alice In Wonderland"
                subtitle="Comedy Shows | English, Hindi | 18yrs+ | 2hr 30mins"
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div>
            <PlayFilters
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
          </div>
          <div>
            <PlayFilters
              title="Language"
              tags={["English", "Kannada", "Hindi", "Telugu"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);
