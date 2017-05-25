const request = require('request-promise-native')

const createErrorDescription = (code, err) => {
    switch (code) {
        case 400:
            return 'Bad Request'

        case 401:
            return 'Unauthorized: Be sure you configured the integration to use a valid API key'

        case 403:
            return 'Invalid request: ${err.source} ${err.message}'

        case 404:
            return 'Not Found ${err.source} ${err.message}'

        case 503:
            return `Short URL service currently under maintenance. Retry later`
        
        default:
            return `Unexpected error connecting to Rebrandly APIs`

    }

}
