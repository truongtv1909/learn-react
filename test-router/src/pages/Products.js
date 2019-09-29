import React,{Component} from 'react';
import axios from 'axios';
import {Container,Row,Col,Card, CardImg, CardText, CardBody,
    CardTitle, Button} from 'reactstrap';
import {CartContext} from '../contexts/Cart';
export default class Products extends Component{
    constructor(props){
        super(props);
        this.state ={
        products:[]
        }
    }
    componentDidMount(){
        axios.get('https://zvslp.sse.codesandbox.io/products')
        .then(res=>{
            this.setState({
                products:res.data
            });
        })
    }
    render(){
        const {products} = this.state;
        return(
        <Container>
        <h2>Products list ( Dữ liệu được gọi API từ host free. Chỉ chạy khi có requet, nên có thể phải chờ trong giây lát)</h2>
            <Row>
                {products.map((product,index)=>( 
                    
                    <Col sm="4" key={index}>
                    <Card className="my-1">
                        <CardImg top width="100%" src={product.image} alt="Card image cap" />
                        <CardBody>
                            <CardTitle><h5>{product.name}</h5></CardTitle>
                            <CardText>{product.description}</CardText>
                            <CartContext.Consumer>
                                {({addtoCart}) =><Button color="primary" onClick={()=>addtoCart(product)} >Add to card</Button>}
                            </CartContext.Consumer>
                            
                        </CardBody>
                    </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        );
    }
}