// default export
function double(num) {
    return num * 2; 
}

export { triple } from './triple.js'; // Aggregating export
export default double;
// export { double, triple };