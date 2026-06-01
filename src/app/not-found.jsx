import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-scree w-full flex items-center justify-center g-linear-to-br from-slate-900 via-gray-50/50 to-slate-200">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-50 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">
          Page Not Found!!
        </h2>
        <p className="text-gray-200 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
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
