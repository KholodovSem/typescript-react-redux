import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface HomePageProps {}

const Home: React.FC<HomePageProps> = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is the home page</h1>
      <Link to='/about'>Go to the About Page!</Link>
      <button onClick={() => navigate("/layout/55", { replace: true })}>
        Go to layout, with a number
      </button>
    </div>
  );
};

export default Home;
