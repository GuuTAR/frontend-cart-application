export const mapDataToHome = (data) => ({
    _id: data.ibrand4,
    name: data.ibrand4,
    img: data.image_brand,
    desc: data.search_name,
    price: data.range_price.split("-")[0],
})