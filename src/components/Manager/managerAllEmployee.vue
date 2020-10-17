<template>
    <div>
      <section id="main">
      <div class="container-fluid">
        <div class="row">
            <div class="maincontent col-lg-9">
              <div class="tab-content mainContent">
                  <div id="cerdit-card" class="tab-pane fade in active">
                    <div class="common-main-div">
                        <p @click="setActivity()" class="backIcon" style="display: block;"><i class="fa fa-angle-left" aria-hidden="true"></i></p>
                        <label>Department</label>
                        <h4>Credit Card</h4>
                          <div class="multiple-select">
                            <div class="row">
                              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <label class="w-100">Display View By:</label>
                                <select class="display-view-by"  v-on:change="setActivity()">
                                  <option>All Employees</option>
                                  <option>Activity</option>
                                </select>
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <label class="w-100">Select Date Range:</label>
                                <div class="calender-Div" @click="calenderBoxShow()" >
                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                    <span class="changeText">{{time1}}</span>
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                    
                                </div>
                                <div class="calender-Box">
                                  <div class="container-fluid">
                                    <div class="row">
                                      <div class="col-lg-6">
                                        <label>From</label>
                                        <div class="from-Calender">
                                          <date-picker v-model="time1" valueType="format" width='150px'></date-picker>
                                          <!-- <i class="fa fa-calendar" aria-hidden="true"></i>
                                          <span>06/10/20</span> -->
                                        </div>
                                      </div>
                                       <div class="col-lg-6">
                                        <label>To</label>
                                        <div class="from-Calender">
                                          <date-picker v-model="time2" valueType="format" width='150px'  @change="calenderBoxShow()"></date-picker>
                                          <!-- <i for="#date-input" class="fa fa-calendar" aria-hidden="true"></i>
                                          <span>06/10/20</span>
                                          <input style="display: none;" id="date-input" type="date" name="to-date"> -->
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-lg-12">
                                        <div class="commonDiv" @click="calenderBoxShow()" >
                                          <p>Today</p>
                                        </div>
                                        <div class="commonDiv">
                                          <p class="weekText" @click="getValue()">Week over Week</p>
                                        </div>
                                        <div class="commonDiv" @click="calenderBoxShow()" >
                                          <p>Month over Month</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>      
                                </div>
                              </div>
                              <div class="selectMonth">
                                <div class="col-lg-6 m-t-20">
                                  <label class="w-100">Select Month:</label>
                                  <select class="display-view-by">
                                    <option>June 2020</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                   <div class="employee-Table" style="display: block;">
                          <div class="table-card-div">
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="table-responsive">
                                <div class="footer">
                                        </div><table class="table table-bordered">
                                        <thead>
                                          <tr class="tooltipRow">  
                                            <th></th>
                                            <th>All Employees</th>
                                            <th>Trend</th>
                                            <th colspan="2">Assigned Time</th>
                                            <th colspan="2">Achieved Time</th>
                                            <th class="tooltipTd">High Focus (Time of Day)
                                               <span class="infoIcon" @mouseleave="mouseLeave" @mouseover="mouseOver">
                                              
                                                <i class="fa fa-info-circle"></i>
                                             
                                                 </span>
                                                 <span class="tooltipData">Descriptor of what the column. The description will be available upon hover.</span>
                                            </th>
                                            <th class="tooltipTdOne">High Focus (Duration) <span class="infoIcon" @mouseleave="mouseLeaveFirst" @mouseover="mouseOverFirst">
                                                <i class="fa fa-info-circle"></i>
                                              
                                              </span>
                                               <span class="tooltipData">Descriptor of what the column. The description will be available upon hover.</span>
                                            </th>
                                            <th class="tooltipTdTwo">Collective Focus Time <span class="infoIcon" @mouseleave="mouseLeaveSecond" @mouseover="mouseOverSecond">
                                              <i class="fa fa-info-circle"></i>
                                              </span>
                                              <span class="tooltipData">Descriptor of what the column. The description will be available upon hover.</span>
                                              </th>
                                            <th>07:00</th>
                                            <th>08:00</th>
                                            <th>09:00</th>
                                            <th>10:00</th>
                                            <th>11:00</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr v-for="(data,i) in empData" :key="i">
                                            <td class="text-center"><i @click="openBox()" class="fa fa-file-text-o" aria-hidden="true"></i>
                                            </td>
                                            <td @click="employeTable()" style="position: relative;">
                                            <div :class="{'triangle':data.notes==true}"></div>
                                            {{data.first_name}} {{data.last_name}}
                                            </td>
                                            <td>
                                                <trend
                                                :data="toconvertArray(data.trend)"
                                            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                                                :padding="8"
                                                :radius="18"
                                                :stroke-width="8"
                                                auto-draw
                                                smooth>
                                            </trend>

                                            </td>
                                            <td>{{data.assigned_time}} h</td>
                                            <td>{{data.assigned_percentage}}%</td>
                                            <td :class="{
                                                  'achrived-target':data.assigned_time == data.achieved_time,
                                                  'below-target':data.assigned_time > data.achieved_time,
                                                  'exceed-target':data.assigned_time < data.achieved_time,

                                                }">{{data.achieved_time}} h</td>
                                            <td :class="{
                                                  'achrived-target':data.assigned_time == data.achieved_time,
                                                  'below-target':data.assigned_time > data.achieved_time,
                                                  'exceed-target':data.assigned_time < data.achieved_time,

                                                }">{{data.achieved_percentage}}%</td>
                                            <td>{{highfocustime(data.flow)}}</td>
                                            <td class="text-center">{{highfocustimeDefrence(data.flow)}}</td>
                                            <td class="text-center">{{setdesignHours(data.total_focus)}}</td>
                                              <td>
                                          <div v-if="data.periods[7]">
                                              <div class="focusBar"
                                              :style="{width:Setdesign(data.periods[7].working),
                                                          marginLeft:mrgin,} ">
                                              
                                              </div>
                                              <div class="workingColor" 
                                                      :style="{width:Setdesign(data.periods[7].focus),
                                                          marginLeft:mrgin,
                                                      }
                                                      ">
                                              </div>
                                          </div>   
                                          </td>
                                  <td>
                                      <div v-if="data.periods[8]">
                                          <div class="focusBar"
                                          :style="{width:Setdesign(data.periods[8].working),
                                            marginLeft:mrgin,} ">
                                          </div>
                                          <div class="workingColor" 
                                                  :style="{width:Setdesign(data.periods[8].focus),
                                                      marginLeft:mrgin,
                                                  }">
                                          </div>
                                      </div>                               
                                  </td>
                                  <td>
                                      <div v-if="data.periods[9]">
                                          <div class="focusBar"
                                          :style="{width:Setdesign(data.periods[9].working),
                                                      marginLeft:mrgin,
                                                  }">
                                          </div>
                                          <div class="workingColor" 
                                                  :style="{width:Setdesign(data.periods[9].focus),
                                                      marginLeft:mrgin,
                                                  }">
                                          </div>
                                      </div>
                                  </td>
                                    <td>
                                            <div v-if="data.periods[10]">
                                            <div class="focusBar"
                                            :style="{width:Setdesign(data.periods[10].working),
                                                        marginLeft:mrgin,
                                                    }">
                                          
                                            </div>
                                            <div class="workingColor" 
                                                    :style="{width:Setdesign(data.periods[10].focus),
                                                        marginLeft:mrgin,
                                                    }">
                                            </div>
                                        </div>
                                    </td>
                                      <td>
                                              <div v-if="data.periods[11]">
                                              <div class="focusBar"
                                              :style="{width:Setdesign(data.periods[11].working),
                                                          marginLeft:mrgin,
                                                      }">
                                              </div>
                                              <div class="workingColor" 
                                                      :style="{width:Setdesign(data.periods[11].focus),
                                                          marginLeft:mrgin,
                                                      }">
                                              </div>
                                          </div>
                                      </td>
                                          </tr>
                                        <div class="open-box col-md-4">
                                                <div class="info-Box">
                                                  <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                                                  <div class="name-Box">
                                                    <h4>Manager</h4>
                                                    <p>14:08 - July 2, 2020</p>
                                                  </div>
                                                </div>
                                                <div class="detail-Box">
                                                <p><strong>Activity:</strong> Application Processing</p>
                                                  <p><strong>Employee:</strong> Anna Thampson</p>
                                                </div>
                                                <div class="note-Box">
                                                  <p>Note</p>
                                                  <p>Rule: When employee click on this "Add note icon" - this box shows up are they directly insert a note. </p>
                                                </div>
                                                <div class="btn-Box">
                                                  <a @click="openBox()">Add Note</a>
                                                  <a @click="openBox()">Cancel</a>
                                                </div>
                                              </div>
                                        </tbody>
                                        <tfoot>
                                          <tr>
                                            <td></td>
                                            <td colspan="2">Totals (Aggregate)</td>
                                            <td class="text-center">22 h</td>
                                            <td></td>
                                            <td class="text-center">17 h</td>
                                            <td colspan="2"></td>
                                            <td class="text-center">5 h</td>
                                            <td class="text-center">14 h</td>
                                            <td colspan="7"></td>
                                          </tr>
                                        </tfoot>
                                        
                                      </table>
                                    </div>
                              </div>
                            </div>
                          </div>
                        </div>
                  
                    </div>
                </div>
              </div>
        </div>
      </div>
      </section>
    </div>
