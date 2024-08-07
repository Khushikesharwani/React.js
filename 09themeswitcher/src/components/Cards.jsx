import React from 'react';

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img 
                    className="p-8 rounded-t-lg" 
                    src="https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-beautiful-moon-background-on-moon-night-image_2376610.jpg" 
                    alt="product_image1" 
                />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    {/* Removed SVG icons */}
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                
                </div>
            </div>
    );
}
