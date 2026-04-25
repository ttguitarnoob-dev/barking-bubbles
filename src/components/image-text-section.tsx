import React from "react";

interface FeatureCardProps {
  backgroundColor?: string;
  isFlipped?: boolean;
  titleText?: string;
  subText?: string;
  imageSrc: string;
}

export const ImageTextSection: React.FC<FeatureCardProps> = ({
  backgroundColor,
  isFlipped = false,
  titleText = "Your Title Here",
  subText = "Your supporting paragraph text goes here. Keep it short, friendly, and useful.",
  imageSrc,
}) => {
  const defaultColor = isFlipped ? "#14b8a6" : "#e359d5";
  const bgColor = backgroundColor || defaultColor;

  return (
    <section
      className="w-full backdrop-blur-sm overflow-hidden"
      style={{
        backgroundColor: `${bgColor}4D`,
      }}
    >
      <div
        className={`flex flex-col md:flex-row items-center min-h-[420px] ${
          isFlipped ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Side */}
        <div
          className={`w-full md:w-1/2 p-8 md:p-12 text-white ${
            isFlipped ? "order-2 md:order-1" : "order-1"
          }`}
        >
          <h2 className="text-3xl text-foreground md:text-5xl font-bold mb-4 leading-tight">
            {titleText}
          </h2>

          <p className="text-base md:text-lg text-black/90 leading-relaxed">
            {subText}
          </p>
        </div>

        {/* Image Side */}
        <div
          className={`w-full md:w-1/2 flex items-center justify-center p-6 md:p-10 ${
            isFlipped ? "order-1 md:order-2" : "order-2"
          }`}
        >
          <div className="w-full max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/20">
            <img
              src={imageSrc}
              alt={titleText}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};