import { Typography } from "@mui/material";
import GetStartedForm from "./GetStartedForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-neutral-100 px-4 md:px-5 lg:px-[8rem] py-10 flex flex-col gap-4"
    >
      {/* Header and headline paragraph */}

      <Typography
        variant="h2"
        className="!text-xl md:!text-3xl text-red-500"
        id="services"
        component="h2"
        sx={{
          fontWeight: "bolder",
        }}
      >
        GET STARTED!
      </Typography>
      <Typography
        variant="body1"
        // className="!text-xl md:!text-3xl text-red-500"
        id="services"
        component="p"
      >
        At Evolve, we’re excited to turn your ideas into reality. Whether you
        need a dynamic website, a sleek mobile app, or captivating designs, our
        team is here to help every step of the way. Tell us about your project
        by filling out the form. Share your vision, your goals, and objectives,
        and we'll tailor our approach to meet your specific needs. Once you
        submit, we’ll review your information and get in touch to discuss how we
        can collaborate and bring your project to life. Let’s make something
        incredible together!
      </Typography>
      {/* contact us area after paragraph */}

      <div className="w-full flex flex-col gap-0">
        <Typography
          variant="body1"
          // className="!text-xl md:!text-3xl text-red-500"
          id="services"
          component="h4"
          sx={{
            fontWeight: "bold",
          }}
        >
          Contact us at:{" "}
        </Typography>
        <Typography
          variant="subtitle1"
          className="!w-fit text-red-500"
          id="services"
          component="a"
          href="mailto:evolveteam@gmail.com"
          sx={{
            fontWeight: "bolder",
          }}
        >
          evolveteam@gmail.com
        </Typography>
      </div>
      <GetStartedForm />
    </section>
  );
}
