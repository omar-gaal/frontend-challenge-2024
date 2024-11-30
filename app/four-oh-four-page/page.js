// app/404.js or pages/404.js (depending on your structure)

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded shadow-md">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg mb-6">
          Oops! It looks like this page doesn't exist.
        </p>
        <Link href="/" className="text-blue-600 hover:underline text-lg">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
}
