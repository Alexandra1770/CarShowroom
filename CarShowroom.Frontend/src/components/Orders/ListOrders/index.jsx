import React from "react";

import ListItemOrders from "../ListItemOrders";

const ListOrders = ({ data, onDeleted, handleClickEditOpen, handleClickOpenMore }) => {
    return (
        <div>
            {data.map(item => {
                const { id, ...itemProps } = item;
                return(
                    <>
                        <ListItemOrders
                            key={id}
                            {...itemProps}
                            handleClickEditOpen={() => handleClickEditOpen(id)}
                            onDeleted={() => onDeleted(id)}
                            handleClickOpenMore={() => handleClickOpenMore(id)}

                        />
                    </>
                );
            })}
        </div>
    );
};
export default ListOrders;
