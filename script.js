var c=0;
document.querySelector('.menu-btn').addEventListener('click',function(){
    if(c==0){
        document.getElementById('home-page').style.backgroundImage = '#000';
        document.getElementById('menu-img').src ="assets/close.svg";
        document.getElementById('logo-img').src ="assets/shopify_single_logo.svg";
        document.querySelector('.t-2').style.display='none';
        document.querySelector('.t-3').style.display='none';
        document.querySelector('.t-4').style.display='none';
        document.querySelector('.t-5').style.display='none';
        document.querySelector('.about').style.display='none';
        document.querySelector('.heading-text').style.display='none';
        c=1;
    }
    else{
        document.getElementById('home-page').style.backgroundImage = '#fff';
        document.getElementById('menu-img').src ="assets/Menu.svg";
        document.getElementById('logo-img').src ="assets/Shopify_Main_Logo.svg";
        document.querySelector('.t-2').style.display='inline-block';
        document.querySelector('.t-3').style.display='inline-block';
        document.querySelector('.t-4').style.display='inline-block';
        document.querySelector('.t-5').style.display='inline-block';
        document.querySelector('.about').style.display='block';
        document.querySelector('.heading-text').style.display='block';
        c=0;
    }
});