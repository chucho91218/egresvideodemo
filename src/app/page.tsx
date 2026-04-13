"use client";

import React, { useState } from "react";
import WelcomeScreen from "./components/invitation/welcome-screen";
import { HeroSection } from "./components/invitation/hero-section";
import { StorySection } from "./components/invitation/story-section";
import { CountdownSection } from "./components/invitation/countdown-section";
import { LogisticsSection } from "./components/invitation/logistics-section";
import { DressCodeSection } from "./components/invitation/dress-code-section";
import { GallerySection } from "./components/invitation/gallery-section";
import { QRSection } from "./components/invitation/qr-section";
import { GiftsSection } from "./components/invitation/gifts-section";
import { ConfirmationSection } from "./components/invitation/confirmation-section";
import { InvitationFooter } from "./components/invitation/invitation-footer";
import { MusicPlayer } from "./components/invitation/music-player";

export default function Page() {
  const [startMusic, setStartMusic] = useState(false);

  return (
    <main className="min-h-svh bg-black">
      <WelcomeScreen onEnter={() => setStartMusic(true)} />
      <MusicPlayer autoStart={startMusic} />
      
      <HeroSection />

      <div className="bg-black">
        <StorySection />
        <CountdownSection />
        <LogisticsSection />
        <DressCodeSection />
        <GallerySection />
        <QRSection />
        <GiftsSection />
        <ConfirmationSection />
        <InvitationFooter />
      </div>
    </main>
  );
}