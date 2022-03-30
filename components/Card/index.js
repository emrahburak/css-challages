import Image from "next/image";
import cn from "classnames";
import styles from "./Card.module.scss";

const sentenceReducer = sentence => {
  return sentence.length >= 50 ? `${sentence.slice(0,50)}...` : sentence;
}

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
            <Image src={post.picture.large} width={30} height={30} />
            <ul>
              <li>{post.user_name}</li>
              <li>{post.like}</li>
            </ul>
          </div>
          <article>
            <p>{sentenceReducer(post.title)}</p>
            <p>{sentenceReducer(post.post)}</p>
          </article>
        </div>
      ) : appearance === "right" ? (
        <div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default Card;
