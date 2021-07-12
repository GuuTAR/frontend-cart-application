export const ProductSchema = {
    name: "Product",
    properties: { 
        _id : "string",
        name: "string",
        img: "string",
        desc: "string",
        price: {type: "int", default: 0},
        count: {type: "int", default: 1},
    },
    primaryKey: "_id",
}