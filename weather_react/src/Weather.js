import React from 'react';
//TODO: change to your city code according to http://www.weather.com.cn/
import * as Status from './status'
import { connect } from 'react-redux'

const Weather = ()=>{
    switch(status){
        case Status.Loading:
            return (<div>天气请求中</div>)
        case Status.Success:
            return (
                <div>
                    <h2>去看console.log（）中的信息</h2>
                </div>
            )
        case Status.Fail:
            return (
                <div>获取失败</div>
            )
        default:
            return (
                <div></div>
            )
    }
}

const mapStateToProps=(state)=>{
    const weatherData = state.weather;
    return {
        status: weatherData.status,
        cityNmae: weatherData.cityNmae,
        weather: weatherData.weather,
        lowertemp: weatherData.temp1,
        highesttemp: weatherData.temp2  
    }
}
export default connect(mapStateToProps)(Weather)
// class Weather extends React.Component {
//   constructor() {
//     super(...arguments);

//     this.state = {weather: null};
//   }

//   componentDidMount() {
//     const apiUrl = `/data/cityinfo/${cityCode}.html`;
//     fetch(apiUrl).then(Response=>{
//       if(Response.status!==200){
//         console.log("访问失败")
//       };
//       console.log(Response)
//       Response.json().then((data=>{
//         this.setState({
//           weather:data.weatherinfo
//         })
//       }))
//     }).catch(err=>{
//       console.log("????????????")
//     })
//   }

//   render() {
//     if (!this.state.weather) {
//       return <div>暂无数据</div>;
//     }

//     const {city, weather, temp1, temp2} = this.state.weather;

//     return (
//       <div>
//         {city} {weather} 最低气温 {temp1} 最高气温 {temp2}
//       </div>
//     )
//   }
// }

// export default Weather;
