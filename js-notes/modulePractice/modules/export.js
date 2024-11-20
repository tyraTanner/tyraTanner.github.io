// This file is a module. It is not linked to the HTML file. It will be executed when the browser reads the import instruction from the script file.

// const price = 50;
// const tax = 5;

// export default "This is the only default value";
// export { price, tax };

const getRandomObject = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data[0];
};
const firstObject = await getRandomObject();
export { firstObject };
