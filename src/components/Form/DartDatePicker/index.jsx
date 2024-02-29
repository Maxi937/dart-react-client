import * as React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

const styles = {
  picker: {
    day: {
      color: "black",
    },
    daySelected: {
      backgroundColor: "#33abb6",
    },
    dayDisabled: {
      color: "#ccc",
    },
    current: {
      color: "red",
    },
  },
};

export default function DartDatePicker({ value, setValue }) {
  return (
    <MobileDatePicker
      sx={styles.picker}
      label="Mobile variant"
      value={value}
      onChange={(newValue) => setValue(newValue)}
      slotProps={{
        day: {
          sx: {
            "&.MuiPickersDay-root": {
              color: "black",
            },
            "&.MuiPickersDay-root.Mui-selected": {
              backgroundColor: "goldenrod",
            },
          },
        },
      }}
    />
  );
}
