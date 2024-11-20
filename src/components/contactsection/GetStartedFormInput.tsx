import { Box, TextField, Typography } from "@mui/material";
import { FieldError, UseFormRegister } from "react-hook-form";
import { getStartedFormData } from "./getStartedFormtype";
import { MdErrorOutline } from "react-icons/md";

// type inference for error messages from the formdata
type FormErrors<T> = {
  [K in keyof T]?: FieldError;
};
interface FormInputProp {
  label: string;
  name: "from_name" | "from_email" | "service" | "project_name" | "message";
  type?: "text" | "email";
  register?: UseFormRegister<getStartedFormData>;
  errors?: FormErrors<getStartedFormData>;
}
export const GetStartedFormInput: React.FC<FormInputProp> = ({
  label,
  register,
  name,
  type = "text",
  errors,
}) => {
  return (
    <Box className="!w-full">
      <Typography variant="body1" component="label">
        {label}
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        className="w-full focus:!border-black/80 !outline-none"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor:
                errors && errors[name] && errors[name].message
                  ? "rgba(225, 0, 0, 0.3)"
                  : "rgba(0, 0, 0, 0.3)",
            },
            "&.Mui-focused fieldset": {
              borderColor:
                errors && errors[name] && errors[name].message
                  ? "rgba(225, 0, 0, 0.8)"
                  : "rgba(0, 0, 0, 0.8)",
              borderWidth: 1,
            },
          },
        }}
        margin="dense"
        type={type}
        id={name}
        {...(register ? register(name) : {})}
      />
      <Typography
        variant="caption"
        component="strong"
        color="error"
        className="w-fit !flex gap-2 !items-center !justify-start !text-xs sm:!text-sm"
      >
        {errors &&
          (errors[name] && errors[name].message ? (
            <>
              <MdErrorOutline className="!text-sm sm:!text-base -mt-[2px] sm:mt-0" />
              {errors[name].message}
            </>
          ) : (
            <>&nbsp;</>
          ))}
      </Typography>
    </Box>
  );
};
