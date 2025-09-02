"use client";

import { useState } from "react";
import ScrollAnimator from "@/components/ScrollAnimator";

const ContactPage = () => {
  const [message, setMessage] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setError("Please describe your project idea.");
      return;
    }

    setIsLoading(true);
    setError("");
    setAiResponse("");

    try {
      setTimeout(() => {
        setAiResponse(`
          <h3>Project Analysis</h3>
          <p>Thank you for sharing your project idea!:</p>
          <ul>
            <li><strong>Next Steps:</strong> Let's schedule a consultation to dive deeper</li>
          </ul>
          <p>Our team would love to help bring your vision to life!</p>
        `);
        setIsLoading(false);
      }, 2000);
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Have an idea? Describe your project below to get instant, feedback
            and analysis.
          </p>
        </ScrollAnimator>

        <ScrollAnimator className="mt-12">
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl neumorphic-shadow"
          >
            <div>
              <label
                htmlFor="project-idea"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Project Idea
              </label>
              <div className="mt-1">
                <textarea
                  rows={8}
                  name="project-idea"
                  id="project-idea"
                  className="block w-full rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 dark:placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm neumorphic-shadow-inset p-4 transition-colors"
                  placeholder="Describe your web app, mobile app, or software idea..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isLoading}
                ></textarea>
              </div>
            </div>
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            <div className="mt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all neumorphic-shadow transform hover:scale-105"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Analyzing...
                  </>
                ) : (
                  "Get Feedback"
                )}
              </button>
            </div>
          </form>
        </ScrollAnimator>

        {(isLoading || aiResponse) && (
          <ScrollAnimator className="mt-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl neumorphic-shadow">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                AI Feedback:
              </h2>
              <div
                className="prose text-gray-600 dark:text-gray-300 max-w-none 
                           prose-h3:text-xl prose-h3:font-semibold prose-h3:text-blue-500 dark:prose-h3:text-blue-400 prose-h3:mt-6 prose-h3:mb-2
                           prose-p:leading-relaxed
                           prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-1
                           prose-strong:text-gray-800 dark:prose-strong:text-gray-100"
                dangerouslySetInnerHTML={{ __html: aiResponse }}
              />
              {isLoading && !aiResponse && (
                <div className="text-gray-500 dark:text-gray-400">
                  Generating feedback, please wait...
                </div>
              )}
            </div>
          </ScrollAnimator>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
