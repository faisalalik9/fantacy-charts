import React, {useState, useEffect} from 'react';
import { Line }  from 'react-chartjs-2';
import axios from 'axios';
import "./Chart.css";
import Arrow from './curve-arrow 1.svg';
const URL = "https://run.mocky.io/v3/3be6c19d-7ae5-4f84-950c-5b4ab4b22537";
function Chart() {
    const [tradeSeries, setTradeSeries] = useState([]);
    var [charttitle, setcharttitle] = useState();
    var[type,settype] = useState();
    var year = [];
    var countryvalue = [];
    var NLD = [];
    var ARE = [];
    var ITA = [];
    var DZA = [];
    var USA = [];
    var FRA = [];
    var DEU = [];
    var KOR = [];
    var MYS = [];
    var NPL = [];
     
    useEffect(()=>{

        async function fetchdata(){
            const request = await axios.get(URL);
            type === "t" ? setTradeSeries(request.data.tradeSeries) : type === "td" ? setTradeSeries(request.data.tradeDeficitSeries) : type === "is" ? setTradeSeries(request.data.importSeries) : type === "es" ? setTradeSeries(request.data.exportSeries) : setcharttitle(null);
            type === "t" ? setcharttitle("Trade") : type === "td" ? setcharttitle("Trade Deficit") : type === "is" ? setcharttitle("Import") : type === "es" ? setcharttitle("Export") : setcharttitle("_____");
            return request;
        }

        fetchdata();
    },[type]);


    tradeSeries.map(t =>{
        year.push(t.year);
        countryvalue.push(t.countryValueList);
        return countryvalue;
    });
    var itr = 0;
    countryvalue.map(country =>{
        country.map(d =>{
            if(d.country === "NLD"){
                NLD.push(d.value);
            }
            else if(d.country === "ARE"){
                ARE.push(d.value);
            }
            else if(d.country === "ITA"){
                ITA.push(d.value);
            }
            else if(d.country === "DZA"){
                DZA.push(d.value);
            }
            else if(d.country === "USA"){
                USA.push(d.value);
            }
            else if(d.country === "FRA"){
                FRA.push(d.value);
            }
            else if(d.country === "DEU"){
                DEU.push(d.value);
            }
            else if(d.country === "KOR"){
                KOR.push(d.value);
            }
            else if(d.country === "MYS"){
                MYS.push(d.value);
            }
            else if(d.country === "NPL"){
                NPL.push(d.value);
            }
           
        });
        itr++;
        while(NLD.length !== itr){
            NLD.push(null);
        }
        while(ARE.length !== itr){
            ARE.push(null);
        }
        while(ITA.length !== itr){
            ITA.push(null);
        }
        while(DZA.length !== itr){
            DZA.push(null);
        }
        while(USA.length !== itr){
            USA.push(null);
        }
        while(FRA.length !== itr){
            FRA.push(null);
        }
        while(DEU.length !== itr){
            DEU.push(null);
        }
        while(KOR.length !== itr){
            KOR.push(null);
        }
        while(MYS.length !== itr){
            MYS.push(null);
        } 
        while(NPL.length !== itr){
            NPL.push(null);
        }
        return country;
    });
    
    
    const data = {
        labels : year,

        datasets: [
             
              {
                data: NLD,
                label: "NLD",
                borderColor: "#3333ff",
                // fill: false,
                // backgroundColor: none,
              },
              {
                data: ARE,
                label: "ARE",
                borderColor: "#33ffff",   
              },
              {
                data: ITA,
                label: "ITA",
                borderColor: "#5f003f",   
              },
              {
                data: DZA,
                label: "DZA",
                borderColor: "#f72585",   
              },
              {
                data: USA,
                label: "USA",
                borderColor: "#ffea00",   
              },
              {
                data: FRA,
                label: "FRA",
                borderColor: "#52b788",   
              },
              {
                data: DEU,
                label: "DEU",
                borderColor: "#ef6351",   
              },
              {
                data:KOR,
                label: "KOR",
                borderColor: "#2FFE90",   
              },
              {
                data: MYS,
                label: "MYS",
                borderColor: "#335c67",   
              },
              {
                data: NPL,
                label: "NPL",
                borderColor: "#f9bec7",   
              },

            ],
         
    }

    function handleClickt(value){
        settype(value);
    }
  
    return (
        <div>
             <div className="chart-types-top">Please select a type of Series from below list <img src={Arrow} alt ="Arrow"></img></div>
             <div className="chart-types">
                <div onClick={ ()=>{ handleClickt("t")}} >Trade Series</div>
                <div onClick={ ()=>{ handleClickt("td")}} >Trade Deficit Series</div>
                <div onClick={ ()=>{ handleClickt("is")}} >Import Series</div>
                <div onClick={ ()=>{ handleClickt("es")}} >Export Series</div>
            </div>
            <Line data={data} height={400} width={600} />
            <h3 className="chart-title">Chart for {charttitle} Series</h3>
        </div>
    )
}

export default Chart
