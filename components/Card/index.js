import Image from "next/image";
import cn from "classnames";
import styles from "./Card.module.scss";

const Card = ({ appearance, children, ...props }) => {
  const { post } = props;
  return (
    <div
      className={cn(
        styles.base,
        appearance === "left" ? styles.left : undefined,
        appearance === "right" ? styles.right : undefined
      )}
    >
      {appearance === "left" ? (
        <div>
          <div>
            <div className="image-wrapper">

            <Image src={post.picture.large} width={30} height={30}  className="card-image" />
            </div>
            <ul>
              <li>{post.user_name}</li>
              <li>{post.like}</li>
            </ul>
          </div>
          <p>{post.title}</p>
          <p>{post.post}</p>
          
        </div>
      ) : appearance === "right" ? (
        <div>{children}</div>
      ) : (
        <div>{children}</div>
      )}
    </div>

  );
};

export default Card;
