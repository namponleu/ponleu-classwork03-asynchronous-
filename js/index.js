import { CardComponents } from "../components/CardComponents.js"; 
import { getData } from "../store/fetchApi.js";

let renderArea = document.querySelector("#renderArea");
let getAllData = await getData("products");
console.log(getAllData);
      getAllData.map((product) => (renderArea.innerHTML += CardComponents(product)))