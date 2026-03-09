// import { LucideIcon } from "lucide-react";

// type Alignment = "left" | "center" | "right";

// interface CardProps {
//   title: string;
//   description?: string;
//   icon?: LucideIcon;
//   iconAlign?: Alignment;
//   titleAlign?: Alignment;
//   descriptionAlign?: Alignment;
// }

// export const Card = ({
//   title,
//   description,
//   icon: Icon,
//   iconAlign = "center",
//   titleAlign = "center",
//   descriptionAlign = "center",
// }: CardProps) => {

//   const getAlignmentClass = (align: Alignment) => {
//     switch (align) {
//       case "left":
//         return "text-left";
//       case "right":
//         return "text-right";
//       default:
//         return "text-center";
//     }
//   };

//   const getIconAlignmentClass = (align: Alignment) => {
//     switch (align) {
//       case "left":
//         return "mx-0";
//       case "right":
//         return "ml-auto mr-0";
//       default:
//         return "mx-auto";
//     }
//   };

//   return (
//     <article className="bg-white rounded-2xl border border-secondary-200/80 shadow-sm p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft group h-full flex flex-col">

//       {Icon && (
//         <div
//           className={`w-14 h-14 mb-4 rounded-2xl border border-primary-100 bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-all duration-300 transform group-hover:scale-110 ${getIconAlignmentClass(iconAlign)}`}
//         >
//           <Icon className="w-6 h-6 text-primary-700" />
//         </div>
//       )}

//       <h3
//         className={`text-xl font-bold text-secondary-900 mb-2 ${getAlignmentClass(titleAlign)}`}
//       >
//         {title}
//       </h3>

//       {description && (
//         <p
//           className={`text-secondary-600 text-sm leading-relaxed ${getAlignmentClass(descriptionAlign)}`}
//         >
//           {description}
//         </p>
//       )}
//     </article>
//   );
// };