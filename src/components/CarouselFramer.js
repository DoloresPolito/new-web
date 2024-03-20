// import { motion, useTransform, useViewportScroll } from "framer-motion";
// import { useRef } from "react";
// import styled from "styled-components";

// const Example = () => {
//   return (
//     <StyledContainer>
//       <StyledContentWrapper>
//         <span >
//           Scroll down
//         </span>
//       </StyledContentWrapper>
//       <HorizontalScrollCarousel />
//       <StyledContentWrapper>
//         <span >
//           Scroll up
//         </span>
//       </StyledContentWrapper>
//     </StyledContainer>
//   );
// };

// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useViewportScroll();

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

//   return (
//     <StyledSection ref={targetRef}>
//       <StyledStickyWrapper>
//         <motion.div style={{ x }} className="one">
//           {cards.map((card) => {
//             return <Card card={card} key={card.id} />;
//           })}
//         </motion.div>
//       </StyledStickyWrapper>
//     </StyledSection>
//   );
// };

// const Card = ({ card }) => {
//   return (
//     <StyledCard key={card.id}>
//       <div
//         style={{
//         //   backgroundImage: `url(${card.url})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
      
//       ></div>
//       <div >
//         <p >
//           {card.title}
//         </p>
//       </div>
//     </StyledCard>
//   );
// };

// const StyledContainer = styled.div`
//   background-color: #4b5563;
// `;

// const StyledSection = styled.section`
//   position: relative;
//   height: 300vh;
//   background-color: #2d3748;
// `;

// const StyledCard = styled.div`
//   position: relative;
//   height: 450px;
//   width: 450px;
//   overflow: hidden;
//   background-color: #edf2f7;
// `;

// const StyledStickyWrapper = styled.div`
//   position: sticky;
//   top: 0;
//   display: flex;
//   align-items: center;
//   overflow: hidden;
//   height: 100vh;

// .one{
//     display: flex;
//     gap:4;

// }
// `;

// const StyledContentWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 48px;
// `;

// const cards = [
//   {
//     url: "/imgs/abstract/1.jpg",
//     title: "Title 1",
//     id: 1,
//   },
//   {
//     url: "/imgs/abstract/2.jpg",
//     title: "Title 2",
//     id: 2,
//   },
//   {
//     url: "/imgs/abstract/3.jpg",
//     title: "Title 3",
//     id: 3,
//   },
//   {
//     url: "/imgs/abstract/4.jpg",
//     title: "Title 4",
//     id: 4,
//   },
//   {
//     url: "/imgs/abstract/5.jpg",
//     title: "Title 5",
//     id: 5,
//   },
//   {
//     url: "/imgs/abstract/6.jpg",
//     title: "Title 6",
//     id: 6,
//   },
//   {
//     url: "/imgs/abstract/7.jpg",
//     title: "Title 7",
//     id: 7,
//   },
// ];

// export default Example;