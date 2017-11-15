import React, {Component} from 'react';
import ReactDom from 'react-dom';
import '../src/index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {
    Bootstrap,
    ButtonToolbar,
    Button,
    Navbar,
    Nav,
    NavItem,
    MenuItem,
    NavDropdown,
    Jumbotron,
    Grid,
    Row,
    Col,
    FormControl,
    ControlLabel,
    Modal
} from 'react-bootstrap'

class HeaderComponent extends React.Component {
    render() {
        return (
            <div >
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">ReactJS</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Home</NavItem>
                            <NavItem eventKey={2} href="#">About Us</NavItem>
                            <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Product 1</MenuItem>
                                <MenuItem eventKey={3.2}>Product 2</MenuItem>
                                <MenuItem eventKey={3.3}>Product 3</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.3}>All Product</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Sign In</NavItem>
                            <NavItem eventKey={2} href="#">Create an Account</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Jumbotron>
                    <Grid>
                        <Row className="show-grid">
                            <Col md={12}>

                                <h1>ReactJS - Bootstrap</h1>
                                <p>This is React-Js - bootstrap demo.</p>
                                <p>
                                    <Button bsStyle="primary">Learn more</Button>
                                </p>

                            </Col>
                        </Row>
                    </Grid>
                </Jumbotron>

            </div>
        );
    }
}

class FooterComponent extends React.Component {
    render() {
        return (
            <div className="myFooter">
                <h6>Designed & Developed by Avalara Technologies Pvt. Ltd.</h6>
            </div>
        )
    }
}

class HelloWorld extends React.Component {

    constructor() {
        super();
        this.state = {
            Result: '0',
            showPopup: false
        };
    }

    showModal() {
        this.setState({showPopup: true});
    }

    close() {
        this.setState({showPopup: false});
    }

    Addition() {
        this.setState({
            Result: Number(this.firstVal.value) + Number(this.SecondVal.value)
        });
    }

    Reset() {
        this.firstVal.value = "";
        this.SecondVal.value = "";
        this.setState({Result: '0'});
    }

    render() {
        return (

            <div >

                <HeaderComponent/>
                <div >
                    <Grid>
                        <Row className="show-grid">

                            <Col md={6}>
                                <h1>Addition of two numbers</h1>
                                <div className="rowdata">
                                    <ControlLabel>First Number</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Enter First Number"
                                        inputRef={(ref) => {
                                        this.firstVal = ref
                                    }}/>
                                </div>
                                <div className="rowdata">
                                    <ControlLabel>Second Number</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Enter Second Number"
                                        inputRef={(ref) => {
                                        this.SecondVal = ref
                                    }}/>
                                </div>
                                <div className="rowdata">
                                    <ControlLabel>Result</ControlLabel>
                                    <FormControl type="text" placeholder="Result" value={this.state.Result}/>

                                </div>
                                <div className="rowdatabtn">
                                    <ButtonToolbar>
                                        <Button
                                            bsStyle="primary"
                                            onClick={(e) => {
                                            this.Addition();
                                        }}>Calculate</Button>
                                        <Button
                                            bsStyle="default"
                                            onClick={(e) => {
                                            this.Reset();
                                        }}>Reset</Button>
                                    </ButtonToolbar>
                                </div>
                            </Col>
                        </Row>
                    </Grid>

                    <hr/>
                    <Grid>
                        <Row className="show-grid">

                            <Col md={6}>
                                <h2>Bootstrap buttons example</h2>
                                <ButtonToolbar>
                                    <Button bsStyle="default">Default</Button>
                                    <Button bsStyle="primary">Primary</Button>
                                    <Button bsStyle="success">Success</Button>
                                    <Button bsStyle="info">Info</Button>
                                    <Button bsStyle="warning">Warning</Button>
                                    <Button bsStyle="danger">Danger</Button>
                                    <Button bsStyle="link">Link</Button>
                                </ButtonToolbar>
                            </Col>
                        </Row>
                    </Grid>
                    <hr/>
                    <Grid>
                        <Row className="show-grid">

                            <Col md={6}>
                                <h2>Bootstrap modal popup example</h2>
                                <Button
                                    bsStyle="primary"
                                    onClick={(e) => {
                                    this.showModal();
                                }}>Click to open popup model</Button>
                                {this.state.showPopup}

                                <Modal
                                    show={this.state.showPopup}
                                    onHide={(e) => {
                                    this.close();
                                }}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <h4>Text in a modal</h4>
                                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                                        <h4>Popover in a modal</h4>
                                        <hr/>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button
                                            onClick={(e) => {
                                            this.close();
                                        }}>Close</Button>
                                    </Modal.Footer>
                                </Modal>

                            </Col>
                        </Row>
                    </Grid>

                </div>

                <FooterComponent/>
            </div>
        );
    }
}

ReactDom.render(
    <HelloWorld/>, document.getElementById('root'))