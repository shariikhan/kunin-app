<template>
  <div>
       <section id="main">
         <div class="container-fluid">
            <div class="row">
               <div class="maincontent col-lg-9">
                  <div class="main_header">
                     <div class="container-fluid">
                        <div class="row">
                           <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                              <p>Dashboard Overview: Department Head</p>
                           </div>
                           <div class="user-profile-name">
                           <div class="col-lg-4 col-md-4 col-sm-6 col-xs-4">
                              <p class="loginText"><i class="fa fa-user-circle-o" aria-hidden="true"></i> Harold james</p>
                           </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        
      </section>
        <section id="main">
         <div class="container-fluid">
            <div class="row">
               <div class="maincontent col-lg-9">
                  <div class=" mainContent">
                     <div id="card" class="">
                        <div class="tabs-Div">
                           <div class="container-fluid">
                              <div class="row">
                                 <div class="col-lg-12">
                                    <ul class="nav nav-tabs">
                                       <li :class="[currentPage.includes('admin')?activeClass:'']"><router-link data-toggle="tab" to="/admin">Manage Activities</router-link></li>
                                       <li :class="[currentPage.includes('operations')?activeClass:'']"><router-link data-toggle="tab" to="/operations" >Operations</router-link></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class=" main-tabs-content">
                           <div class="container-fluid">
                              <div class="row">
                                 <div class="col-lg-12">
                                    <div class="">
                                       <div id="activity" class="">
                                        <div id="operation" class="">
                                          <div class="multiple-select-options">
                                             <div class="row">
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                   <div class="selectDiv">
                                                      <div class="departmentSelect">
                                                         <label>Division</label>
                                                         <select>
                                                            <option v-for="(dname,index) in divisonsName" :key="index" :value="dname.division_id">{{dname.division_name}}</option>
                                                         </select>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                   <div class="selectDiv">
                                                      <label>Select Department</label>
                                                      <select v-model="selectedDepartment">
                                                         <option value="all">All</option>
                                                         <option v-for="(dname,index) in totalDepart" :key="index" :value="dname.department_id">{{dname.department_name}}</option>
                                                      </select>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="tableDiv">
                                             <div class="row">
                                                <div class="col-lg-12">
                                                   <h4>Set Hours Of Operations</h4>
                                                </div>
                                             </div>
                                             {{expactedwork.day}}
                                             <div v-if="selectedDepartment =='all'">
                                               
                                             <div class="deptoperations" v-for="(operation,inde) in totalOperations" :key="inde">
                                              
                                             <div class="row">
                                                <div class="col-lg-12">
                                                  <h2 class="h2">{{operation.department_name}} </h2>
                                                  <div class="table-responsive">
                                                   <table class="table table-bordered">
                                                      <thead>
                                                         <tr>
                                                            <td>Weekly Schedule</td>
                                                            <td>Day 1</td>
                                                            <td>Day 2</td>
                                                            <td>Day 3</td>
                                                            <td>Day 4</td>
                                                            <td>Day 5</td>
                                                            <td>Day 6</td>
                                                            <td>Day 7</td>
                                                            <td>Total</td>
                                                         </tr>
                                                      </thead>
                                                      <tbody>
                                                         <tr>
                                                            <td>Expected work hours per day</td>
                                                            <td>
                                                               <input type="number" class="form-control custom-input" v-model="expactedwork.day1" >
                                                             </td>
                                                            <td>
                                                               <input type="number" class="form-control custom-input" v-model="expactedwork.day2" >
                                                               </td>
                                                            <td>
                                                               <input type="number" class="form-control custom-input" v-model="expactedwork.day3" >
                                                               </td>
                                                            <td>
                                                               <input type="number" class="form-control custom-input" v-model="expactedwork.day4" >
                                                               </td>
                                                            <td>
                                                               <input type="number" class="form-control custom-input" v-model="expactedwork.day5" >

                                                               </td>
                                                            <td>
                                                               <input type="number" class="form-control custom-input" v-model="expactedwork.day6" >
                                                               </td>
                                                            <td>
                                                               <input type="number" class="form-control custom-input" v-model="expactedwork.day7" >
                                                               </td>
                                                            <td>
                                                            {{parseFloat(expactedwork.day1)+parseFloat(expactedwork.day2)+parseFloat(expactedwork.day3)+parseFloat(expactedwork.day4)+parseFloat(expactedwork.day5)+parseFloat(expactedwork.day6)+parseFloat(expactedwork.day7)}}

                                                            </td>
                                                         </tr>
                                                         <tr>
                                                            <td>Lunch Breaks</td>
                                                            <td>
                                                                <input type="number" class="form-control custom-input" v-model="LunchBreak.day1" >
                                                               </td>
                                                            <td>
                                                                <input type="number" class="form-control custom-input" v-model="LunchBreak.day2" >
                                                               </td>
                                                            <td>
                                                                <input type="number" class="form-control custom-input" v-model="LunchBreak.day3" >
                                                               </td>
                                                            <td>
                                                                <input type="number" class="form-control custom-input" v-model="LunchBreak.day4" >
                                                               </td>
                                                            <td>
                                                                <input type="number" class="form-control custom-input" v-model="LunchBreak.day5" >
                                                               </td>
                                                            <td>
                                                                <input type="number" class="form-control custom-input" v-model="LunchBreak.day6" >
                                                               </td>
                                                            <td>
                                                                <input type="number" class="form-control custom-input" v-model="LunchBreak.day7" >
                                                               </td>
                                                            <td>
                                                                {{parseFloat(LunchBreak.day1)+parseFloat(LunchBreak.day2)+parseFloat(LunchBreak.day3)+parseFloat(LunchBreak.day4)+parseFloat(LunchBreak.day5)+parseFloat(LunchBreak.day6)+parseFloat(LunchBreak.day7)}}
                                                            </td>
                                                         </tr>
                                                         <tr>
                                                <td>Subtotal - Total Workday</td>
                                                <td>
                                                   {{parseFloat(expactedwork.day1)+parseFloat(LunchBreak.day1)}}
                                                   </td>
                                                <td>
                                                   {{parseFloat(expactedwork.day2)+parseFloat(LunchBreak.day2)}}
                                                    </td>
                                                   <td>
                                                      {{parseFloat(expactedwork.day3)+ parseFloat(LunchBreak.day3)}}
                                                       </td>
                                                <td>
                                                    {{parseFloat(expactedwork.day4)+parseFloat(LunchBreak.day4)}}
                                                   </td>
                                                <td>
                                                   {{parseFloat(expactedwork.day5)+parseFloat(LunchBreak.day5)}}
                                                   
                                                    </td>
                                                   <td>
                                                      {{parseFloat(expactedwork.day6)+parseFloat(LunchBreak.day6)}}
                                                       </td>
                                                   <td> 
                                                      {{parseFloat(expactedwork.day7)+parseFloat(LunchBreak.day7)}}
                                                       
                                                      </td>
                                                         <td>
                                                             {{parseFloat(expactedwork.day1)+parseFloat(LunchBreak.day1)+
                                                               parseFloat(expactedwork.day2)+parseFloat(LunchBreak.day2)+
                                                               parseFloat(expactedwork.day3)+ parseFloat(LunchBreak.day3)+
                                                               parseFloat(expactedwork.day4)+parseFloat(LunchBreak.day4)+
                                                               parseFloat(expactedwork.day5)+parseFloat(LunchBreak.day5)+
                                                               parseFloat(expactedwork.day6)+parseFloat(LunchBreak.day6)+
                                                               parseFloat(expactedwork.day7)+parseFloat(LunchBreak.day7)}}
                                                         </td>
                                                         </tr>
                                                         <tr>
                                                            <td>Non - working Time</td>
                                                            <td>
                                                            <input type="number" class="form-control custom-input" 
                                                            v-model="nonworkingTime.day1">
                                                              
                                                            </td>
                                                            <td><input type="number" class="form-control custom-input" 
                                                            v-model="nonworkingTime.day2">
                                                               
                                                               
                                                            </td>
                                                            <td>
                                                               <input type="number" class="form-control custom-input" 
                                                            v-model="nonworkingTime.day3">
                                                             
                                                            </td>
                                                            <td>
                                                               <input type="number" class="form-control custom-input" 
                                                            v-model="nonworkingTime.day4">
                                                              
                                                            </td>
                                                            <td>
                                                               <input type="number" class="form-control custom-input" 
                                                            v-model="nonworkingTime.day5">
                                                               
                                                            </td>
                                                            <td>
                                                               <input type="number" class="form-control custom-input" 
                                                            v-model="nonworkingTime.day6">
                                                              

                                                            </td>
                                                            <td>
                                                               <input type="number" class="form-control custom-input" 
                                                            v-model="nonworkingTime.day7">
                                                              

                                                            </td>
                                                            <td>
                                                               {{
                                                           parseFloat(nonworkingTime.day7)+
                                                            parseFloat(nonworkingTime.day6)+
                                                            parseFloat(nonworkingTime.day5)+
                                                            parseFloat(nonworkingTime.day4)
                                                            +
                                                            parseFloat(nonworkingTime.day3)+
                                                            parseFloat(nonworkingTime.day2)+
                                                            parseFloat(nonworkingTime.day1)
                                                              }}
                                                            </td>
                                                         </tr>
                                                         <tr>
                                                            <td>Total (24 hr period)</td>
                                                            <td>
                                                                    {{parseFloat(expactedwork.day1)+parseFloat(LunchBreak.day1)+parseFloat(nonworkingTime.day1)}}
                                                               
                                                            </td>
                                                            <td>   {{parseFloat(expactedwork.day2)+parseFloat(LunchBreak.day2)+parseFloat(nonworkingTime.day2)}}
                                                               </td>
                                                            <td>
                                                                {{parseFloat(expactedwork.day3)+ parseFloat(LunchBreak.day3)+parseFloat(nonworkingTime.day3)}}
                                                               </td>
                                                            <td> {{parseFloat(expactedwork.day4)+parseFloat(LunchBreak.day4)+parseFloat(nonworkingTime.day4)}}
                                                               </td>
                                                            <td> {{parseFloat(expactedwork.day5)+parseFloat(LunchBreak.day5)+parseFloat(nonworkingTime.day5)}}
                                                               </td>
                                                            <td> {{parseFloat(expactedwork.day6)+parseFloat(LunchBreak.day6)+parseFloat(nonworkingTime.day6)}}
                                                               </td>
                                                            <td>  {{parseFloat(expactedwork.day7)+parseFloat(LunchBreak.day7)+parseFloat(nonworkingTime.day7)}}
                                                               </td>
                                                            <td>

                                                               {{parseFloat(expactedwork.day1)+parseFloat(LunchBreak.day1)+parseFloat(nonworkingTime.day1)+
                                                              parseFloat(expactedwork.day2)+parseFloat(LunchBreak.day2)+parseFloat(nonworkingTime.day2)+
                                                               parseFloat(expactedwork.day3)+ parseFloat(LunchBreak.day3)+parseFloat(nonworkingTime.day3)+
                                                               parseFloat(expactedwork.day4)+parseFloat(LunchBreak.day4)+parseFloat(nonworkingTime.day4)+
                                                               parseFloat(expactedwork.day5)+parseFloat(LunchBreak.day5)+parseFloat(nonworkingTime.day5)+
                                                               parseFloat(expactedwork.day6)+parseFloat(LunchBreak.day6)+parseFloat(nonworkingTime.day6)+
                                                               parseFloat(expactedwork.day7)+parseFloat(LunchBreak.day7)+parseFloat(nonworkingTime.day7)}}


                                                            </td>
                                                         </tr>
                                                      </tbody>
                                                   </table>
                                                   </div>
                                                </div>
                                             </div>
                                             <div id="finishTableButtonDiv">
                                                <div class="row">
                                                   <div class="col-lg-6">
                                                      <p>
                                                         <a class="finishBtn">Save</a>
                                                      </p>
                                                   </div>
                                                   <div class="col-lg-6">
                                                      <p @click="closeDiv()">
                                                         <a class="cancleBtn">Cancel</a>
                                                      </p>
                                                   </div>
                                                </div>
                                             </div>
                                         
                                          <div class="activity-target">
                                             <div class="container-fluid">
                                                <div class="row">
                                                   <div class="col-lg-12">
                                                      <h4>Set Activity Target Threshold</h4>
                                                   </div>
                                                </div>
                                                <div class="input-percentage">
                                                    <span class="plus-minus-text">+/-</span>
                                                   <input type="text" name="percentage" class="input-form" :value="operation.schedules[0].threshold" style="padding-left: 58px;font-size: 15px;">
                                                  
                                                </div>
                                                <div id="finishTargetButtonDiv">
                                                   <div class="row">
                                                      <div class="col-lg-6">
                                                         <p>
                                                            <a class="finishBtn">Save</a>
                                                         </p>
                                                      </div>
                                                      <div class="col-lg-6">
                                                         <p @click="closeDiv()">
                                                            <a class="cancleBtn">Cancel</a>
                                                         </p>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="optimal-div">
                                             <div class="container-fluid " style="margin-bottom:35px;">
                                                <div class="row">
                                                   <div class="col-lg-12">
                                                      <h4>Set Optimal Duration Of Activity Flow State</h4>
                                                   </div>
                                                </div>
                                                <div class="multi-input">
                                                   <div class="row">
                                                      <div class="col-lg-6">
                                                         <label>DURATION</label>
                                                         <div class="input-percentage">
                                                             <span class="plus-minus-text">+/-</span>
                                                            <input type="text" name="percentage" class="input-form" :value="operation.schedules[0].flow.duration" style="padding-left: 58px;font-size: 15px;">
                                                           
                                                         </div>
                                                      </div>
                                                      <div class="col-lg-6">
                                                         <label>THRESHOLD</label>
                                                         <div class="input-percentage"> 
                                                             <span class="plus-minus-text">+/-</span>
                                                            <input type="text" name="percentage" class="input-form" :value="operation.schedules[0].flow.threshold" style="padding-left: 58px;font-size: 15px;">
                                                           
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div id="finishOptimalButtonDiv">
                                                   <div class="row">
                                                      <div class="col-lg-6">
                                                         <p>
                                                            <a class="finishBtn">Save</a>
                                                         </p>
                                                      </div>
                                                      <div class="col-lg-6">
                                                         <p @click="closeDiv()">
                                                            <a class="cancleBtn">Cancel</a>
                                                         </p>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          </div>
                                          </div>
                                          <!-- single dpt selected value -->
                                          <div v-else>
                                             <div class="deptoperations" v-for="(operation,inde) in totalOperations" :key="inde">
                                              <div v-if="operation.department_id==selectedDepartment">

                                             <div class="row">
                                                <div class="col-lg-12">
                                                  <h2 class="h2">{{operation.department_name}} </h2>
                                                  <div class="table-responsive">
                                                   <table class="table table-bordered">
                                                      <thead>
                                                         <tr>
                                                            <td>Weekly Schedule</td>
                                                            <td>Day 1</td>
                                                            <td>Day 2</td>
                                                            <td>Day 3</td>
                                                            <td>Day 4</td>
                                                            <td>Day 5</td>
                                                            <td>Day 6</td>
                                                            <td>Day 7</td>
                                                            <td>Total</td>
                                                         </tr>
                                                      </thead>
                                                      <tbody>
                                                         <tr>
                                                            <td>Expected work hours per day</td>
                                                            <td>
                                                               <input type="number" class="form-control custom-input" :value="operation.schedules[0].work_hours[0]">
                                                             </td>
                                                            <td>
                                                               <input type="number" class="form-control custom-input" :value="operation.schedules[0].work_hours[1]">
                                                               </td>
                                                            <td>
                                                               <input type="number" class="form-control custom-input" :value="operation.schedules[0].work_hours[2]">
                                                               </td>
                                                            <td>
                                                               <input type="number" class="form-control custom-input" :value="operation.schedules[0].work_hours[3]">
                                                               </td>
                                                            <td>
                                                               <input type="number" class="form-control custom-input" :value="operation.schedules[0].work_hours[4]">

                                                               </td>
                                                            <td>
                                                               <input type="number" class="form-control custom-input" :value="operation.schedules[0].work_hours[5]">
                                                               </td>
                                                            <td>
                                                               <input type="number" class="form-control custom-input" :value="operation.schedules[0].work_hours[6]">
                                                               </td>
                                                            <td>
                                                            {{parseFloat(operation.schedules[0].work_hours[0])+
                                                               parseFloat(operation.schedules[0].work_hours[1])+
                                                               parseFloat(operation.schedules[0].work_hours[2])+
                                                               parseFloat(operation.schedules[0].work_hours[3])+
                                                               parseFloat(operation.schedules[0].work_hours[4])+
                                                               parseFloat(operation.schedules[0].work_hours[5])+
                                                               parseFloat(operation.schedules[0].work_hours[6])
                                                               }}

                                                            </td>
                                                         </tr>
                                                       <tr>
                                                            <td>Lunch Breaks</td>
                                                            <td>
                                                                <input type="number" class="form-control custom-input" :value="operation.schedules[0].breaks[0]">
                                                               </td>
                                                            <td>
                                                                <input type="number" class="form-control custom-input" :value="operation.schedules[0].breaks[1]">
                                                               </td>
                                                            <td>
                                                                <input type="number" class="form-control custom-input" :value="operation.schedules[0].breaks[2]">
                                                               </td>
                                                            <td>
                                                                <input type="number" class="form-control custom-input" :value="operation.schedules[0].breaks[3]">
                                                               </td>
                                                            <td>
                                                                <input type="number" class="form-control custom-input" :value="operation.schedules[0].breaks[4]">
                                                               </td>
                                                            <td>
                                                                <input type="number" class="form-control custom-input" :value="operation.schedules[0].breaks[5]">
                                                               </td>
                                                            <td>
                                                                <input type="number" class="form-control custom-input" :value="operation.schedules[0].breaks[6]">
                                                               </td>
                                                            <td>
                                                               {{parseFloat(operation.schedules[0].breaks[0])+
                                                               parseFloat(operation.schedules[0].breaks[1])+
                                                               parseFloat(operation.schedules[0].breaks[2])+
                                                               parseFloat(operation.schedules[0].breaks[3])+
                                                               parseFloat(operation.schedules[0].breaks[4])+
                                                               parseFloat(operation.schedules[0].breaks[5])+
                                                               parseFloat(operation.schedules[0].breaks[6])
                                                               }}
                                                            </td>
                                                         </tr>
                                                               <tr>
                                                <td>Subtotal - Total Workday</td>
                                                <td>
                                                   {{parseFloat(operation.schedules[0].work_hours[0])+parseFloat(operation.schedules[0].breaks[0])}}
                                                   </td>
                                                <td>
                                                   {{
                                                      parseFloat(operation.schedules[0].work_hours[1])+parseFloat(operation.schedules[0].breaks[1])
                                                   }}
                                                    </td>
                                                   <td>
                                                      {{parseFloat(operation.schedules[0].work_hours[2])+ parseFloat(operation.schedules[0].breaks[2])}}
                                                       </td>
                                                <td>
                                                    {{parseFloat(operation.schedules[0].work_hours[3])+parseFloat(operation.schedules[0].breaks[3])}}
                                                   </td>
                                                <td>
                                                   {{
                                                   parseFloat(operation.schedules[0].work_hours[4])+parseFloat(operation.schedules[0].breaks[4])
                                                   }}
                                                    </td>
                                                   <td>
                                                      {{parseFloat(operation.schedules[0].work_hours[5])+parseFloat(operation.schedules[0].breaks[5])}}
                                                       </td>
                                                   <td> 
                                                      {{parseFloat(operation.schedules[0].work_hours[6])+parseFloat(operation.schedules[0].breaks[6])}}
                                                      </td>
                                                         <td>
                                                             
                                                            
                                                            {{parseFloat(operation.schedules[0].work_hours[0])+parseFloat(operation.schedules[0].breaks[0])+
                                                            parseFloat(operation.schedules[0].work_hours[1])+parseFloat(operation.schedules[0].breaks[1])+
                                                            parseFloat(operation.schedules[0].work_hours[2])+parseFloat(operation.schedules[0].breaks[2])+
                                                            parseFloat(operation.schedules[0].work_hours[3])+parseFloat(operation.schedules[0].breaks[3])+
                                                            parseFloat(operation.schedules[0].work_hours[4])+parseFloat(operation.schedules[0].breaks[4])+
                                                            parseFloat(operation.schedules[0].work_hours[5])+parseFloat(operation.schedules[0].breaks[5])+
                                                            parseFloat(operation.schedules[0].work_hours[6])+parseFloat(operation.schedules[0].breaks[6])
                                                            
                                                            }}
                                                            
                                                         </td>
                                                         </tr>
                                                         <tr>
                                                            <td>Non - working Time</td>
                                                            <td>15</td>
                                                            <td>15</td>
                                                            <td>15</td>
                                                            <td>15</td>
                                                            <td>15</td>
                                                            <td>24</td>
                                                            <td>24</td>
                                                            <td>123</td>
                                                         </tr>
                                                         <tr>
                                                            <td>Total (24 hr period)</td>
                                                            <td>24</td>
                                                            <td>24</td>
                                                            <td>24</td>
                                                            <td>24</td>
                                                            <td>24</td>
                                                            <td>24</td>
                                                            <td>24</td>
                                                            <td>168</td>
                                                         </tr>
                                                      </tbody>
                                                   </table>
                                                   </div>
                                                </div>
                                             </div>
                                             <div id="finishTableButtonDiv">
                                                <div class="row">
                                                   <div class="col-lg-6">
                                                      <p>
                                                         <a class="finishBtn">Save</a>
                                                      </p>
                                                   </div>
                                                   <div class="col-lg-6">
                                                      <p @click="closeDiv()">
                                                         <a class="cancleBtn">Cancel</a>
                                                      </p>
                                                   </div>
                                                </div>
                                             </div>
                                         
                                          <div class="activity-target">
                                             <div class="container-fluid">
                                                <div class="row">
                                                   <div class="col-lg-12">
                                                      <h4>Set Activity Target Threshold</h4>
                                                   </div>
                                                </div>
                                                <div class="input-percentage">
                                                    <span class="plus-minus-text">+/-</span>
                                                   <input type="text" name="percentage" class="input-form" :value="operation.schedules[0].threshold" style="padding-left: 58px;font-size: 15px;">
                                                  
                                                </div>
                                                <div id="finishTargetButtonDiv">
                                                   <div class="row">
                                                      <div class="col-lg-6">
                                                         <p>
                                                            <a class="finishBtn">Save</a>
                                                         </p>
                                                      </div>
                                                      <div class="col-lg-6">
                                                         <p @click="closeDiv()">
                                                            <a class="cancleBtn">Cancel</a>
                                                         </p>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="optimal-div">
                                             <div class="container-fluid " style="margin-bottom:35px;">
                                                <div class="row">
                                                   <div class="col-lg-12">
                                                      <h4>Set Optimal Duration Of Activity Flow State</h4>
                                                   </div>
                                                </div>
                                                <div class="multi-input">
                                                   <div class="row">
                                                      <div class="col-lg-6">
                                                         <label>DURATION</label>
                                                         <div class="input-percentage">
                                                             <span class="plus-minus-text">+/-</span>
                                                            <input type="text" name="percentage" class="input-form" :value="operation.schedules[0].flow.duration" style="padding-left: 58px;font-size: 15px;">
                                                           
                                                         </div>
                                                      </div>
                                                      <div class="col-lg-6">
                                                         <label>THRESHOLD</label>
                                                         <div class="input-percentage"> 
                                                             <span class="plus-minus-text">+/-</span>
                                                            <input type="text" name="percentage" class="input-form" :value="operation.schedules[0].flow.threshold" style="padding-left: 58px;font-size: 15px;">
                                                           
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div id="finishOptimalButtonDiv">
                                                   <div class="row">
                                                      <div class="col-lg-6">
                                                         <p>
                                                            <a class="finishBtn">Save</a>
                                                         </p>
                                                      </div>
                                                      <div class="col-lg-6">
                                                         <p @click="closeDiv()">
                                                            <a class="cancleBtn">Cancel</a>
                                                         </p>
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
         <!-- </div>
         </div> -->
      </section>
    </div>
