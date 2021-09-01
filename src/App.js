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
          // selectBeast:{}
        
          
  }}

 
  displayBeast=(title)=>{
     const Beast=Data.filter((item)=>{
      
      
        return item.title===title;
     
      
    })
    this.setState({
      showModal:true,
      data:Beast[0]
   
     
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
      <Main beastData={this.state.data}   displayBeast={this.props.displayBeast
                        } />
      <Footer />
      <SelectedBeast 
      selectBeast={this.state.data}
      show={this.state.showModal}
      close={this.close}
      />
      
    </>
    )
  }
}
export default App;
