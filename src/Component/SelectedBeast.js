import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
class SelectedBeast extends React.Component {
// constructor(props)
// {
//     super(props);
//     }



    render() {
     
        return (
            <>

                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.selectBeast.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>   <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={this.props.selectBeast.image_url}  />
                            <Card.Body>
                                <Card.Title>{this.props.selectBeast.title}</Card.Title>
                               
                                <Card.Text>
                                    {this.props.selectBeast.description}
                                </Card.Text>

                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col></Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.close}>
                            Close
                        </Button>
                        <Button variant="primary" >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </>
        )
    }
}
export default SelectedBeast;