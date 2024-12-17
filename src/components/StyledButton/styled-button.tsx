import { Button, Typography } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function StyledButton({ children }: Props) {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#AD7081",
          borderRadius: 12,
          px: 2,
          py: 1.5,
        }}
      >
        {children}
      </Button>
    </>
  );
}
