import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 text-white">
      <Item Links={PRODUCTS} title="PRODUCTOS" />
      <Item Links={RESOURCES} title="COMO COMPRAR" />
      <Item Links={COMPANY} title="LA EMPRESA" />
      <Item Links={SUPPORT} title="SERVICIO AL CLIENTE" />
    </div>
  );
};

export default ItemsContainer;
