import React from 'react'
import Banner from '../components/Banner'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Navigation from '../components/Navigation';
import Mission from '../components/Mission';
import Carousel from '../components/Carousel';
import Timeline from '../components/Timeline';

export default function Home() {
    return (
        <>
        <Navigation />
            <div className="home-banner banner-background">
                <Carousel />
                <Canvas>
                    <Suspense fallback={'.....loading'}>
                        <Banner />
                    </Suspense>
                </Canvas>
            </div>
            <Mission />
            <Timeline />
        </>
    )
}
