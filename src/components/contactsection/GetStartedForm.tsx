import { Box, Button, Typography } from "@mui/material";
import { GetStartedFormInput } from "./GetStartedFormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getStartedFormData, getStartedFormSchema } from "./getStartedFormtype";
import { MdErrorOutline } from "react-icons/md";

export default function GetStartedForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<getStartedFormData>({
    resolver: zodResolver(getStartedFormSchema),
  });
  const onSubmit: SubmitHandler<getStartedFormData> = (data) => {
    const { email, name, projectName, requestDescription, service } = data;

    // handle data usage here > below is for sending a plain mail message
    const subject = `Message from ${name}`;
    const body = `
-----------User Request Information-----------

Name: ${name}
Response email: ${email}


-----------Project Information-----------

Project name: ${projectName}
Project service: ${service}

-----------Project Description-----------

${requestDescription}`;
    const mailtoLink = `mailto:evolve985@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  // Extracted variables for conditional logic on the textarea classes
  const baseClasses =
    "w-full h-64 max-h-[90vh] GScroller p-3 rounded-md border-[1px] bg-transparent outline-none resize-none";
  const focusClasses =
    "border-black/30 hover:border-black/80 focus:border-black/80";
  const errorBorderClass = errors.requestDescription
    ? "border-red-500"
    : focusClasses;

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
            name={"name"}
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
            name={"email"}
          />
          <GetStartedFormInput
            errors={errors}
            register={register}
            label={"Project name"}
            name={"projectName"}
          />
        </div>
      </div>
      <Box className="!w-full flex flex-col gap-2">
        <Typography variant="body1" component="label">
          Briefly describe your project idea or requirements
        </Typography>
        <textarea
          className={combinedClasses}
          {...register("requestDescription")}
        />
        <Typography
          variant="caption"
          component="strong"
          color="error"
          className="w-fit !flex gap-2 !items-center !justify-start !text-xs sm:!text-sm"
        >
          {errors.requestDescription && errors.requestDescription.message ? (
            <>
              <MdErrorOutline className="!text-sm sm:!text-base -mt-[2px] sm:mt-0" />
              {errors.requestDescription.message}
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
