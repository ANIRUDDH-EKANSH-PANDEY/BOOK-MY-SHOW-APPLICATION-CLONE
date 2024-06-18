import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
  return (
    <>
      <div>
        <img
          className="w-full h-full rounded-lg"
          src={props.src}
          alt="entertainment"
        />
      </div>
    </>
  );
};

const EntertainmentCardSlider = () => {
  const EntertainmentImage = [
    "https://th.bing.com/th?id=OIP.geZ8Bk8rtvwneC1dhdxg9QHaK4&w=206&h=303&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.c3VjSn9aWHYI-JidQavqcgHaK-&w=205&h=304&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.-6TGwYgfzcuBNWDjjEOpHQHaKs&w=207&h=300&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.VgrCo7BBdIs0PVMbuxToBwHaKe&w=210&h=297&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.gF--XR-CwFzNmC-zfsJD1QHaKu&w=207&h=300&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.Wu1KqK10dOaQxQBnErsfqQHaK-&w=205&h=304&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.WpjIjGQtAMaGtKxgDDo-XAHaKC&w=214&h=291&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    "https://th.bing.com/th/id/OIP.Za-qc6a5Xhue9hEMoBSVigHaJv?w=202&h=266&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.dmRVYP1CZe_rvlhhmqk3awHaLX?w=201&h=309&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.uiuuS6KPQySJ3YXv38_QFgHaKe?w=202&h=286&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  ];

  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {EntertainmentImage.map((image, index) => (
          <EntertainmentCard src={image} key={index} />
        ))}
      </Slider>
    </>
  );
};

export default EntertainmentCardSlider;
