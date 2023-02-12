let hover = document.getElementById("container");

let data = [
  {
    id: 1,
    name: "Behruz",
    age: "18",
  },
  {
    id: 2,
    name: "Shamshod",
    age: "18",
  },
  {
    id: 3,
    name: "Aziz",
    age: "17",
  },
  {
    id: 4,
    name: "Dilshod",
    age: "18",
  },
  {
    id: 5,
    name: "Ilyos",
    age: "18",
  },
];
let res = () => {
  let sort = "";
  data.map((v) => {
    sort += `<div class="box"><div class="wrapper"><h1>${v.id}<h1/><div/>
    <div class="wrapper"><h1>${v.name}<h1/><div/>
    <div class="wrapper"><h1>${v.age}<h1/><div/><div/>`;
  });
  hover.innerHTML = sort;
};
res();
