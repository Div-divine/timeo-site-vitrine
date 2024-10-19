"use client";
import { useState, useEffect } from 'react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { ImageField, KeyTextField, LinkField } from '@prismicio/client';
import { Cormorant, Proza_Libre } from 'next/font/google';
import ButtonLink from '@/components/PageBtnLink';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const cormorant = Cormorant({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400", "700"],
    variable: '--font-cormorant',
})

const proza_libre = Proza_Libre({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400", "700"],
    variable: '--font-proza_libre'
})

type CarouselProps = {
    content: Array<{
        image_slider: ImageField;
    }>;
    button_catalogue: Array<{
        lien_vers_la_page_catalogue: LinkField;
        placeholder_button: KeyTextField
    }>;
};


export default function CustomCarousel({ content, button_catalogue }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [itemsPerSlide, setItemsPerSlide] = useState(1);
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        if (content) {
            // Function to determine items per slide based on screen width
            const updateItemsPerSlide = () => {
                if (window.innerWidth >= 1024) { // lg
                    setItemsPerSlide(3);
                    setTotalItems(content.length)
                } else if (window.innerWidth >= 768) { // md
                    setItemsPerSlide(2);
                    setTotalItems(content.length)
                } else { // sm
                    setItemsPerSlide(1);
                    setTotalItems(content.length)
                }
            };

            updateItemsPerSlide(); // Initial check
            window.addEventListener('resize', updateItemsPerSlide);

            return () => window.removeEventListener('resize', updateItemsPerSlide);
        }
    }, [content]);

    const slidesCount = Math.ceil(totalItems / itemsPerSlide);

    // Automatically move to the next slide every 1 minute
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesCount);
        }, 60000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [slidesCount]);

    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % slidesCount);
    };

    const goToPrevious = () => {
        setCurrentIndex((currentIndex - 1 + slidesCount) % slidesCount);
    };

    // Slice the content to show only three items per slide
    const slides = [];
    for (let i = 0; i < totalItems; i += itemsPerSlide) {
        slides.push(content.slice(i, i + itemsPerSlide));
    }

    if (slides.length === 0) {
        return <p className="text-center text-gray-800">No content available</p>;
    }

    return (
        <div className='h-[70vh] sm:h-[80vh]'>
            <div className="relative w-full mx-auto overflow-auto h-[75%]">
                <div className="relative w-full flex left-0">
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            className={`absolute w-full flex justify-evenly transition-transform duration-1000 ease-in-out ${slideIndex === currentIndex ? 'translate-x-0' : 'translate-x-full'
                                }`}
                            style={{ display: slideIndex === currentIndex ? 'flex' : 'none' }}
                        >
                            {slide.map((item, itemIndex) => (
                                <div key={itemIndex} className="w-[80%] sm:w-[50%] md:w-[45%] lg:w-[22%] p-4 bg-white rounded-2xl
                            shadow-footerMenuShadow">
                                    <PrismicNextImage field={item.image_slider} className="w-full h-auto object-cover rounded-2xl 
                                 border border-gray-400" quality={100} />
                                </div>
                            ))}
                        </div>
                    ))}
                    {/* Navigation buttons */}
                    <button
                        onClick={goToPrevious}
                        className="flex lg:hidden absolute left-0 top-[25vh] transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded hover:bg-gray-800 transition"
                    >
                        <BsChevronDoubleLeft />
                    </button>
                    <button
                        onClick={goToNext}
                        className="flex lg:hidden absolute right-0 top-[25vh] transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded hover:bg-gray-800 transition"
                    >
                        <BsChevronDoubleRight />
                    </button>
                </div>
            </div>
            <div className={`${cormorant.className} w-fit m-auto font-semibold shadow-2xl`}>
                {button_catalogue && button_catalogue.map((item, index) => {
                    if (item.lien_vers_la_page_catalogue) {
                        return (
                            <div key={index} className='w-fit'>
                            <ButtonLink
                                field={item.lien_vers_la_page_catalogue}
                                className="bg-[#356A78]"
                                key={index}
                            >
                                {item.placeholder_button}
                            </ButtonLink>
                            </div>
                        );
                    } else {
                        return null; // or return some fallback UI if needed
                    }
                })}

            </div>
        </div>
    );
}
