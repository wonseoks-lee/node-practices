const express = require('express');

const router = express.Router();

router.route('').get(function(req, res){
     res.render('user/info', {
         no: req.query.no || 0
     });
});

//  순서를 아래메서드보다 먼저 이 메서드를 실행해줘야 join을 pathVariable(no)로 인식하지 않는다
router.route('/join').get(function(req, res){
     res.render('user/join');
});



router.route('/join').post(function(req, res){
     console.log(req.body);
     res.redirect("/");
});

router.route('/api').get(function(req, res){
    vo = {
        no: 10,
        name: '둘리',
        email: 'dooly@gmail.com',
        gender: 'male'
    } 
    // res.writeHead(200,{
    //      'Content-Type': 'application/json'
    //  })
    //  res.end(JSON.stringify(vo));

    res.send(vo);
});

router.route('/:no').get(function(req, res){
    res.render('user/info', {
        no: req.params.no || 0
    });
});


module.exports = router;