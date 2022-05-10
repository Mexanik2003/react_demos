import React from "react";

const HomePage = () => <div>Home page</div>;

const moduleSettings = {
  routeProps: {
    path: "/",
    element: <HomePage />,
  },
  name: "Home",
};

export default moduleSettings;
