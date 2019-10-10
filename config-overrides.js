const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(    
    addWebpackAlias({        
        ["ASSET"]: path.resolve(__dirname, "src/assets"),        
        ["COMPONENT"]: path.resolve(__dirname, "src/Components") 
    })
)
