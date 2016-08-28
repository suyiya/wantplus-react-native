/**
 * Created by SUYIYA on 16/8/28.
 */

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod')
} else {
    module.exports = require('./configureStore.dev')
}