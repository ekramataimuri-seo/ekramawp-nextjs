import Link from 'next/link';

export const metadata = {
  title: "404 - Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="mb-8 text-gray-600">The page or image you are looking for does not exist.</p>
      <Link href="/" className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
        Return Home
      </Link>
    </div>
  );
}