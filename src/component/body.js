import roomhaha from '../img/room.jpg';
import img1 from '../img/1_thumb.jpg';
import img2 from '../img/10_thumb.png';
import img3 from '../img/11_thumb.png';
import img4 from '../img/exh_image2.png';
import img5 from '../img/exh_image3.png';
import img6 from '../img/exh_image4.png';
import { Container, Row, Col, BDiv } from 'bootstrap-4-react';
let imgStyle ={width: '100%', height:'700px'};
let img2Style ={width: '20%', height:'30%'};
export {imgStyle}

export function Img(){
    return(
    <img src={roomhaha} style={imgStyle} />
    );
}
export function Img2(){
    return(
        <Container>
            <Row style={{justifyContent : 'center'}}>
        <>
            <img className='my-5' src={img1} style={img2Style} /><img className='mx-auto my-5' src={img2} style={img2Style} /><img className='my-5' src={img3} style={img2Style} /><br />
            
         </>
         </Row>
         <Row style={{justifyContent: 'center'}}>
            <>
            <img className='my-5' src={img4} style={img2Style} /><img className='mx-auto my-5' src={img5} style={img2Style} /><img className='my-5' src={img6} style={img2Style} />
            </>
            </Row>
        
        </Container>
    );
}