import Link from "next/link";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is this application?",
      answer:
        "This is a Next.js boilerplate application with DaisyUI for styling and TypeScript for type safety.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply clone the repository, install dependencies with 'npm install', and run 'npm run dev' to start the development server.",
    },
    {
      question: "What technologies are used?",
      answer:
        "This app uses Next.js 15, React 19, TypeScript, Tailwind CSS, and DaisyUI components.",
    },
    {
      question: "Is this mobile responsive?",
      answer:
        "Yes, the application is fully responsive and works well on all device sizes thanks to Tailwind CSS and DaisyUI.",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Yep Next
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/landing">Landing</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>

        <div className="w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-base-200 mb-4"
            >
              <input
                type="radio"
                name="my-accordion"
                defaultChecked={index === 0}
              />
              <div className="collapse-title text-xl font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
