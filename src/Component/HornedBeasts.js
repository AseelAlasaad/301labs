import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component{
    constructor(props)
    {
        super(props);
        this.state= {

            vots:0
        }

    }

       voteFavoritebeast = () =>{
            this.setState({
                vots : this.state.vots +1
            })
       } 
    
    render()
    {
        return(
            <>
                 {/* <h2>{this.props.title}</h2>
                 <img src={this.props.imageUrl} alt=""></img>
                 <p>{this.props.description}</p> */}

                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.imageUrl} onClick={this.voteFavoritebeast}/>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    ❤️= {this.state.vots}
                    </Card.Text>
                    <Card.Text>
                    {this.props.description}
                    </Card.Text>
                   
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>

            </>
        )
    }
}
export default HornedBeasts;