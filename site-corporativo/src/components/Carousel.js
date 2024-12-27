import { Carousel, ChevronLeftIcon, ChevronRightIcon, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";

//customização
const theme = {
    carousel: {
        defaultProps: {
            prevArrow: ({ loop, handlePrev, firstIndex }) => {
                return (
                    <button
                        onClick={handlePrev}
                        disabled={!loop && firstIndex}
                        className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
                    >
                        <ChevronLeftIcon strokeWidth={3} className="-ml-1 h-7 w-7" />
                    </button>
                );
            },
            nextArrow: ({ loop, handleNext, lastIndex }) => (
                <button
                    onClick={handleNext}
                    disabled={!loop && lastIndex}
                    className="!absolute top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
                >
                    <ChevronRightIcon strokeWidth={3} className="ml-1 h-7 w-7" />
                </button>
            ),
            navigation: ({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-10 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${activeIndex === i ? "bg-aqua" : "bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            ),
            autoplay: false,
            autoplayDelay: 5000,
            transition: {
                type: "tween",
                duration: 0.5,
            },
            loop: false,
            className: "",
        },
        styles: {
            base: {
                carousel: {
                    position: "relative",
                    width: "w-full",
                    height: "h-full",
                    overflowX: "overflow-x-hidden",
                    display: "flex",
                },
                slide: {
                    width: "w-full",
                    height: "h-full",
                    display: "inline-block",
                    flex: "flex-none",
                },
            },
        },
    },
};

// //componente
// const CustomCarousel = ({ images }) => {

//     return (

//         <Carousel
//             className="overflow-hidden h-auto 2xl:h-[800px]"
//             autoplay
//             autoplayDelay={1000000}
//             loop
//             transition={{ duration: 2 }}
//             navigation={theme.carousel.defaultProps.navigation}>

//             {images.map((src, index) => (
//                 // <img src={src} key={index} alt={`Slide ${index + 1}`} />
//                 <div key={index}>

//                     <Image src={`/${src.img}`} key={index} height={1903} width={1903} alt={`Slide ${index + 1}`} className="object-cover"/>

//                     <div className="absolute bottom-10 right-20 z-50" key={index} >
//                         <Typography variant="h1" className="text-white drop-shadow-lg" key={index} >{src.title}</Typography>
//                     </div>

//                 </div>

//             ))}

//         </Carousel>
//     )

// }

// export default CustomCarousel;


export default function CustomCarousel({ images }) {
    return (
        <Carousel className="overflow-hidden h-auto 2xl:h-[800px]"
            autoplay
            autoplayDelay={7000}
            loop
            transition={{ duration: 2 }}
            navigation={theme.carousel.defaultProps.navigation}>


            {images.map((src, index) => (
                <div key={index} className="relative h-full w-full">
                    <Image
                        height={1903}
                        width={1903}
                        src={`/${src.img}`}
                        alt="image 1"
                    />

                    <div className="absolute inset-0 grid h-full w-full bg-black/40">
                        <div className="absolute -bottom-2 right-5 lg:bottom-2 lg:right-8 md:bottom-0 md:right-6">

                            <h1 className="mb-4 text-white font-bold">{src.title}</h1>

                            {/* <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                It is not so much for its beauty that the forest makes a claim
                                upon men&apos;s hearts, as for that subtle something, that quality
                                of air that emanation from old trees, that so wonderfully changes
                                and renews a weary spirit.
                            </Typography> */}
                            {/* <div className="flex justify-center gap-2">
                                <Button size="lg" color="white">
                                    Explore
                                </Button>
                                <Button size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div> */}
                        </div>
                    </div>
                </div>


            ))}

        </Carousel>
    )
}