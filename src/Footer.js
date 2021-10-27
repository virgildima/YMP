import React, { Component } from "react";
import {
    Container, Row, Col
} from 'react-bootstrap';
import logo from './images/Logo/logo_big.png';
import {
    Switch, Link
} from "react-router-dom";

class Footer extends Component {


    render() {

        let year = new Date().getFullYear();

        return (
            <Switch>
            <div className="component_content footer">
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <img src={logo} alt="Logo" className="d-block mx-auto img-fluid"/>
                                <Link to="/privacypolicy" className="text-blue">Privacy Policy | </Link>
                                <Link to="/cookiepolicy" className="text-blue">Cookie Policy | </Link>
                                <Link to="/termsandconditions" className="text-blue">Terms and Conditions</Link>
                                    <p><small>Copyright © {year} YMP. All Rights Reserved</small></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            </Switch>
        );
    }
}

export default Footer;