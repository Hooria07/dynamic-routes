import Header from "@/app/component/Header";

export default function CountryName({ params }: any) {

    const countries: { 
      name: string;
      population: number;
      capital: string;
    }[] = [
      {
        name: "Pakistan",
        population: 241492197,
        capital: "Islamabad",
      },
      {
        name: "India",
        population: 1454709408,
        capital: "Delhi",
      },
      {
        name: "China",
        population: 1418374740,
        capital: "Beijing",
      }, {
        name: "Canada",
        population: 38232593,
        capital: "Ottawa",
      },
      {
        name: "Japan",
        population: 123753041,
        capital: "Tokyo",
      },
    ];
  
  
    function findCountry(country_url:string){
          return countries.find(country=> country.name.toLowerCase() == country_url.toLowerCase());
    }
  
    let result = findCountry(params.country_name);
  
    return (
      <div>
        <Header />
          {
              result ? (
                  <>
               
                      <h1><b>Country Name: {result.name} </b></h1>
                      <h1><b>Country Capital: {result.capital} </b></h1>
                      <h1><b>Country Population: {result.population} </b> </h1>
                  </>
              ) : (
                      <h1>{params.country_name} Not Found</h1>
              )
          }
        
      </div>
    );
  }