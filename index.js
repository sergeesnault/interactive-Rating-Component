const starRates = document.getElementsByClassName("rate")
const submitBtn = document.getElementById('submitBtn')
let rating = ''

for(const rate of starRates){
    rate.addEventListener('click',starRateSelected)
}

function starRateSelected(){

     const c = document.getElementsByClassName('active')
     
     if(c.length > 0){
        c[0].className = c[0].className.replace(' active', '')
      }
       
     this.className += ' active'

     rating = this.innerHTML 
} 

submitBtn.addEventListener('click', displayThankYouCard)

function displayThankYouCard(){

  if(rating != ''){
    document.getElementById('rating__card__container').style.display = 'none'
    document.getElementById('thankYou__card__container').style.display = 'block'
    document.getElementById('rating').innerHTML = `You selected ${rating} out of 5`
  }
  
}
