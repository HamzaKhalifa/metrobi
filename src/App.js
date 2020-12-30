import React from 'react';
import './App.css';
import utils from './utils';
import AchilleAndTurtoise from './components/AchilleAndTurtoise';

const App = () => {
  // const ray1 = [4, 5, 6, 1, 1, 4, 8, 9, 5];
  const ray1 = [1,2,2,2,3];
  console.log("Looking for duplicates of ray1", ray1);
  const duplicates = utils.question1FindDulpicates(ray1);
  console.log("------");
  console.log("Duplicates", duplicates);

  const ray2 = ["a", "b", "c", "d"];
  console.log("Async printing of", ray2);
  utils.question2AsyncFunction(ray2);

  const carrotTypes = [
    { kg: 5, price: 100 },
    { kg: 7, price: 150 },
    { kg: 3, price: 70 },
  ]
  console.log('Max value', utils.question7GetMaxValue(carrotTypes, 36));

  console.log('Is opened and closed properly {[]{[]}}', utils.question4IsOpenedAndClosedProperly('{[]{[]}}'));
  console.log('Is opened and closed properly ([])', utils.question4IsOpenedAndClosedProperly('([])'));
  console.log('Is opened and closed properly ([]', utils.question4IsOpenedAndClosedProperly('([]'));
  console.log('Is opened and closed properly ({}{[[]]})', utils.question4IsOpenedAndClosedProperly('({}{[[]]})'));
  console.log('Is opened and closed properly ({}{[[]]})', utils.question4IsOpenedAndClosedProperly('({}{[[]]})'));
  console.log('Is opened and closed properly ({}}{[[]]})', utils.question4IsOpenedAndClosedProperly('({}}{[[]]})'));
  
  return (
    <div className="App">
      <AchilleAndTurtoise />
    </div>
  );
}

export default App;
