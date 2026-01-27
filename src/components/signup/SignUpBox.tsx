import { Button } from "../ui/button";
import { SignUpForm } from "./SignUpForm";
import { Link } from "react-router-dom";

function SignUpBox() {
  return (
    <section className="flex items-center justify-center w-full pt-15">
      <article className="bg-brown-200 rounded-2xl w-199.5 px-30 py-15 flex flex-col gap-10">
        <header className="text-center">
          <h2 className="text-headline-2 text-brown-600">Sign up</h2>
        </header>

        <SignUpForm />
        <div className="flex  justify-center">
          <Button variant="primary">Sign up</Button>
        </div>
        <p className="text-center text-body-1 text-brown-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="underline text-brown-600 hover:text-brown-400"
          >
            Log in
          </Link>
        </p>
      </article>
    </section>
  );
}

export default SignUpBox;
