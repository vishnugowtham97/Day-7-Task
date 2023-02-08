//a.All the countries from Asian continent usinf filter
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(countries => {
    const asianCountries = countries.filter(country => country.region === "Asia");
    asianCountries.forEach(country => {
      console.log(country.name.common);
    });
  });
//b.population less than 2 lakhs using filter
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(countries => {
    const smallPopulationCountries = countries.filter(country => country.population < 200000);
    smallPopulationCountries.forEach(country => {
      console.log(country.name.common);
    });
  });
//c.Details name, capital, flag using forEach function
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(countries => {
    countries.forEach(country => {
      console.log(`
        Name: ${country.name.common}
        Capital: ${country.capital}
        Flag: ${country.flags.png}
      `);
    });
  });

//d. total population using reduce function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all")
request.send();
request.onload = function () {
    var data = JSON.parse(this.responseText);
    var result = data.reduce((acc, ele) => {
    if(typeof acc ==="object"){
    return acc.population + ele.population;
    }
    return acc + ele.population;
    });
    console.log(result);
    }

//e. country uses US Dollars as currency.
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(countries => {
    const countryUsingUSD = countries.filter(country => country.currencies.includes("USD"));
    console.log(`The country that uses US Dollars as its currency is ${countryUsingUSD[0].name.common}`);
  });

