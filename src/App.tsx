import type { Component } from "solid-js";
import cyanLogo from "./assets/cyan.svg";
import cyanWhiteLogo from "./assets/cyan4s.svg";
import blueskyLogo from "./assets/bluesky.svg";
import githubLogo from "./assets/github.svg";


const App: Component = () => {
  return (
    <>
      <main class="grid min-h-dvh min-w-dvw bg-[url(/src/assets/bg.avif)] bg-cover bg-center">
        <div class=" bg-white/80 backdrop-blur-sm flex max-w-120 flex-col md:flex-row md:max-w-200 rounded-xl p-4 md:p-6 m-4 gap-10 md:gap-8 h-fit place-self-center">
          <div class="md:flex-1 flex flex-col justify-items-end">
            <div class="flex flex-col items-center">
              <div class="w-48 h-48 bg-ourcyan-500 rounded-full mb-4 grid place-content-center">
                <img
                  src={cyanWhiteLogo}
                  alt="CYAN4S' Logo"
                  class="w-24 h-24"
                />
              </div>
            </div>
            <h1 class="font-display text-4xl font-extrabold text-ourcyan-500 mb-4">
              CYAN4S
            </h1>
            <p class="text-gray-800 font-bold mb-2">Inho Son · he/him</p>
            <p class="text-gray-800 mb-1">
              The game developer with lots of curiosity.
            </p>
            <p class="text-gray-800 mb-1">
              Works mainly as a game programmer, aiming to be an all-rounder.
            </p>
            <p class="text-gray-800 mb-1">
              Spends free time playing rhythm games, drawing characters, and
              producing EDM.
            </p>
            <p class="text-gray-800 mb-1">Giant balloon enthusiast.</p>
          </div>
          <div class="md:flex-1 flex flex-col">
            <section class="grow-1 flex flex-col">
              <h2 class="text-sm font-display text-gray-400 font-extrabold pb-4">
                LINKS
              </h2>
              <div class="flex gap-2 mb-4">
                <a
                  href="https://cyan4s.com"
                  class="flex-1 flex items-center gap-3 text-gray-500 hover:text-[#26BFB3]"
                >
                  <img
                    src={cyanLogo}
                    alt="CYAN4S' Logo"
                    class="w-8"
                  />
                  <span class="text-xl">Homepage</span>
                </a>
              </div>
              <div class="flex gap-2 mb-4">
                <a
                  href="https://bsky.app/profile/cyan4s.com"
                  class="flex-1 flex items-center gap-3 text-gray-500 hover:text-[#1185FE]"
                >
                  <img
                    src={blueskyLogo}
                    alt="Bluesky"
                    class="w-8"
                  />
                  <span class="text-xl">Bluesky</span>
                </a>
                <a
                  href="https://github.com/CYAN4S"
                  class="flex-1 flex items-center gap-3 text-gray-500 hover:text-[#000000]"
                >
                  <img src={githubLogo} alt="GitHub" class="w-8" />
                  <span class="text-xl">GitHub</span>
                </a>
              </div>
              <div class="text-gray-500 text-sm font-bold pb-6">
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
            </section>
            <section class="flex flex-col">
              <h2 class="text-sm font-display text-gray-400 font-extrabold pb-4">
                SHOWCASE
              </h2>
              <div class="h-32 mb-2 rounded-xl bg-[url(/src/assets/rl.svg)] bg-cover bg-center"></div>
              <h3 class="text-xl mb-1 font-semibold text-gray-700">
                RHYACTION LIVE
              </h3>
              <p class="mb-2">
                The open-source rhythm game made with Unity.
              </p>
              <a href="https://github.com/CYAN4S/rhyaction-live" class="text-sm self-end w-fit font-bold text-ourcyan-700">
                LEARN MORE →
              </a>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