</template>
<script>
import  axios from "axios";
import $ from "jquery";
import moment from "moment";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

$(".tooltipTd .infoIcon").hover(function() {
  alert("hello");
});

$(document).click(function(event) { 
  var $target = $(event.target);
  if((!$target.closest('.tooltipTd').length) && (!$target.closest('.tooltipTdOne').length) && (!$target.closest('.tooltipTdTwo').length)){
     if(($(".tooltipTd .tooltipData").css("display")=="block") || ($(".tooltipTdTwo .tooltipData").css("display")=="block") || ($(".tooltipTdOne .tooltipData").css("display")=="block")){
        $(".tooltipTd .tooltipData").css("display","none");
        $(".tooltipTdTwo .tooltipData").css("display","none");
        $(".tooltipTdOne .tooltipData").css("display","none")
     }
  }
});

export default {
     components: { DatePicker },
  
name:"managerallEmployee",
data(){
  return{
    empData:[],
    time1: null,
        time2: null,
  }
},
methods:{
popInfodiv1(){
  if(($(".tooltipTd .tooltipData").css("display")=="block") || ($(".tooltipTdTwo .tooltipData").css("display")=="block")){
    $(".tooltipTd .tooltipData").css("display","none");
    $(".tooltipTdTwo .tooltipData").css("display","none");
    $(".tooltipTdOne .tooltipData").css("display","block")
  }
  else if($(".tooltipTdOne .tooltipData").css("display")=="block"){
    $(".tooltipTdOne .tooltipData").css("display","none");
  }
  else{
    $(".tooltipTdOne .tooltipData").css("display","block");
  }
},
popInfodiv(){ 
if(($(".tooltipTdOne .tooltipData").css("display")=="block") || ($(".tooltipTdTwo .tooltipData").css("display")=="block")){
    $(".tooltipTdOne .tooltipData").css("display","none");
    $(".tooltipTdTwo .tooltipData").css("display","none");
    $(".tooltipTd .tooltipData").css("display","block")
  }
  else if($(".tooltipTd .tooltipData").css("display")=="block"){
    $(".tooltipTd .tooltipData").css("display","none");
  }
  else{
    $(".tooltipTd .tooltipData").css("display","block");
  }
},
popInfodiv2(){
if(($(".tooltipTdOne .tooltipData").css("display")=="block") || ($(".tooltipTd .tooltipData").css("display")=="block")){
    $(".tooltipTdOne .tooltipData").css("display","none");
    $(".tooltipTd .tooltipData").css("display","none");
    $(".tooltipTdTwo .tooltipData").css("display","block")
  }
  else if($(".tooltipTdTwo .tooltipData").css("display")=="block"){
    $(".tooltipTdTwo .tooltipData").css("display","none");
  }
  else{
    $(".tooltipTdTwo .tooltipData").css("display","block");
  }
},
  toconvertArray(data){
        var test = JSON.stringify(data);
        let arrayfor=[];
      var test2 = JSON.parse(test);
     for(var i in test2){
       var test3 = Object.values(test2[i]);
       arrayfor.push(test3[0]);
     }return arrayfor;
    },
       removearray(data){
  this.forLogArray=[];
    },
    setdesignHours(mins){
          if(mins <1){
             return mins+' h';
          }
            if(mins/60 < 1){
                        return mins+' m';
             }
          var h = mins / 60 | 0,
        m = mins % 60 | 0;
        if(m > 0){
            return h+' h '+ m+'m';
        }else{
            return h+' h';
        }
        // moment.utc().hours(h).minutes(m).format("hh:mm");
        //  return moment(mins, x'minutes').format('HH:mm');
      },
       mouseOver(){
        $(".tooltipTd .tooltipData").css("display","block");
      },
      mouseLeave(){
        $(".tooltipTd .tooltipData").css("display","none");
      },
      mouseOverFirst(){
        $(".tooltipTdOne .tooltipData").css("display","block");
      },
      mouseLeaveFirst(){
        $(".tooltipTdOne .tooltipData").css("display","none");
      },
      mouseOverSecond(){
       $(".tooltipTdTwo .tooltipData").css("display","block");
      },
      mouseLeaveSecond(){
        $(".tooltipTdTwo .tooltipData").css("display","none");
      },
  gettime(data){
    let x=data[0];
    let y=data[1];
     var h = x / 60 | 0,
        m = x % 60 | 0;
   let startTime=moment.utc().hours(h).minutes(m).format("hh:mm");
    var hou= y / 60 | 0,
        mo = y % 60 | 0;
    let endtime= moment.utc().hours(hou).minutes(mo).format("hh:mm");
  return startTime+' '+ endtime;
  },
  getEmpData(){
    axios.get("http://www.amock.io/api/kunin-io/v0/divisions/9da53e80-c141-11ea-b3de-0242ac130004/departments/6aa1a220-c142-11ea-b3de-0242ac130004/activities/all?format=aggregate+hourly&date=today&by=employee").then((res)=>{ 
      let EmData=res.data.data;
      let EmpDepartment=[];
      let EmployeeData=[];
      EmData.forEach(ele => {
          EmpDepartment=ele.departments;
      });
      
      EmpDepartment.forEach(element => {
        EmployeeData=element.employees;
      });
      this.empData=EmployeeData;
      
    }).catch((err)=>{
      console.log(err);
    })
  },
  employeTable(){
    this.$router.push("/empDetail");
  },
   setActivity(){
       this.$router.push('/mCreditCard')
     }, 
     getValue(){
 this.$router.push('/weaklydetails');
     },
       highfocustimeDefrence(data){
           if(data.length <1 ){
          return '0';

          }
          var x=data[0];
      var y=data[1];

      var now  = '04/09/2013 '+y;
      var then = '04/09/2013 '+x;
 
//    return d;
      var timedurations=moment.utc(moment(now,"DD/MM/YYYY H:mm").diff(moment(then,"DD/MM/YYYY H:mm"))).format("H:mm");
      var beforsp=timedurations.split(":");
      var hrs=beforsp[0];
      var mint=beforsp[1];
      var retunmint=0;
      var returnhrs=0;
      if(mint==0){
          retunmint='';
      }else{
          retunmint=mint + ' m';
      }
      if(hrs==0){
          returnhrs=''
      }else{
          returnhrs=hrs+' h '
      }
      return returnhrs + retunmint;
    
      },
      highfocustime(data){
          if(data.length <1 ){
          return '0';

          }
          var returnstart=0
          var returnenddate=0
          var starttime=data[0];
          var endtime=data[1];
    
       var startreturn= moment(starttime, "H:mm").format("H:mm");
       var returnEndrtime= moment(endtime, "H:mm").format("H:mm");
       return startreturn +' - '+ returnEndrtime;
      },
   Setdesign(design){
         if(design=='' || design==null){
             return 0+"%";
         }
      
         let compare;
         let setmrgin;
         let x;
         let y;
         x=design[0]+1;
         y=design[1];
        compare=(((y-x)/60)*100);
        if(x >0){
        setmrgin=((x/60)*100);
        this.mrgin=setmrgin+'%';
        }else{
            this.mrgin=x;
        }
     
       return compare.toFixed(1)+'%';
     },
       calenderBoxShow(){
        if($('.calender-Box').css('display')==="block"){
          $('.calender-Box').css('display','none');
        }
        else{
          $('.calender-Box').css('display','block');
        }
      },
   getHourse(mins){
          if(mins/60 < 1){
              return mins+'m';
          }
          var h = mins / 60 | 0,
        m = mins % 60 | 0;
    return moment.utc().hours(h).minutes(m).format("hh:mm");
        //   return moment.utc().startOf('day').add(minutes, 'minutes').format('hh:mm')
      },
   openBox(){
        if($('.open-box').css('display')=="block"){
          $('.open-box').css('display', 'none');
        }
        else{
          $('.open-box').css('display', 'block')
        }
      },
},
created(){
  this.getEmpData();
}
}
</script>
<style lang="css" scoped>
#cerdit-card .calender-Box {
    top: 63%;
    left: 90%;
    /* max-width: 100%; */
    min-width: 509px !important;
}
</style>