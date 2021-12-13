import React from 'react'
import { Chrono } from "react-chrono";

export default function Timeline() {

    const items = [
        {
            title: "V 1.9",
            cardTitle: "Double factor authentication update",
            // cardSubtitle:
            //     "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
            cardDetailedText: `Added double-factor identification for user access on a new device.`
        },
        {
            title: "V 1.10",
            cardTitle: "Double factor authentication update",
            // cardSubtitle:
            //     "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
            cardDetailedText: `Added double-factor identification for user access on a new device.`
        },
        {
            title: "V 1.11",
            cardTitle: "Double factor authentication update",
            // cardSubtitle:
            //     "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
            cardDetailedText: `Added double-factor identification for user access on a new device.`
        },
        {
            title: "V 1.12",
            cardTitle: "Double factor authentication update",
            // cardSubtitle:
            //     "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
            cardDetailedText: `Added double-factor identification for user access on a new device.`
        },
        {
            title: "V 1.13",
            cardTitle: "Double factor authentication update",
            // cardSubtitle:
            //     "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
            cardDetailedText: `Added double-factor identification for user access on a new device.`
        },       
        {
            title: "V 1.14",
            cardTitle: "Double factor authentication update",
            // cardSubtitle:
            //     "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
            cardDetailedText: `Added double-factor identification for user access on a new device.`
        }
    ];


    return (
        <div className="container my-3 my-md-5">
            <div className="row">
                <div className="col-12 col-md-9 mx-auto">
                    <div className='timeline-carousel'>
                        <Chrono items={items} mode="VERTICAL_ALTERNATING" scrollable={false}>
                        </Chrono>
                    </div>
                </div>
            </div>
        </div>
    )
}
