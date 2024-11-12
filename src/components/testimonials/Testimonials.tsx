import { Typography } from "@mui/material";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const EvolveReviewDatas: {
    clientImage?: string;
    clientName?: string;
    clientTitle?: string;
    clientReviewContent?: string;
  }[] = [
    {
      clientImage:
        "https://media.istockphoto.com/id/1867987302/photo/senior-businessman-standing-in-hallway-with-crossed-arms.webp?a=1&b=1&s=612x612&w=0&k=20&c=fp-RASy_uNFSNIcnT_4THjmUS3cikGqde4b_3-g2CiU=",
      clientName: "Thomas Micheal",
      clientReviewContent:
        "We came to Evolve with a complex project and they turned it into a smooth enjoyable journey. Their creativity in design and professionalism in development were impressive.",
      clientTitle: "CEO, Imagine AI",
    },
    {
      clientImage:
        "https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2VvfGVufDB8fDB8fHww",
      clientName: "Mirabel Stephen",
      clientReviewContent:
        "Evolve has ensured that any product they build have high conversion rate and is user-centric. This is applaudable and i recommend this company to everyone i meet.",
      clientTitle: "CEO, Imagine AI",
    },
    {
      clientImage:
        "https://media.istockphoto.com/id/2042565503/photo/smiling-businesswoman-using-phone-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=DAwjzj_xfW_uQcvtFmr-WTWTFcRBd7_pOjWFFyCQ4DA=",
      clientName: "David Lawson",
      clientReviewContent:
        "The attention to detail and prompt communication from Evolve set them apart. They exceeded our expectations and delivered a product that perfectly fit our brand.",
      clientTitle: "Founder, GreenWave Tech",
    },
    {
      clientImage:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c2luZXNzJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
      clientName: "Sara Benitez",
      clientReviewContent:
        "Evolve’s team has remarkable talent. They turned our rough ideas into a high-quality app, delivering a seamless user experience. Would definitely work with them again!",
      clientTitle: "CTO, Vivid Apps",
    },
    {
      clientImage:
        "https://plus.unsplash.com/premium_photo-1661508620175-3ae20da61cda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D",
      clientName: "Leonardo Gomez",
      clientReviewContent:
        "Working with Evolve was a pleasure. Their project management and technical expertise were evident from day one, and the final result was beyond what we had hoped for.",
      clientTitle: "COO, Stellar Dynamics",
    },
  ];
  return (
    <section className="flex flex-col gap-5 px-4 md:px-5 lg:px-[8rem] py-10 h-auto">
      <Typography
        variant="h2"
        className="!text-xl md:!text-3xl text-red-500"
        id="services"
        component="h2"
        sx={{
          fontWeight: "bolder",
        }}
      >
        Testimonials
      </Typography>
      <Typography
        variant="body1"
        // className="!text-xl md:!text-3xl text-red-500"
        id="services"
        component="p"
      >
        People that have worked with us always have something good to say. Here
        are some of the reviews we've gotten:
      </Typography>
      <section className="w-fit min-h-fit max-w-full m-auto overflow-x-auto flex pt-10 box-border gap-4 snap-mandatory snap-x items-center justify-start">
        {EvolveReviewDatas.map(
          (
            { clientImage, clientName, clientReviewContent, clientTitle },
            index
          ) => (
            <TestimonialCard
              key={index}
              clientName={clientName}
              clientImage={clientImage}
              clientReviewContent={clientReviewContent}
              clientTitle={clientTitle}
            />
          )
        )}
      </section>
    </section>
  );
}

export default Testimonials;
