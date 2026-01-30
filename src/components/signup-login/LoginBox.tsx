import { LoginForm } from "./LoginForm";
import { Link } from "react-router-dom";

export function LoginBox() {
  return (
    <section className="flex items-center justify-center w-full pt-10 sm:pt-15 pb-15 px-4">
      <article className="bg-brown-200 rounded-2xl w-199.5 sm:px-30 sm:py-15 flex flex-col gap-10 px-4 py-10">
        <header className="text-center">
          <h2 className="text-headline-2 text-brown-600">Login</h2>
        </header>

        <LoginForm />

        <p className="text-center text-body-1 text-brown-400">
          Don't have any account?{" "}
          <Link
            to="/signup"
            className="underline text-brown-600 hover:text-brown-400"
          >
            Sign up
          </Link>
        </p>
      </article>
    </section>
  );
}
