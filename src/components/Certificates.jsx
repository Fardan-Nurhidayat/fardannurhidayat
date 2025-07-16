import React, { useState, useRef } from "react";
import Slider from "react-slick";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});
  const sliderRef = useRef(null);

  const certificates = [
    {
      src: "assets/images/certificates/certificate-1.png",
      title: "Certificate 1",
      description: "Pengenalan ke logika Pemrograman",
    },
    {
      src: "assets/images/certificates/certificate-2.png",
      title: "Certificate 2",
      description:
        "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    },
    {
      src: "assets/images/certificates/certificate-3.png",
      title: "Certificate 3",
      description: "Belajar Dasar Git dengan GitHub",
    },
    {
      src: "assets/images/certificates/certificate-4.png",
      title: "Certificate 4",
      description: "Belajar Dasar Pemrograman Web",
    },
    {
      src: "assets/images/certificates/certificate-5.png",
      title: "Certificate 5",
      description: "Belajar Dasar Pemrograman JavaScript",
    },
    {
      src: "assets/images/certificates/certificate-6.png",
      title: "Certificate 6",
      description: "Belajar Membuat Front-End Web untuk Pemula",
    },
    {
      src: "assets/images/certificates/certificate-7.png",
      title: "Certificate 7",
      description: "Belajar Fundamental Front-End Web Development",
    },
    {
      src: "assets/images/certificates/certificate-8.png",
      title: "Certificate 8",
      description: "Belajar Pengembangan Web Intermediate",
    },
    {
      src: "assets/images/certificates/certificate-9.png",
      title: "Certificate 9",
      description: "Financial Literact 101",
    },
    {
      src: "assets/images/certificates/certificate-10.png",
      title: "Certificate 10",
      description: "Belajar Back-End Pemula dengan JavaScript",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
    customPaging: i => (
      <div className='w-3 h-3 bg-gray-400 rounded-full hover:bg-blue-500 transition-colors duration-300'></div>
    ),
    dotsClass: "slick-dots custom-dots",
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const openModal = certificate => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  const handleImageLoad = index => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <>
      <section
        id='certificates'
        className='section py-20'>
        <div className='container mx-auto px-4'>
          {/* Header */}
          <div className='text-center mb-12 reveal-up'>
            <h2 className='headline-2 mb-4 text-gray-800 dark:text-white'>
              My Certificates
            </h2>
            <p className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
              A collection of professional certifications and achievements that
              showcase my commitment to continuous learning and skill
              development.
            </p>
          </div>

          {/* Slider */}
          <div className='relative reveal-up'>
            <Slider
              {...sliderSettings}
              ref={sliderRef}
              className='certificates-slider'>
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className='px-3'>
                  <div className='group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'>
                    {/* Loading placeholder */}
                    {!imageLoaded[index] && (
                      <div className='absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl'></div>
                    )}

                    {/* Certificate image */}
                    <div className='relative overflow-hidden rounded-t-xl'>
                      <img
                        src={cert.src}
                        alt={cert.title}
                        className={`w-full h-64 object-cover transition-all duration-300 group-hover:scale-105 ${
                          imageLoaded[index] ? "opacity-100" : "opacity-0"
                        }`}
                        onLoad={() => handleImageLoad(index)}
                      />

                      {/* Overlay */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                      {/* View button */}
                      <button
                        onClick={() => openModal(cert)}
                        className='absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30'>
                        <svg
                          className='w-5 h-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Certificate info */}
                    <div className='p-6'>
                      <h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                        {cert.title}
                      </h3>
                      <p className='text-gray-600 dark:text-gray-400 text-sm'>
                        {cert.description}
                      </p>

                      {/* View certificate button */}
                      <button
                        onClick={() => openModal(cert)}
                        className='mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm font-medium'>
                        View Certificate
                        <svg
                          className='w-4 h-4 ml-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 5l7 7-7 7'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedCertificate && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50'>
          <div className='bg-white dark:bg-gray-800 rounded-lg max-w-4xl max-h-screen overflow-auto'>
            <div className='p-6'>
              <div className='flex justify-between items-center mb-4'>
                <h3 className='text-xl font-bold text-gray-800 dark:text-white'>
                  {selectedCertificate.title}
                </h3>
                <button
                  onClick={closeModal}
                  className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <img
                src={selectedCertificate.src}
                alt={selectedCertificate.title}
                className='w-full h-auto rounded-lg'
              />
              <p className='mt-4 text-gray-600 dark:text-gray-400'>
                {selectedCertificate.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Custom Arrow Components
const CustomNextArrow = ({ onClick }) => (
  <div
    className='absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer'
    onClick={onClick}>
    <div className='bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300'>
      <svg
        className='w-6 h-6 text-gray-700 dark:text-gray-300'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 5l7 7-7 7'
        />
      </svg>
    </div>
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div
    className='absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer'
    onClick={onClick}>
    <div className='bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300'>
      <svg
        className='w-6 h-6 text-gray-700 dark:text-gray-300'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M15 19l-7-7 7-7'
        />
      </svg>
    </div>
  </div>
);

export default Certificates;
