// 'use client';

// import { useIntersectionObserver } from '../hooks/useIntersectionObserver'; // Adjust the import path as necessary
// import Hero from "@/app/hero";
// import ProgLanguages from "@/app/progLanguages";
// import Projects from "@/app/projects";

// interface ClientOnlyComponentProps {
    
// }

// const ClientOnlyComponent: React.FC<ClientOnlyComponentProps> = () => {
//   const [heroRef, isHeroVisible] = useIntersectionObserver({
//     threshold: 0.1, // Adjust threshold as needed
//   });

//   const [progLanguagesRef, isProgLanguagesVisible] = useIntersectionObserver({
//     threshold: 0.1, // Adjust threshold as needed
//   });

//   const [projectsRef, isProjectsVisible] = useIntersectionObserver({
//     threshold: 0.1, // Adjust threshold as needed
//   });

//   return (
//     <div className='container space-y-6 py-8 lg:my-10 mt-16'>
//       <div ref={heroRef}>
//         <Hero isVisible={isHeroVisible} />
//       </div>
//       <div className="h-12"></div>
//       <div ref={progLanguagesRef}>
//         <ProgLanguages isVisible={isProgLanguagesVisible} />
//       </div>
//       <div className="h-12"></div>
//       <div ref={projectsRef}>
//         <Projects isVisible={isProjectsVisible} />
//       </div>
//     </div>
//   );
// }

// export default ClientOnlyComponent;
