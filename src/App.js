import React, {Component} from "react"
import styled from 'styled-components';

const Contador = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  background-image: url("https://grupodpg.com.br/wp-content/uploads/2020/01/contador-tradicional-seus-dias-estao-contados-entenda-como-a-contabilidade-4-0-pode-te-salvar.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  h1{
    text-align: center;
    font-size: 35px;
    color: red;
  }
`;
const Border = styled.section`
  border: solid  3px grey;
  border-radius:10%;
  background-color:grey;
  width:300px;
  height:400px;
`;

const Btn = styled.button`
Width: 6vw;
height:6vh;
background-color: red;
color:white;
border:3px solid white;
border-radius:30%;
`;

const Btn2 = styled.button`
justify-content: space-between;
Width: 6vw;
height:6vh;
background-color:green;
border:3px solid white;
border-radius:30%;
`;

const Botoes = styled.div`
  padding-left:100px;
  display:flex;
  justify-content: space-between;
  gap:30px;
  width:5vw;
  height:5vh;
  padding-top:50px;
`;




class App extends Component {
  state={
    contador:0
}

Soma = () =>{
    this.setState({
        contador: this.state.contador < 10 ? this.state.contador + 1:this.state.contador
    })
}
Diminuir = () =>{
    this.setState({
        contador: this.state.contador > 0 ? this.state.contador - 1:0
    })
}

render(){
    return(
        <>
        <Contador>
          <Border>
            <h1>{this.state.contador}</h1>
            <Botoes>
            <Btn onClick={this.Diminuir}>-</Btn>
            <Btn2 onClick={this.Soma}>+</Btn2>
            </Botoes>
            </Border>
        </Contador>

        </>
    )
}
}
export default App;