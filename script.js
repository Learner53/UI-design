var c=0;
document.querySelector('.menu-btn').addEventListener('click',function(){
	let x=window.innerWidth;
	console.log(typeof(x));
	document.getElementById('menu-img').src ="assets/close.svg";
    document.getElementById('logo-img').src ="assets/shopify_single_logo.svg";
    document.querySelector('.popup').classList.toggle('showhide');
    if(c==0){
    	if(x>=992){
			document.querySelector('.menu-btn').classList.toggle('fixpositiondesktop');
		}else if(x<992 && x>=768){
			document.querySelector('.menu-btn').classList.toggle('fixpositiontab');
		} else if(x>767 && x>=600){
			document.querySelector('.menu-btn').classList.toggle('fixpositionlmob');
		}else{

		}
        
        document.querySelector('.t-2').style.display='none';
        document.querySelector('.t-3').style.display='none';
        document.querySelector('.t-4').style.display='none';
        document.querySelector('.t-5').style.display='none';
        document.querySelector('.about').style.display='none';
        document.querySelector('.heading-text').style.display='none';

        c=1;
    }
    else{
    	document.getElementById('menu-img').src ="assets/Menu.svg";
        document.getElementById('logo-img').src ="assets/Shopify_Main_Logo.svg";
    	if(x>=992){
		document.querySelector('.t-2').style.display='inline-block';
        document.querySelector('.t-3').style.display='inline-block';
        document.querySelector('.t-4').style.display='inline-block';
        document.querySelector('.t-5').style.display='inline-block';
        document.querySelector('.menu-btn').classList.toggle('fixpositiondesktop');
		}else if(x<992 && x>=768){
			document.querySelector('.t-5').style.display='inline-block';
			document.querySelector('.menu-btn').classList.toggle('fixpositiontab');

		} else if(x>767 && x>=600){
			document.querySelector('.menu-btn').classList.toggle('fixpositionlmob');
		}else{
			 
		}
        document.getElementById('home-page').style.backgroundImage = '#fff';
        
        
        document.querySelector('.about').style.display='block';
        document.querySelector('.heading-text').style.display='block';
        c=0;
    }
});