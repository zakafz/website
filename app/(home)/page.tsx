import Container from "@/components/container";
import WebLink from "@/components/web-link";
import Navbar from "@/components/navbar";
import Spacer from "@/components/spacer";
import StackCard from "@/components/stack-card";
import Text from "@/components/text";
import WorkCard from "@/components/work-card";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Spacer size="md" />
      <Text
        title="Who I am?"
        description={`A ${
          new Date().getFullYear() -
          2007 -
          (new Date().getMonth() < 8 ||
          (new Date().getMonth() === 8 && new Date().getDate() < 13)
            ? 1
            : 0)
        } years old design technologist and software developer based in Montreal, specializing in minimalist, UX-focused interfaces.`}
      />
      <Spacer size="md" />
      <Text
        title="Work"
        description="I mainly work on open-source projects, and I'm currently working on a few more projects that I will be releasing soon."
      />
      <Spacer size="xs" />
      <WorkCard
        title="Measurely"
        role="Co-owner & Design engineer"
        href="https://measurely.dev"
      />
      <Spacer size="xs" />
      <WorkCard
        title="Lightbox-kit"
        role="Developer"
        href="https://measurely.dev"
      />
      <Spacer size="md" />
      <Text
        title="Stack"
        description="My stack consists of a variety of tools and technologies that I use to build my projects."
      />
      <Spacer size="xs" />
      <div className="grid grid-cols-6 max-sm:grid-cols-3 max gap-5">
        <StackCard
          href="https://www.nextjs.org/"
          icon={
            <svg viewBox="0 0 128 128" className="invert">
              <path d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64 64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64 64 64 0 0 0 64 0Zm17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92-.111.096a64 64 0 0 0 .111-.096z"></path>
            </svg>
          }
        />
        <StackCard
          href="https://www.astro.build/"
          icon={
            <svg viewBox="0 0 128 128">
              <defs>
                <linearGradient
                  id="a"
                  x1="882.997"
                  x2="638.955"
                  y1="27.113"
                  y2="866.902"
                  gradientTransform="scale(.1)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff"></stop>
                  <stop offset="1" stopColor="#fff"></stop>
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="1001.68"
                  x2="790.326"
                  y1="652.45"
                  y2="1094.91"
                  gradientTransform="scale(.1)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#ff1639"></stop>
                  <stop offset="1" stopColor="#ff1639" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#a)"
                d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm0 0"
              ></path>
              <path
                fill="#ff5d01"
                d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137-10.07 0-18.515-3.137-20.754-7.356-.8 2.418-.98 5.184-.98 6.954 0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938 2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41 15.55 15.55 0 0 0-.734-4.735Zm0 0"
              ></path>
              <path
                fill="url(#b)"
                d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137-10.07 0-18.515-3.137-20.754-7.356-.8 2.418-.98 5.184-.98 6.954 0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938 2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41 15.55 15.55 0 0 0-.734-4.735Zm0 0"
              ></path>
            </svg>
          }
        />
        <StackCard
          href="https://www.tailwindcss.com/"
          icon={
            <svg viewBox="0 0 128 128">
              <path
                d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                fill="#38bdf8"
              ></path>
            </svg>
          }
        />
        <StackCard
          href="https://www.typescriptlang.org/"
          icon={
            <svg viewBox="0 0 128 128" className="rounded-md">
              <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
              <path
                fill="#007acc"
                d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
              ></path>
            </svg>
          }
        />
        <StackCard
          href="https://www.figma.com/"
          icon={
            <svg viewBox="0 0 128 128">
              <path
                fill="#0acf83"
                d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
              ></path>
              <path
                fill="#a259ff"
                d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
              ></path>
              <path
                fill="#f24e1e"
                d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
              ></path>
              <path
                fill="#ff7262"
                d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
              ></path>
              <path
                fill="#1abcfe"
                d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
              ></path>
            </svg>
          }
        />
        <StackCard
          href="https://www.github.com/"
          icon={
            <svg viewBox="0 0 128 128">
              <g fill="#fff">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                ></path>
                <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
              </g>
            </svg>
          }
        />
      </div>
      <Spacer size="md" />
      <Text
        title="Contact"
        description="Feel free to send me an email. I'm always open to new projects."
      />
      <Spacer size="xs" />
      <WebLink title="Here's my email" href="mailto:hello@zakary.dev" />
    </Container>
  );
}

// <ThemeSwitcher
//   className="w-fit"
//   value={
//     theme === "light"
//       ? "light"
//       : theme === "dark"
//       ? "dark"
//       : theme === "system"
//       ? "system"
//       : undefined
//   }
//   onChange={setTheme}
// />
