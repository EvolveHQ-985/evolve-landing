import { Box, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type TestimonialCardProps = {
  clientImage?: string;
  clientName?: string;
  clientTitle?: string;
  clientReviewContent?: string;
};
function TestimonialCard({
  clientImage,
  clientName,
  clientReviewContent,
  clientTitle,
}: TestimonialCardProps) {
  const [imgError, setImgError] = useState(false);
  useEffect(() => {
    setImgError(false);
  }, [clientImage]);

  return (
    <Box
      title={`Review of ${clientName} the ${clientTitle}`}
      className="w-64 shrink-0 snap-center h-80 max-w-[75%] bg-blue-50 p-4 rounded-md flex flex-col items-center justify-start gap-0"
    >
      {/* client review: client image */}
      <span
        title={`image of ${clientName} the ${clientTitle}`}
        className="size-20 shrink-0 mb-3 border-2 rounded-full -mt-12 flex overflow-hidden items-center justify-center bg-white"
      >
        {clientImage && !imgError ? (
          <img
            src={clientImage}
            alt={`image of ${clientName} the ${clientTitle}`}
            className="size-full object-cover object-center"
            onError={() => {
              setImgError(true);
            }}
            width={100}
            height={100}
          />
        ) : (
          <Skeleton
            variant="circular"
            animation="wave"
            className="!size-full"
          />
        )}
      </span>
      {/* client review: client name */}

      {clientName ? (
        <Typography
          variant="h6"
          id="services"
          className="!text-xl sm:text-2xl"
          component="b"
          sx={{
            fontWeight: "bolder",
            color: "rgba(0, 0, 0, 0.8)",
          }}
        >
          Client name
        </Typography>
      ) : (
        <Skeleton variant="text" animation="wave" width={"60%"} />
      )}

      {/* client review: client title */}

      {clientTitle ? (
        <Typography
          variant="h6"
          id="services"
          className="!text-base sm:text-lg"
          component="b"
          sx={{
            fontWeight: "light",
            color: "rgba(0, 0, 0, 0.5)",
          }}
        >
          {clientTitle}
        </Typography>
      ) : (
        <Skeleton variant="text" animation="wave" width={"40%"} />
      )}

      {/* client review: client review content */}

      {clientReviewContent ? (
        <Typography
          variant="h6"
          id="services"
          className="!text-base !mt-4 sm:text-lg"
          component="p"
          sx={{
            fontWeight: "light",
            color: "rgba(0, 0, 0, 0.8)",
            textAlign: "center",
            textWrap: "pretty",
          }}
        >
          {clientReviewContent}
        </Typography>
      ) : (
        <>
          <Skeleton variant="text" animation="wave" width={"80%"} />
          <Skeleton variant="text" animation="wave" width={"100%"} />
          <Skeleton variant="text" animation="wave" width={"70%"} />
          <Skeleton variant="text" animation="wave" width={"20%"} />
        </>
      )}
    </Box>
  );
}

export default TestimonialCard;
