import React, { useEffect, useMemo, useState } from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import mywork_data from "../assets/mywork_data";
import arrow_icon from "../assets/arrow_icon.svg";

const MyWork = () => {
    const sortedWorkList = useMemo(
        () => [...mywork_data].sort((a, b) => b.w_no - a.w_no),
        []
    );

    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const openViewer = (index) => {
        setActiveIndex(index);
        setIsOpen(true);
    };

    const closeViewer = () => setIsOpen(false);

    const goNext = () =>
        setActiveIndex((i) => (i + 1) % sortedWorkList.length);

    const goPrev = () =>
        setActiveIndex((i) => (i - 1 + sortedWorkList.length) % sortedWorkList.length);

    // Keyboard controls: ESC close, arrows navigate
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") closeViewer();
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };

        window.addEventListener("keydown", onKeyDown);
        // prevent background scrolling while modal open
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, sortedWorkList.length]);

    const activeWork = sortedWorkList[activeIndex];

    return (
        <div
            id="work"
            className="flex flex-col items-center justify-center gap-12 md:gap-20 my-12 md:my-20 mx-16 md:mx-44"
        >
            <div className="section-heading">
                <h1>My latest work</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="mywork-container">
                {sortedWorkList.map((work, index) => (
                    <button
                        key={work.w_no}
                        type="button"
                        onClick={() => openViewer(index)}
                        className="cursor-pointer"
                        aria-label={`Open ${work.w_name}`}
                    >
                        <img src={work.w_img} alt={work.w_name} />
                    </button>
                ))}
            </div>

            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>

            {/* Fullscreen Viewer */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                    onClick={closeViewer} // click background closes
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="relative w-full max-w-6xl"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking image area
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={closeViewer}
                            className="absolute -top-12 right-0 text-white text-3xl leading-none px-3 py-1"
                            aria-label="Close"
                        >
                            ×
                        </button>

                        {/* Image */}
                        <img
                            src={activeWork.w_img}
                            alt={activeWork.w_name}
                            className="w-full max-h-[80vh] object-contain rounded"
                        />

                        {/* Caption */}
                        <p className="mt-3 text-center text-white/90">{activeWork.w_name}</p>

                        {/* Prev / Next */}
                        <button
                            type="button"
                            onClick={goPrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-4xl px-4 py-2"
                            aria-label="Previous"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            onClick={goNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-4xl px-4 py-2"
                            aria-label="Next"
                        >
                            ›
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyWork;
