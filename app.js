

const countryName = document.getElementById('countryName')
const confirmed = document.getElementById('confirmed-all')
const death  = document.getElementById('deathsAll')
const recovered = document.getElementById('recoveredAll')
const active = document.getElementById('activeAll')
const form = document.getElementById('form')
const input = document.getElementById('input-text')
const flag = document.querySelector('.flag-img')




form.addEventListener('submit', function(e){
    e.preventDefault()
    const country = input.value
    let api = `https://api.covid19api.com/live/country/${input.value}/status/confirmed`
    fetch(api).then( function (data){
        return data.json()
    }).then(getResult)
    
   
})



function getResult(newData){
const country = newData[newData.length - 1];
 confirmed.textContent = country.Confirmed
console.log(country);
countryName.textContent = country.Country
death.textContent = country.Deaths
recovered.textContent = country.Recovered
active.textContent = country.Active
flag.src = `https://www.countryflags.io/${country.CountryCode}/shiny/64.png`
}
