<template>
    <div>
   <section id="main">
         <div class="container-fluid">
            <div class="row">
               <div class="maincontent col-lg-9">
                  <div class="tab-content mainContent">
                     <div id="cerdit-card" class="tab-pane fade in active">
                      <div class="common-main-div">
                        <p @click="backMainScreen()" class="backIcon"><i class="fa fa-angle-left" aria-hidden="true"></i></p>
                        <label>Department</label>
                        <h4>Credit Card</h4>
                          <div class="multiple-select">
                            <div class="row">
                              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <label class="w-100">Display View By:</label>
                                <select class="display-view-by"  v-on:change="setActivity()">
                                  <option value="Activity">Activity</option>
                                  <option value="All Employee">All Employee</option>
                                </select>
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <label class="w-100">Select Date Range:</label>
                                <div class="calender-Div">
                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                    <span class="changeText">{{time1}}</span>
                                    <i @click="calenderBoxShow()" class="fa fa-caret-down" aria-hidden="true"></i>
                                    
                                </div>
                                <div class="calender-Box">
                                  <div class="container-fluid">
                                    <div class="row">
                                      <div class="col-lg-6">
                                        <label>From</label>
                                        <div class="from-Calender">
                                          <!-- <i class="fa fa-calendar" aria-hidden="true"></i>
                                          <span>06/10/20</span> -->
                                          <date-picker v-model="time1" valueType="format" width='150px'></date-picker>
                                        </div>
                                      </div>
                                       <div class="col-lg-6">
                                        <label>To</label>
                                        <div class="from-Calender">
                                          <!-- <i for="#date-input" class="fa fa-calendar" aria-hidden="true"></i> -->
                                          <!-- <span>06/10/20</span>
                                          <input style="display: none;" id="date-input" type="date" name="to-date"> -->
                                          <date-picker v-model="time2" valueType="format" width='150px'  @change="calenderBoxShow()"></date-picker>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-lg-12">
                                        <div class="commonDiv" @click="todaydate()">
                                          <p>Today</p>
                                        </div>
                                        <div class="commonDiv">
                                          <p  class="weekText" @click="getValue()">Week over Week</p>
                                        </div>
                                        <div class="commonDiv" @click="monthovermonth()">
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
                          <div class="table-card-div">
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="table-responsive">
                                <table class="table table-bordered" >
                                        <thead>
                                          <tr>
                                            <th><span class="downArrow"><i class="fa fa-caret-down" aria-hidden="true"></i></span>Activity <i class="fa fa-angle-down" aria-hidden="true"></i></th>
                                            <th>Trend</th>
                                            <th>Average hrs per Employees</th>
                                            <th>Employees this Period</th>
                                            <th colspan="2">Assigned Time</th>
                                            <th colspan="2">Achieved Time</th>
                                            <th class="tooltipTdTwo">High Focus (Time of Day)
                                             <span class="infoIcon" @mouseleave="mouseLeaveSecond" @mouseover="mouseOverSecond">
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
                                          <!--  @click="applicationTable()" -->
                                          <!-- APi and Data ccBinding further Modules Onclick -->
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
                                          <td >{{act.total_employes}} </td>
                                          <td>{{act.assigned_time}} h</td>
                                          <td>{{act.assigned_percentage}}%</td>
                                          <td :class="{
                                                'achrived-target':act.assigned_time == act.achieved_time,
                                                'below-target':act.assigned_time > act.achieved_time,
                                                'exceed-target':act.assigned_time < act.achieved_time,

                                              }">{{act.achieved_time}} h
                                            </td>
                                          <td :class="{
                                                  'achrived-target':act.assigned_time == act.achieved_time,
                                                  'below-target':act.assigned_time > act.achieved_time,
                                                  'exceed-target':act.assigned_time < act.achieved_time,

                                                }">
                                                {{act.achieved_percentage}}%
                                          </td>
                                          <td>{{highfocustime(act.flow)}} </td>
                                            <td>
                                          <div v-if="act.periods[7]">
                                              <div class="focusBar"
                                              :style="{width:Setdesign(act.periods[7].working),
                                                          marginLeft:mrgin,} ">
                                              
                                              </div>
                                              <div class="workingColor" 
                                                      :style="{width:Setdesign(act.periods[7].focus),
                                                          marginLeft:mrgin,
                                                      }
                                                      ">
                                              </div>
                                          </div>   
                                          </td>
                                  <td>
                                      <div v-if="act.periods[8]">
                                          <div class="focusBar"
                                          :style="{width:Setdesign(act.periods[8].working),
                                            marginLeft:mrgin,} ">
                                          </div>
                                          <div class="workingColor" 
                                                  :style="{width:Setdesign(act.periods[8].focus),
                                                      marginLeft:mrgin,
                                                  }">
                                          </div>
                                      </div>                               
                                  </td>
                                  <td>
                                      <div v-if="act.periods[9]">
                                          <div class="focusBar"
                                          :style="{width:Setdesign(act.periods[9].working),
                                                      marginLeft:mrgin,
                                                  }">
                                          </div>
                                          <div class="workingColor" 
                                                  :style="{width:Setdesign(act.periods[9].focus),
                                                      marginLeft:mrgin,
                                                  }">
                                          </div>
                                      </div>
                                  </td>
                                    <td>
                                            <div v-if="act.periods[10]">
                                            <div class="focusBar"
                                            :style="{width:Setdesign(act.periods[10].working),
                                                        marginLeft:mrgin,
                                                    }">
                                          
                                            </div>
                                            <div class="workingColor" 
                                                    :style="{width:Setdesign(act.periods[10].focus),
                                                        marginLeft:mrgin,
                                                    }">
                                            </div>
                                        </div>
                                    </td>
                                      <td>
                                              <div v-if="act.periods[11]">
                                              <div class="focusBar"
                                              :style="{width:Setdesign(act.periods[11].working),
                                                          marginLeft:mrgin,
                                                      }">
                                              </div>
                                              <div class="workingColor" 
                                                      :style="{width:Setdesign(act.periods[11].focus),
                                                          marginLeft:mrgin,
                                                      }">
                                              </div>
                                          </div>
                                      </td>
                                         </tr>
                                          
                                        </tbody>
                                        <!-- <div class="footer"> -->
                                        <tfoot>
                                          <tr>
                                            <td colspan="3">Totals (Aggregate)</td>
                                            <td class="text-center">
                                                {{totalEmployee}}
                                            </td>
                                            <td class="text-center">{{totalAssignTime}}</td>
                                            <td></td>
                                            <td>{{achivedTime}} h</td>
                                            <td colspan="7"></td>
                                          </tr>
                                        </tfoot>
                                        <!-- </div> -->
                                </table>
                              </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="week-by-week" style="display: block;">
                          <div class="activity-Table">
                            <div class="table-card-div">
                              <div class="row">
                                <div class="col-lg-12">
                                  <div class="bar-Div">
                                                </div><div class="footer">
                                          </div><table class="table table-bordered">
                                          <thead>
                                            <tr>
                                              <th><span onclick="showWeekData()" class="downArrow" style="display: block;"><i class="fa fa-caret-up" aria-hidden="true"></i></span> June 1-7 , 2020 <i class="fa fa-angle-down" aria-hidden="true"></i></th>
                                              <th>Trend</th>
                                              <th>Average hrs per Employee</th>
                                              <th>Employee this Period</th>
                                              <th colspan="2">Assigned Time</th>
                                              <th colspan="2">Achieved Time</th>
                                              <th>High Focus (Time of Day)</th>
                                              <th>07:00</th>
                                              <th>08:00</th>
                                              <th>09:00</th>
                                              <th>10:00</th>
                                              <th>11:00</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr onclick="applicationTable()">
                                              <td><div class="triangle"></div>Application Processing</td>
                                              <td></td>
                                              <td>6 h</td>
                                              <td>32</td>
                                              <td>192 h</td>
                                              <td>86%</td>
                                              <td class="achrived-target">185 h</td>
                                              <td class="achrived-target">96%</td>
                                              <td>10:00 - 12:00</td>
                                                <td>
                                                  <div class="bar">
                                                    <div class="parent-bar"></div>
                                                    <div class="child-bar"></div>
                                                  </div>
                                                </td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                            </tr>
                                            <tr>
                                              <td>Customer Service</td>
                                              <td></td>
                                              <td>6 h</td>
                                              <td>40</td>
                                              <td>240 h</td>
                                              <td>86%</td>
                                              <td class="achrived-target">240 h</td>
                                              <td class="achrived-target">100%</td>
                                              <td>9:00 - 10:00</td>
                                              <td></td>
                                              <td>
                                                <div class="bar">
                                                  <div class="parent-bar bar-255"></div>
                                                  <div class="child-bar bar-200"></div>
                                                </div>
                                              </td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                            </tr>
                                            <tr>
                                              <td>Last and Stolen Cards</td>
                                              <td></td>
                                              <td>5 h</td>
                                              <td>24</td>
                                              <td>120 h</td>
                                              <td>71%</td>
                                              <td class="exceed-target">150 h</td>
                                              <td class="exceed-target">125%</td>
                                              <td>10:00 - 12:00</td>
                                                <td>
                                                  <div class="bar">
                                                    <div class="parent-bar"></div>
                                                    <div class="child-bar bar-335"></div>
                                                  </div>
                                                </td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                            </tr>
                                            <tr>
                                              <td>Account Maintance</td>
                                              <td></td>
                                              <td>4 h</td>
                                              <td>15</td>
                                              <td>60 h</td>
                                              <td>57%</td>
                                              <td class="below-target">32 h</td>
                                              <td class="below-target">53%</td>
                                              <td>10:00 - 12:00</td>
                                                <td>
                                                  <div class="bar">
                                                    <div class="parent-bar"></div>
                                                  </div>
                                                </td>
                                              <td></td>
                                              <td>
                                                <div class="child-bar"></div>
                                              </td>
                                              <td></td>
                                              <td></td>
                                            </tr>
                                            <tr>
                                              <td>Fraud</td>
                                              <td></td>
                                              <td>5 h</td>
                                              <td>8</td>
                                              <td>40 h</td>
                                              <td>71%</td>
                                              <td class="achrived-target">40 h</td>
                                              <td class="achrived-target">100%</td>
                                              <td>10:00 - 12:00</td>
                                                <td>
                                                  
                                                </td>
                                              <td></td>
                                              <td>
                                                <div class="bar">
                                                    <div class="parent-bar bar-192"></div>
                                                  </div>
                                              </td>
                                              <td>
                                                <div class="child-bar"></div>
                                              </td>
                                              <td></td>
                                            </tr>
                                            <tr>
                                              <td>Facebook.com</td>
                                              <td></td>
                                              <td>5 h</td>
                                              <td>8</td>
                                              <td>40 h</td>
                                              <td>71%</td>
                                              <td class="exceed-target">40 h</td>
                                              <td class="exceed-target">100%</td>
                                              <td>10:00 - 12:00</td>
                                                <td>
                                                  
                                                </td>
                                              <td></td>
                                              <td>
                                                <div class="bar">
                                                    <div class="parent-bar bar-192"></div>
                                                  </div>
                                              </td>
                                              <td>
                                                
                                              </td>
                                              <td>
                                                <div class="child-bar"></div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Torontostar.com</td>
                                              <td></td>
                                              <td>5 h</td>
                                              <td>8</td>
                                              <td>40 h</td>
                                              <td>71%</td>
                                              <td class="exceed-target">40 h</td>
                                              <td class="exceed-target">100%</td>
                                              <td>10:00 - 12:00</td>
                                              <td>
                                                </td>
                                                <td></td>
                                                <td>
                                                  <div class="bar">
                                                    <div class="parent-bar bar-192"></div>
                                                    <div class="child-bar"></div>
                                                  </div></td>
                                                <td></td>
                                                <td></td>
                                              
                                            </tr>
                                          </tbody>
                                          <tfoot>
                                            <tr>
                                              <td colspan="3">Totals (Aggregate)</td>
                                              <td class="text-center">227</td>
                                              <td class="text-center">652</td>
                                              <td></td>
                                              <td>4,007 h</td>
                                              <td colspan="7"></td>
                                            </tr>
                                          </tfoot>
                                          
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="activity-Table">
                            <div class="table-card-div">
                              <div class="row">
                                <div class="col-lg-12">
                                  <div class="bar-Div">
                                                </div><div class="footer">
                                          </div><table class="table table-bordered">
                                          <thead>
                                            <tr>
                                              <th><span class="downArrow" style="display: block;"><i class="fa fa-caret-up" aria-hidden="true"></i></span>June 8-14 , 2020 <i class="fa fa-angle-down" aria-hidden="true"></i></th>
                                              <th>Trend</th>
                                              <th>Average hrs per Employee</th>
                                              <th>Employee this Period</th>
                                              <th colspan="2">Assigned Time</th>
                                              <th colspan="2">Achieved Time</th>
                                              <th>High Focus (Time of Day)</th>
                                              <th>07:00</th>
                                              <th>08:00</th>
                                              <th>09:00</th>
                                              <th>10:00</th>
                                              <th>11:00</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr onclick="applicationTable()">
                                              <td><div class="triangle"></div>Application Processing</td>
                                              <td></td>
                                              <td>6 h</td>
                                              <td>32</td>
                                              <td>192 h</td>
                                              <td>86%</td>
                                              <td class="achrived-target">185 h</td>
                                              <td class="achrived-target">96%</td>
                                              <td>10:00 - 12:00</td>
                                                <td>
                                                  <div class="bar">
                                                    <div class="parent-bar"></div>
                                                    <div class="child-bar"></div>
                                                  </div>
                                                </td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                            </tr>
                                            <tr>
                                              <td>Customer Service</td>
                                              <td></td>
                                              <td>6 h</td>
                                              <td>40</td>
                                              <td>240 h</td>
                                              <td>86%</td>
                                              <td class="achrived-target">240 h</td>
                                              <td class="achrived-target">100%</td>
                                              <td>9:00 - 10:00</td>
                                              <td></td>
                                              <td>
                                                <div class="bar">
                                                  <div class="parent-bar bar-255"></div>
                                                  <div class="child-bar bar-200"></div>
                                                </div>
                                              </td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                            </tr>
                                            <tr>
                                              <td>Last and Stolen Cards</td>
                                              <td></td>
                                              <td>5 h</td>
                                              <td>24</td>
                                              <td>120 h</td>
                                              <td>71%</td>
                                              <td class="exceed-target">150 h</td>
                                              <td class="exceed-target">125%</td>
                                              <td>10:00 - 12:00</td>
                                                <td>
                                                  <div class="bar">
                                                    <div class="parent-bar"></div>
                                                    <div class="child-bar bar-335"></div>
                                                  </div>
                                                </td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                            </tr>
                                            <tr>
                                              <td>Account Maintance</td>
                                              <td></td>
                                              <td>4 h</td>
                                              <td>15</td>
                                              <td>60 h</td>
                                              <td>57%</td>
                                              <td class="below-target">32 h</td>
                                              <td class="below-target">53%</td>
                                              <td>10:00 - 12:00</td>
                                                <td>
                                                  <div class="bar">
                                                    <div class="parent-bar"></div>
                                                  </div>
                                                </td>
                                              <td></td>
                                              <td>
                                                <div class="child-bar"></div>
                                              </td>
                                              <td></td>
                                              <td></td>
                                            </tr>
                                            <tr>
                                              <td>Fraud</td>
                                              <td></td>
                                              <td>5 h</td>
                                              <td>8</td>
                                              <td>40 h</td>
                                              <td>71%</td>
                                              <td class="achrived-target">40 h</td>
                                              <td class="achrived-target">100%</td>
                                              <td>10:00 - 12:00</td>
                                                <td>
                                                  
                                                </td>
                                              <td></td>
                                              <td>
                                                <div class="bar">
                                                    <div class="parent-bar bar-192"></div>
                                                  </div>
                                              </td>
                                              <td>
                                                <div class="child-bar"></div>
                                              </td>
                                              <td></td>
                                            </tr>
                                            <tr>
                                              <td>Facebook.com</td>
                                              <td></td>
                                              <td>5 h</td>
                                              <td>8</td>
                                              <td>40 h</td>
                                              <td>71%</td>
                                              <td class="exceed-target">40 h</td>
                                              <td class="exceed-target">100%</td>
                                              <td>10:00 - 12:00</td>
                                                <td>
                                                  
                                                </td>
                                              <td></td>
                                              <td>
                                                <div class="bar">
                                                    <div class="parent-bar bar-192"></div>
                                                  </div>
                                              </td>
                                              <td>
                                                
                                              </td>
                                              <td>
                                                <div class="child-bar"></div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Torontostar.com</td>
                                              <td></td>
                                              <td>5 h</td>
                                              <td>8</td>
                                              <td>40 h</td>
                                              <td>71%</td>
                                              <td class="exceed-target">40 h</td>
                                              <td class="exceed-target">100%</td>
                                              <td>10:00 - 12:00</td>
                                              <td>
                                                </td>
                                                <td></td>
                                                <td>
                                                  <div class="bar">
                                                    <div class="parent-bar bar-192"></div>
                                                    <div class="child-bar"></div>
                                                  </div></td>
                                                <td></td>
                                                <td></td>
                                              
                                            </tr>
                                          </tbody>
                                          <tfoot>
                                            <tr>
                                              <td colspan="3">Totals (Aggregate)</td>
                                              <td class="text-center">227</td>
                                              <td class="text-center">652</td>
                                              <td></td>
                                              <td>4,007 h</td>
                                              <td colspan="7"></td>
                                            </tr>
                                          </tfoot>
                                          
                                        </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="activity-Table">
                            <div class="table-card-div">
                              <div class="row">
                                <div class="col-lg-12">
                                  <div class="bar-Div">
                                                </div><div class="footer">
                                          </div><table class="table table-bordered">
                                          <thead>
                                            <tr>
                                              <th><span class="downArrow" style="display: block;"><i class="fa fa-caret-up" aria-hidden="true"></i></span> June 15-22 , 2020 <i class="fa fa-angle-down" aria-hidden="true"></i></th>
                                              <th>Trend</th>
                                              <th>Average hrs per Employee</th>
                                              <th>Employee this Period</th>
                                              <th colspan="2">Assigned Time</th>
                                              <th colspan="2">Achieved Time</th>
                                              <th>High Focus (Time of Day)</th>
                                              <th>07:00</th>
                                              <th>08:00</th>
                                              <th>09:00</th>
                                              <th>10:00</th>
                                              <th>11:00</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr onclick="applicationTable()">
                                              <td><div class="triangle"></div>Application Processing</td>
                                              <td></td>
                                              <td>6 h</td>
                                              <td>32</td>
                                              <td>192 h</td>
                                              <td>86%</td>
                                              <td class="achrived-target">185 h</td>
                                              <td class="achrived-target">96%</td>
                                              <td>10:00 - 12:00</td>
                                                <td>
                                                  <div class="bar">
                                                    <div class="parent-bar"></div>
                                                    <div class="child-bar"></div>
                                                  </div>
                                                </td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                            </tr>
                                            <tr>
                                              <td>Customer Service</td>
                                              <td></td>
                                              <td>6 h</td>
                                              <td>40</td>
                                              <td>240 h</td>
                                              <td>86%</td>
                                              <td class="achrived-target">240 h</td>
                                              <td class="achrived-target">100%</td>
                                              <td>9:00 - 10:00</td>
                                              <td></td>
                                              <td>
                                                <div class="bar">
                                                  <div class="parent-bar bar-255"></div>
                                                  <div class="child-bar bar-200"></div>
                                                </div>
                                              </td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                            </tr>
                                            <tr>
                                              <td>Last and Stolen Cards</td>
                                              <td></td>
                                              <td>5 h</td>
                                              <td>24</td>
                                              <td>120 h</td>
                                              <td>71%</td>
                                              <td class="exceed-target">150 h</td>
                                              <td class="exceed-target">125%</td>
                                              <td>10:00 - 12:00</td>
                                                <td>
                                                  <div class="bar">
                                                    <div class="parent-bar"></div>
                                                    <div class="child-bar bar-335"></div>
                                                  </div>
                                                </td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                            </tr>
                                            <tr>
                                              <td>Account Maintance</td>
                                              <td></td>
                                              <td>4 h</td>
                                              <td>15</td>
                                              <td>60 h</td>
                                              <td>57%</td>
                                              <td class="below-target">32 h</td>
                                              <td class="below-target">53%</td>
                                              <td>10:00 - 12:00</td>
                                                <td>
                                                  <div class="bar">
                                                    <div class="parent-bar"></div>
                                                  </div>
                                                </td>
                                              <td></td>
                                              <td>
                                                <div class="child-bar"></div>
                                              </td>
                                              <td></td>
                                              <td></td>
                                            </tr>
                                            <tr>
                                              <td>Fraud</td>
                                              <td></td>
                                              <td>5 h</td>
                                              <td>8</td>
                                              <td>40 h</td>
                                              <td>71%</td>
                                              <td class="achrived-target">40 h</td>
                                              <td class="achrived-target">100%</td>
                                              <td>10:00 - 12:00</td>
                                                <td>
                                                  
                                                </td>
                                              <td></td>
                                              <td>
                                                <div class="bar">
                                                    <div class="parent-bar bar-192"></div>
                                                  </div>
                                              </td>
                                              <td>
                                                <div class="child-bar"></div>
                                              </td>
                                              <td></td>
                                            </tr>
                                            <tr>
                                              <td>Facebook.com</td>
                                              <td></td>
                                              <td>5 h</td>
                                              <td>8</td>
                                              <td>40 h</td>
                                              <td>71%</td>
                                              <td class="exceed-target">40 h</td>
                                              <td class="exceed-target">100%</td>
                                              <td>10:00 - 12:00</td>
                                                <td>
                                                  
                                                </td>
                                              <td></td>
                                              <td>
                                                <div class="bar">
                                                    <div class="parent-bar bar-192"></div>
                                                  </div>
                                              </td>
                                              <td>
                                                
                                              </td>
                                              <td>
                                                <div class="child-bar"></div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Torontostar.com</td>
                                              <td></td>
                                              <td>5 h</td>
                                              <td>8</td>
                                              <td>40 h</td>
                                              <td>71%</td>
                                              <td class="exceed-target">40 h</td>
                                              <td class="exceed-target">100%</td>
                                              <td>10:00 - 12:00</td>
                                              <td>
                                                </td>
                                                <td></td>
                                                <td>
                                                  <div class="bar">
                                                    <div class="parent-bar bar-192"></div>
                                                    <div class="child-bar"></div>
                                                  </div></td>
                                                <td></td>
                                                <td></td>
                                              
                                            </tr>
                                          </tbody>
                                          <tfoot>
                                            <tr>
                                              <td colspan="3">Totals (Aggregate)</td>
                                              <td class="text-center">227</td>
                                              <td class="text-center">652</td>
                                              <td></td>
                                              <td>4,007 h</td>
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
import $ from "jquery";  
import axios from "axios";    
import moment from "moment";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
    
     components: { DatePicker },
  name:"managerAllactivity",
  data(){
    return{
        ActivityData:[],
        totalEmployee:0,
        totalAssignTime:0,
        achivedTime:0,
          time1: null,
        time2: null,
    }
  },
  methods: {
     mouseOver(){
       $(".tooltipTd .tooltipData").css("display","block");
      },
      mouseLeave(){
        $(".tooltipTd .tooltipData").css("display","none");
      },
     mouseLeaveSecond(){
        $(".tooltipTdTwo .tooltipData").css("display","none");
      },
       mouseOverSecond(){
       $(".tooltipTdTwo .tooltipData").css("display","block");
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
    highFocus(data){
      
      var x=data[0];
      var y=data[1];

      var now  = '04/09/2013 '+y;
      var then = '04/09/2013 '+x;
    var ms = moment(now,"DD/MM/YYYY HH:mm").diff(moment(then,"DD/MM/YYYY HH:mm"));
   var d = moment.duration(ms);
  // var s = d.format("hh:mm");

     
      return  moment.utc(moment(now,"DD/MM/YYYY HH:mm").diff(moment(then,"DD/MM/YYYY HH:mm"))).format("HH:mm");
      // var xy=y-x;
      // if( y < 1 || xy< 1){
      //   return '0';
      // }

      // return xy;
    },
    backMainScreen(){
        // if($('.week-by-week').css('display')==='block'){
        //   $('.week-by-week').css('display','none');
        //   $('.backIcon').css('display','none');
        //   $('.changeText').text("Today, June 28");
        //   $('.downArrow').css('display','none');
        //   $('.selectMonth').css('display','none');
        // }
        // if($('.employee-Table').css('display')==="block"){
        //     $('.activity-Table').css('display','block');
        //     $('.employee-Table').css('display','none');
        //     $('.backIcon').css('display','none');
        // }
        this.$router.push("/mCreditCard");
      },
       getValue(){
        // var val=$('.commonDiv .weekText').text();
        // $('.changeText').text(val);
        // $('.calender-Box').css('display','none');
        // if($('.changeText').text()==="Week over Week"){
        //   $('.week-by-week').css('display','block');
        //   $('.downArrow').css('display','block');
        //   $('.backIcon').css('display','block');
        //   $('.selectMonth').css('display','block');
        // }
        this.$router.push('/weaklydetails')
      },
      calenderBoxShow(){
        if($('.calender-Box').css('display')==="block"){
          $('.calender-Box').css('display','none');
        }
        else{
          $('.calender-Box').css('display','block');
        }
      },
      applicationTable(){
        this.$router.push("/Approcess");
        // if($('.row-click-application-data').css('display')==="block"){
        //   $('.row-click-application-data').css('display', 'none');
        //   $('.activity-Table').css('display', 'block');
        //   $('.common-main-div').css('display', 'block');
        // }
        // else{
        //   $('.row-click-application-data').css('display', 'block');
        //   $('.activity-Table').css('display', 'none');
        //   $('.common-main-div').css('display', 'none');
        // }
      },
      employeeTable(){
        if($('.row-click-employee-data').css('display')==="block"){
          $('.row-click-employee-data').css('display', 'none');
          $('.common-main-div').css('display', 'block');
          $('.employee-Table').css('display', 'block');
        }
        else{
          $('.row-click-employee-data').css('display', 'block');
          $('.common-main-div').css('display', 'none');
          $('.employee-Table').css('display', 'none');
        }
      },
      openBox(){
        if($('.open-box').css('display')=="block"){
          $('.open-box').css('display', 'none');
        }
        else{
          $('.open-box').css('display', 'block')
        }
      },
     displayViewBy(event){
       console.log(event);
        var end =event.target.value;
          if(end=="Activity"){
            $('.activity-Table').css('display','block');
            $('.employee-Table').css('display','none');
          }
          else if(end=="All Employee"){
            $('.backIcon').css('display','block');
            $('.activity-Table').css('display','none');
            $('.employee-Table').css('display','block');
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
     monthovermonth(){
 this.$router.push("/monthovermonth");
     },
     todaydate(){
       this.$router.push("/mCreditCard");
     },
     GetCalenderBox(){
       $('#manager .calender-Box .weekText').click(function(){
          var val=$('#manager .commonDiv .weekText').text();
          $('#manager .managerchangeText').text(val);
          $('.without-change-date').css('display','none');
        $('.change-date-div').css('display','block');
        $('.img-div').css('text-align','center');
        $('.img-div').css('padding-left','57%');
        $('.img-div h4').css('display','flex');
        $('.img-div h4').css('justify-content','center');
        $('.achieved-text').css('display','block');
        $('.change-activity-overview').css('display','block');
        $('.without-activity-overview').css('display','none');
        $('.table-performance-overview').css('max-width','41%');
        $('.table-performance-overview .table>thead>tr>th').css('width','35%');
        $('.table-performance-overview .table>thead>tr>th').css('padding','0px !important');
        $('.table-performance-overview .table>thead>tr>th:nth-child(2)').css('width','21%');
        $('.table-performance-overview .table>thead>tr>th:nth-child(3)').css('width','21%');
        $('.table-performance-overview .table>thead>tr>th').css('vertical-align','middle');

      });

     },
     setActivity(){
       this.$router.push('/MAllEmployee')
          // var end = this.value;

          // if(end=="Activity"){
            // $('.activity-Table').css('display','block');
            // $('.employee-Table').css('display','none');
          // }
          // else if(end=="All Employee"){
            
            // $('.backIcon').css('display','block');
            // $('.activity-Table').css('display','none');
            // $('.employee-Table').css('display','block');
          // }
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
     getActivitiesdata(){
          axios.get("http://www.amock.io/api/kunin-io/v0/divisions/9da53e80-c141-11ea-b3de-0242ac130004/departments/6aa1a220-c142-11ea-b3de-0242ac130004/activities?format=hourly&date=yesterday").
          then((res)=>{
              let Collections=res.data.data;
              let setCollections=[];
              let Activities=[];
              let CountTotalEmp=0;
              let totalAchiev=0;
              let totalAssignedTime=0;
              Collections.forEach(Single => {
                setCollections=Single.departments;
              });
              setCollections.forEach(element => {
                  Activities=element.activities;
              });
              Activities.forEach(emp=> {
                CountTotalEmp+=emp.total_employes;
                totalAchiev+=emp.achieved_time;
                totalAssignedTime+=emp.assigned_time;

              });
              this.ActivityData=Activities;
                this.totalEmployee=CountTotalEmp;
                this.totalAssignTime=totalAchiev;
                this.achivedTime=totalAssignedTime;



          }).catch((error)=>{
              console.log(error);
          })
      }
 
  },
    created(){
        this.getActivitiesdata();
    }
}
</script>
<style lang="css" scoped>
#cerdit-card .calender-Box {
    top: 63%;
    left: 90%;
    /* max-width: 100%; */
    min-width: 509px;
}
</style>