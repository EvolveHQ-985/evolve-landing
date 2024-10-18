export default function Service() {
    const EvolveData = [
      {
        id: 0,
        title: 'Design',
        description:
          'We create intuitive, engaging digital experiences with stunning visuals that enhance user interaction and strengthen your brands identity.',
      },
      {
        id: 1,
        title: 'Web Development',
        description:
          'We build fast, secure, and scalable websites tailored to your business, ensuring optimal performance and a great user experience.',
      },
      {
        id: 2,
        title: 'Mobile App Development',
        description:
            'We create user-friendly mobile apps for iOS and Android, focusing on smooth performance and engaging interfaces.',
      },
    ];
  
    return (
      <section className="flex flex-col gap-5 px-4 md:px-5 lg:px-[8rem] py-10 h-auto z-[-1]">
        <b className="text-xl md:text-3xl text-red-500">OUR SERVICES</b>
        <section className="flex flex-col gap-3 md:flex-row md:justify-between">
          {EvolveData.map((item) => (
            <div
              key={item.id}
              className=" bg-blue-50 p-[1rem] rounded-xl w-full md:max-w-[380px] h-[20rem] flex flex-col gap-3 transform transition-transform duration-300 hover:scale-105 hover:shadow-md"
              >
                  <div className="w-[2.7rem] h-[2.7rem] bg-blue-200 flex items-center justify-center rounded-full">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.0532 17.7066L26.8265 16.5066L16.4932 26.8266L17.7332 28.0666C18.7732 29.1066 19.8532 29.6266 20.9198 29.6266C21.9865 29.6266 23.0665 29.1066 24.1065 28.0666L28.0532 24.1199C30.1732 21.9866 30.1732 19.8399 28.0532 17.7066Z" fill="#269ACC" />
                        <path d="M14.2533 3.90655C12.16 1.81321 9.96001 1.81321 7.86668 3.90655L3.90668 7.85321C1.82668 9.94655 1.82668 12.1465 3.90668 14.2399L5.13335 15.4665L15.4667 5.13321L14.2533 3.90655Z" fill="#269ACC" />
                        <path d="M29.08 5.25313C27.3333 9.61313 23.3466 15.3065 19.5466 19.0265C19 15.5865 16.2533 12.8931 12.7866 12.4131C16.52 8.59979 22.2533 4.55979 26.6266 2.79979C27.4 2.50646 28.1733 2.73313 28.6533 3.21313C29.16 3.71979 29.4 4.47979 29.08 5.25313Z" fill="#269ACC" />
                        <path d="M18.3732 20.1199C18.1066 20.3466 17.8399 20.5733 17.5732 20.7866L15.1866 22.6933C15.1866 22.6533 15.1732 22.5999 15.1732 22.5466C14.9866 21.1199 14.3199 19.7999 13.2399 18.7199C12.1466 17.6266 10.7866 16.9599 9.29325 16.7733C9.25325 16.7733 9.19991 16.7599 9.15991 16.7599L11.0932 14.3199C11.2799 14.0799 11.4799 13.8533 11.6932 13.6133L12.5999 13.7333C15.4666 14.1333 17.7732 16.3866 18.2266 19.2399L18.3732 20.1199Z" fill="#269ACC" />
                        <path d="M13.9067 23.4932C13.9067 24.9598 13.3467 26.3598 12.28 27.4132C11.4667 28.2398 10.3733 28.7998 9.04001 28.9598L5.77335 29.3198C3.98668 29.5198 2.45335 27.9865 2.65335 26.1865L3.01335 22.9065C3.33335 19.9865 5.77335 18.1198 8.36001 18.0665C8.61335 18.0532 8.89335 18.0665 9.16001 18.0932C10.2933 18.2398 11.3867 18.7598 12.3067 19.6665C13.2 20.5598 13.7067 21.6132 13.8533 22.7198C13.88 22.9865 13.9067 23.2398 13.9067 23.4932Z" fill="#269ACC" />
                    </svg>  
              </div>
              <b className="text-lg">{item.title}</b>
              <p className="text-black">{item.description}</p>
            </div>
          ))}
        </section>
      </section>
    );
  }
  