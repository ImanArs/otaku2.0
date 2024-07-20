import { Card } from "../../ui/Card";
import cls from "./styles.module.scss";
import { useBasket } from "@/hook/useBasket";

export const Cart = (props: any) => {
  const { nextStep } = props;
  const { getBasket, addToBasket, removeFromBasket, basket } = useBasket();

  const productPriceSum = basket.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={cls.cartContent}>
      <div>
        {!!basket.length ? (
          <div className={cls.cartItems}>
            {basket.map((item) => <Card key={item.id} product={item} />)}
          </div>
        ) : (
          <div className={cls.placeholder}>
            <p>Упс тут пусто</p>
          </div>
        )}
      </div>
      <div className={cls.cartTotal}>
        <div>
          <h3>Итого:</h3>
          <p>{productPriceSum} сом</p>
        </div>
        <button onClick={() => nextStep()} disabled={basket.length < 1}>
          К оплате
        </button>
      </div>
    </div>
  );
};
