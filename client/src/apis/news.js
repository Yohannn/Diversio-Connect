import axios from 'axios';

const newsapi_key = "608d4dab52f14569a0060b4732e31b34";

export default axios.create({
    baseURL: "https://newsapi.org/v2",
    params: {
        country: "us",
        category: "business",
        apiKey: newsapi_key
    }
    
})