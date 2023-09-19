//1. Here we just updated title based on count value,it rendering many  times, to stop this we will give conditions in next 


// import React, { Component } from 'react'

// export class TitleChange extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0
//       }
//     }
    
//     componentDidMount(){
//         document.title=`You clicked ${this.state.count} times`
//         console.log('first creation')
//     }
 
//     componentDidUpdate(prevProps,prevState){
//         document.title=`You clicked ${this.state.count} times`
//         console.log('updating')
//     }



//   render() {
//     return (
//       <div>
//         <button onClick={()=>this.setState({count: this.state.count+1})}> Clicked {this.state.count} times</button>
    
//       </div>
//     )
//   }
// }

// export default TitleChange


import React, { Component } from 'react'

export class TitleChange extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    
    componentDidMount(){
        document.title=`You clicked ${this.state.count} times`
        console.log('first creation')
    }
    
 
    componentDidUpdate(prevProps ,prevState){
        // if(prevState.count !== this.state.count){
        document.title=`You clicked ${this.state.count} times`
        console.log('updating')
    }

        



  render() {
    return (
      <div>
        <button onClick={()=>this.setState({count: this.state.count+1})}> Clicked {this.state.count} times</button>
    
      </div>
    )
  }
}

export default TitleChange