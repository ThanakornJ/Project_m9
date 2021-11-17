import React from "react";
import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";
import { ResponsiveContainer, LineChart, BarChart, Bar,Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts'
function ChartCalories({ className }) {

  
    const data = [
      {
        date:'1/11/64',
        calfood:2000,
        calexercise:300,
        name: 'Python',
        student: 13,
        fees: 10
      },
      {
        date:'2/11/64',
        calfood:1400,
        calexercise:600,
        name: 'Javascript',
        student: 15,
        fees: 12
      },
      {
        date:'3/11/64',
        calfood:1200,
        calexercise:1000,
        name: 'PHP',
        student: 5,
        fees: 10
      },
      {
        date:'4/11/64',
        calfood:1500,
        calexercise:0,
        name: 'Java',
        student: 10,
        fees: 5
      },
      {
        date:'5/11/64',
        calfood:1900,
        calexercise:100,
        name: 'C#',
        student: 9,
        fees: 4
      },
      { 
        date:'6/11/64',
        calfood:1600,
        calexercise:400,
        name: 'C++',
        student: 10,
        fees: 8
      },
    ];
    return (
      <div className={ className }>
        <div className="container">
        {/* < h1>LineChart</h1>
        <ResponsiveContainer width="100%" aspect={3}>
  
          <LineChart data={data} width={500} height={300} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " Programing "} />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
            <Legend />
            <Line type="monotone" dataKey="student" stroke="red" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer> */}
  <div className="title">

    <h1>แคลอรี่ 7 วันที่ผ่านมา</h1>
  </div>
          
        <ResponsiveContainer width="100%" aspect={3}>
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="date"/>
          <YAxis />
          <Legend width={120} wrapperStyle={{ top: 60, right: -20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }}/>
          <Tooltip contentStyle={{ backgroundColor: 'white' }} />
          <Bar dataKey="calfood" barSize={45} fill="green"/>
          <Bar dataKey="calexercise" barSize={45} fill="orange"/>
  
        </BarChart>
        </ResponsiveContainer>
  
        
        </div>
      </div>
    
  );
}
ChartCalories.propTypes = {
  className: PropTypes.string.isRequired,
};
export default styled(ChartCalories)`
  * {
    margin: 0 auto;
    
  }
  .container{
    width: 1300px;
  }

  .title {
    margin-bottom:50px;
    text-align: center;
  }
  
`;
