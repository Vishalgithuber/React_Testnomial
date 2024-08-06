import React, { useState } from 'react';
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testnomial = ({ reviews }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    function leftShiftHandler() {
        setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
    }

    function rightShiftHandler() {
        setCurrentIndex((currentIndex + 1) % reviews.length);
    }

    function surpriseHandler() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * reviews.length);
        } while (randomIndex === currentIndex);
        setCurrentIndex(randomIndex);
    }

    return (
        <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
        mt-10 p-10 transition-all duration-200 hover:shadow-lg rounded-md
        '>
            {/* Making the card for testimonial */}
            <Card review={reviews[currentIndex]} />
            <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto'>
                <button
                    className='cursor-pointer hover:text-violet-500'
                    onClick={leftShiftHandler}
                >
                    <FiChevronLeft />
                </button>
                <button
                    className='cursor-pointer hover:text-violet-500'
                    onClick={rightShiftHandler}
                >
                    <FiChevronRight />
                </button>
            </div>

            <div className='mt-6'> 
                <button
                    className='bg-violet-400 hover:bg-violet-500 transition-all
                    duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'
                    onClick={surpriseHandler}
                >
                    Surprise Me
                </button>
            </div>
        </div>
    );
};

export default Testnomial;
