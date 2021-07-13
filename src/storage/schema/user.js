export const UserSchema = {
    name: "User",
    properties: { 
        email: "string",
        cart: "Product[]"
    },
    primaryKey: "email",
}