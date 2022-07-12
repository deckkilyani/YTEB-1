const router = require('express').Router();
const grabLink =require('../index')

router.get('/', (req, res) => {
    res.render('index');
    
})

router.post('/',async (req, res) => {
    const {url} = req.body;
    const grabber = grabLink(url, 'max');
    console.log(grabber);
    res.render('index', {url: grabber});
    if(grabber === 'Please Provide Link' || !grabber){
        res.render('index', {url: 'Please Provide Link'});
    } else if(grabber === 'Please Check Youtube Video Link'){
        res.render('index', {url: 'Please Check Youtube Video Link'});
    }
})
module.exports = router;
