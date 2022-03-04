const axios = require('axios').default;


export const fetchDebitCard = async () => {
    try {
        let response = await axios.get('https://my-json-server.typicode.com/ashwanihundwani/mockJSONServer/debitCard')
        return response
    }
    catch (error) {
        return error
    }
}