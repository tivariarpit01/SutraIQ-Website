// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { motion } from "framer-motion";
// import { Card } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Star } from "lucide-react";

// type Testimonial = {
//   name: string;
//   title: string;
//   quote: string;
//   avatar: string;
// };



// export default function TestimonialSwiper({
//   testimonials,
// }: {
//   testimonials: Testimonial[];
// }) {
//   return (
//     <Swiper
//       modules={[Autoplay, Navigation, Pagination]}
//       autoplay={{
//         delay: 4000,
//         disableOnInteraction: false,
//       }}
//       navigation
//       pagination={{ clickable: true }}
//       loop
//       spaceBetween={30}
//       slidesPerView={1}
//       breakpoints={{
//         1024: {
//           slidesPerView: 2,
//         },
//       }}
//       className="pb-12"
//     >
//       {testimonials.map((testimonial) => (
//         <SwiperSlide key={testimonial.name}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Card className="p-6 h-full flex flex-col justify-between hover:shadow-xl transition-all duration-300">
//               <div>
//                 <div className="flex text-yellow-400 mb-3">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="h-4 w-4 fill-current" />
//                   ))}
//                 </div>

//                 <blockquote className="text-muted-foreground italic text-sm">
//                   “{testimonial.quote}”
//                 </blockquote>
//               </div>

//               <div className="flex items-center mt-6">
//                 <Avatar>
//                   <AvatarImage
//                     src={testimonial.avatar}
//                     alt={testimonial.name}
//                   />
//                   <AvatarFallback>
//                     {testimonial.name.charAt(0)}
//                   </AvatarFallback>
//                 </Avatar>

//                 <div className="ml-4">
//                   <p className="font-semibold">{testimonial.name}</p>
//                   <p className="text-xs text-muted-foreground">
//                     {testimonial.title}
//                   </p>
//                 </div>
//               </div>
//             </Card>
//           </motion.div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  title: string;
  quote: string;
  avatar: string;
};

export default function TestimonialSwiper({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      className="max-w-5xl mx-auto pb-16"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.name}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
           <Card
  className="
    p-12 md:p-16
    min-h-[320px] md:min-h-[380px]
    rounded-3xl
    bg-card/80 backdrop-blur-xl
    border border-yellow-400
    shadow-[0_20px_60px_rgba(0,0,0,0.35)]
  "
>
  <div className="flex flex-col md:flex-row gap-10 items-start h-full ">

                
                {/* LEFT: Avatar */}
                <div className="flex-shrink-0">
                  <Avatar
  className="
    h-32 w-32 md:h-36 md:w-36
    border-4 border-primary/50
    shadow-[0_0_40px_rgba(59,130,246,0.35)]
  "
>

                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="text-2xl">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* RIGHT: Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {testimonial.title}
                  </p>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                    “{testimonial.quote}”
                  </p>

                  {/* ⭐ Stars BELOW text */}
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
