 
const fs = require('fs');
const Typography = require('typography')
const lincolnTheme = require('typography-theme-lincoln')

const typography = new Typography(lincolnTheme.default)

const ROOT_APP_PATH = fs.realpathSync('.'); 
const FILE_PATH = `${ROOT_APP_PATH}/public/style/typography.css`

fs.writeFile(FILE_PATH, typography.toString(), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log(FILE_PATH, " was saved!");
}); 

