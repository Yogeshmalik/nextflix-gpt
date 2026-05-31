import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="min-h-scree flex w-full items-center justify-center bg-">
      <div className="text-center">
        {/* <h1 className="text-6xl font-bold text-[#2c1e4a] mb-4">404</h1> */}
        <h2 className="text-2xl font-semibold text-[#99161d] mb-4">
          Sorry, something went wrong
        </h2>
        {/* <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p> */}
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-linear-to-r from-[#e50914] to-[#99161d] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
