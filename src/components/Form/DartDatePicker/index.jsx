import * as React from "react";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import moment from "moment";

const styles = {};

export default function DartDatePicker({ label, value, setValue }) {
  return (
    <MobileDatePicker
      label={label}
      value={moment(value)}
      onChange={(newValue) => setValue(moment(newValue).toISOString())}
      slotProps={{
        dialog: {
          sx: {
            "& .MuiDialogContent-root": {
              color: "black",
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
