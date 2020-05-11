import React from 'react';


class DrumPad extends React.Component{
  constructor(props){
    super(props);
    this.state={
        style:{backgroundColor:'#8d8d8d'},
        src:''
    }
    this.handleMouseDown=this.handleMouseDown.bind(this);
    this.handleMouseUp=this.handleMouseUp.bind(this); 
    this.handleKeyDown=this.handleKeyDown.bind(this);
    this.handleKeyUp=this.handleKeyUp.bind(this);

  }
  handleMouseDown(){
      if(this.props.power){
        this.setState({style:{backgroundColor:'orange',transform:'translateY(2px)'}})
        if(this.props.bank==='Heater Kit'){
          switch(this.props.keyValue){
            case 'Q':
              this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
              this.props.display("Heater-1");
              break;
            case 'W':
              this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
              this.props.display("Heater-2");
              break;
            case 'E':
              this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
              this.props.display("Heater-3");
              break;
            case 'A':
              this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
              this.props.display("Heater-4");
              break;
            case 'S':
              this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
              this.props.display("Clap");
              break;
            case 'D':
              this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
              this.props.display("Open HH");
              break;
            case 'Z':
              this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3";
              this.props.display("Kick n'Hat");
              break;
            case 'X':
              this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
              this.props.display("Kick");
              break;
            case 'C':
              this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3";
              this.props.display("Closed HH");
              break;    
            default: this.audio.src="#";        
          }
          this.audio.volume=this.props.volume;
          this.audio.play();
        }else if(this.props.bank==='Smooth Piano Kit'){
          switch(this.props.keyValue){
            case 'Q':
              this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3";
              this.props.display("Chord-1");
              break;
            case 'W':
              this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3";
              this.props.display("Chord-2");break;
            case 'E':
              this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3";
              this.props.display("Chord-3");break;
            case 'A':
              this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3";
              this.props.display("Shaker");break;
            case 'S':
              this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3";
              this.props.display("Open HH");break;
            case 'D':
              this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3";
              this.props.display("Closed HH");break;
            case 'Z':
              this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3";
              this.props.display("Punchy Kick");break;
            case 'X':
              this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3";
              this.props.display("Side Stick");break;
            case 'C':
              this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3";
              this.props.display("Snare");break;            
            default: this.audio.src="#";  
          }          
          this.audio.volume=this.props.volume;
          this.audio.play()
        }
      }else{
        this.setState({style:{backgroundColor:'#grey',transform:'translateY(2px)'}})
      }
  }
  handleMouseUp(){
    if(this.props.power){
      this.setState({style:{backgroundColor:'#8d8d8d'}})
    }else{
      this.setState({style:{backgroundColor:'#8d8d8d'}})
    }
  }
  handleKeyDown(e){
    if(this.props.power){      
      if(this.props.bank==='Heater Kit'){
        switch(e.key){
          case 'q':
            this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
            this.props.display("Heater-1");  
            window.padArr[0].style.backgroundColor='orange';
            window.padArr[0].style.transform='translateY(2px)';
            break;
          case 'w':
            this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
            this.props.display("Heater-2");
            window.padArr[1].style.backgroundColor='orange';
            window.padArr[1].style.transform='translateY(2px)';
            break;
          case 'e':
            this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
            this.props.display("Heater-3");
            window.padArr[2].style.backgroundColor='orange';
            window.padArr[2].style.transform='translateY(2px)';
            break;
          case 'a':
            this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
            this.props.display("Heater-4");
            window.padArr[3].style.backgroundColor='orange';
            window.padArr[3].style.transform='translateY(2px)';
            break;
          case 's':
            this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
            this.props.display("Clap");
            window.padArr[4].style.backgroundColor='orange';
            window.padArr[4].style.transform='translateY(2px)';
            break;
          case 'd':
            this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
            this.props.display("Open HH");
            window.padArr[5].style.backgroundColor='orange';
            window.padArr[5].style.transform='translateY(2px)';
            break;
          case 'z':
            this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3";
            this.props.display("Kick n'Hat");
            window.padArr[6].style.backgroundColor='orange';
            window.padArr[6].style.transform='translateY(2px)';
            break;
          case 'x':
            this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
            this.props.display("Kick");
            window.padArr[7].style.backgroundColor='orange';
            window.padArr[7].style.transform='translateY(2px)';
            break;
          case 'c':
            this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3";
            this.props.display("Closed HH");
            window.padArr[8].style.backgroundColor='orange';
            window.padArr[8].style.transform='translateY(2px)';
            break;    
          default: this.audio.src="#";        
        }
        this.audio.volume=this.props.volume;
        this.audio.play();
      }else if(this.props.bank==='Smooth Piano Kit'){
        switch(e.key){
          case 'q':
            this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3";
            this.props.display("Chord-1");
            window.padArr[0].style.backgroundColor='orange';
            window.padArr[0].style.transform='translateY(2px)';
            break;
          case 'w':
            this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3";
            this.props.display("Chord-2");
            window.padArr[1].style.backgroundColor='orange';
            window.padArr[1].style.transform='translateY(2px)';break;
          case 'e':
            this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3";
            this.props.display("Chord-3");
            window.padArr[2].style.backgroundColor='orange';
            window.padArr[2].style.transform='translateY(2px)';break;
          case 'a':
            this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3";
            this.props.display("Shaker");
            window.padArr[3].style.backgroundColor='orange';
            window.padArr[3].style.transform='translateY(2px)';break;
          case 's':
            this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3";
            this.props.display("Open HH");
            window.padArr[4].style.backgroundColor='orange';
            window.padArr[4].style.transform='translateY(2px)';break;
          case 'd':
            this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3";
            this.props.display("Closed HH");
            window.padArr[5].style.backgroundColor='orange';
            window.padArr[5].style.transform='translateY(2px)';break;
          case 'z':
            this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3";
            this.props.display("Punchy Kick");
            window.padArr[6].style.backgroundColor='orange';
            window.padArr[6].style.transform='translateY(2px)';break;
          case 'x':
            this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3";
            this.props.display("Side Stick");
            window.padArr[7].style.backgroundColor='orange';
            window.padArr[7].style.transform='translateY(2px)';break;
          case 'c':
            this.audio.src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3";
            this.props.display("Snare");            
            window.padArr[8].style.backgroundColor='orange';
            window.padArr[8].style.transform='translateY(2px)';break;            
          default: this.audio.src="#";  
        }
        this.audio.volume=this.props.volume;
        this.audio.play()
      }
    }

  }
  handleKeyUp(e){
    if(this.props.power){
      switch(e.key){
        case 'q':
          window.padArr[0].style.backgroundColor='#8d8d8d';
          window.padArr[0].style.transform='translateY(-2px)';
          break;
        case 'w':
          window.padArr[1].style.backgroundColor='#8d8d8d';
          window.padArr[1].style.transform='translateY(-2px)';
          break;
        case 'e':
          window.padArr[2].style.backgroundColor='#8d8d8d';
          window.padArr[2].style.transform='translateY(-2px)';
          break;
        case 'a':
          window.padArr[3].style.backgroundColor='#8d8d8d';
          window.padArr[3].style.transform='translateY(-2px)';
          break;
        case 's':
          window.padArr[4].style.backgroundColor='#8d8d8d';
          window.padArr[4].style.transform='translateY(-2px)';
          break;
        case 'd':
          window.padArr[5].style.backgroundColor='#8d8d8d';
          window.padArr[5].style.transform='translateY(-2px)';
          break;
        case 'z':
          window.padArr[6].style.backgroundColor='#8d8d8d';
          window.padArr[6].style.transform='translateY(-2px)';
          break;
        case 'x':
          window.padArr[7].style.backgroundColor='#8d8d8d';
          window.padArr[7].style.transform='translateY(-2px)';
          break;
        case 'c':
          window.padArr[8].style.backgroundColor='#8d8d8d';
          window.padArr[8].style.transform='translateY(-2px)';
          break;    
        default: this.audio.src="#";        
      }
    }
  }
  componentDidMount(){
    document.addEventListener("keydown",this.handleKeyDown);
    document.addEventListener("keyup",this.handleKeyUp);
    window.padArr=document.getElementsByClassName("drum-pad");
  }
  componentWillUnmount(){
    document.removeEventListener("keydown",this.handleKeyDown);
    document.removeEventListener("keyup",this.handleKeyUp);
  }
  render(){
    
    return(
      <div 
      className="drum-pad" 
      onMouseDown={this.handleMouseDown} 
      onMouseUp={this.handleMouseUp}
      style={this.state.style}>
        {this.props.keyValue}
        <audio ref={audio=>{this.audio=audio}}></audio>
      </div>
    )
  }
}
export default DrumPad;
