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
  const base_width = "190";
  const base_height = "51";
  const width = "20";
  const height = "20";

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
            <div className={styles.checkboxRight}>
              <label className="checkbox">
                <input type="checkbox" />
                <span>
                  {/* <Image src={star} width={width} height={height} /> */}
                </span>
              </label>
              <label className="checkbox">
                <input type="checkbox" />
                <span>
                  {/* <Image src={person} width={width} height={height} /> */}
                </span>
              </label>
              <label className="checkbox">
                <input type="checkbox" />
                <span>
                  {/* <Image src={hearth} width={width} height={height} /> */}
                </span>
              </label>
            </div>
          </>
        ) : (
          <>
            <div className={styles.checkboxBase}>
              <label className="checkbox">
                <input type="checkbox" />
                <span>
                  {/* <Image src={rocket} width={base_width} height={base_height} /> */}
                </span>
              </label>
              <label className="checkbox">
                <input type="checkbox" />
                <span>
                  {/* <Image
                    src={popular}
                    width={base_width}
                    height={base_height}
                  /> */}
                </span>
              </label>
              <label className="checkbox">
                <input type="checkbox" />
                <span>
                  {/* <Image
                    src={expireDate}
                    width={base_width}
                    height={base_height}
                  /> */}
                </span>
              </label>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .checkbox {
          position:relative;
        }

        .checkbox input {
          position: absolute;
          left:-9999px;
        }
        


        }
      `}</style>
    </>
  );
};

export default CheckboxComponent;
