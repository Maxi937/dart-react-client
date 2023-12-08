// import React, { useContext, useState } from "react";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import { useForm, Controller } from "react-hook-form";
// import UploadFile from "../../Form/MUploadFile/index.jsx";
// import MSelect from "../../Form/MSelect/index.jsx";
// import { codes } from "./codes.js";
// import { dartService } from "../../../service/dart-service.js";

// const styles = {
//   form: {
//     padding: "20px",
//     display: "flex",
//     alignItems: "center",
//   },
//   buttoncontainer: {
//     marginLeft: "auto",
//   },
//   formUploadFile: {
//     flexBases: "33%",
//     overflow: "hidden",
//   },
//   submitButton: {
//     fontWeight: "bold",
//     backgroundColor: "black",
//     filter: "brightness(90%)",
//     color: "white",
//     transition: "all 0.2s ease",
//     "&:hover": {
//       color: "black",
//       backgroundColor: "gold",
//       filter: "brightness(100%)",
//     },
//   },
// };

// const InputFileForm = ({ onPdfSuccess }) => {
//   const [file, setSelectedFile] = useState("");
//   const [code, setCode] = useState("");

//   const {
//     control,
//     formState: { errors },
//     handleSubmit,
//   } = useForm();

//   function handleXmlChange(event) {
//     const file = event.target.files[0];

//     if (file) {
//       setSelectedFile(event.target.files[0]);
//     }
//   }

//   function handleCodeChange(event) {
//     setCode(event.target.value);
//   }

//   async function onSubmit() {
//     if (!file || !code) {
//       return console.log("all fields not completed");
//     }
//     const data = await dartService.testGenerateXpression(code, file);

//     if (data.success) {
//       const buf = Uint8Array.from(data.filedata.data);
//       const file = new File([buf], data.filename, { type: "application/pdf" });
//       onPdfSuccess(file);
//     }
//   }

//   return (
//     <form style={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
//       <Controller
//         control={control}
//         name="code"
//         render={() => (
//           <MSelect
//             label={"code"}
//             choices={codes}
//             onSelectionChange={handleCodeChange}
//           />
//         )}
//       />

//       <Controller
//         control={control}
//         name="xml"
//         render={() => (
//           <Box sx={styles.formUploadFile}>
//             <UploadFile accept=".xml" onInputChange={handleXmlChange} />
//           </Box>
//         )}
//       />

//       <Box sx={styles.buttoncontainer}>
//         <Button type="submit" color="primary" sx={styles.submitButton}>
//           Generate
//         </Button>
//       </Box>
//     </form>
//   );
// };

// export default InputFileForm;
