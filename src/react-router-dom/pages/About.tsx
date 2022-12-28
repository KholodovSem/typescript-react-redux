import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface AboutPageProps {}

const About: React.FC<AboutPageProps> = () => {
  const [pageMessage, setPageMessage] = useState<string>("");
  const { message } = useParams();

  useEffect(() => {
    if (message) {
      setPageMessage(message);
    } else {
      setPageMessage("Message not found!");
    }
  }, []);

  return (
    <div>
      <h1>This is the about page</h1>
      <p>{pageMessage}</p>
    </div>
  );
};

export default About;
