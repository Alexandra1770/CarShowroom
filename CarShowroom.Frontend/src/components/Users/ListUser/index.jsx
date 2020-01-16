import React from "react";

import ListItemUser from "../ListItemUser";

const ListUser = ({ data, onDeleted, handleClickEditOpen, handleClickOpenMore }) => {
    return (
        <div>
            {data.map(item => {
                const { id, ...itemProps } = item;
                return(
                    <>
                        <ListItemUser
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
export default ListUser;
