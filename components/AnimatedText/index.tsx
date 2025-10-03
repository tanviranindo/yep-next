"use client";

export interface AnimatedTextProps {
  texts: string[];
  className?: string;
  speed?: number;
  separator?: "circle" | "quarter" | "dots" | "cycle" | string;
}

// SVG Icons for separators
const SeparatorIcons = {
  circle: (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_76_93)">
        <path
          d="M13.5 13.5H27C27 20.906 20.906 27 13.5 27C6.094 27 0 20.906 0 13.5C0 6.094 6.094 0 13.5 0V13.5Z"
          fill="white"
          fillOpacity="0.39"
        />
      </g>
      <defs>
        <clipPath id="clip0_76_93">
          <rect width="27" height="27" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  quarter: (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_76_97)">
        <path
          d="M13.5 0C20.956 0 27 6.044 27 13.5C19.544 13.5 13.5 7.456 13.5 0Z"
          fill="white"
          fillOpacity="0.69"
        />
        <path
          d="M17.454 17.454C19.896 15.012 23.272 13.5 27 13.5C27 20.956 20.956 27 13.5 27C13.5 23.272 15.012 19.896 17.454 17.454Z"
          fill="white"
          fillOpacity="0.39"
        />
        <path
          d="M0 13.5C0 6.044 6.044 0 13.5 0C13.5 3.728 11.988 7.104 9.546 9.546C7.104 11.988 3.728 13.5 0 13.5Z"
          fill="white"
          fillOpacity="0.39"
        />
        <path
          d="M9.546 17.454C11.988 19.896 13.5 23.272 13.5 27C6.044 27 0 20.956 0 13.5C3.728 13.5 7.104 15.012 9.546 17.454Z"
          fill="white"
          fillOpacity="0.69"
        />
      </g>
      <defs>
        <clipPath id="clip0_76_97">
          <rect width="27" height="27" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  dots: (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_76_104)">
        <path
          d="M20.2495 26.999C23.9771 26.999 26.999 23.9771 26.999 20.2495C26.999 16.5219 23.9771 13.5 20.2495 13.5C16.5219 13.5 13.5 16.5219 13.5 20.2495C13.5 23.9771 16.5219 26.999 20.2495 26.999Z"
          fill="white"
          fillOpacity="0.39"
        />
        <path
          d="M6.7495 14.2021C10.0846 14.2021 12.7969 16.9154 12.7969 20.2495C12.7969 23.5836 10.0836 26.2969 6.7495 26.2969C3.41537 26.2969 0.702132 23.5846 0.702132 20.2495C0.702132 16.9144 3.41537 14.2021 6.7495 14.2021ZM6.7495 13.5C3.02218 13.5 0 16.5222 0 20.2495C0 23.9768 3.02218 26.999 6.7495 26.999C10.4768 26.999 13.499 23.9768 13.499 20.2495C13.499 16.5222 10.4768 13.5 6.7495 13.5Z"
          fill="white"
          fillOpacity="0.69"
        />
        <path
          d="M20.2495 0.702132C23.5846 0.702132 26.2969 3.41537 26.2969 6.7495C26.2969 10.0836 23.5836 12.7969 20.2495 12.7969C16.9154 12.7969 14.2021 10.0836 14.2021 6.7495C14.2021 3.41537 16.9154 0.702132 20.2495 0.702132ZM20.2495 0C16.5212 0 13.5 3.02218 13.5 6.7495C13.5 10.4768 16.5222 13.499 20.2495 13.499C23.9768 13.499 26.999 10.4768 26.999 6.7495C26.999 3.02218 23.9778 0 20.2495 0Z"
          fill="white"
          fillOpacity="0.69"
        />
        <path
          d="M11.521 11.5221C14.1568 8.88628 14.1568 4.61274 11.521 1.9769C8.88513 -0.658948 4.61158 -0.658948 1.97574 1.9769C-0.660102 4.61274 -0.660102 8.88628 1.97574 11.5221C4.61158 14.158 8.88513 14.158 11.521 11.5221Z"
          fill="white"
          fillOpacity="0.39"
        />
      </g>
      <defs>
        <clipPath id="clip0_76_104">
          <rect width="27" height="27" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
};

export default function AnimatedText({
  texts = [
    "Fashion with a Flair",
    "Strut with Confidence",
    "Own Your Runway",
    "Chic, Classy & Confident",
  ],
  className = "",
  speed = 30,
  separator = "cycle",
}: AnimatedTextProps) {
  const getSeparator = (index: number) => {
    // If separator is "cycle" or not specified, cycle through different separators
    if (separator === "cycle" || separator === undefined) {
      const separatorKeys = Object.keys(SeparatorIcons) as Array<
        keyof typeof SeparatorIcons
      >;
      const separatorIndex = index % separatorKeys.length;
      return SeparatorIcons[separatorKeys[separatorIndex]];
    }

    // If separator is one of our predefined icons, use it for all
    if (typeof separator === "string" && separator in SeparatorIcons) {
      return SeparatorIcons[separator as keyof typeof SeparatorIcons];
    }

    // If separator is a custom string, use it
    return separator;
  };

  return (
    <div className={`bg-neutral text-neutral-content py-2 ${className}`}>
      <div className="w-full px-4 overflow-hidden">
        <div className="flex items-center gap-6 whitespace-nowrap animate-scroll-left">
          {/* Duplicate content for seamless loop - start with content visible */}
          {[...texts, ...texts, ...texts].map((text, index) => (
            <span
              key={`${text}-${index}`}
              className="inline-flex items-center gap-6"
            >
              <span
                className="text-white"
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 400,
                  fontSize: "32px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                {text}
              </span>
              {index < texts.length * 3 - 1 && (
                <span className="flex items-center" aria-hidden="true">
                  {getSeparator(index)}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
