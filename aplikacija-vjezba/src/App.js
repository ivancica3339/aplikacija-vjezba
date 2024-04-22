import logo from './logo.svg';

import SretanBroj from "./utilities/numbers";

import { x } from "./utilities/function";
import { y as MojSretni } from "./utilities/function";
import * as everything from "./utilities/function";


function App() {
  return (
    <div className="App">
      <p>Broj 1: {SretanBroj.num1}</p>
      <p>Broj 2: {SretanBroj.num2}</p>
      <p>Uz Alias: {MojSretni}</p>
      <p>Neki broj random: {everything.x}</p>
      <p>Dohvati drugi broj: {everything.getNum(SretanBroj, "num2")}</p>
    </div>
  );
}

export default App;
