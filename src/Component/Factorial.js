import React from "react";


class Factorial extends React.Component {
    constructor(){
        super();
        this.state ={
            inputNumber : '',
            factorialValue: '',
        };
    }

     updateNumber(event){
        this.setState({inputNumber:event.target.value});
     }

    clickSubmit (event) {
        event.preventDefault();
        this.setState({...this.state, factorialValue: this.factorialize(this.state.inputNumber)})
    }

    factorialize (num) {
        if (num < 0) 
            return -1;
        else if (num == 0) 
            return 1;
        else {
            return (num * this.factorialize(num - 1));
        }
    }

    render(){
        let fract = this.state.factorialValue;
        return (
            <div>
              <h1>Factorial Calculator</h1>
              <form>
                <input type="number" placeholder="Enter a number..."  
                        name= "number"
                        value={this.state.inputNumber} 
                        onChange= {this.updateNumber.bind(this)}
                    />
                <br />
                <button onClick={this.clickSubmit.bind(this)}>Calculate Factorial</button>
              </form>
              <h2>Factorial: {fract}</h2>
            </div>
          );
    }
  
}
export default Factorial;