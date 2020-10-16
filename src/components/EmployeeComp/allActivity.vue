<template>
    <div>
        <div class="mainContent">
            <div id="manager" class="employee">
                        <div class="introDiv">
                          <div class="container-fluid p-0">
                            <div class="row">
                              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <h4>Hi Anna,</h4>
                                <div class="dateSelect">
                                  <label class="w-100">Select Date Range:</label>
                                  <div class="calender-Div" @click="calenderBoxShow()">
                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                    <span class="managerchangeText">Activity</span>
                                    <i  class="fa fa-caret-down" aria-hidden="true"></i>
                                  </div>
                                  <div class="calender-Box">
                                  <div class="container-fluid">
                                    <div class="row">
                                      <div class="col-lg-6">
                                        <label>From</label>
                                        <div class="from-Calender">
                                          <!-- <i class="fa fa-calendar" aria-hidden="true"></i> -->
                                          <!-- <span>06/10/20</span> -->
                                    <date-picker v-model="time1" valueType="format" width='150px'></date-picker>

                                        </div>
                                      </div>
                                       <div class="col-lg-6">
                                        <label>To</label>
                                        <div class="from-Calender">
                                    <date-picker v-model="time2" valueType="format" width='150px'></date-picker>

                                          <!-- <i for="#date-input" class="fa fa-calendar" aria-hidden="true"></i> -->
                                          <!-- <span>06/10/20</span> -->
                                          <!-- <input style="display: none;" id="date-input" type="date" name="to-date"> -->
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-lg-12">
                                        <div class="commonDiv" @click="calenderBoxShow()">
                                          <p>Today</p>
                                        </div>
                                        <div class="commonDiv">
                                          <p  class="weekText" @click="calenderBoxShow()">Week over Week</p>
                                        </div>
                                        <div class="commonDiv" @click="calenderBoxShow()">
                                          <p>Month over Month</p>
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
                        
                        <div class="without-change-date">
                          <div class="activity-overview">
                            <div class="container-fluid p-0">
                              <div class="row">
                                <div class="col-lg-12">
                                  <h4>Assigned Activity Overview</h4>
                                </div>
                              </div>
                              
                              <div class="table-div-activity">
                                <div class="row">
                                  <div class="col-lg-12">
                                    <div class="table-responsive">
                                    <table class="table table-bordered">
                                      <thead>
                                        <tr>
                                          <th>Assigned Activity</th>
                                          <th class="text-center">Trend</th>
                                          <th colspan="2">Assigned Time</th>
                                          <th colspan="2">Achieved Time</th>
                                          <th>High Focus (Time of Day)</th>
                                          <th>High Focus (Duration)</th>
                                          <th>Collective Focus Time</th>
                                        </tr>
                                      </thead>

                                      <tbody>
                                        
                                        <tr v-for="(single_data, index ) in activitiesData " :key="index">
                                          {{removearray()}}
                                          <td> {{single_data.activity_name}}</td>
                                          <td >
                                              <trend
                                                  :data="toconvertArray(single_data.trends)"
                                               :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                                                  :padding="8"
                                                  :radius="18"
                                                  :stroke-width="8"
                                                  auto-draw
                                                  smooth>
                                                </trend>
                                             </td>
                                          <td >  {{setdesignHours(single_data.assigned_time)}}</td>
                                          <td>{{single_data.assigned_percentage}}% </td>
                                          <td width="200" :class="{
                                            'bgwhite':single_data.assigned_time==definetime,
                                            'achrived-target':single_data.assigned_time == single_data.achieved_time,
                                            'below-target':single_data.assigned_time > single_data.achieved_time,
                                            'exceed-target':single_data.assigned_time < single_data.achieved_time,

                                          }">{{setdesignHours(single_data.achieved_time)}} </td>
                                          <td :class="{
                                            'bgwhite':single_data.assigned_time==definetime,
                                            'achrived-target':single_data.assigned_time == single_data.achieved_time,
                                            'below-target':single_data.assigned_time > single_data.achieved_time,
                                            'exceed-target':single_data.assigned_time < single_data.achieved_time,

                                          }">{{single_data.achieved_percentage}}%</td>
                                          <td>{{highfocustime(single_data.flow)}}</td>
                                          <td> {{highfocustimeDefrence(single_data.flow)}}</td>
                                          <td> {{setdesignHours(single_data.total_focus)}}</td>
                                        </tr>
                                         
                                      </tbody>
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
        <!-- <div class="container">
            {{SingleemployeeData}}
          <h1 class="h1">Single Data by looping</h1>
            <ul>
              <li >
               
              </li>
            </ul>
          <br>
        
        </div> -->
    </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import $ from "jquery";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
  name:"EmpAllActivity",
     components: { DatePicker },

  data(){
    return{
      SingleemployeeData:[],
      activitiesData:{},
       time1: null,
        time2: null,
        definetime:0,
        forLogArray:[],

    }
  },
  methods: {
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
     getHourse(mins){
          if(mins/60 < 1){
              return mins+'m';
          }
          var h = mins / 60 | 0,
        m = mins % 60 | 0;
    return moment.utc().hours(h).minutes(m).format("hh:mm");
        //   return moment.utc().startOf('day').add(minutes, 'minutes').format('hh:mm')
      },
       calenderBoxShow(){
        if($('.calender-Box').css('display')==="block"){
          $('.calender-Box').css('display','none');
        }
        else{
          $('.calender-Box').css('display','block');
        }
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
        //  return moment(mins, 'minutes').format('HH:mm');
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
  },
  created() {
    // GET:/v0/users/<user_ID|current>/activities?after=<date1>&before=<date2>&format=aggregate
    axios.get("http://www.amock.io/api/kunin-io/v0/users/7b270cba-c161-11ea-b3de-0242ac130004/activities?format=aggregate&date=today").then((res)=>{
      //  console.log('here is bfore',res.data.data)
      const alldata=res.data.data;
      const activitiesNames=[];
   

      this.SingleemployeeData=res.data.data;
      alldata.forEach(element => {
      //  console.log(element.activities);
       this.activitiesData=element.activities;
     });
     

    }).catch((err)=>{
      console.log("error",err);
    })
  },

}
</script>