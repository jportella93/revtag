/**
 * @description Will call the function when ms have passed.
 * @param {function} fn
 * @param {number} ms
 */
const retard = (fn, ms) => {
  setTimeout(() => fn(), ms);
};

export default retard;
