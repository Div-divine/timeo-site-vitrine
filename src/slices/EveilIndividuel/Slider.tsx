"use client";
import { useState, useEffect } from 'react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { ImageField, KeyTextField, LinkField } from '@prismicio/client';
import { Arima, Amaranth } from 'next/font/google';
import ButtonLink from '@/components/PageBtnLink';

const arima = Arima({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-arima',
})

const amaranth = Amaranth({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400", "700"],
    variable: '--font-amaranth'
})

type CarouselProps = {
    content: Array<{
        image_slider: ImageField;
        description: KeyTextField;
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
                    setTotalItems(content.length / 2)
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
        <div className='h-[85vh] sm:h-[100vh] my-4'>
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
                                <div key={itemIndex} className="w-[100%] sm:w-[70%] md:w-[45%] lg:w-[26%] p-4 bg-white rounded-2xl
                            shadow-footerMenuShadow">
                                    <PrismicNextImage field={item.image_slider} className="w-full h-auto object-cover rounded-2xl 
                                 border border-gray-400" quality={100} />
                                    <p className={`${amaranth.className} max-md:text-balance text-center font-light md:text-lg mt-2 text-gray-800`}>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Navigation buttons */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded hover:bg-gray-800 transition"
                >
                    Prev
                </button>
                <button
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded hover:bg-gray-800 transition"
                >
                    Next
                </button>
            </div>
            <div className={`w-fit m-auto font-semibold shadow-2xl max-[380px]:mt-4 sm:mt-2`}>
                {button_catalogue && button_catalogue.map((item, index) => (
                    <ButtonLink field={item.lien_vers_la_page_catalogue} className={`bg-[#356A78]`} key={index}>
                        {item.placeholder_button}
                    </ButtonLink>
                ))}
            </div>
        </div>
    );
}
