import emailedIcon from "../../images/emailed.png";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { Col, Container, Row } from 'react-bootstrap';
import start from '../../images/start.png';
import view from '../../images/View1.png';
import bye from '../../images/bye.png';

const EmailedConfirm = () => {



    return (
        <>
            <NavBar />
            <Container style={{ fontSize: '80px', padding: '0px', fontFamily: 'Amaranth' }}>

                <Row style={{ padding: '25px' }} >
                    <h1>Your Book Report has been emailed to you!</h1>
                </Row>

                <Row style={{ padding: '25px' }}>
                    
                <a href={`/dashboard`} >  <img src={emailedIcon} alt='' height={400} /></a>

                </Row>
                <Row style={{ padding: '25px' }}>
                    <h1>What would you like to do next?</h1>
                </Row>

                

                <Row>
                    <Col style={{ padding: '25px' }}>
                        <a href={`/Create`} >  <img src={start} alt='' height={260} /></a>
                    </Col>

                    <Col style={{ padding: '25px' }}>
                        <a href={`/all-book-reports`} padding='100px' ><img src={view} alt='' height={225} /></a>
                    </Col>
                </Row>
                <Row style={{ padding: '25px' }}>
                    <a href={`/loggedout`} padding='100px' ><img src={bye} alt='' width={250} /></a>

                </Row>

                   
                
            </Container>
            <Footer />

        </>
    );

}

export default EmailedConfirm;