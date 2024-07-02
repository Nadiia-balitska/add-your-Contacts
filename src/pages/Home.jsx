import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://cdn.wallpapersafari.com/38/20/WgrtvR.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">Here are yours contacts list...</p>
          <Link to="/contacts" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
