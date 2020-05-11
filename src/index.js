import React from 'react';
import ReactDOM from 'react-dom';
import DrumPad from './components/drumPad/index';
import './style.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      power:true,
      bank:'Heater Kit',
      // this.props.bank==='Heater Kit'
      volume:'0.5',
      display:'',
      powerStyle:{float:'right'},
      bankStyle:{float:'right'}
    }
    this.setDisplay=this.setDisplay.bind(this);
    this.handlePower=this.handlePower.bind(this);
    this.handleBank=this.handleBank.bind(this);
    this.handleVolume=this.handleVolume.bind(this)
  }
  setDisplay(text){
    this.setState({
      display:text
    })
  }
  handlePower(){
    if(this.state.power){
      this.setState({
        power:false,
        powerStyle:{float:'left'},
        display:'Off'
      })
    }else{
      this.setState({
        power:true,
        powerStyle:{float:'right'},
        display:'On'
      })
    }
  }
  handleBank(){
    if(this.state.bank==='Heater Kit'){
      this.setState({
        bank:"Smooth Piano Kit",
        bankStyle:{float:'left'},
        display:'Smooth Piano Kit'
      })
    }else if(this.state.bank==='Smooth Piano Kit'){
      this.setState({
        bank:'Heater Kit',
        bankStyle:{float:'right'},
        display:'Heater Kit'
      })
    }
  }
  handleVolume(){
    this.setState(()=>{return {volume:this.inputElem.value}},()=>{this.setState({display:`Volume:${Math.floor(this.state.volume*100)}`})});
  }
  render(){
    return(
      <div className="wrap">
        <div className="container">
          <div className="pad-bank">
            <DrumPad keyValue="Q" volume={this.state.volume} power={this.state.power} bank={this.state.bank} display={this.setDisplay}/>
            <DrumPad keyValue="W" volume={this.state.volume} power={this.state.power} bank={this.state.bank} display={this.setDisplay}/>
            <DrumPad keyValue="E" volume={this.state.volume} power={this.state.power} bank={this.state.bank} display={this.setDisplay}/>
            <DrumPad keyValue="A" volume={this.state.volume} power={this.state.power} bank={this.state.bank} display={this.setDisplay}/>
            <DrumPad keyValue="S" volume={this.state.volume} power={this.state.power} bank={this.state.bank} display={this.setDisplay}/>
            <DrumPad keyValue="D" volume={this.state.volume} power={this.state.power} bank={this.state.bank} display={this.setDisplay}/>
            <DrumPad keyValue="Z" volume={this.state.volume} power={this.state.power} bank={this.state.bank} display={this.setDisplay}/>
            <DrumPad keyValue="X" volume={this.state.volume} power={this.state.power} bank={this.state.bank} display={this.setDisplay}/>
            <DrumPad keyValue="C" volume={this.state.volume} power={this.state.power} bank={this.state.bank} display={this.setDisplay}/>
          </div>
          <div className="control">
            <div className="power">
              <p>Power</p>
              <div className="power-button" onClick={this.handlePower}>
                <div className="power-inner" style={this.state.powerStyle}></div>
              </div>
            </div>
            <div className="display">{this.state.display}</div>
            <input type="range" step="0.01" min="0" max="1" value={this.state.volume} onInput={this.handleVolume} ref={inputElem=>{this.inputElem=inputElem}}/>
            <div className="bank">
              <p>Bank</p>
              <div className="bank-button" onClick={this.handleBank}>
                <div className="bank-inner" style={this.state.bankStyle}></div>
              </div>
            </div>
          </div>
        </div>
        <p>designed by Liang Gao</p>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root')
);
