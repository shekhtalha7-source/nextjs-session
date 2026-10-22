'use client'

import { Button } from "@heroui/react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background radial glow */}
      <div 
        aria-hidden="true" 
        className="absolute -top-40 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl"
      >
        <div 
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-secondary opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Announcement pill */}
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-x-2 rounded-full border border-default-200 bg-default-50/50 px-3 py-1 text-xs text-default-600 backdrop-blur">
              <span>HeroUI v3 is here</span>
              <span className="text-primary font-semibold">Read docs &rarr;</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Build modern interfaces <span className="text-primary">faster</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg leading-8 text-default-500">
            Beautiful, fast, and modern React UI library built with Tailwind CSS
            and React Aria for accessible, composable web applications.
          </p>

          {/* Call to action buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <Button color="primary" size="lg" radius="full">
              Get Started
            </Button>
            <Button variant="bordered" size="lg" radius="full">
              Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}