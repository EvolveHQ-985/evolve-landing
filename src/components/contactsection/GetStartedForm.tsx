import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
import { emailClient } from "../../utils/email/client";
import { GetStartedFormInput } from "./GetStartedFormInput";
import { getStartedFormData, getStartedFormSchema } from "./getStartedFormtype";
import { toast } from "react-toastify";
import { BsCheckCircleFill } from "react-icons/bs";

export default function GetStartedForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<getStartedFormData>({
    resolver: zodResolver(getStartedFormSchema),
  });
  const onSubmit: SubmitHandler<getStartedFormData> = async (data) => {
    try {
      await emailClient({
        ...data,
        to_email: "evolve985@gmail.com",
      }).then(() => {
        toast(
          "Mail has been sent to Evolve, please check you mailbox for any response",
          {
            hideProgressBar: true,
            type: "success",
            autoClose: false,
            bodyClassName:
              "!flex !flex-col text-center !box-border !p-4 !gap-4 items-center justify-center",
            position: "top-center",
            icon: (
              <BsCheckCircleFill className="text-green-500 text-5xl scale-150" />
            ),
          }
        );
      });
    } catch (error) {
      return error;
    }
  };

  // Extracted variables for conditional logic on the textarea classes
  const baseClasses =
    "w-full h-64 max-h-[90vh] GScroller p-3 rounded-md border-[1px] bg-transparent outline-none resize-none";
  const focusClasses =
    "border-black/30 hover:border-black/80 focus:border-black/80";
  const errorBorderClass = errors.message ? "border-red-500" : focusClasses;

  const combinedClasses = `${baseClasses} ${errorBorderClass}`;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-center justify-center gap-3"
    >
      {/* name and services input */}
      <div className="w-full flex items-center justify-between gap-3 flex-wrap *:flex-grow *:basis-[300px] *:w-1/2 *:flex *:flex-col *:gap-3">
        <div>
          <GetStartedFormInput
            errors={errors}
            register={register}
            label={"Name"}
            name={"from_name"}
          />
          <GetStartedFormInput
            errors={errors}
            register={register}
            label={"What service do you want us to provide?"}
            name={"service"}
          />
        </div>
        <div>
          <GetStartedFormInput
            errors={errors}
            register={register}
            label={"Email"}
            name={"from_email"}
          />
          <GetStartedFormInput
            errors={errors}
            register={register}
            label={"Project name"}
            name={"project_name"}
          />
        </div>
      </div>
      <Box className="!w-full flex flex-col gap-2">
        <Typography variant="body1" component="label">
          Briefly describe your project idea or requirements
        </Typography>
        <textarea
          className={combinedClasses}
          id="message"
          {...register("message")}
        />
        <Typography
          variant="caption"
          component="strong"
          color="error"
          className="w-fit !flex gap-2 !items-center !justify-start !text-xs sm:!text-sm"
        >
          {errors.message && errors.message.message ? (
            <>
              <MdErrorOutline className="!text-sm sm:!text-base -mt-[2px] sm:mt-0" />
              {errors.message.message}
            </>
          ) : (
            <>&nbsp;</>
          )}
        </Typography>
      </Box>
      <Box className="!w-full flex items-start">
        <Button
          variant="contained"
          className="!text-white !bg-black px-4 py-2 rounded w-32 sm:w-64 max-w-full font-semibold"
          aria-label="Submit form"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </form>
  );
}
