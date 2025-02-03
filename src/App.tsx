import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <>
      <main class="grid min-h-dvh min-w-dvw bg-[url(/src/assets/bg.avif)] bg-cover bg-center">
        <div class=" bg-white flex max-w-120 flex-col md:flex-row md:max-w-200 rounded-xl p-4 m-8 gap-12 md:gap-8 h-fit place-self-center">
          <div class="md:flex-1 flex flex-col justify-items-end">
            <div class="flex flex-col items-center">
              <div class="w-48 h-48 bg-ourcyan-500 rounded-full mb-4 grid place-content-center">
                <img
                  src="src/assets/cyan4s.svg"
                  alt="CYAN4S' Logo"
                  class="w-24 h-24"
                />
              </div>
            </div>
            <h1 class="font-display text-4xl font-extrabold text-ourcyan-500 mb-4">
              CYAN4S
            </h1>
            <p class="text-gray-800 font-bold mb-1">Inho Son · he/him</p>
            <p class="text-gray-800 mb-1">
              The game developer with lots of curiosity.
            </p>
            <p class="text-gray-800 mb-1">
              Works primarily as a game programmer, but aims to become an
              all-rounder in game development.
            </p>
            <p class="text-gray-800 mb-1">
              Spends free time playing rhythm games, drawing characters, and
              producing EDM.
            </p>
            <p class="text-gray-800 mb-4">Enthusiast of giant balloons.</p>
            <div class="justify-self-end flex gap-2 mt-auto mb-2">
              <a href="https://bsky.app/profile/cyan4s.com">
                <img src="src/assets/bluesky.svg" alt="Bluesky" class="w-12" />
              </a>
              <a href="https://github.com/CYAN4S">
                <img src="src/assets/github.svg" alt="GitHub" class="w-12" />
              </a>
            </div>
            <div class="text-gray-500 text-sm font-bold">
              <a href="https://x.com/cyan4s" class="hover:text-[#1DA1F2]">
                X(Twitter)
              </a>{" "}
              ·{" "}
              <a
                href="https://www.pixiv.net/users/15130363"
                class="hover:text-[#0096FA]"
              >
                Pixiv
              </a>{" "}
              ·{" "}
              <a
                href="https://dribbble.com/CYAN4S"
                class="hover:text-[#EA4C89]"
              >
                Dribbble
              </a>{" "}
              ·{" "}
              <a
                href="https://unsplash.com/cyan4s"
                class="hover:text-[#000000]"
              >
                Unsplash
              </a>{" "}
              ·{" "}
              <a
                href="https://www.pexels.com/@cyan4s/"
                class="hover:text-[#000000]"
              >
                Pexels
              </a>{" "}
              ·{" "}
              <a
                href="https://soundcloud.com/cyan4s"
                class="hover:text-[#FF5500]"
              >
                SoundCloud
              </a>{" "}
              ·{" "}
              <a
                href="https://steamcommunity.com/id/cyan4s/"
                class="hover:text-[#00ADEE]"
              >
                Steam
              </a>{" "}
              ·{" "}
              <a
                href="https://www.instagram.com/cyan4s/"
                class="hover:bg-clip-text hover:bg-linear-to-r hover:text-transparent from-[#FF7A00] via-[#FF0169] to-[#D300C5]"
              >
                Instagram
              </a>
            </div>
          </div>
          <div class="md:flex-1">
            <h2 class="text-sm font-display text-gray-400 font-extrabold pb-2">
              SHOWCASE
            </h2>
            <section class="flex flex-col mb-4">
              <div class="h-24 bg-ourcyan-100 mb-2 rounded-xl"></div>
              <h3 class="text-xl mb-1 font-semibold text-gray-700">
                Lorem Ipsum
              </h3>
              <p class="mb-2">
                Fusce ullamcorper diam sit amet enim vulputate pharetra.
              </p>
              <div class="text-sm self-end w-fit font-bold text-ourcyan-700">
                SEE MORE →
              </div>
            </section>
            <h2 class="text-sm font-display text-gray-400 font-extrabold pb-2">
              RECENT BLOG POST
            </h2>
            <section class="flex flex-col">
              <div class="h-24 bg-ourcyan-200 mb-2 rounded-xl"></div>
              <h3 class="text-xl mb-1 font-semibold text-gray-700">
                Lorem Ipsum
              </h3>
              <p class="mb-2">
                Fusce ullamcorper diam sit amet enim vulputate pharetra.
              </p>
              <div class="text-sm self-end w-fit font-bold text-ourcyan-700">
                SEE ALL POSTS →
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
