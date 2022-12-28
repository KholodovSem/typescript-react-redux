import React, { ReactNode, FC, PropsWithChildren } from "react";

/* 
    * Props
    Для того, чтобы передать компоненту пропсы, мы должны предварительно описать интерфейс.
    В нашем случае, мы ожидаем увидеть Ширину и Высоту для карточки в виде пропсов.
    Поэтому наш интерфейс выглядит следующим образом:

    interface CardProps {
      width: string;
      height: string;
    }

    Если мы хотим указать что один или все пропсы необязательны, тогда мы можем рядом
    с названим пропса указать вопросительный знак "?".

    Компонент, всегда в виде аргумента получает объект props App = (props) => {}
    Именно к нему мы и будем применять наш интерфейс, чтобы описать его.
    App = (props: CardProps) => {}
    Для более комфортного использования мы обычно проводим деструктуризацию этого объекта.
    App = ({width, height}: CardProps) => {}

    Следует также сказать что мы могли бы обойтись и без интерфейса.
    Но тогла читаемость компонента, резко упала бы.
    App = ({width, height}: {width: string, height: string}) => {}

    *ReactNode - если нам нужно указать что мы возращаем узел или принимаем в качестве пропсов children
    *FC or Functional Component - Интерфейс предоставляемый React
    *Ожидает в качестве аргумента дженерика интерфейс для описания пропсов, там уже есть свойство children.
*/
export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps extends PropsWithChildren {
  width: string;
  height: string;
  variant: CardVariant;
  onClick: () => void;
}

const Card: FC<CardProps> = ({ children, width, height, variant, onClick }) => {
  const border = variant === CardVariant.outlined ? "1px solid gray" : "none";
  const background = variant === CardVariant.primary ? "lightgray" : "none";

  return (
    <div style={{ width, height, background, border }} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
