import { FC } from "react";
import { Paper, Theme } from "@mui/material";
import { WidgetHeader } from "./WidgetHeader";
import { WidgetType } from "./types";

export const Widget: FC<{ widget: WidgetType }> = ({ widget }) => {
  return (
    <Paper
      elevation={4}
      sx={(theme: Theme) => ({
        padding: theme.spacing(2),
      })}
    >
      <WidgetHeader title={widget.title} />
    </Paper>
  );
};
