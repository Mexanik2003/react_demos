import { FC } from "react";
import { Stack, Typography } from "@mui/material";

export const WidgetHeader: FC<{ title: string }> = ({ title }) => {
  return (
    <Stack>
      <Typography variant="subtitle2">{title}</Typography>
    </Stack>
  );
};
