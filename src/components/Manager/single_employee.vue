<template>
    <div>
     <section id="main">
        <div class="container-fluid">
        <div class="row">
            <div class="maincontent col-lg-9">
                <div class="tab-content mainContent">
                    <div id="cerdit-card" class="tab-pane fade in active">
                          <div class="row-click-employee-data">
                          <p class="backIconText" @click="$router.go(-1)"><i class="fa fa-angle-left" aria-hidden="true"></i></p>
                            <label>Employee</label>
                            <h4>Mary Ellen Black</h4>
                            <div class="multiple-select">
                              <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                  <label class="w-100">Display View By:</label>
                                  <select class="display-view-by">
                                    <option>Focus Area</option>
                                  </select>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                  <label class="w-100">Select Date Range:</label>
                                  <div class="calender-Div">
                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                    <span class="managerchangeText">Today, June 28</span>
                                    <i @click="calenderBoxShow()" class="fa fa-caret-down" aria-hidden="true"></i>
                                  </div>
                                  <!-- <div class="calender-Box">
                                  <div class="container-fluid">
                                    <div class="row">
                                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-Div">
                                          <label>From</label>
                                          <div class="from-Calender">
                                            <i class="fa fa-calendar" aria-hidden="true"></i>
                                            <span>06/10/20</span>
                                          </div>
                                        </div>
                                      </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                          <div class="to-Div">
                                            <label>To</label>
                                            <div class="from-Calender">
                                              <i for="#date-input" class="fa fa-calendar" aria-hidden="true"></i>
                                              <span>06/10/20</span>
                                              <input style="display: none;" id="date-input" type="date" name="to-date">
                                            </div>
                                          </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-lg-12">
                                        <div class="commonDiv">
                                          <p>Today</p>
                                        </div>
                                        <div class="commonDiv">
                                          <p class="weekText" @click="getValue()">Week over Week</p>
                                        </div>
                                        <div class="commonDiv">
                                          <p>Month over Month</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>      
                                </div> -->
                                </div>
                              </div>
                            </div>
                            <div class="table-card-div">
                              <div class="row">
                                <div class="col-lg-12">
                                  <div class="table-responsive">
                                  <table class="table table-bordered">
                                          <thead>
                                            <tr>
                                              <th></th>
                                              <th>All Employee</th>
                                              <th>Trend</th>
                                              <th colspan="2">Assigned Time</th>
                                              <th colspan="2">Achieved Time</th>
                                              <th style="position: relative;">High Focus (Time of Day) <span class="infoIcon"><i class="fa fa-info-circle" aria-hidden="true"></i></span></th>
                                              <th style="position: relative;">High Focus (Duration) <span class="infoIcon"><i class="fa fa-info-circle" aria-hidden="true"></i></span></th>
                                              <th style="position: relative;">Collective Focus Time <span class="infoIcon"><i class="fa fa-info-circle" aria-hidden="true"></i></span></th>
                                              <th>07:00</th>
                                              <th>08:00</th>
                                              <th>09:00</th>
                                              <th>10:00</th>
                                              <th>11:00</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td><i class="fa fa-file-text-o" aria-hidden="true"></i></td>
                                              <td style="position: relative;"><span style="" class="triangle"></span>
                                                Application Processing</td>
                                              <td></td>                                              <td>192 h</td>
                                              <td>86%</td>
                                              <td class="achrived-target">2 h</td>
                                              <td class="achrived-target">100%</td>
                                              <td>10:00 - 12:00</td>
                                              <td class="text-center">1 h</td>
                                              <td class="text-center">2 h</td>
                                                <td>
                                                  <div class="bar">
                                                    <div class="parent-bar"></div>
                                                    <div class="child-bar"></div>
                                                  </div>
                                                </td>
                                              <td></td>
                                              <td></td>
                                              <td><div class="child-bar bar-65-left-50"></div></td>
                                              <td></td>
                                            </tr>
                                            <tr>
                                              <td><i class="fa fa-file-text-o" aria-hidden="true"></i></td>
                                              <td>Customer Service</td>
                                              <td></td>
                                              <td>240 h</td>
                                              <td>86%</td>
                                              <td>0 h</td>
                                              <td>0%</td>
                                              <td>9:00 - 10:00</td>
                                              <td class="text-center">0</td>
                                              <td class="text-center">0</td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                            </tr>
                                            <tr>
                                              <td><i class="fa fa-file-text-o" aria-hidden="true"></i></td>
                                              <td>Last and Stolen Cards</td>
                                              <td></td>
                                              <td>120 h</td>
                                              <td>71%</td>
                                              <td class="below-target">30 m</td>
                                              <td class="below-target">25%</td>
                                              <td>10:00 - 12:00</td>
                                              <td class="text-center">30 m</td>
                                              <td class="text-center">30 m</td>
                                              <td></td>
                                              <td>
                                                <div class="bar">
                                                    <div class="parent-bar parent-bar-260"></div>
                                                    
                                                  </div>
                                              </td>
                                              <td>
                                                <div class="child-bar bar-50"></div>
                                              </td>
                                              <td></td>
                                              <td></td>
                                            </tr>
                                            <tr>
                                              <td><i class="fa fa-file-text-o" aria-hidden="true"></i></td>
                                              <td>Account Maintance</td>
                                              <td></td>
                                              <td>60 h</td>
                                              <td>57%</td>
                                              <td class="exceed-target">3 h 32 m</td>
                                              <td class="exceed-target">17%</td>
                                              <td>10:00 - 12:00</td>
                                              <td class="text-center">2 h</td>
                                              <td class="text-center">3 h</td>
                                              <td></td>
                                              <td></td>
                                              <td>
                                                <div class="bar">
                                                  <div class="parent-bar parent-bar-193"></div>
                                                </div>
                                              </td>
                                              <td>
                                                <div class="child-bar bar-50"></div>
                                              </td>
                                              <td> 
                                                <div class="child-bar bar-50"></div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td><i class="fa fa-file-text-o" aria-hidden="true"></i></td>
                                              <td>Fraud</td>
                                              <td></td>
                                              <td>40 h</td>
                                              <td>71%</td>
                                              <td>0</td>
                                              <td>0</td>
                                              <td>10:00 - 12:00</td>
                                              <td class="text-center">0</td>
                                              <td class="text-center">0</td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                            </tr>
                                          </tbody>
                                          <!-- <div class="footer"> -->
                                          <tfoot>
                                            <tr>
                                              <td></td>
                                              <td colspan="2">Totals (Aggregate)</td>
                                              <td class="text-center">7h</td>
                                              <td></td>
                                              <td class="text-center">6 h</td>
                                              <td colspan="2"></td>
                                              <td class="text-center">5h 30m</td>
                                              <td class="text-center">3h 30m</td>
                                              <td colspan="7"></td>
                                            </tr>
                                          </tfoot>
                                          <!-- </div> -->
                                        </table>
                                        </div>
                                </div>
                              </div>
                            </div>
                            <div class="all-notes-div">
                              <h4>All Notes</h4>
                              <div class="container-fluid p-0">
                                <div class="row">
                                  <div class="col-lg-12">
                                    <div class="table-div">
                                      <div class="table-responsive">
                                        <table class="table table-bordered">
                                          <thead>
                                            <tr>
                                              <th>Date Submitted</th>
                                              <th>Focus Area</th>
                                              <th>Note</th>
                                              <th>Submitted By</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>06/07/2020</td>
                                              <td>Application Processing</td>
                                              <td>Was below target as I was asked to support Customer Service</td>
                                              <td>Anna Thompson</td>
                                            </tr>
                                              <tr>
                                              <td>06/09/2020</td>
                                              <td>Application Processing</td>
                                              <td>Was below target as I was asked Anna to cover additional hours due to other staff member being on vacation.</td>
                                              <td>Harold James</td>
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
        </div>
    </section>
    </div>
</template>
<script>
export default {
    name:"SingleEmployee"
}
</script>