import React  from "react";
import Header from "./Component/Header";
import Main from "./Component/Main";
import Footer from "./Component/Footer";
import Data from "./Component/Data.json";
import SelectedBeast from "./Component/SelectedBeast";


class App extends React.Component{
  //display, update  , close 
  constructor(props)
  {
     super(props)
      this.state= {

          data:Data,
          showModal: false,
          title:'',
          imageurl:'',
          describtion:''
        
          
  }}

 
  displayBeast=()=>{
    this.setState({ 
      showModal: true
    })
  }
  close=()=>{
    this.setState({ 
      showModal:false
    })
  }
 updateInfomodel=(title,imageurl,describtion)=>{
   this.setState({
     title:title,
     imageurl:imageurl,
     describtion:describtion
   })
 }


  
  
  render()
  {
    return(
      <>
      <Header />
      <Main beastData={Data}  
       displayBeast={this.displayBeast} 
       updateInfomodel={this.updateInfomodel}/>
      <Footer />
      <SelectedBeast 
      show={this.state.showModal}
      close={this.close}
      title={this.state.title}
      imageurl={this.state.imageurl}
      describtion={this.state.describtion}
      />
      
    </>
    )
  }
}
export default App;
