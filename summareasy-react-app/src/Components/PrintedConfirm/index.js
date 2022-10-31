import emailedIcon from "../../images/emailed.png";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { Col, Container, Row } from 'react-bootstrap';
import start from '../../images/start.jpg';
import edit from '../../images/edit.png';
import bye from '../../images/bye.png';
import printed from '../../images/printed.png';

const PrintedConfirm = () => {



    return (
        <>
            <NavBar />
            <Container style={{ fontSize: '80px', padding: '0px', fontFamily: 'Amaranth' }}>

                <Row style={{ padding: '25px' }} >
                    <h1>Your Book Report has been printed!</h1>
                </Row>

                <Row style={{ padding: '25px' }}>
                    
                <a href={`/dashboard`} >  <img src={printed} alt='' height={500} /></a>

                </Row>
                <Row style={{ padding: '50px' }}>
                    <h1>What would you like to do next?</h1>
                </Row>

                

                <Row>
                    <Col style={{ padding: '50px' }}>
                        <a href={`/Create`} >  <img src={start} alt='' height={200} /></a>
                    </Col>

                    <Col style={{ padding: '50px' }}>
                        <a href={`/all-book-reports`} padding='100px' ><img src={edit} alt='' height={200} /></a>
                    </Col>
                </Row>
                <Row style={{ padding: '50px' }}>
                    <a href={`/loggedout`} padding='100px' ><img src={bye} alt='' width={350} /></a>

                </Row>

                   
                
            </Container>
            <Footer />

        </>
    );

}

export default PrintedConfirm;