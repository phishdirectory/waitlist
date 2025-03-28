import {
  Body,
  Button,
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
        <Body className="bg-[#f5f5f5] py-[40px] font-sans">
          <Container className="bg-white mx-auto p-[24px] max-w-[600px] rounded-[8px]">
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

              <Button
                href="https://phish.directory"
                className="bg-[#1aa6b8] text-white rounded-[4px] py-[12px] px-[20px] text-[16px] font-medium no-underline text-center block box-border"
              >
                Learn more about phish.directory
              </Button>

              <Text className="text-[#55625c] text-[14px] mt-[32px] mb-[12px]">
                Have questions? Join our Slack community by emailing us at{" "}
                <a
                  href="mailto:slack@phish.directory"
                  className="text-[#83bab4]"
                >
                  slack@phish.directory
                </a>
              </Text>

              <Text className="text-[14px] mb-[0]">
                The phish.directory Team
              </Text>
            </Section>

            <Section className="border-t border-[#f0f0f0] mt-[10px] pt-[10px]">
              <Text className="text-[#55625c] text-[12px] m-0">
                © 2025 phish.directory. All rights reserved.
              </Text>
              {/* <Text className="text-[#55625c] text-[12px] m-0">
                123 Security Ave, Warren, US
              </Text> */}
              {/* <Text className="text-[#55625c] text-[12px]">
                <a
                  href="https://phish.directory/unsubscribe"
                  className="text-[#1aa6b8] underline"
                >
                  Unsubscribe
                </a>
              </Text> */}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WaitlistEmail;
