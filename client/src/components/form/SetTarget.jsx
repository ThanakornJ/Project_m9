import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
function SetTarget({ className }) {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [weightlose, setWeightlose] = useState(0);
  const [weightlosemonth, setWeightlosemonth] = useState(0);
  const [lifestyle, setLifestyle] = useState(0);
  const [target, setTarget] = useState("");

  function btt(params) {
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
    }).then((result) => {

        if (result.isConfirmed) {
          addTarget();
            Swal.fire("Saved!", "", "success");
            
        } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
        }
    });
}
const addTarget = () =>{
  console.log(lifestyle);
  console.log(gender);
  axios.post('http://localhost:5050/api/target/create',{
    weight:parseFloat(weight),
    height:parseFloat(height),
    age:parseFloat(age),
    gender:gender,
    lostWeight:parseFloat(weightlose),
    lostWeightMonth:parseFloat(weightlosemonth),
    liftStyle:parseFloat(lifestyle)
  }, { headers: {
    "Authorization": "Bearer " + localStorage.getItem("token_user")
  }})
  .then(()=>[
  ...target,
    {
      weight:weight,
      height:height,
      age:age,
      gender:gender,
      lostWeight:weightlose,
      lostWeightMonth:weightlosemonth,
      liftStyle:lifestyle
    }
  ]).catch((err) => {
    console.log(err.response);
  })
}

  return (
    
    <div className={className}>
      <form className="form-area">
        <p className="title">ตั้งเป้าหมายในการลดน้ำหนัก</p>
        <br />

        <label className="">น้ำหนัก</label>
        <input
          type="number"
          class="form-control"
          id="floatingPassword"
          onChange={(event) => {
           setWeight(event.target.value);
          }}
          autocomplete="off" placeholder="60"
        />

        <label>ส่วนสูง</label>
        <input
          type="number"
          class="form-control"
          id="floatingInput"
          onChange={(event) => {
            setHeight(event.target.value);
          }}
          autocomplete="off" placeholder="165"

        />

        <label for="floatingInput">อายุ</label>
        <input
          type="number"
          class="form-control"
          autocomplete="off" placeholder="19"
         
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />

        <label for="floatingInput">เพศ</label>
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          onChange={(event) => {
            setGender(event.target.value);
          }}
          value="female" autocomplete="off"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          หญิง
        </label>
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          onChange={(event) => {
            setGender(event.target.value);
          }}
          value="male"
        />

        <label class="form-check-label" for="flexRadioDefault1">
          ชาย
        </label>
        <br />
        <br />
<hr />
        <label for="floatingInput">ต้องการลดน้ำหนักเหลือ</label>

        <input type="number" class="form-control" id="floatingInput" min="20" placeholder="50"
         onChange={(event) => {
            setWeightlose(event.target.value);
          }}/>

        <label for="floatingInput">1 เดือนต้องการลดกี่กิโล</label>

        <input
          type="number"
          class="form-control"
          id="floatingInput"
          placeholder="แนะนำเดือนละ 1 กิโล ลดได้ไม่เกิน 10 กิโลต่อเดือน"
          required min="1" 
          onChange={(event) => {
            setWeightlosemonth(event.target.value);
          }}
         
        />
        <label for="floatingInput">การใช้ชีวิต</label>

        <select
          class="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
          onChange={(event) => {
            setLifestyle(event.target.value);
          }}
          
        >
          <option selected>ตัวเลือก</option>
          <option value="1.2">นั่งทำงานอยู่กับที่ ไม่ได้ออกกำลังกายเลย</option>
          <option value="1.375">ออกกำลังกายเบาๆ 1-3 วันต่อสัปดาห์</option>
          <option value="1.55">ออกกำลังกายปานกลาง 3-5 วันต่อสัปดาห์</option>
          <option value="1.7">ออกกำลังกายหนัก 6-7 วันต่อสัปดาห์</option>
          <option value="1.9">
            ออกกำลังกายอย่างหนักเป็นประจำ เพื่อซ้อมในการแข่งขัน
          </option>
        </select>
        {/* <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>ผลลัพท์ที่ต้องการเห็นในแต่ละอาทิตย์</option>
                        <option value="1">แบบรวดเร็วมาก (นน.ลดอาทิตย์ละ 1 กก.)</option>
                        <option value="2">แบบเร็ว (นน.ลดอาทิตย์ละ 0.5 กก.)</option>
                        <option value="3">แบบธรรมดา (นน.ลดอาทิตย์ละ 0.33 กก.)</option>
                        <option value="4">แบบค่อยๆ (นน.ลดอาทิตย์ละ 0.25 กก.)</option>

                    </select> */}
        <center className="btt">
          <Link to="/show-target"> <button type="button" onClick={addTarget}>ตกลง</button></Link>
        </center>
      </form>
    </div>
  );
}

SetTarget.propTypes = {
  className: PropTypes.string.isRequired,
};
export default styled(SetTarget)`
  * {
    margin: 0 auto;
  }
  .form-area {
    width: 500px;
    padding: 2rem;
    box-shadow: 3px 4px 5px 0.3px rgb(0 0 0 / 10%);
    border: 1px solid rgba(0,0,0,0.1);
  }
 
  .title{
    text-align:center;
    font-size: 1.8rem;
    text-decoration:underline solid red;
  }
  input[type="number"],select{
    width: 100%;
    height: 45px;
    margin-top: 10px;
    margin-bottom: 6px;
  
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
  margin: 4px 2px;
  cursor: pointer;
}
button:hover{
  background-color: #3b4b3f99;

}



`;
