let timeoutId;
const debounce = (func, delay)=> {
    return (...args)=> {
    if (timeoutId) {
    clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        func.apply(null, args);
    }, delay);
    }
    };
    