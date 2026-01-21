import { CircleAlert } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 gap-5">
      <CircleAlert size={70} className="text-brown-600" />
      <p className="text-headline-3">Page Not Found</p>
      <Link
        to="/"
        className="text-white  decoration-brown-600 bg-brown-600 p-4 px-6 rounded-full"
      >
        Go To Homepage
      </Link>
    </section>
  );
}
