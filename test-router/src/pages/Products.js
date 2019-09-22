import React,{Component} from 'react';
import axios from 'axios';
import {Container,Row,Col,Card, CardImg, CardText, CardBody,
    CardTitle, Button} from 'reactstrap';

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
        <h2>Products</h2>
            <Row>
                {products.map((product,index)=>( 
                    
                    <Col sm="4" key={index}>
                    <Card className="my-1">
                        <CardImg top width="100%" src={product.image} alt="Card image cap" />
                        <CardBody>
                        <CardTitle><h5>{product.name}</h5></CardTitle>
                        <CardText>{product.description}</CardText>
                        <Button color="primary">Add to card</Button>
                        </CardBody>
                    </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        );
    }
}