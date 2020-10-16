<template>
    <div>
    <div id="manager" class="tab-pane fade in active">
                <div class="introDiv">
                    <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <h4>Hi Harold,</h4>
                        <div class="dateSelect" >
                            <label class="w-100">Select Date Range:</label>
                            <div class="calender-Div" @click="getFunctions()">
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            <span class="managerchangeText">Activity</span>
                            <i  class="fa fa-caret-down" aria-hidden="true"></i>
                            </div>
                            <div class="calender-Box">
                            <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-Div">
                                    <label>From</label>
                                    <div class="from-Calender">
                                          <date-picker v-model="time1" valueType="format" width='150px' ></date-picker>
                                    <!-- <i class="fa fa-calendar" aria-hidden="true"></i>
                                    <span>06/10/20</span> -->
                                    </div>
                                </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div class="to-Div">
                                    <label>To</label>
                                    <div class="from-Calender">
                                          <date-picker v-model="time2" valueType="format" width='150px' @change="getFunctions()"></date-picker>
                                        <!-- <i for="#date-input" class="fa fa-calendar" aria-hidden="true"></i>
                                        <span>06/10/20</span>
                                        <input style="display: none;" id="date-input" type="date" name="to-date"> -->
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                <div class="commonDiv" @click="todayDate()">
                                    <p>Today</p>
                                </div>
                                <div class="commonDiv">
                                    <p class="weekText" @click="getValue()">Week over Week</p>
                                </div>
                                <div class="commonDiv" @click="getFunctions()">
                                    <p>Month over Month</p>
                                </div>
                                </div>
                            </div>
                            </div>      
                        </div>
                        </div>
                        </div>
                        <div class="img-div">
                        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                        <h4>My Focus Area's: <span class="achieved-text">(Achieved Time)</span></h4>
                        <div class="progress-image-div">
                            <div class="row" style="font-size:10px !important;">
                    <div class="col-md-3"  v-for="(data,i) in ChartData" :key="i">
                          <pie-chart  :data="[['target time ',getpercentage(data.target_time,data.achieved_time)], ['achieved time',totalpercentage(data.target_time,data.achieved_time)]]" :donut="true" :title="data.activity_name"  width="200px" height="200px" :colors="['#2a3a4b','#01B1B1']"     :legend="false" ></pie-chart>
                    </div>
                    </div>
                            <!-- <img class="img-responsive" src="../../assets/img/Progress-div.png"> -->
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
                            <h4>Activity Overview</h4>
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
                                    <th>Trend</th>
                                    <th>Average hrs per Employee</th>
                                    <th>Employees this Period</th>
                                    <th colspan="2">Assigned Time</th>
                                    <th colspan="2">Achieved Time</th>
                                    <th>High Focus (Time of Day)</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr v-for="(act,k) in ActivityData" :key="k">
                                      {{removearray()}}
                                    <td>{{act.activity_name}}</td>
                                    <td>
                                        <trend
                                                :data="toconvertArray(act.trend)"
                                            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                                                :padding="8"
                                                :radius="18"
                                                :stroke-width="8"
                                                auto-draw
                                                smooth>
                                        </trend>
                                    </td>
                                    <td>{{act.average_employee_hours}} h</td>
                                    <td>{{act.total_employes}}</td>
                                    <td>{{act.assigned_time}} h</td>
                                    <td>{{act.assigned_percentage}}%</td>
                                    <td :class="{
                                            'achrived-target':act.assigned_time == act.achieved_time,
                                            'below-target':act.assigned_time > act.achieved_time,
                                            'exceed-target':act.assigned_time < act.achieved_time,

                                          }">{{act.achieved_time}} h</td>
                                    <td :class="{
                                            'achrived-target':act.assigned_time == act.achieved_time,
                                            'below-target':act.assigned_time > act.achieved_time,
                                            'exceed-target':act.assigned_time < act.achieved_time,

                                          }">{{act.achieved_percentage}} %</td>
                                    <td>{{highfocustime(act.flow)}}</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="performance-overview">
                        <div class="row">
                            <div class="col-lg-12">
                            <h4>Performance Overview</h4>
                            </div>
                        </div>
                        <div class="table-performance-overview">
                            <div class="row">
                            <div class="col-lg-12">
                                <div class="table-responsive">
                                <table class="table table-bordered">
                                <thead>
                                    <tr>
                                    <th>
                                        <select class="form-control infoselect select-form">
                                            <option>Top Performing</option>
                                            <option>Least Performing</option>

                                        </select>
                                    </th>
                                    <th>Collective Focus Time</th>
                                    <th>High Focus (Duration)</th>
                                    <th>High Focus (Time of Day)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Mary Ellen Black</td>
                                    <td>5 h 30 m</td>
                                    <td>1 h</td>
                                    <td>7:00 - 8:00</td>
                                    </tr>
                                    <tr>
                                    <td>Lisa Pinkett</td>
                                    <td>4h</td>
                                    <td>1 h 30 m</td>
                                    <td>9:00 - 10:30</td>
                                    </tr>
                                    <tr>
                                    <td>Joshua Duclos</td>
                                    <td>3h</td>
                                    <td>1 h</td>
                                    <td>13:00 - 15:00</td>
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
    </div>
</template>
<script>
import $ from "jquery";
import axios from "axios";
import DatePicker from 'vue2-datepicker';
import moment from "moment";
import 'vue2-datepicker/index.css';
export default {
     components: { DatePicker },
    name:"managerhome",
    data(){
        return{
            name:"Sharif khan",
            ActivityData:[],
              time1: null,
        time2: null,
         ChartData:[],
        }
    },
    methods:{
          getpercentage(target_time ,achieved_time){
           let totalpercent =(((target_time-achieved_time)/target_time)*100);
           return totalpercent.toFixed(2);
       },
       totalpercentage(target_time,achieved_time){
           var totalinf=((achieved_time/target_time)*100);
          
           return totalinf.toFixed(2);
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
        tryFun(){
            alert("Fun with Gun");
        },
         getFunctions(){
          if($('.calender-Box').css('display')==="block"){
          $('.calender-Box').css('display','none');
        }
        else{
          $('.calender-Box').css('display','block');
        }
     },
       getValue(){
      
        this.$router.push('/weaklydetails')
      },
       getChartData(){
          axios.get("http://www.amock.io/api/kunin-io/v0/divisions/9da53e80-c141-11ea-b3de-0242ac130004/departments/all/activities/all/myfocus?date=today").then((res)=>{
              let cdata=res.data.data;
              let graphics=[];
              cdata.forEach(element => {
                  graphics=element.my_focus;
              });
              this.ChartData=graphics;

          })
      },
        todayDate(){
      
        this.$router.push('/mCreditCard')
      },
       
      getActivitiesdata(){
          axios.get("http://www.amock.io/api/kunin-io/v0/divisions/9da53e80-c141-11ea-b3de-0242ac130004/departments/6aa1a220-c142-11ea-b3de-0242ac130004/activities?format=hourly&date=yesterday").
          then((res)=>{
              let Collections=res.data.data;
              let setCollections=[];
              let Activities=[];
              Collections.forEach(Single => {
                setCollections=Single.departments;
              });
              setCollections.forEach(element => {
                  Activities=element.activities;
              });

              this.ActivityData=Activities;
          }).catch((error)=>{
              console.log(error);
          })
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
    },
    created(){
        this.getActivitiesdata();
         this.getChartData();

    }
}
</script>
<style lang="css" scoped>
#manager .calender-Box {
    min-width: 545px !important;
}
.infoselect {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    background-color: #feb4b4;
    /* padding: 20px; */
    border: none;
}
</style>