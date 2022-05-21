import React from "react";
import { Stack } from "@mui/material";
import { Widget } from "./Widget";
import { WidgetType } from "./types";

const widgetsList: WidgetType[] = [
  {
    title: "Widget1",
  },
  {
    title: "Widget2",
  },
  {
    title: "Widget3",
  },
];

const Widgets = () => (
  <Stack direction="column">
    {widgetsList.map((widget) => (
      <Widget widget={widget} />
    ))}
  </Stack>
);

const moduleSettings = {
  routeProps: {
    path: "/widgets",
    element: <Widgets />,
  },
  name: "Widgets",
};

export default moduleSettings;
