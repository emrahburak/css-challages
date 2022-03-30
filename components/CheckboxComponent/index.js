import Image from 'next/image';
import cn from "classnames";

import styles from "./CheckboxComponent.module.scss";

// import rocket from '../../styles/image/icon-rocket.png';
// import name from '../../styles/image/icon-popular.png';

const CheckboxComponent = ({ appearance, children, ...props }) => {

  const {checkboxItems} = props
  console.log(checkboxItems);
  return (
    <>
      <div
        className={cn(
          "base",
          appearance === "right-checkbox"
            ? styles.checkboxRight
            : styles.checkboxBase
        )}
      >
        <label className="checkbox">
          <input type="checkbox" />
          <span>

            {/* <Image src={`${pro}`} width={30} height={30} /> */}
          </span>
        </label>
        <label className="checkbox">
          <input type="checkbox" />
          <span></span>
        </label>
        <label className="checkbox">
          <input type="checkbox" />
          <span></span>
        </label>
      </div>

      <style jsx>{`

        .base .checkbox span {
          width: 20px;
          height: 20px;
          border: 1px solid #ddd;
        }



          



        `}</style>
    </>
  );
};

export default CheckboxComponent;
