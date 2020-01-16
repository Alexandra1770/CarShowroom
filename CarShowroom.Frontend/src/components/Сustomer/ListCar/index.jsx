import React from "react";

import ListItemCar from "../ListItemCar";

const ListCar = ({ data, handleClickAddToBasket, handleClickOpenMore }) => {
    return (
        <div>
            {data.map(item => {
                const { registryNumber, ...itemProps } = item;
                return(
                    <>
                        <ListItemCar
                            key={registryNumber}
                            {...itemProps}
                            handleClickAddToBasket={() => handleClickAddToBasket(registryNumber)}
                            handleClickOpenMore={() => handleClickOpenMore(registryNumber)}

                        />
                    </>
                );
            })}
        </div>
    );
};
export default ListCar;
