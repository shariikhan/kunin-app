<template>
    <div>
        <section id="main">
         <div class="container-fluid">
            <div class="row">
               <div class="maincontent col-lg-9">
                  <div class="tab-content mainContent">
                     <div id="card" class="tab-pane fade  in active">
                        <div class="tabs-Div">
                           <div class="container-fluid">
                              <div class="row">
                                 <div class="col-lg-12">
                                    <ul class="nav nav-tabs">
                                       <li class="active"><a data-toggle="tab" href="#activity">Manage Activities</a></li>
                                       <li><a data-toggle="tab" href="#operation">Operation</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="tabs-content main-tabs-content">
                           <div class="container-fluid">
                              <div class="row">
                                 <div class="col-lg-12">
                                    <div class="tab-content">
                                       <div id="activity" class="tab-pane fade in active">
                                          <div class="manage-activity-div">
                                             <div class="row">
                                                <div class="col-lg-8 col-md-6 col-sm-6 col-xs-12">
                                                   <p>Division</p>
                                                   <h4>Credit and Lending</h4>
                                                   <div class="selectDiv">
                                                      <div class="departmentSelect">
                                                         <label>Department</label>
                                                         <select>
                                                            <option>Credit Card</option>
                                                         </select>
                                                      </div>
                                                      <div class="assignBySelect">
                                                         <label>Assign By</label>
                                                         <select>
                                                            <option>Activity</option>
                                                         </select>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                                   <div class="create-new-activity">
                                                      <button @click="createActivity()" class="createActivity">Create New Activity</button>
                                                      <button class="editActivityText">Edit Activity Mapping</button>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="assignActivityDiv">
                                                <!---- Credit Card Div Start-->
                                                <div class="row">
                                                   <div class="col-lg-12">
                                                      <h4>Credit Cards</h4>
                                                      <p>Manager: Harold James</p>
                                                   </div>
                                                </div>
                                                <div class="tableDiv">
                                                   <div class="row">
                                                      <div class="col-lg-12">
                                                        <div class="table-responsive">
                                                         <table class="table table-bordered">
                                                            <thead>
                                                               <tr>
                                                                  <th>Assign Activity</th>
                                                                  <th>Assign Time</th>
                                                                  <th>Assign To</th>
                                                                  <th>My Focus</th>
                                                               </tr>
                                                            </thead>
                                                            <tbody id="assignActivity">
                                                            </tbody>
                                                         </table>
                                                       </div>
                                                         <div id="totalShowDiv" class="totalDiv table-responsive">
                                                            <table>
                                                               <tr>
                                                                  <td>
                                                                     <p>
                                                                        <strong>
                                                                        Total
                                                                        </strong>
                                                                        "Cannot exceed 100% or 8.5 h"
                                                                     </p>
                                                                  </td>
                                                                  <td>
                                                                     <p class="timeParaText">
                                                                        5h
                                                                     </p>
                                                                  </td>
                                                                  <td>
                                                                     <p class="percentageText">
                                                                        25%
                                                                     </p>
                                                                  </td>
                                                               </tr>
                                                            </table>
                                                         </div>
                                                         <p id="showText" class="noActivity">There are currently no activites assigned</p>
                                                         <p @click="addRow()" class="addActivity"><i class="fa fa-plus-circle" aria-hidden="true"></i> Assign Activity</p>
                                                      </div>
                                                   </div>
                                                   <div id="finishButtonDiv">
                                                      <div class="row">
                                                         <div class="col-lg-6">
                                                            <p>
                                                               <a class="finishBtn">Finish</a>
                                                            </p>
                                                         </div>
                                                         <div class="col-lg-6">
                                                            <p @click="closeDiv()">
                                                               <a class="cancleBtn">Cancle</a>
                                                            </p>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div id="menuShow" class="menuDiv">
                                                      <ul>
                                                         <li @click="deleteRow()" data-toggle="modal" data-target="#deleteModal"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete Activity</li>
                                                         <li @click="editActivity()"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Activity</li>
                                                      </ul>
                                                   </div>
                                                   <hr/>
                                                </div>
                                                <!---- Credit Card Div End-->
                                                <!---- Loan Div Start-->
                                                <div class="row">
                                                   <div class="col-lg-12">
                                                      <h4>Loans</h4>
                                                      <p>Manager: Harold James</p>
                                                   </div>
                                                </div>
                                                <div class="tableDiv">
                                                   <div class="row">
                                                      <div class="col-lg-12">
                                                        <div class="table-responsive">
                                                         <table class="table table-bordered">
                                                            <thead>
                                                               <tr>
                                                                  <th>Assign Activity</th>
                                                                  <th>Assign Time</th>
                                                                  <th>Assign To</th>
                                                                  <th>My Focus</th>
                                                               </tr>
                                                            </thead>
                                                            <tbody id="loanAssignActivity">
                                                            </tbody>
                                                         </table>
                                                         </div>
                                                         <div id="totalLoanShowDiv" class="totalDiv table-responsive">
                                                            <table>
                                                               <tr>
                                                                  <td>
                                                                     <p>
                                                                        <strong>
                                                                        Total
                                                                        </strong>
                                                                        "Cannot exceed 100% or 8.5 h"
                                                                     </p>
                                                                  </td>
                                                                  <td>
                                                                     <p class="timeParaText">
                                                                        5h
                                                                     </p>
                                                                  </td>
                                                                  <td>
                                                                     <p class="percentageText">
                                                                        25%
                                                                     </p>
                                                                  </td>
                                                               </tr>
                                                            </table>
                                                         </div>
                                                         <p id="showLoanText" class="noActivity">There are currently no activites assigned</p>
                                                         <p @click="addLoanRow()" class="addActivity"><i class="fa fa-plus-circle" aria-hidden="true"></i> Assign Activity</p>
                                                      </div>
                                                   </div>
                                                   <div id="finishLoanButtonDiv">
                                                      <div class="row">
                                                         <div class="col-lg-6">
                                                            <p>
                                                               <a class="finishBtn">Finish</a>
                                                            </p>
                                                         </div>
                                                         <div class="col-lg-6">
                                                            <p @click="closeLoanDiv()">
                                                               <a class="cancleBtn">Cancle</a>
                                                            </p>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div id="menuShow" class="menuDiv">
                                                      <ul>
                                                         <li><i class="fa fa-trash-o" aria-hidden="true"></i> Delete Activity</li>
                                                         <li><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Activity</li>
                                                      </ul>
                                                   </div>
                                                </div>
                                                <!---- Loan Div End-->
                                                <!--Delete Modal -->
                                                <div id="deleteModal" class="modal fade" role="dialog">
                                                   <div class="modal-dialog">
                                                      <!-- Modal content-->
                                                      <div class="modal-content">
                                                         <div class="modal-header">
                                                            <button type="button" class="close" data-dismiss="modal">Close</button>
                                                         </div>
                                                         <div class="modal-body">
                                                            <h4 class="modal-title">Are you sure you want to delete this activity?</h4>
                                                            <p>Deleting this activity will permently remove all data assocaited with it.</p>
                                                            <div class="buttonDiv">
                                                               <div class="container-fluid p-0">
                                                                  <div class="row">
                                                                     <div class="col-lg-12">
                                                                        <div class="finishButtonDiv">
                                                                           <a>Yes, Delete Activity</a>
                                                                           <a data-dismiss="modal" class="cancelDelete">Cancel</a>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <!-- Delete Modal End -->
                                                </div>
                                             </div>
                                          </div>
                                          <!--  Edit Screen -->
                                          <div class="editActivity">
                                             <div class="container-fluid p-0">
                                                <div class="row">
                                                   <div class="col-lg-12">
                                                      <h4>Edit Activity</h4>
                                                   </div>
                                                </div>
                                                <div class="drop-down-div">
                                                   <div class="row">
                                                      <div class="col-lg-12">
                                                         <label>Department</label>
                                                         <div class="custom-select" style="width:200px;">
                                                            <select>
                                                               <option value="0">Cerdit Card</option>
                                                               <option value="1">Audi</option>
                                                               <option value="2">BMW</option>
                                                               <option value="3">Citroen</option>
                                                               <option value="4">Ford</option>
                                                            </select>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="drop-down-div">
                                                   <div class="row">
                                                      <div class="col-lg-12">
                                                         <label>Activity</label>
                                                         <div class="custom-select" style="width:200px;">
                                                            <select>
                                                               <option value="0">Application Processing</option>
                                                               <option value="1">Audi</option>
                                                               <option value="2">BMW</option>
                                                               <option value="3">Citroen</option>
                                                               <option value="4">Ford</option>
                                                            </select>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="multi-Drop-Down">
                                                   <div class="drop-down-div">
                                                      <div class="row">
                                                         <div class="col-lg-12">
                                                            <label>Activity Allocations</label>
                                                         </div>
                                                      </div>
                                                      <div class="row">
                                                         <div class="col-lg-6">
                                                            <p>Exsisting Allocation</p>
                                                            <div class="addAllocationDiv">
                                                            </div>
                                                            <p @click="addAllocation()" class="addAllocationText"><i class="fa fa-plus-circle" aria-hidden="true"></i> Add Allocation</p>
                                                            <div id="finishAllocationButtonDiv">
                                                               <div class="row">
                                                                  <div class="col-lg-6">
                                                                     <p>
                                                                        <a class="finishBtn">Finish</a>
                                                                     </p>
                                                                  </div>
                                                                  <div class="col-lg-6">
                                                                     <p @click="closeLoanDiv()">
                                                                        <a class="cancleBtn">Cancle</a>
                                                                     </p>
                                                                  </div>
                                                               </div>
                                                            </div>
                                                         </div>
                                                         <div class="col-lg-6">
                                                            <p>Create Custom Entry</p>
                                                            <div class="custom-field">
                                                            </div>
                                                            <p @click="addCustomEntry()" class="addAllocationText"><i class="fa fa-plus-circle" aria-hidden="true"></i> Add Custom Entry</p>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="newActivity">
                                             <div class="container-fluid p-0">
                                                <div class="row">
                                                   <div class="col-lg-12">
                                                      <h4>Create New Activity</h4>
                                                   </div>
                                                </div>
                                                <div class="create-activity-form-div">
                                                   <div class="row">
                                                      <div class="col-lg-12">
                                                         <h5>Create New Activity</h5>
                                                      </div>
                                                   </div>
                                                   <div class="form-Div">
                                                      <div class="row">
                                                         <div class="col-lg-12">
                                                            <p class="same-text-label">NAME NEW ACTIVITY</p>
                                                            <input type="text" name="activity" class="input-form">
                                                         </div>
                                                      </div>
                                                      <div class="select-division-departmet">
                                                         <div class="row">
                                                            <div class="col-lg-12">
                                                               <h5>Select Division and Department for Mapping</h5>
                                                            </div>
                                                         </div>
                                                         <div class="row m-t-20">
                                                            <div class="col-lg-6">
                                                               <p class="same-text-label">DIVISION</p>
                                                               <select class="select-form" style="color: #12727d;">
                                                                  <option value="0">Application Processing</option>
                                                                  <option value="1">Audi</option>
                                                                  <option value="2">BMW</option>
                                                                  <option value="3">Citroen</option>
                                                                  <option value="4">Ford</option>
                                                               </select>
                                                            </div>
                                                            <div class="col-lg-6">
                                                               <p class="same-text-label">DEPARTMENT</p>
                                                               <select class="select-form" style="color: #12727d;">
                                                                  <option value="0">Credit Card</option>
                                                                  <option value="1">Audi</option>
                                                                  <option value="2">BMW</option>
                                                                  <option value="3">Citroen</option>
                                                                  <option value="4">Ford</option>
                                                               </select>
                                                               <span><i class="fa fa-plus-circle" aria-hidden="true"></i></span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                      <div class="allocate-activity-div">
                                                         <div class="row">
                                                            <div class="col-lg-12">
                                                               <h5>Allocate Activity to Exsisting or Custom Window</h5>
                                                            </div>
                                                         </div>
                                                         <div class="row m-t-20">
                                                            <div class="col-lg-6">
                                                               <div class="select-exsisting"></div>
                                                               <p @click="addExsistingAllocation()" class="addAllocationText"><i class="fa fa-plus-circle" aria-hidden="true"></i> Add Allocation</p>
                                                               <div id="finish-exsisting-location" class="exsistingAllocation">
                                                                  <div class="row">
                                                                     <div class="col-lg-6">
                                                                        <p>
                                                                           <a class="finishBtn">Finish</a>
                                                                        </p>
                                                                     </div>
                                                                     <div class="col-lg-6">
                                                                        <p @click="closeLoanDiv()">
                                                                           <a class="cancleBtn">Cancle</a>
                                                                        </p>
                                                                     </div>
                                                                  </div>
                                                               </div>
                                                            </div>
                                                            <div class="col-lg-6">
                                                               <div class="create-customentry"></div>
                                                               <p @click="addCustomEntryDiv()" class="addAllocationText"><i class="fa fa-plus-circle" aria-hidden="true"></i> Add Custom Entry</p>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div id="operation" class="tab-pane fade">
                                          <div class="multiple-select-options">
                                             <div class="row">
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                   <div class="selectDiv">
                                                      <label>Select Division</label>
                                                      <select>
                                                         <option>Credit and Lending</option>
                                                      </select>
                                                   </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                   <div class="selectDiv">
                                                      <label>Select Department</label>
                                                      <select>
                                                         <option>All</option>
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
                                             <div class="row">
                                                <div class="col-lg-12">
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
                                                            <td>7.5</td>
                                                            <td>7.5</td>
                                                            <td>7.5</td>
                                                            <td>7.5</td>
                                                            <td>7.5</td>
                                                            <td>0</td>
                                                            <td>0</td>
                                                            <td>3.75</td>
                                                         </tr>
                                                         <tr>
                                                            <td>Lunch Breaks</td>
                                                            <td>1.5</td>
                                                            <td>1.5</td>
                                                            <td>1.5</td>
                                                            <td>1.5</td>
                                                            <td>1.5</td>
                                                            <td>0</td>
                                                            <td>0</td>
                                                            <td>7.5</td>
                                                         </tr>
                                                         <tr>
                                                            <td>Subtotal - Total Workday</td>
                                                            <td>9.0</td>
                                                            <td>9.0</td>
                                                            <td>9.0</td>
                                                            <td>9.0</td>
                                                            <td>9.0</td>
                                                            <td>0</td>
                                                            <td>0</td>
                                                            <td>45</td>
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
                                                         <a class="cancleBtn">Cancle</a>
                                                      </p>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="activity-target">
                                             <div class="container-fluid p-0">
                                                <div class="row">
                                                   <div class="col-lg-12">
                                                      <h4>Set Activity Target Threshold</h4>
                                                   </div>
                                                </div>
                                                <div class="input-percentage">
                                                   <input type="text" name="percentage" class="input-form">
                                                   <span class="plus-minus-text">+/-</span>
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
                                                            <a class="cancleBtn">Cancle</a>
                                                         </p>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="optimal-div">
                                             <div class="container-fluid p-0">
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
                                                            <input type="text" name="percentage" class="input-form">
                                                            <span class="plus-minus-text">+/-</span>
                                                         </div>
                                                      </div>
                                                      <div class="col-lg-6">
                                                         <label>THRESHOLD</label>
                                                         <div class="input-percentage">
                                                            <input type="text" name="percentage" class="input-form">
                                                            <span class="plus-minus-text">+/-</span>
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
                                                            <a class="cancleBtn">Cancle</a>
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
         <!-- </div>
         </div> -->
      </section>
    </div>
