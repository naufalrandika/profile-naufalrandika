'use client';

import React from 'react';
import Slider from 'react-slick';
import { FadeUpStagger, FadeUpDiv } from '@/components/animation';

const languages = [
    { name: 'JavaScript', img: '/programLangs/JavaScript.svg' },
    { name: 'Python', img: '/programLangs/Python.svg' },
    { name: 'PHP', img: '/programLangs/PHP.svg' },
    { name: 'TypeScript', img: '/programLangs/TypeScript.svg' },
    // Add more languages here
];

export default function ProgLanguages() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // 5 seconds
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <main>
            <FadeUpStagger>
                <FadeUpDiv>
                    <h2 style={{ textAlign: 'center' }}>Programming Languages</h2>
                    <Slider {...settings}>
                        {languages.map((language, index) => (
                            <div key={index} style={{ textAlign: 'center', padding: '10px' }}>
                                <img
                                    src={language.img}
                                    alt={language.name}
                                    style={{ transform: 'scale(0.25)', transition: 'transform 0.3s ease' }} // Adjusted scale for better visibility
                                />
                            </div>
                        ))}
                    </Slider>
                </FadeUpDiv>
            </FadeUpStagger>
        </main>
    );
}
