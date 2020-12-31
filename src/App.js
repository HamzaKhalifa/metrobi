import React from 'react';
import './App.css';
import utils from './utils';
import AchilleAndTurtoise from './components/AchilleAndTurtoise';
import FlexBox from './components/flex-box';

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
  

  // Setting the highest floor from which the egg can be dropped to 60
  let floors = [];
  for (let i = 1; i <= 60; i++) {
    floors.push(true);
  }

  for (let i = 61; i <= 100; i++) {
    floors.push(false)
  }

  console.log('Our floors', floors);

  console.log('Solution 1: The highest floor from which the egg can be dropped is: ', utils.question5FindingHighestFloorSolution1(floors, 2));
  console.log('Solution 2 The highest floor from which the egg can be dropped is: ', utils.question5FindHighestFloorSolution2(floors, 2));
  return (
    <div className="App">
      <AchilleAndTurtoise />
      <FlexBox />
    </div>
  );
}

export default App;
