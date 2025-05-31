"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ProductImagesGallery({ variations }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [zoomStyle, setZoomStyle] = useState({});
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  // Handle mouse move for zoom effect
  const handleMouseMove = (e) => {
    if (
      !containerRef.current ||
      !imageRef.current ||
      !variations?.[activeSlide]?.image
    )
      return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    const imageWidth = imageRef.current.naturalWidth;
    const imageHeight = imageRef.current.naturalHeight;
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    const zoomLevelX = Math.max(imageWidth / containerWidth, 2);
    const zoomLevelY = Math.max(imageHeight / containerHeight, 2);

    setZoomStyle({
      backgroundImage: `url(${
        variations[activeSlide].image.startsWith("/")
          ? variations[activeSlide].image
          : `/${variations[activeSlide].image}`
      })`,
      backgroundSize: `${zoomLevelX * 100}% ${zoomLevelY * 100}%`,
      backgroundPosition: `${x}% ${y}%`,
      opacity: 1,
    });
  };

  // Reset zoom effect on mouse leave
  const handleMouseLeave = () => {
    setZoomStyle({});
  };

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    if (index >= 0 && index < variations.length) {
      setActiveSlide(index);
      setZoomStyle({});
    }
  };

  // Handle keyboard navigation for accessibility
  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      handleThumbnailClick(index);
    }
  };

  // Fallback for empty or invalid data
  if (!variations || variations.length === 0) {
    return <div className="text-center py-4">No images available</div>;
  }

  return (
    <main className="relative">
      {/* Main Image with Zoom Effect */}
      <div
        ref={containerRef}
        className="w-full h-[400px] sm:h-[450px] max-h-[450px] bg-[#F5F5F5] border rounded-lg overflow-hidden mb-4 relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        role="region"
        aria-label="Product image zoom"
      >
        {variations[activeSlide]?.image ? (
          <Image
            ref={imageRef}
            src={
              variations[activeSlide].image.startsWith("/")
                ? variations[activeSlide].image
                : `/${variations[activeSlide].image}`
            }
            className={`object-contain w-full h-full transition-opacity duration-300 ${
              zoomStyle.backgroundImage ? "opacity-0" : "opacity-100"
            }`}
            width={600}
            height={450}
            alt={`Product image ${activeSlide + 1}`}
            priority
          />
        ) : (
          <div className="text-center py-4">Image not available</div>
        )}
        <div
          style={zoomStyle}
          className="absolute top-0 left-0 w-full h-full cursor-zoom-in transition-opacity duration-300"
          aria-hidden="true"
        />
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-5 sm:grid-cols-7 gap-2 mt-4">
        {variations.map((item, index) => (
          <div
            key={item.id}
            className={`w-full h-full rounded-lg overflow-hidden cursor-pointer border ${
              activeSlide === index
                ? "border-primary transition-all duration-300"
                : "border-gray-300"
            }`}
            onClick={() => handleThumbnailClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            role="button"
            tabIndex={0}
            aria-label={`Select image ${index + 1}`}
            aria-current={activeSlide === index ? "true" : "false"}
          >
            <Image
              src={item.image.startsWith("/") ? item.image : `/${item.image}`}
              width={64}
              height={64}
              alt={`Thumbnail ${index + 1}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
