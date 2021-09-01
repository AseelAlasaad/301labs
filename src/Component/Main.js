import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component{
//  constructor(props){
//      super(props);
//  }
    render()
    {
        return (
            <>
              <Row xs={1} md={3} className="g-4"> {
                     
                     this.props.beastData.map((item)=>

                    {
                        return (<HornedBeasts
                        title={item.title}

                        imageUrl={item.image_url}

                        description={item.description}
                        displayBeast={this.props.displayBeast}
                       
                        
                        
                        />);
                    }
                    )


                

                 }</Row>
            </>
        )
    }
}
export default Main;