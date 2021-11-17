import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import Target from "../../pages/Target";

function ShowTarget({ className }) {
  const [posts, setPosts] = useState([]);
  const [energy, setEnergy] = useState([]);
  const [target, setTarget] = useState(0);
  const [life,setLife] = useState("");
  const history = useHistory();

  useEffect(async () => {
    await axios
      .get("http://localhost:5050/api/target/show", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_user"),
        },
      })
      .then((res) => {
        console.log(res);
        setPosts(res.data);
        console.log(res.data);
        setTarget(res.data[0].targetID);
        setLife(res.data[0].liftStyle);
       
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(`asdasd`+typeof(life));
  function name(params) {
    var xx="";
    if(life=="1.20"){
      xx="นั่งทำงานอยู่กับที่ ไม่ได้ออกกำลังกายเลย";
      console.log(xx);
      setLife(xx);
    }
    else if(life=="1.38"){
      xx="ออกกำลังกายเบาๆ 1-3 ";
      console.log(xx);
      setLife(xx);
    }
    else if(life=="1.55"){
      xx="ออกกำลังกายปานกลาง 3-5 ";
      console.log(xx);
      setLife(xx);
    }
    else if(life=="1.70"){
      xx="ออกกำลังกายหนัก 6-7 ";
      console.log(xx);
      setLife(xx);
    }
    else if(life=="1.90"){
      xx="ออกกำลังกายอย่างหนักเป็นประจำ เพื่อซ้อมในการแข่งขัน";
      console.log(xx);
      setLife(xx);
    }
  }
  name();
  useEffect(async () => {
    await axios
      .get("http://localhost:5050/api/showtarget/", { })
      .then((res) => {
        console.log(res);
        setEnergy(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function bttdel(e, id) {
    e.preventDefault();
    axios
      .delete(`http://localhost:5050/api/target/delete/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_user"),
        },
      })
      .then(() => {
        history.push("/Target");
      });
  }

  return (
    <div className={className}>
      {posts.map((post) => (
        <div className="item">
          <p className="headertitle">ข้อมูลส่วนตัว</p>
          <table id="customers">
            <tr>
              <th>Topic</th>
              <th>Value</th>
              <th>Unit</th>
            </tr>
            <tr>
              <td>น้ำหนัก</td>
              <td>{post.weight}</td>
              <td>กิโลกรัม</td>
            </tr>
            <tr>
              <td>ส่วนสูง</td>
              <td>{post.height}</td>
              <td>เซนติเมตร</td>
            </tr>
            <tr>
              <td>อายุ</td>
              <td>{post.age}</td>
              <td>ปี</td>
            </tr>
            <tr>
              <td>ต้องการลดน้ำหนักเหลือ</td>
              <td>{post.lostWeight}</td>
              <td>กิโลกรัม</td>
            </tr>
            <tr>
              <td>1 เดือนต้องการลดไปกี่กิโลกรัม</td>
              <td>{post.lostWeightMonth}</td>
              <td>กิโลกรัม</td>
            </tr>
            <tr>
              <td>ไลฟ์สไตล</td>
              <td>{life}</td>
              <td>วันต่อสัปดาห์</td>
          
            </tr>
            {/* <tr>
              <td>ตั้งเป้าหมาย</td>
              <td>{post.creatAt}</td>
              <td>วันต่อสัปดาห์</td>
          
            </tr> */}
          </table>
          {energy.map((post) => (
            <table id="customers">
                        <p className="headertitle">พลังงานแคลอรี่ต่อวัน</p>

              <tr>
                <th>Topic</th>
                <th>Value</th>
                <th>Unit</th>
              </tr>
              <tr>
                <td>ค่า BMR (พลังงานที่ร่างการเผาพลาญ)</td>
                <td>{post.calorieBMR} </td>
                <td>กิโลแคลอรี่</td>
              </tr>
              <tr>
                <td>ค่า TDEE (พลังงานที่ใช้ในชีวิตประจำวัน)</td>
                <td>{post.calorieTDEE} </td>
                <td>กิโลแคลอรี่</td>
              </tr>
              <tr>
                <td>ค่า DEIT (พลังงานที่ใช้ในการลดน้ำหนัก)</td>
                <td>{post.calorieDEIT}</td>
                <td>กิโลแคลอรี่</td>
              </tr>
            </table>
          ))}
        </div>
      ))}
      <center class="btt">
        <button
          className="bttTarget"
          onClick={(e) => {
            bttdel(e, target);
          }}
        >
          <Link to="/Target" className="btn-link-privacy">
            ตั้งเป้าหมายใหม่
            
          </Link>
        </button>
      </center>
    </div>
  );
}
ShowTarget.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(ShowTarget)`
  * {
    margin: 0 auto;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   

  }
  .item {
    width: 1200px;
 
  }
  td{
    width:33.33%
  }
  #customers {

    border-collapse: collapse;
    width: 100%;
  }
  .headertitle{
    font-size:30px;
  margin-top: 25px;
  margin-bottom: 25px;
  }

  #customers td,
  #customers th {
    border: 1px solid #ddd;
    padding: 8px;
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
  .btt {
  
    width: 300px; 
 
  }
  button{
    background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  }
  .p-text{
    font-size:20px;
    color:black;
    
  }
  button:hover{
    background-color: #be4823;
transition:.5s;
  

 
  }
 
`;
