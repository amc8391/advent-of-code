import React from 'react';
import { Typography } from "@mui/material";

export const typographize = (str: string): JSX.Element[] =>
  str.split('\n')
    .map((line: string, idx: number) => (
      <Typography className="Typography" key={'line' + idx}>{line}</Typography>
    ));
