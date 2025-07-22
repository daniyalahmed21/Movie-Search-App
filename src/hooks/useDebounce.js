function useDebounce(callback, delay) {
  let timerId ;
  return (...args) => {
    clearTimeout(timerId);
    setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

export default useDebounce;
