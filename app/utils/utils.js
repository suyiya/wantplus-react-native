/**
 * Created by SUYIYA on 16/8/28.
 */

'use strict'

var Dimensions = require('Dimensions');

var utils = {
    /**
     * 客户端窗口宽度
     */
    width: Dimensions.get('window').width,

    /**
     * 客户端窗口高度
     */
    height: Dimensions.get('window').height,

    mainColor: '#2fdab8'
};

module.exports = utils;
