import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
// import "./styles.css";

const Comment = ({ element }) => {
    const { image, name, service_taken, comments, rating } = element;
    console.log(element);
    return (
        <div className='bg-slate-400 p-10'>
            <Splide
                options={{
                    type: "loop",
                    gap: "10px",
                    drag: "free",
                    arrows: false,
                    pagination: false,
                    perPage: 1,
                    autoScroll: {
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        rewind: false,
                        speed: 1
                    }
                }}
                extensions={{ AutoScroll }}
            >
                <SplideSlide>
                    <div className=''>
                        <div> <p>{comments}</p></div>
                        <div>
                            <div className='flex space-x-5'>
                                <img className='w-12 h-12' src={image} alt="" />
                                <div>
                                    <h1>{name}</h1>
                                    <p>{service_taken}</p>
                                    <p>{rating}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default Comment;




// export default function App() {
//   return (
//     <Splide
//       options={{
//         type: "loop",
//         gap: "10px",
//         drag: "free",
//         arrows: false,
//         pagination: false,
//         perPage: 3,
//         autoScroll: {
//           pauseOnHover: false,
//           pauseOnFocus: false,
//           rewind: false,
//           speed: 1
//         }
//       }}
//       extensions={{ AutoScroll }}
//     >
//       <SplideSlide>
//         <img src="https://via.placeholder.com/150" alt="Image 1" />
//       </SplideSlide>
//       <SplideSlide>
//         <img src="https://via.placeholder.com/150" alt="Image 2" />
//       </SplideSlide>
//       <SplideSlide>
//         <img src="https://via.placeholder.com/150" alt="Image 2" />
//       </SplideSlide>
//       <SplideSlide>
//         <img src="https://via.placeholder.com/150" alt="Image 2" />
//       </SplideSlide>
//       <SplideSlide>
//         <img src="https://via.placeholder.com/150" alt="Image 2" />
//       </SplideSlide>
//       <SplideSlide>
//         <img src="https://via.placeholder.com/150" alt="Image 2" />
//       </SplideSlide>
//     </Splide>
//   );
// }
