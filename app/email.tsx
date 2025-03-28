import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const WaitlistEmail = () => {
  return (
    <Html>
      <Head />
      <Preview>You're on the phish.directory waitlist</Preview>
      <Tailwind>
        <Body
          className="py-[40px] font-sans"
          style={{
            backgroundImage:
              "url('https://s3.hogwarts.dev/assets/483388796_18487927669062383_851922503530396268.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container
            className="mx-auto p-[24px] max-w-[600px] rounded-[8px]"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Section className="mb-[32px] text-center">
              <Img
                src="https://s3.hogwarts.dev/assets/phishdirectory.jpeg"
                alt="phish.directory logo"
                width="150"
                height="auto"
                className="w-[150px] h-auto object-cover mx-auto rounded-[8px]"
              />
            </Section>

            <Section>
              <Heading className="text-[#55625c] text-[24px] font-bold mt-[0] mb-[24px]">
                Welcome to the phish.directory waitlist
              </Heading>

              <Text className="text-[#55625c] text-[16px] leading-[24px] mb-[24px]">
                Thanks for your interest in phish.directory UI. We've added you
                to our waitlist and will notify you as soon as access becomes
                available.
              </Text>

              <Text className="text-[#55625c] text-[16px] leading-[24px] mb-[32px]">
                We're working hard to create a seamless experience and can't
                wait to have you on board.
              </Text>

              <div
                style={{
                  fontFamily: "cursive",
                  fontSize: "22px",
                  color: "#1aa6b8",
                  marginTop: "32px",
                  marginBottom: "0",
                  textAlign: "right",
                  paddingRight: "16px",
                }}
              >
                The phish.directory Team
              </div>
            </Section>

            <Section className="border-t border-[#f0f0f0] mt-[16px] pt-[16px]">
              <Text className="text-[#55625c] text-[12px] m-0 text-center">
                © 2025 phish.directory. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WaitlistEmail;
