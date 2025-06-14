import img1 from "../assets/berger.webp";
import img2 from "../assets/dhokla.webp";
import img3 from "../assets/idli.jpg";
import img4 from "../assets/kulfi.webp";

const OverlappingFoodImages = () => {
  const images = [
    img1,
    img2,
    img3,
    img4
  ];

  return (
    <div className="w-[50%] flex justify-center mt-8">
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-full max-w-[90vw] overflow-visible">
        {images.map((src, index) => (
            <img
            key={index}
            src={src}
            alt={`dish-${index}`}
            className={`absolute rounded-2xl object-cover shadow-xl transition-all duration-500 ease-in-out
                hover:scale-105 hover:rotate-1
                h-[50%] w-[50%]
                ${index === 0 ? "top-0 left-0 rotate-[-6deg]" : ""}
                ${index === 1 ? "top-0 right-0 rotate-[4deg]" : ""}
                ${index === 2 ? "bottom-0 left-0 rotate-[5deg]" : ""}
                ${index === 3 ? "bottom-0 right-0 rotate-[-4deg]" : ""}
            `}
            />
        ))}
      </div>
    </div>
  );
};

export default OverlappingFoodImages;
