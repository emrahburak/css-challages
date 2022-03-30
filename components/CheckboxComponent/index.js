import Image from "next/image";
import { useState, useEffect } from "react";

// import cn from "classnames";

// import styles from "./CheckboxComponent.module.scss";

// import star from "../../styles/image/sidebar-icon/icon-star.png";
// import person from "../../styles/image/sidebar-icon/icon-person.png";
// import hearth from "../../styles/image/sidebar-icon/icon-hearth.png";

// import rocket from "../../styles/image/icon-rocket.png";
// import popular from "../../styles/image/icon-popular.png";
// import expireDate from "../../styles/image/icon-expire-date.png";

// const CheckboxComponent = ({ appearance, children, ...props }) => {
//   const [icon, setIcon] = useState({});
//   const baseComponent = {rocket, popular, expireDate};
//   const leftComponent = {star, hearth, person};

//   console.log(icon);
//   useEffect(() => {
//     !appearance
//       ? setIcon((prev) => {
//           {...baseComponent}
//         })
//       : setIcon((prev) => {
//           [...leftComponent];
//         });
//   }, []);

//   return (
//     <>
//       <div
//         className={cn(
//           "base",
//           !appearance ? styles.checkboxRight : styles.checkboxBase
//         )}
//       >
//         <label className="checkbox">
//           <input type="checkbox" />
//           <span>{/* <Image src={star} width={20} height={20} /> */}</span>
//         </label>
//         <label className="checkbox">
//           <input type="checkbox" />
//           <span></span>
//         </label>
//         <label className="checkbox">
//           <input type="checkbox" />
//           <span></span>
//         </label>
//       </div>

//       <style jsx>{`
//         .base .checkbox span {
//           width: 20px;
//           height: 20px;
//           border: 1px solid #ddd;
//         }
//       `}</style>
//     </>
//   );
// };

// export default CheckboxComponent;
