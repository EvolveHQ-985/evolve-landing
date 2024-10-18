export default function WhyUs() {
    const EvolveData = [
      {
        id: 0,
        title: 'User-Centric Focus',
        description:
          'We prioritize user experience at every stage, ensuring our products engage and resonate with your audience while meeting business goals.',
      },
      {
        id: 1,
        title: 'Commitment to Growth',
        description:
          'We offer ongoing support and optimization post-launch, ensuring your product evolves with market needs and user feedback for sustained success.',
      },
      {
        id: 2,
        title: 'Holistic Expertise',
        description:
          'Our diverse team collaborates seamlessly across design, content, and development to deliver tailored solutions with attention to every detail.',
      },
    ];
  
    return (
      <section className="flex flex-col gap-5 px-4 md:px-5 lg:px-[8rem] py-10 h-auto">
        <b className="text-xl md:text-3xl text-red-500" id="services">WHY CHOOSE EVOLVE?</b>
        <section className="flex flex-col gap-2 md:flex-row md:justify-between">
          {EvolveData.map((item) => (
            <div
              key={item.id}
              className="border-2 border-red-200 px-7 py-[4rem] md:py-[2rem] lg:py-[5rem] rounded-xl w-full md:max-w-[380px] h-[20rem] flex flex-col gap-3 transform transition-transform duration-300 hover:scale-90 hover:shadow-md"
            >
              <b className="text-lg">{item.title}</b>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </section>
      </section>
    );
  }
  