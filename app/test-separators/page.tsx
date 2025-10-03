import AnimatedText from "@/components/AnimatedText";

export default function TestSeparators() {
  return (
    <div data-theme="fashion" className="min-h-screen bg-base-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Separator Test</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Default (Should Cycle)
          </h2>
          <AnimatedText
            texts={["Text 1", "Text 2", "Text 3", "Text 4", "Text 5", "Text 6"]}
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Force Circle Only
          </h2>
          <AnimatedText
            texts={["Text 1", "Text 2", "Text 3", "Text 4"]}
            separator="circle"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Force Quarter Only
          </h2>
          <AnimatedText
            texts={["Text 1", "Text 2", "Text 3", "Text 4"]}
            separator="quarter"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Force Dots Only
          </h2>
          <AnimatedText
            texts={["Text 1", "Text 2", "Text 3", "Text 4"]}
            separator="dots"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Custom String Separator
          </h2>
          <AnimatedText
            texts={["Text 1", "Text 2", "Text 3", "Text 4"]}
            separator="|"
          />
        </div>
      </div>
    </div>
  );
}
