import { Image, Pressable, Text } from "react-native"
import * as React from "react"
import { firstProduct, firstProductContent, firstProductImg, price, productCard, productContent, productDes, productImg, productName } from "./style"
import Row from "../../../../component/Row"
import Col from "../../../../component/Col"
import productPNG from '../../../../assets/product-example.png'

const ProductCard = ({ first, goProductPage, product }) => {

    const mock = "หูฟังไร้สายรุ่นยอดนิยม แม้ว่าราคาเปิดตัวจะค่อนข้างแรง แต่เมื่อเทียบกับคุณภาพก็ถือว่าคุ้มค่าอย่างมาก จุดเด่นอยู่ที่ความสามารถในการเก็บรายละเอียดเสียง และเป็นหูฟังแบบ In-Ear เกาะติดแน่นเมื่อสวมใส่ ไม่ต้องกังวลว่าจะหลุดร่วงขณะสวมวิ่งออกกำลังกาย พร้อมทั้งมีคุณสมบัติกันน้ำ เรียกว่าเป็นรุ่นคลาสสิกของสาวกแอปเปิลเลยทีเดียว"

    const handleGoProductPage = () => goProductPage(product)

    return (
        <Pressable 
            onPress={handleGoProductPage}
            style={[productCard, first && firstProduct]}
        >
            <Row>
                <Image
                    source={productPNG}
                    style={[productImg, first && firstProductImg]}
                />
                <Col containerStyle={first ? firstProductContent : productContent}>
                    <Row>
                        <Text style={productName}>{product?.name || 'หูฟังไร้สาย'}</Text>
                    </Row>
                    <Row>
                        <Text style={productDes}>{product?.desc.length >= 95 ? mock.slice(0, 95) + '...อ่านเพิ่มเติม' :  product?.desc}</Text>
                    </Row>
                </Col>
            </Row>
            <Text style={price}>{product?.price}฿</Text>
        </Pressable>
    )
}

export default ProductCard