</template>
<script>
import $ from "jquery";
export default {
   name:"managerActivty",
    methods:{
        deleteRow(){
        document.getElementById('menuShow').style.display="none";
      },
      addRow() {
        document.getElementById('showText').style.display="none";
        document.getElementById('finishButtonDiv').style.display="block";
        document.getElementById('totalShowDiv').style.display="block";
      var table = document.getElementById("assignActivity");
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      
      cell1.innerHTML = '<select><option>Application Processing</option><option>Customer<option>Account Maintainance</option><option>Collection</option><option>Bank Office</option></select>';
      cell2.innerHTML = '<div class="multiInputs"><div class="hourMintues"><input placeholder="h" type="text" name=""><input placeholder="m" type="text" name=""></div><div class="percentageDiv"><input placeholder="25%" type="text" name=""></div></div>';
      cell3.innerHTML = '<p>All Employee <i class="fa fa-user" aria-hidden="true"></i></p>';
      cell4.innerHTML = '<div class="text-center"><input type="radio" id="age1" name="age" value="30"></div>';
      cell5.innerHTML = '<div class="text-center"><i @click="openMenu()" class="fa fa-ellipsis-v" aria-hidden="true"></i></div>';
      },
      createActivity(){
      $('.manage-activity-div').css('display', 'none');
      $('.newActivity').css('display', 'block');
      },
      addLoanRow() {
      var table = document.getElementById("loanAssignActivity");
      document.getElementById('showLoanText').style.display="none";
        document.getElementById('finishLoanButtonDiv').style.display="block";
        document.getElementById('totalLoanShowDiv').style.display="block";
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      
      cell1.innerHTML = '<select><option>Application Processing</option><option>Customer<option>Account Maintainance</option><option>Collection</option><option>Bank Office</option></select>';
      cell2.innerHTML = '<div class="multiInputs"><div class="hourMintues"><input placeholder="h" type="text" name=""><input placeholder="m" type="text" name=""></div><div class="percentageDiv"><input placeholder="25%" type="text" name=""></div></div>';
      cell3.innerHTML = '<p>All Employee <i class="fa fa-user" aria-hidden="true"></i></p>';
      cell4.innerHTML = '<div class="text-center"><input type="radio" id="age1" name="age" value="30"></div>';
      cell5.innerHTML = '<div class="text-center"><i id="moreButton" @click="openMenu" class="fa fa-ellipsis-v" aria-hidden="true"></i></div>';
      },
       closeDiv(){
      document.getElementById('finishButtonDiv').style.display="none";
      },
      closeLoanDiv(){
      if(document.getElementById('finishAllocationButtonDiv').style.display=="block"){
      document.getElementById('finishAllocationButtonDiv').style.display="none"
      }
      if (document.getElementById('finishLoanButtonDiv').style.display=="block") {
      document.getElementById('finishLoanButtonDiv').style.display="none";
      }
      if(document.getElementById('finish-exsisting-location').style.display=="block"){
        document.getElementById('finish-exsisting-location').style.display="none";
      }
      
      },
      openMenu(){
      if(document.getElementById('menuShow').style.display=="block")
      {
      document.getElementById('menuShow').style.display="none";
      }
      else{
      document.getElementById('menuShow').style.display="block";
      }
      },
      editActivity(){
      $('.manage-activity-div').css('display', 'none');
      $('.editActivity').css('display', 'block');
      
      },
      addAllocation(){
       document.getElementById('finishAllocationButtonDiv').style.display="block";
      $('.addAllocationDiv').append('<div class="custom-select"><select><option value="0">Application Processing</option><option value="1">Audi</option><option value="2">BMW</option><option value="3">Citroen</option><option value="4">Ford</option></select><span @click="removedropDown(this)" class="removeText">Remove</span></div>');
      
      },
      addExsistingAllocation(){
      document.getElementById('finish-exsisting-location').style.display="block";
      $('.select-exsisting').append('<div class="custom-select"><select  class="select-form"><option value="0">Application Processing</option><option value="1">Audi</option><option value="2">BMW</option><option value="3">Citroen</option><option value="4">Ford</option></select><span @click="removedropDown(this)" class="removeText">Remove</span></div>');
      },
      addCustomEntryDiv(){
      $('.create-customentry').append('<div class="custom-field-div"><input type="text" name="custom-field" class="input-form"><span @click="removedropDown(this)" class="removeText">Remove</span></div>');
      },
      removedropDown(x){
      $(x).parent().remove();
      }
       ,addCustomEntry(){
      $('.custom-field').append('<div class="custom-field-div"><input type="text" name="custom-field"><span @click="removedropDown(this)" class="removeText">Remove</span></div>')
      }


    }
    
}
</script>