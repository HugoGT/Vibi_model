import * as React from "react";

const NotFoundPage = () => {
  return (
    <div className="absolute inset-0 top-1/3 w-full pt-12 text-center text-6xl font-extrabold sm:text-8xl">
      <p>404</p>
      <p>NOT FOUND</p>
    </div>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
