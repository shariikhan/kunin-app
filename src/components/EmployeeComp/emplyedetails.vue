<template>
    <div>
        <div class="mainContent">
            <div id="cerdit-card" class="">
                <div class="common-main-div">
                    <p class="backIcon"><i class="fa fa-angle-left" aria-hidden="true"></i></p>
                    <div class="multiple-select w-m-20 m-t-0">
                        <div class="row">
                           
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <label class="w-100">Date Range:</label>
                            <div class="calender-Div"  @click="calenderBoxShow()">
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
                                    <!-- <i class="fa fa-calendar" aria-hidden="true"></i> -->
                                    <date-picker v-model="time1" valueType="format" width='150px' ></date-picker>

                                    </div>
                                </div>
                                    <div class="col-lg-6">
                                    <label>To</label>
                                    <div class="from-Calender">
                                    <!-- <i for="#date-input" class="fa fa-calendar" aria-hidden="true"></i> -->
                                        <date-picker v-model="time2" valueType="format" width='150' @change="calenderBoxShow()"></date-picker>

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
                <div class="activity-Table">
                      <!-- {{activitiesData}} -->
                    <div class="table-card-div">
                    <div class="table-div employeeDetailTable">
                        <div class="row">
                        <div class="col-lg-12">
                            <div class="table-responsive">
                                  
                            <table class="table table-bordered">
                                    <thead>
                                    <tr class="tooltipRow">
                                        <th></th>
                                        <th><span class="downArrow"><i class="fa fa-caret-down" aria-hidden="true"></i></span>Activity <i class="fa fa-angle-down" aria-hidden="true"></i></th>
                                        <th class="trendCenter">Trend</th>
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
                                        <th>12:00</th>
                                        <th>13:00</th>
                                        <th>14:00</th>
                                        <th>15:00</th>
                                        <th>16:00</th>
                                       


                                    </tr>
                                    </thead>
                                   
                                    <tbody>
                                   <tr v-for="(single_data, index ) in activitiesData " :key="index">
                                       {{removearray()}}
                                        <td @click="showNotes()"><i class="fa fa-file-text-o" aria-hidden="true"></i></td>
                                        <td>
                                            <div :class="{
                                                'triangle':single_data.notes==true, }">
                                                </div> 
                                                {{single_data.activity_name}}</td>
                                           <td>
                                               <!-- {{single_data.trend}} -->
                                              <trend
                                                  :data="toconvertArray(single_data.trend)"
                                               :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
                                                  :padding="8"
                                                  :radius="18"
                                                  :stroke-width="8"
                                                  auto-draw
                                                  smooth>
                                                </trend>
                                                </td>
                                          <td > {{getHourse(single_data.assigned_time)}}</td>
                                          <td>{{single_data.assigned_percentage}}% </td>
                                          <td  :class="{
                                              'bgwhite':single_data.assigned_time==definetime,
                                            'achrived-target':single_data.assigned_time == single_data.achieved_time,
                                            'below-target':single_data.assigned_time > single_data.achieved_time,
                                            'exceed-target':single_data.assigned_time < single_data.achieved_time,
                                            
                                            'text-center':single_data,
                                             

                                          }" width="185">{{setdesignHours(single_data.achieved_time)}} 
                                           
                                           </td>
                                          <td :class="{
                                               'bgwhite':single_data.assigned_time==definetime,
                                            'achrived-target':single_data.assigned_time == single_data.achieved_time,
                                            'below-target':single_data.assigned_time > single_data.achieved_time,
                                            'exceed-target':single_data.assigned_time < single_data.achieved_time,
                                             'text-center':single_data
                                            }" width="185">
                                            {{single_data.achieved_percentage}}%</td>
                                        <td class="text-center">{{highfocustime(single_data.flow)}}</td>
                                        <td class="text-center">{{highfocustimeDefrence(single_data.flow)}}</td>
                                        <td class="text-center">{{setdesignHours(single_data.total_focus)}}

                                        </td>
                                       <td>
                                           <div v-if="single_data.periods[7]">
                                            <div class="focusBar"
                                                :style="{width:Setdesign(single_data.periods[7].working),
                                                 marginLeft:mrgin} ">
                                            
                                            </div>
                                            <div class="workingColor" 
                                            :style="{width:Setdesign(single_data.periods[7].focus),
                                                marginLeft:mrgin
                                            }
                                            ">

                                            </div>
                                        </div>   
                                        </td>
                                        <td >
                                             <div v-if="single_data.periods[8]">
                                            <div class="focusBar"
                                                :style="{width:Setdesign(single_data.periods[8].working),
                                                 marginLeft:mrgin}">
                                            </div>
                                            <div class="workingColor" 
                                            :style="{width:Setdesign(single_data.periods[8].focus),
                                                marginLeft:mrgin
                                            }
                                            ">
                                            </div>
                                        </div>
                                        </td>
                                        <td >
                                             <div v-if="single_data.periods[9]">
                                            <div class="focusBar"
                                                :style="{width:Setdesign(single_data.periods[9].working),
                                                 marginLeft:mrgin}">
                                            </div>
                                            <div class="workingColor" 
                                            :style="{width:Setdesign(single_data.periods[9].focus),
                                                marginLeft:mrgin
                                            }
                                            ">
                                            </div>
                                        </div>
                                        </td>
                                        <td>
                                           <div v-if="single_data.periods[10]">
                                            <div class="focusBar"
                                                :style="{width:Setdesign(single_data.periods[10].working),
                                                 marginLeft:mrgin}">
                                            </div>
                                            <div class="workingColor" 
                                            :style="{width:Setdesign(single_data.periods[10].focus),
                                                marginLeft:mrgin
                                            }
                                            ">
                                            </div>
                                        </div>
                                        </td>
                                        <td>
                                          <div v-if="single_data.periods[11]">
                                            <div class="focusBar"
                                                :style="{width:Setdesign(single_data.periods[11].working),
                                                 marginLeft:mrgin}">
                                            </div>
                                            <div class="workingColor" 
                                            :style="{width:Setdesign(single_data.periods[11].focus),
                                                marginLeft:mrgin
                                            }
                                            ">
                                            </div>
                                        </div>
                                        </td>
                                        <td>
                                            <div v-if="single_data.periods[12]">
                                            <div class="focusBar"
                                                :style="{width:Setdesign(single_data.periods[12].working),
                                                 marginLeft:mrgin}">
                                            </div>
                                            <div class="workingColor" 
                                            :style="{width:Setdesign(single_data.periods[12].focus),
                                                marginLeft:mrgin
                                            }
                                            ">
                                            </div>
                                        </div>
                                           
                                        </td>
                                        <td>
                                        <div v-if="single_data.periods[13]">
                                            <div class="focusBar"
                                                :style="{width:Setdesign(single_data.periods[13].working),
                                                 marginLeft:mrgin}">
                                            </div>
                                            <div class="workingColor" 
                                            :style="{width:Setdesign(single_data.periods[13].focus),
                                                marginLeft:mrgin
                                            }
                                            ">
                                            </div>
                                        </div>
                                        </td>
                                        <td>
                                           <div v-if="single_data.periods[14]">
                                            <div class="focusBar"
                                                :style="{width:Setdesign(single_data.periods[14].working),
                                                 marginLeft:mrgin}">
                                            </div>
                                            <div class="workingColor" 
                                            :style="{width:Setdesign(single_data.periods[14].focus),
                                                marginLeft:mrgin
                                            }
                                            ">
                                            </div>
                                        </div>
                                        </td>
                                        <td >
                                         <div v-if="single_data.periods[15]">
                                            <div class="focusBar"
                                                :style="{width:Setdesign(single_data.periods[15].working),
                                                 marginLeft:mrgin}">
                                            </div>
                                            <div class="workingColor" 
                                            :style="{width:Setdesign(single_data.periods[15].focus),
                                                marginLeft:mrgin
                                            }
                                            ">
                                            </div>
                                        </div>
                                        </td>
                                         <td >
                                           <div v-if="single_data.periods[16]">
                                            <div class="focusBar"
                                                :style="{width:Setdesign(single_data.periods[16].working),
                                                 marginLeft:mrgin}">
                                            </div>
                                            <div class="workingColor" 
                                            :style="{width:Setdesign(single_data.periods[16].focus),
                                                marginLeft:mrgin
                                            }
                                            ">
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
                                                  <textarea class="form-control"></textarea>
                                                  <!-- <p>Rule: When employee click on this "Add note icon" - this box shows up are they directly insert a note. </p> -->
                                                </div>
                                                <div class="btn-Box">
                                                  <a @click="showNotes()">Add Note</a>
                                                  <a @click="showNotes()">Cancel</a>
                                                </div>
                                              </div>
                                    </tbody>
                                 
                                    <tfoot>
                                    <tr>
                                        <td></td>
                                        <td colspan="2">Totals (Aggregate)</td>
                                        <td class="text-center">227</td>
                                        <td></td>
                                        <td class="text-center">6 h</td>
                                        <td colspan="2"></td>
                                        <td class="text-center">3h 30m</td>
                                        <td class="text-center">5h 30m</td>
                                        <td colspan="10"></td>
                                    </tr>
                                    </tfoot>
                                   
                                </table>
                                </div>
                        </div>
                        </div>
                    </div>
                   
                    </div>
                </div>
                 <div class="performance-overview m-t-20">
                        <div class="row">
                            <div class="col-lg-12">
                            <h4>All Notes</h4>
                            </div>
                        </div>
                        <div class="table-performance-overview">
                            <div class="row">
                            <div class="">
                                <div class="table-responsive">
                                <table class="table table-bordered">
                                <thead>
                                    <tr>
                                    <td>Date Submitted</td>
                                    <td>Focus Area</td>
                                    <td class="text-center" width="400">Notes</td>
                                    <td>Submitted By</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- {{notesDetails}} -->
                                    <tr v-for="(item, u) in notesDetails" :key="u">
                                    <td> {{dattimeformate(item.notes[u].date)}}</td>
                                    <td>{{item.activity_name}}</td>
                                    <td>{{item.notes[u].note}}</td>
                                    <td>{{item.notes[u].submitter.first_name}} {{item.notes[u].submitter.last_name}} </td>
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
</template>
<script>
import $ from "jquery";
import axios from "axios";
import moment from "moment";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
    
     components: { DatePicker },
     
    name:"EmployeeDetails",
  data(){
    return{
      SingleemployeeData:[],
      activitiesData:{},
      notesDetails:{},
        width:null,
        mrgin:null,
          time1: null,
        time2: null,
        definetime:0,
      notesSubmitters:{},
        forLogArray:[],
   
    }

  },
  methods:{
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
      dattimeformate(data){
          var localTime = moment().format('MM/DD/YYYY'); // store localTime
        var proposedDate = localTime + data;
        var isValidDate = moment(proposedDate).isValid();
        var momentDate = moment(proposedDate);
      
         return moment.utc(data).format('MM/DD/YYYY');
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
      showNotes(){
          if($('.open-box').css('display')=="block"){
          $('.open-box').css('display', 'none');
        }
        else{
          $('.open-box').css('display', 'block')
        }
      
      },
      getHourse(mins){
        //   if(mins/60 < 1){
        //       return mins+'m';
        //   }
          var h = mins / 60 | 0,
        m = mins % 60 | 0;
        // moment.utc().hours(h).minutes(m).format("hh:mm");
       var h= mins/60;
    return h+' h';
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
        Setdesign(design){
         if(design=='' || design==null){
             return 0+"%";
         }else{
              let compare;
         let setmrgin=0;
         let x;
         let y;
         
         x=design[0]+1;
         y=design[1];
        //  console.log('this is x',x);
        compare=(((y-x)/60)*100);
        if(x >1){
        setmrgin=((x/60)*100);
        // console.log(setmrgin);
     //   this.mrgin=setmrgin;
        }else{
     //       this.mrgin=x;
        }
    //  return compare+'%';
       return compare.toFixed(1)+'%';

         }
      
        
     },
     allActivities(){
 axios.get("http://www.amock.io/api/kunin-io/v0/users/7b270cba-c161-11ea-b3de-0242ac130004/activities/f32a41f8-c145-11ea-b3de-0242ac130004?format=hourly&date=today").then((res)=>{
      //  console.log('here is bfore',res.data.data)
      let alldata=res.data.data;
      let activitiesNames=[];
      this.SingleemployeeData=res.data.data;
      alldata.forEach(element => {
    //   console.log(element);
       activitiesNames=element.activities;
     });
     this.activitiesData=activitiesNames;
     

    }).catch((err)=>{
      console.log("error",err);
    });
     },
     someData(){
         
    axios.get("http://www.amock.io/api/kunin-io/v0/users/current/activities/all/notes?date=today").then((res)=>{
        let NotesData=res.data.data;
        let notData=[];
        let notes=[];
        NotesData.forEach(el => {
        // notes=el.activities;
        notData=el.activities;
            
        });
        this.notesDetails=notData;
         notData.forEach(submitter => {
        //    console.log();
           this.notesSubmitters=submitter[0].notes
         });
        // this.notesSubmitters=notData;
    }).catch((error)=>{
        console.log(error);
    })
     }
  },
  created() {
      this.allActivities();
      this.someData();
   
  },


}
</script>
<style lang="css" scoped>
.calender-Box {
    top: 63%;
    left: 90%;
    min-width: 510px !important ;
}
#manager .table-performance-overview, .employeecontent #cerdit-card .table-performance-overview {
    width: 100%;
    margin-left: 20px;
    max-width: 80% !important;
}

</style>