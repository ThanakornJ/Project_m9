import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { ResponsiveContainer, LineChart, BarChart, Bar,Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip,PieChart,Pie } from 'recharts'

function SaveCaloriesDay({ className }) {
  const [calfood, setCalfood] = useState([]);
  const [calexercise, setCalexercise] = useState([]);
  const history = useHistory();
  const [target, setTarget] = useState(0);
  const [ex, setEx] = useState(0);
  const [result,setresult] = useState(0);
  const [sumfood,setSumfood] =useState(0);
  const [sumexercise,setExercise] =useState(0);
  const [tdee,setTdee]=useState(0);
  const [fd, setFd] = useState(0);
  
  useEffect(async () => {
    await axios
      .get("http://localhost:5050/api/save-food/show", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_user"),
        },
      })
      .then((res) => {
        console.log(res);
        setCalfood(res.data);
        console.log(res.data);
        setFd(res.data[0].saveFoodID);
        let total = 0; 
        res.data.forEach((item) => {
          total += parseFloat(item.food.caloriesFood.calories_total);
        });

        setSumfood(total);
      })
      .catch((err) => {
        console.log(err);
        console.log(`555+`);
      });
  }, []);

  console.log(sumfood);
  useEffect(async () => {
    await axios
      .get("http://localhost:5050/api/showtarget/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_user"),
        },
      })
      .then((res) => {
        console.log(res);
        setTdee(res.data[0].calorieDEIT);
       
      })
      .catch((err) => {
        console.log(err);
        console.log(`555+`);
      });
  }, []);
  useEffect(async () => {
    await axios
      .get("http://localhost:5050/api/save-exercise/show", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_user"),
        },
      })
      .then((res) => {
        console.log(res);
        setCalexercise(res.data);
        console.log(res.data);
        setEx(res.data[0].saveExerciseID);
        console.log(res.data[0].saveExerciseID);
        let total = 0; 
        res.data.forEach((item) => {
          total += parseFloat(item.exercise.exercise_cal);
        });
        setExercise(total);
      })
      .catch((err) => {
        console.log(err);
        console.log(`555+`);
      });
  }, []);
  console.log(sumexercise);

  useEffect(() => {
    setresult(((parseFloat(tdee)-(sumfood))+sumexercise));
  }, [tdee,sumfood,sumexercise])

  function bttdel(e, id) {
    e.preventDefault();
    axios
      .delete(`http://localhost:5050/api/save-food/delete/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_user"),
        },
      })
      window.location.reload();
  }

  
  function bttdelexercies(e, id) {
    e.preventDefault();
 
    axios
      .delete(`http://localhost:5050/api/save-exercise/delete/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_user"),
        },
      })
      window.location.reload();
  }

  const data = [
    
    { 
      date:'6/11/64',
      calfood:sumfood,
      calexercise:sumexercise,

    },
  ];
 
   
  return (
    <div className={className}>
      <div className="container">
      
      
 
  <div className="title">

  <center> <h1>???????????????????????????????????????????????????</h1></center>
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
  
        
      
     
<center>
  <h1>?????????????????????????????????????????????????????????????????????????????????
</h1>
<h1>{result.toFixed(2)} Cal</h1>

</center>

      <table id="customers">
   
  <tr>
    <th>????????????????????????????????????????????????????????????????????????????????? 1 ?????????</th>
    <th>Contact</th>
  </tr>
  <tr>
    <td>???????????????????????????????????????????????????????????????????????? ( DEIT )</td>
    <td>{result.toFixed(2)}</td>
  </tr>
  <tr>
    <td>??????????????????????????????????????????????????????</td>
    <td>{sumfood}</td>
  </tr>

  <tr>
    <td>?????????????????????????????????????????????????????????????????????????????????</td>
    <td>{sumexercise}</td>
  </tr>
  


</table>
        <table id="customers">
          <tr>
            <th>Menu</th>
            <th>Calories</th>
            <th>Unit</th>
            <th>Delete</th>
          </tr>
          {calfood.map((food) => {
            return (
              <tr>
                <td>{food.food.food_name} </td>
                <td>{food.food.caloriesFood.calories_total} </td>
                <td>?????????????????????????????????</td>
                <td className="del">
                  <button
                    class="button"
                    onClick={(e) => {
                      bttdel(e,fd);
                    }}
                  >
                    ??????
                  </button>
                </td>
              </tr>
            );
            // <td>{p.ingredientName}</td>;
          })}
        </table>
       
        <table id="customers">
          <tr>
            <th>Exercise</th>
            <th>Calories</th>
            <th>Unit</th>
            <th className="co3">Delete</th>
          </tr>
          {calexercise.map((p) => {
            return (
              <tr>
                <td>{p.exercise.exercise_name} </td>
                <td>{p.exercise.exercise_cal} </td>
                <td>?????????????????????????????????</td>
                <td className="del">
                <button
                    class="button"
                    onClick={(e) => {
                      bttdelexercies(e,ex);
                    }}
                  >
                    ??????
                  </button>
                </td>
              </tr>
            );
            // <td>{p.ingredientName}</td>;
          })}
        </table>
      </div>
    </div>
  );
}
SaveCaloriesDay.propTypes = {
  className: PropTypes.string.isRequired,
};
export default styled(SaveCaloriesDay)`
  * {
    margin: 0 auto;
  }
  .container {
    width: 1100px;
  }
  th.co3{
    width:10%
  }
  th{
    width: 30%;
  }
  #customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 40px;
  }

  #customers td,
  #customers th {
    border: 1px solid #ddd;
    padding: 8px;
    
  }
  .button {
    width: 100%;
    background-color: #ce2e07;
    border: none;
    color: white;
    
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
   
    cursor: pointer;
  }

  #customers tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  #customers tr:hover {
    background-color: #ddd;
  }

  #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
  }
`;
