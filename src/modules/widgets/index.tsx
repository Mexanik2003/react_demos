import React from "react";

const Widgets = () => <div>Widgets Module</div>;

const moduleSettings = {
  routeProps: {
    path: "/widgets",
    element: <Widgets />,
  },
  name: "Widgets",
};

export default moduleSettings;
