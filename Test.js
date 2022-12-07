import http from 'k6/http';
import { sleep, check } from 'k6';

export default function () {

let urls = ['https://lab.system123.ru/rest/api/Companies/GetUserCatalogWithoutLinkedUsers',
'https://lab.system123.ru/rest/api/Users/GetUserInfo', 
'https://lab.system123.ru/rest/api/Users/GetUserGuid', 
'https://lab.system123.ru/rest/api/Projects/GetProductTypes',
'https://lab.system123.ru/rest/api/Companies/GetForUser', 
'https://lab.system123.ru/rest/api/Projects/GetSourceTypes', 
'https://lab.system123.ru/rest/api/WorkplaceStructures/GetRootsForUser?IdCompany=19',
'https://lab.system123.ru/rest/api/Projects/GetForUser?IdParentStructure=6914&limit=15'
 ];

    const params = {
headers:{
    'Content-type':'application/json',
    'Authorization':'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjBBN0I5ODE5MDgxNzc4NzY4MjRFQjdCOTc0QkQ3RDM2IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NzA0NDQ2MzAsImV4cCI6MTY3MDQ0ODIzMCwiaXNzIjoiaHR0cHM6Ly9sYWIuc3lzdGVtMTIzLnJ1L2lkZW50aXR5IiwiYXVkIjoiaGVscGVyNHRlc3RfYXBpIiwiY2xpZW50X2lkIjoid2ViLWJ1c2luZXNzLWFwcCIsInN1YiI6ImU3ZmY0YmYwLTdlZTAtNDc3NC05YmUwLTAyMGVjN2IyMjA5OCIsImF1dGhfdGltZSI6MTY3MDQ0NDYzMCwiaWRwIjoibG9jYWwiLCJpYXQiOjE2NzA0NDQ2MzAsInNjb3BlIjpbImhlbHBlcjR0ZXN0X2FwaSIsIm9wZW5pZCIsInByb2ZpbGUiLCJ3ZWJfYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.Jx7njVQdQWLcsnBYjULjY8dYpt1F3PAjPGZyXJ0J6P0inkGib16Ab_TLkfaKbt22nR93x9osa6jTutnDZrSe8XM1DcYxBx6BTaPg83FSt_htFINFiFVzOMB6UUJOuzE63ox_3uoBHsoCEfzcSPlGxMkFEZ4uXo3cSBNb1bGkoAuMSL4dRoUdbyLhGjszNjCq36RheX74E5jeng5DMRhBDF1NNZUroRAEdMMk-Ux-Yc7Xs2mWGowsykRXjJS8LSGIyftnswaumVIPz-1hSk6mc4nF1TcFqP9qhnCU38i1KyaH8xiOyqfEMNu2bzpJQlNYp2TbmYzOecmoxWIIagaBYQ',
}

};


for (let value of urls ){
   
    
    let res = http.get(value, params);
    console.log(value +' '+ String (res.timings.duration) + 'ms');
    //check(res, {'is status 200':(r) => r.status ===200});
    sleep(1);
    value+=1;



}

  
  





}