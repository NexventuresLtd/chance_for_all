import { Link } from "react-router-dom";
import { AlertCircle, Home, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#0c1e35] text-white px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-amber-400" />
        </div>
        <h1 className="text-7xl font-extrabold text-white/20 mb-3">404</h1>
        <h2 className="text-2xl font-bold text-white mb-3">Page Not Found</h2>
        <p className="text-blue-200 mb-8 leading-relaxed">
          The page you're looking for doesn't exist. Let's get you back to where
          every teenager has a chance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors border border-white/20"
          >
            <MessageCircle className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
