import React  from "react";
import Header from "./Component/Header";
import Main from "./Component/Main";
import Footer from "./Component/Footer";
import Data from "./Component/Data.json";
import SelectedBeast from "./Component/SelectedBeast";


class App extends React.Component{
  //display, open  , close 
  constructor(props)
  {
     super(props)
      this.state= {

          data:Data,
          showModal: false,
          selectBeast:{}
        
          
  }}

 
  displayBeast=(title)=>{
     let Beast=Data.filter((item)=>{
      
      
        return item.title===title;
     
      
    })
    this.setState({
      showModal:true,
      selectBeast:Beast
   
     
    })
    //console.log(this.state.selectBeast);
  }
  close=()=>{
    this.setState({ 
      showModal: this.state.false
    })
  }
 


  
  
  render()
  {
    return(
      <>
      <Header />
      <Main beastData={this.state.data}   displayCard={this.props.displayBeast
                        } />
      <Footer />
      <SelectedBeast close={this.close}
      selectBeast={this.state.selectBeast}
      show={this.state.showModal}
     
      />
      
    </>
    )
  }
}
export default App;
