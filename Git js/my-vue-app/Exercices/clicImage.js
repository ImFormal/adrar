document.addEventListener('click', function(eventClick){
    console.log(eventClick);
    console.log('Les coord : ',eventClick.x, eventClick.y);
    const monImg = document.createElement('img');
    const tailleImg = 300;
    monImg.setAttribute('src', `https://picsum.photos/${tailleImg}/${tailleImg}`);
    monImg.style.position = 'absolute';
    monImg.style.top = eventClick.y - tailleImg /2 +'px';
    monImg.style.left = eventClick.x -tailleImg /2 +'px';
    document.body.append(monImg);
});