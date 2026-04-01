import React, { use } from "react";
import Card from "../Card/Card";

const NotSelected = ({ dataPromise, setCartItems }) => {
  const allTools = use(dataPromise);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {allTools.map((dataPromise) => (
          <Card
            key={dataPromise.id}
            dataPromise={dataPromise}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </>
  );
};

export default NotSelected;
