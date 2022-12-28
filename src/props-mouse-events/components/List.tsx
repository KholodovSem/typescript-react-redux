import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

const List = <T extends {}>({ items, renderItem }: ListProps<T>) => {
  const content = items.map(renderItem);

  return <div>{content}</div>;
};

export default List;
