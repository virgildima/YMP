import React, { Component } from "react";
import {
    Container, Row, Col
} from 'react-bootstrap';
import FormContact from "./FormContact";
import finn from './images/Photos/finn.jpg';
import jhonny from './images/Photos/johnny.jpg';

class Contact extends Component {
    render() {
        return (
            <div className="component_content contact">
                <Container>
                    <Row>
                        <Col xs={12} xl={6}>
                            <div className="media mb-5">
                                <img src={finn} alt="Finn" width="150" className="img-fluid mr-4" />
                                <div className="media-body">
                                    <h4 className="text-blue mb-0">Finn Abramsson</h4>
                                    <h5 className="text-blue">Technical Manager</h5>
                                    <p className="mb-0">
                                        <i aria-hidden="true" className="fa fa-envelope-o mr-1"></i>
                                        <a href="mailto: finn@ymp.ltd">finn@ymp.ltd</a>
                                    </p>
                                    <p className="mb-0">
                                        <i aria-hidden="true" className="fa fa-phone mr-1"></i>
                                        <a href="tel:+45 257 12 87 35">+45 257 12 87 35</a>
                                    </p>
                                    <p className="mb-0">
                                        <i aria-hidden="true" className="fa fa-skype mr-2"></i>
                                        finn.abramsson
                                    </p>
                                </div>
                            </div>

                            <div className="media mb-5">
                                <img src={jhonny} alt="johnny" width="150" className="img-fluid mr-4"/>
                                <div className="media-body">
                                    <h4 className="text-blue mb-0">Johny Holgaard</h4>
                                    <h5 className="text-blue">Marketing Manager</h5>
                                    <p className="mb-0">
                                        <i aria-hidden="true" className="fa fa-envelope-o mr-1"></i>
                                        <a href="mailto: johnny@tys.com.mt">johnny@tys.com.mt</a>
                                    </p>
                                    <p className="mb-0">
                                        <i aria-hidden="true" className="fa fa-phone mr-1"></i>
                                        <a href="tel:+45 53 76 65 78">+45 53 76 65 78</a>
                                    </p>
                                    <p className="mb-0">
                                        <i aria-hidden="true" className="fa fa-skype mr-2"></i>
                                        tysolutions
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} xl={6}>
                            <FormContact/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contact;