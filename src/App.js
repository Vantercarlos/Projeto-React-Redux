import React from 'react';

class App extends React.Component {
  state = {
    nome : 'Vantercarlos Caitano'
  }

  render() {
    return(
      <h1>Bem vindo {this.state.nome}</h1>
    )
  }
}

export default App;
