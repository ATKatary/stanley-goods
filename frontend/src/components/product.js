import * as React from 'react';
import "../assets/css/utils.css";

import { GC} from '../components/utils';
import { PRODUCTS } from '../components/content/product';

import { Typography } from '@mui/material';
import { Container, Row } from 'reactstrap';


function Prodcuts(props) {
    const {images, ...other} = props;

    return (
        <Container style={{marginTop: "100px", marginBottom: "80px"}} className="text-center">
            <Row>
                <Typography style={{fontSize: GC.FONT.TITLE, color: GC.BLACK, margin: "0 0 20px 0"}} className={`${GC.FONT.FAMILY.DEFAULT}`}>
                    Products
                </Typography>
            </Row>
            <Row className="flex justify-center">
                {PRODUCTS.map((product, i) => 
                    <div className="width-fit height-fit">
                        <div 
                            className="circle sticky flex align-center justify-center" 
                            style={{
                                width: "30px", 
                                height: "30px", 
                                color: GC.WHITE,
                                zIndex: "10",
                                margin: "0 0 0 5px",
                                backgroundColor: GC.BLACK,
                            }}
                        >
                            <Typography className={`${GC.FONT.FAMILY.DEFAULT}`}>{i}</Typography>
                        </div>
                        <img 
                            src={images(product.src)} 
                            className={`pointer clicked ${product.className}`}
                            style={{
                                height: "300px", 
                                objectFit: "cover",
                                margin: "-15px 0 20px 20px",
                                ...product.style
                            }}
                        />
                    </div>
                )}
            </Row>
        </Container>
    )
}

export default Prodcuts;