</template>
<style lang="css" scope>
  .main-tabs-content{
    margin-top: 25px;
  }  
</style>
<script>
import axios from "axios";
import sidebarMixin from "../sidebarMxin";
export default {
  name:"operations",
  mixins:[sidebarMixin],
  data(){
    return{
       selectedDepartment:'all',
      totalOperations:[],
      divisonsName:[],
      totalDepart:[],
      selected:'all',
      totalhours:24,
      deptHours:[],
      expactedwork:{
         day1:0,
         day2:0,
         day3:0,
         day4:0,
         day5:0,
         day6:0,
         day7:0,
         
      },
      LunchBreak:{
         day1:0,
         day2:0,
         day3:0,
         day4:0,
         day5:0,
         day6:0,
         day7:0,
         
      },
      nonworkingTime:{
          day1:15,
         day2:15,
         day3:15,
         day4:15,
         day5:15,
         day6:15,
         day7:15,
      }
    }
  },
  methods:{
     closeDiv(){
      //   alert("do whatever you want")
      console.log("Cancel Button Clicked");
     },
    getHoursOpertation(){
      axios.get("http://www.amock.io/api/kunin-io/v0/divisions/9da53e80-c141-11ea-b3de-0242ac130004/departments/all/schedules").then((res)=>{
         let operationArray=res.data.data;
         let operation=[];
         let depthours=[];
         operationArray.forEach(singleOperation => {
            operation=singleOperation.departments;
         });
         

         operation.forEach(hours => {
            depthours=hours.schedules;
            
         });
         depthours.forEach(workingHours => {
            this.expactedwork.day1=workingHours.work_hours[0];
            this.expactedwork.day2=workingHours.work_hours[1];
            this.expactedwork.day3=workingHours.work_hours[2];
            this.expactedwork.day4=workingHours.work_hours[3];
            this.expactedwork.day5=workingHours.work_hours[4];
            this.expactedwork.day6=workingHours.work_hours[5];
            this.expactedwork.day7=workingHours.work_hours[6];

            // lunch break time and devisons
            this.LunchBreak.day1=workingHours.breaks[0];
            this.LunchBreak.day2=workingHours.breaks[1];
            this.LunchBreak.day3=workingHours.breaks[2];
            this.LunchBreak.day4=workingHours.breaks[3];
            this.LunchBreak.day5=workingHours.breaks[4];
            this.LunchBreak.day6=workingHours.breaks[5];
            this.LunchBreak.day7=workingHours.breaks[6];

         });
      // this.nonworkingTime.day5= parseFloat(this.expactedwork.day5)+ parseFloat(this.LunchBreak.day5);
        this.totalOperations=operation;
            this.deptHours=depthours

      }).catch((err)=>{
        console.log(err);
      });
    },
     getDivisions(){
         axios.get("http://www.amock.io/api/kunin-io/v0/divisions?format=names_ids").then((res)=>{
            
            this.divisonsName=res.data.data;
               // console.log(res);
            }).catch((err)=>{
            console.log(err);
         })
      },
      getDepartments(){
         axios.get("http://www.amock.io/api/kunin-io/v0/divisions/9da53e80-c141-11ea-b3de-0242ac130004/departments").then((res)=>{
            let dpt =res.data.data;
            let dptarry=[];
            dpt.forEach(el => {
                  if(el.departments.length > 0 ){
                  dptarry=el.departments;
                  console.log(el.departments)
                  }
                 
                  
            });
            this.totalDepart=dptarry;
            
            
         }).catch((error)=>{
            console.log(error);
         })
      }
    
  },
  created(){
       this.getDivisions();
    this.getHoursOpertation();
    this.getDepartments();
  }
}
</script>
<style lang="css" scoped>
.custom-input{
   border: none;
    width: 80px;
    padding: 0px;
    margin: 0px;
}

</style>