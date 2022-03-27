import cn from "classnames";
import styles from "./Card.module.scss";

const Card = ({ appearance, children, ...props }) => {
  return (
    <article
      className={cn(
        styles.base,
        appearance === "left" ? styles.left : undefined,
        appearance === "right" ? styles.right : undefined
      )}
    >
      <div>
        <p>{appearance}</p>
        <a>up</a>
        <a>down</a>
        <a>number</a>
      </div>
      <div>
        I'm baby heirloom drinking vinegar pop-up ramps. Raw denim irony hella
        palo santo. Franzen hashtag edison bulb pork belly, tote bag chia
        everyday carry microdosing. Kinfolk lyft literally, plaid kale chips
        ramps drinking vinegar normcore kombucha etsy subway tile before they
        sold out sustainable chia pop-up.
      </div>

      <div>
        Bespoke lomo kombucha flexitarian tote bag brooklyn retro schlitz shabby
        chic swag meditation hoodie vexillologist messenger bag pork belly. Palo
        santo XOXO austin poke live-edge offal kickstarter irony. Flannel
        organic YOLO tattooed. Hashtag fingerstache portland before they sold
        out locavore photo booth, heirloom pour-over. Farm-to-table pickled four
        dollar toast succulents deep v marfa hot chicken forage flannel
        chillwave ethical pitchfork. Tilde lo-fi mustache irony shaman meh
        brooklyn hell of readymade occupy try-hard. Pinterest thundercats
        stumptown coloring book retro authentic hell of try-hard pabst swag
        fanny pack pitchfork pork belly. Fashion axe kitsch mlkshk, tofu
        gentrify YOLO drinking vinegar.
      </div>
      {children}
    </article>
  );
};

export default Card;
