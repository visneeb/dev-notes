import { Spinner } from "./spinner";

export function Loading() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center min-h-[50vh]">
      <Spinner className="size-10" />
      <p className="text-body-1 pt-5">Loading...</p>
    </div>
  );
}
