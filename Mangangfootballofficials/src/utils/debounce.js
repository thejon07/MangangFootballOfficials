import axios from "axios";

const debounce = (fn, delay) => {
    let timeout;
    return function (...args) {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
};

const mainfunction = async (title) => {
    try {
        // Use POST and send `title` in the request body
        const searchdata = await axios.post("/users/searchpost", { title });
        return searchdata.data; // Return actual data
    } catch (error) {
        console.error("Error while getting data:", error);
    }
};

export { debounce, mainfunction };
