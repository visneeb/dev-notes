export function AuthorCard() {
  return (
    <div className="bg-brown-200 rounded-2xl">
      <div className="p-6">
        <div className="flex flex-row gap-3 pb-5">
          <img
            src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
            className="rounded-full w-11 h-11"
          />
          <p className="flex flex-col">
            <span className="text-body-3 text-brown-400">Author</span>
            <span className="text-headline-4 text-brown-500">Author Name</span>
          </p>
        </div>
        <hr className=" border-t border-brown-300  " />
        <div className="pt-5 space-y-4 text-body-1 text-brown-400">
          <p>
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
          </p>
          <p>
            When i’m not writing, I spends time volunteering at my local animal
            shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
    </div>
  );
}
