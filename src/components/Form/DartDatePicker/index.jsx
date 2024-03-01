import * as React from "react";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import moment from "moment"

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

export default function DartDatePicker({ label, value, setValue }) {
  return (
    <MobileDatePicker
      sx={styles.picker}
      label={label}
      value={moment(value)}
      onChange={(newValue) => setValue(new Date(newValue))}
      slotProps={{
        dialog: {
          sx: {
            "& .MuiDialogContent-root": { 
              color: "black" 
            },
          },
        },
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
