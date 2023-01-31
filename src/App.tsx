import React from 'react';
import Card,  {CardVariant} from './components/Card';


const App = () =>{
  return (
    <div>Work!
      <Card variant={CardVariant.primary} width='200px' height='300px'>
        <button>Press</button>
        <div>Rooom</div>
      </Card>
    </div>
   
  );
}

export default App;
