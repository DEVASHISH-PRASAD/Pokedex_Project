function useDebounce(cb, delay = 1200) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
export default useDebounce;
