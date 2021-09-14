/*global console*/ 

var classList = ["class-one","class-two",".class-three",".class-four"],
    randomKey = Math.floor(Math.random() * classList.length); 

    
document.body.setAttribute('class', classList[randomKey]); // w hna bm3na 7ota fa attr al class kol mar rakm mn randomKey aly bdol 3la classList w ya9er style al page 



//console.log(Math.floor(Math.random() * classList.length)); // b3na any bdrba rakm 3sho2y fa al array bt3na classList w al rakm aly bytl3a b2rbo 3ashn me5rogsha mn takm s7i7a mn 0 al 3 

