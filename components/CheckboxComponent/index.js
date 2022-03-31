import Image from "next/image";
import { useState, useEffect } from "react";

import cn from "classnames";

import styles from "./CheckboxComponent.module.scss";

import star from "../../styles/image/sidebar-icon/icon-star.png";
import person from "../../styles/image/sidebar-icon/icon-person.png";
import hearth from "../../styles/image/sidebar-icon/icon-hearth.png";

import rocket from "../../styles/image/icon-rocket.png";
import popular from "../../styles/image/icon-popular.png";
import expireDate from "../../styles/image/icon-expire-date.png";

const initialState = {
  iconOne: "",
  iconTwo: "",
  iconThree: "",
};

const CheckboxComponent = ({ appearance, children, ...props }) => {
  //   const [icon, setIcon] = useState({ ...initialState });
  //   const [iconStyle, setIconStyle] = useState({ width: 0, height: 0 });
  //   const baseComponent = {
  //     iconOne: rocket,
  //     iconTwo: popular,
  //     iconThree: expireDate,
  //   };
  //   const leftComponent = { iconOne: star, iconTwo: hearth, iconThree: person };

  //   useEffect(() => {
  //     appearance === false
  //       ? (
  //         //   setIcon({...initialState}),
  //           setIcon({ ...leftComponent }),
  //         setIconStyle({ width: 20, height: 20 }),
  //         console.log("Left: ", icon.iconOne))
  //       : (
  //         //   setIcon({...initialState}),
  //           setIcon({ ...baseComponent }),
  //         setIconStyle({ width: 50, height: 30 }),
  //         console.log("Base: ", icon.iconOne));
  //   }, []);

  return (
    <>
      <div
        className={cn(
          "base",
          appearance === false ? styles.checkboxRight : styles.checkboxBase
        )}
      >
        {appearance === false ? (
          <>
            <label className="checkbox">
              <input type="checkbox" />
              <span>
                <Image src={star} layout="fill" objectFit="contain" />
              </span>
            </label>
            <label className="checkbox">
              <input type="checkbox" />
              <span>
                <Image src={person} layout="fill" objectFit="cover" />
              </span>
            </label>
            <label className="checkbox">
              <input type="checkbox" />
              <span>
                <Image src={hearth} layout="fill" objectFit="cover" />
              </span>
            </label>
          </>
        ) : (
          <>
            <label className="checkbox">
              <input type="checkbox" />
              <span>
                {/* <Image src={`${icon.iconOne.src}`} width={icon.iconOne.width} height={icon.iconOne.height} /> */}
              </span>
            </label>
            <label className="checkbox">
              <input type="checkbox" />
              <span>
                {/* <Image
              src={`${icon.iconTwo.src}`}
              width={icon.iconTwo.width}
              height={icon.iconTwo.height}
            /> */}
              </span>
            </label>
            <label className="checkbox">
              <input type="checkbox" />
              <span>
                {/* <Image
              src={`${icon.iconThree.src}`}
              width={icon.iconThree.width}
              height={icon.iconThree.height}
            /> */}
              </span>
            </label>
          </>
        )}
      </div>

      <style jsx>{`
          .checkbox span {
              position:relative;
              width:30px;
              height:30px;
          }

        }
      `}</style>
    </>
  );
};

export default CheckboxComponent;
