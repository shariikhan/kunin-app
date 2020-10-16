<template>
<div >
    <div id="manager">
        <div class="introDiv">
        <div class="container-fluid p-0">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <h4>Hi Alex,</h4>
            <div class="dateSelect">
                <label class="w-100">Select Date Range:</label>
                <div class="calender-Div" @click="calenderBoxShow()">
                <i class="fa fa-calendar" aria-hidden="true"></i>
                <span class="managerchangeText" >Activity</span>
                <i  class="fa fa-caret-down" aria-hidden="true" ></i>
                  
                </div>
                <div class="calender-Box">
                            <div class="container-fluid">
                                <div class="row">
                                <div class="col-lg-6">
                                    <label>From</label>
                                    <div class="from-Calender">
                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                    <date-picker v-model="time1" valueType="format" ></date-picker>

                                    </div>
                                </div>
                                    <div class="col-lg-6">
                                    <label>To</label>
                                    <div class="from-Calender">
                                    <i for="#date-input" class="fa fa-calendar" aria-hidden="true"></i>
                                        <date-picker v-model="time2" valueType="format"  @change="calenderBoxShow()"></date-picker>

                                    <!-- style="display: none;" -->
                                    <!-- <input  id="date-input" type="date" name="to-date"> -->
                                    </div>
                                </div>
                                </div>
                                <div class="row">
                                <div class="col-lg-12">
                                    <div class="commonDiv"  @click="calenderBoxShow()">
                                    <p>Today</p>
                                    </div>
                                    <div class="commonDiv"  @click="calenderBoxShow()">
                                    <p class="weekText">Week over Week</p>
                                    </div>
                                    <div class="commonDiv"  @click="calenderBoxShow()">
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
                        <!-- {{data.target_time}},{{data.achieved_time}} -->
                         <pie-chart  :data="[['target time ',getpercentage(data.target_time,data.achieved_time)], ['achieved time',totalpercentage(data.target_time,data.achieved_time)]]" :donut="true" :title="data.activity_name"  width="200px" height="200px" :colors="['#2a3a4b','#01B1B1']"     :legend="false" ></pie-chart>
                    </div>
                    </div>
                
                <span > 
                 
                </span>
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <div class="without-change-date">
        <div class="activity-overview">
        <div class="container-fluid p-0" >
            <div class="row">
            <div class="col-lg-6" v-for="(items ,i ) in alldepartment" :key="i">
                <div class="row">
                <div class="col-lg-12">
                    <h4>{{items.department_name}}</h4>
                   
                </div>
                </div>
                <div class="managerLabelText">
                    <div class="row m-t-10">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <label>Manager: {{items.manager.first_name}} {{items.manager.last_name}}</label>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right">
                        <label class="viewAllText" @click="gotoManager()">View All</label>
                         
                    </div>
                    </div>
                </div>
                <div class="table-div-activity table-div-credit-card">
                    <div class="row">
                    <div class="col-lg-12">
                        <div class="table-responsive">
                        <table class="table table-bordered">
                        <thead>
                            <tr>
                            <th>Top Activities</th>
                            <th>Trend</th>
                            <th>Average Hours Per Employees</th>
                            <th>Employees this Period</th>
                            </tr>
                        </thead>

                        <tbody>
                           
                            <tr v-for="(act,index) in items.activities" :key="index">
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
                            <td>{{act.total_employes}} </td>
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
    
</div>
</template>
<script>
import axios from "axios";
import $ from "jquery";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
     components: { DatePicker},
    name:"DivisionFirstpage",
   data(){
       return{
           divisions_data:[],
           alldepartment:[],
           credit_cards:[],
           loans_dept:[],
             time1: null,
        time2: null,
           mortgages:[],
           Delinquencies:[],
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
        calenderBoxShow(){
        if($('.calender-Box').css('display')==="block"){
          $('.calender-Box').css('display','none');
        }
        else{
          $('.calender-Box').css('display','block');
        }
      },
        gotoManager(){
            this.$router.push("/mCreditCard");
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
      dataforactive(){
            axios.get('http://www.amock.io/api/kunin-io/v0/divisions/9da53e80-c141-11ea-b3de-0242ac130004/departments/all/activities?format=aggregate&from_date=2020-03-17&to_date=2020-06-17').then((res)=>{
            this.divisions_data=res.data;
            let rawdata=res.data.data;
            let AllDepartments=[];
            rawdata.forEach(element => {
                AllDepartments=element.departments;
            });
            this.alldepartment=AllDepartments;
            console.log(AllDepartments);
            

            // console.log(res.data);
        }).catch((error)=>{
            console.log(error);
        });
      }
   },
    created(){
        this.dataforactive();
         this.getChartData();
        }
}
</script>