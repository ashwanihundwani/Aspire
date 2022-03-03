const axios = require('axios').default;


export const fetchDebitCard = async () => {
    try {
        let response = await axios.get('http://my-json-server.typicode.com/ashwanihundwani/mockJSONServer/debitCard')
        return response
    }
    catch (error) {
        console.log(error)
        return error
    }
}