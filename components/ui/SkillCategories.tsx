// import { Cpu, Code, Layers } from "lucide-react";
// import { skillCategories } from "@/lib/skillCategories";

// const icons = {
//   code: <Code className="w-6 h-6 text-white" />,
//   cpu: <Cpu className="w-6 h-6 text-white" />,
//   layers: <Layers className="w-6 h-6 text-white" />,
// };

// export default function SkillCategories() {
//   return (
//     <div>
//       {skillCategories.map((category) => (
//         <div key={category.title} className="mb-6">
//           <div className="flex items-center gap-2">
//             {icons[category.icon]} {/* Dynamically insert icon */}
//             <h2 className="text-xl font-bold">{category.title}</h2>
//           </div>
//           <p className="text-gray-400">{category.description}</p>
//           <ul className="mt-2 list-disc pl-5">
//             {category.skills.map((skill) => (
//               <li key={skill}>{skill}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }
