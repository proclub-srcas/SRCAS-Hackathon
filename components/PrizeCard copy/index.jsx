"use client";

const PrizeCardDup = ({ amount, category }) => {
  const defaultOptions = {
    reverse: false,
    max: 4,
    perspective: 1000,
    scale: 1.02,
    speed: 200,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  };

  const defaultBg = "linear-gradient(135deg, #28a745 0%, #218838 100%)"; // New default green background color
  const hoverBg = "linear-gradient(135deg, #218838 0%, #28a745 100%)"; // New hover green background color

  return (
    <>
      <div className="bg-[#101010] flex flex-col items-center justify-center min-h-[250px] px-2 p-2 md:pb-20 lg:px-[5%] md:pt-12 pt-6">
        <div className="text-center max-w-[700px]">
          <h2 className="text-white text-3xl md:text-4xl font-medium leading-[44px] mb-2 md:mb-3">
            Download the PPT Template
          </h2>
          <p className="text-[#C3C3C3] font-['Inter'] font-normal text-lg leading-7 mb-3 md:mb-4">
            Click the button below to download the PPT template. Fill out the template with your solution and submit it according to the instructions provided. Make sure to include all the necessary details to clearly convey your solution.
          </p>
          <a
            href="SRCAShackathon.pptx"
            download
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-green-600 transition-colors duration-300"
            target="_blank"
          >
            Download PPT Template
          </a>
        </div>
      </div>
    </>
  );
};

export default PrizeCardDup;
