import AnimatedText from "@/components/AnimatedText";

export default function AnimatedTextDemo() {
  const fashionTexts = [
    "Fashion with a Flair",
    "Strut with Confidence",
    "Own Your Runway",
    "Chic, Classy & Confident",
  ];

  return (
    <div data-theme="fashion" className="min-h-screen bg-base-100">
      <div className="w-full p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Animated Text Component Demo
        </h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Fashion Ticker Animation (Cycling Separators)
            </h2>
            <AnimatedText texts={fashionTexts} />
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">
              Custom Text Example (Cycling Separators)
            </h3>
            <AnimatedText
              texts={[
                "New Collection Available",
                "Free Shipping on Orders Over $100",
                "Limited Time Offer - 50% Off",
                "Join Our Fashion Community",
              ]}
            />
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">
              More Text Examples (Cycling Separators)
            </h3>
            <AnimatedText
              texts={[
                "Premium Quality",
                "Trendy Designs",
                "Affordable Prices",
                "Fast Delivery",
                "Elegant Style",
                "Modern Design",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
