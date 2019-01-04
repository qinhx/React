import React from 'react';
import thunkMiddleWare from 'redux-thunk'
//TODO: change to your city code according to http://www.weather.com.cn/
const cityCodes = {
  '北京':101010100,
  '上海':101020100,
  '广州':101280101
};


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
