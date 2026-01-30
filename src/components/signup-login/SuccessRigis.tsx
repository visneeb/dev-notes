import { Button } from "../ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function SuccessRigis() {
  const navigate = useNavigate();
  const handleOnclick = () => {
    navigate("/");
  };

  return (
    <section className="flex items-center justify-center w-full pt-15">
      <article className="bg-brown-200 rounded-2xl w-199.5 px-30 py-15">
        <div className="text-center flex flex-col items-center justify-center gap-10">
          <Check
            className="bg-brand-green rounded-full text-white w-20 h-20 p-4"
            size={40}
            strokeWidth={3}
          />
          <h2 className="text-headline-2 text-brown-600">
            Registration success
          </h2>
          <Button onClick={handleOnclick}>Continue</Button>
        </div>
      </article>
    </section>
  );
}
