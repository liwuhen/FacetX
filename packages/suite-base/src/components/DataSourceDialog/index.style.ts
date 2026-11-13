// SPDX-FileCopyrightText: Copyright (C) 2023-2026 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

import { alpha } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  logo: {
    width: 125,
    height: "auto",
    color: "#EDF7F5",
    marginBottom: theme.spacing(3),
  },
  grid: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.08fr) minmax(0, 1fr)",
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "minmax(0, 1fr)",
    },
  },
  patrol: {
    minWidth: 0,
    padding: theme.spacing(4),
    backgroundColor: "#102E36",
    color: "#EDF7F5",
    borderBottomRightRadius: theme.spacing(3),
    "& .MuiTypography-root": {
      color: "inherit",
    },
    "& .MuiButton-outlined": {
      color: "#A8F3E5",
      borderColor: "#52777C",
      "&:hover": {
        backgroundColor: "#234750",
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
    },
  },
  patrolPreview: {
    margin: theme.spacing(0, 0, 2.5),
    borderRadius: theme.spacing(1.5),
    overflow: "hidden",
    border: "1px solid #456A70",
    backgroundColor: "#183942",
    "& img": {
      display: "block",
      width: "100%",
      aspectRatio: "16 / 9",
      objectFit: "cover",
    },
    "& figcaption": {
      borderTop: "1px solid #456A70",
      padding: theme.spacing(1, 1.5),
      fontSize: 13,
      fontWeight: 600,
      color: "#DCEDEA",
    },
  },
  startTitle: {
    fontSize: "clamp(24px, 3.4vw, 36px)",
    fontWeight: 650,
    letterSpacing: "-0.045em",
    lineHeight: 1.15,
    marginBottom: theme.spacing(1.5),
  },
  version: {
    justifySelf: "end",
    gridColumn: "1 / -1",
    margin: theme.spacing(1.5, 3, -2),
    color: theme.palette.text.secondary,
  },
  content: {
    minWidth: 0,
    padding: theme.spacing(7, 4, 4),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
    },
  },
  button: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  connectionButton: {
    textAlign: "left",
    justifyContent: "flex-start",
    padding: theme.spacing(2, 3),
    gap: theme.spacing(1.5),
    borderColor: theme.palette.divider,
    borderRadius: theme.spacing(1),
    "&:hover": {
      borderColor: theme.palette.primary.main,
      backgroundColor: alpha(theme.palette.primary.main, 0.09),
    },

    ".MuiButton-startIcon .MuiSvgIcon-fontSizeLarge": {
      fontSize: 28,
    },
  },
  recentListItemButton: {
    overflow: "hidden",
    color: theme.palette.primary.main,

    "&:hover": {
      backgroundColor: "transparent",
      color: theme.palette.primary[theme.palette.mode === "dark" ? "light" : "dark"],
    },
  },
  recentSourceSecondary: {
    color: "inherit",
  },
}));
