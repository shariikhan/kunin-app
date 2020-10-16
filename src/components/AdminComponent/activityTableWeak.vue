<template>
    <div>
          <div class="week-by-week">
                          <div class="activity-Table">
                            <div class="table-card-div">
                              <div class="row">
                                <div class="col-lg-12">
                                  <table class="table table-bordered">
                                          <thead>
                                            <tr>
                                              <th><span @click="showWeekData()" class="downArrow"><i class="fa fa-caret-up" aria-hidden="true"></i></span> June 1-7 , 2020 <i class="fa fa-angle-down" aria-hidden="true"></i></th>
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
                                            <tr @click="applicationTable()">
                                              <td><span style="" class="triangle"></span>Application Processing</td>
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
                                              <div class="bar-Div">
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
                                              </div>
                                            </tr>
                                          </tbody>
                                          <!-- <div class="footer"> -->
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
                                          <!-- </div> -->
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="activity-Table">
                            <div class="table-card-div">
                              <div class="row">
                                <div class="col-lg-12">
                                  <table class="table table-bordered">
                                          <thead>
                                            <tr>
                                              <th><span class="downArrow"><i class="fa fa-caret-up" aria-hidden="true"></i></span>June 8-14 , 2020 <i class="fa fa-angle-down" aria-hidden="true"></i></th>
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
                                            <tr @click="applicationTable()">
                                              <td><span style="" class="triangle"></span>Application Processing</td>
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
                                              <div class="bar-Div">
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
                                              </div>
                                            </tr>
                                          </tbody>
                                          <!-- <div class="footer"> -->
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
                                          <!-- </div> -->
                                        </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="activity-Table">
                            <div class="table-card-div">
                              <div class="row">
                                <div class="col-lg-12">
                                  <table class="table table-bordered">
                                          <thead>
                                            <tr>
                                              <th><span class="downArrow"><i class="fa fa-caret-up" aria-hidden="true"></i></span> June 15-22 , 2020 <i class="fa fa-angle-down" aria-hidden="true"></i></th>
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
                                            <tr @click="applicationTable()">
                                              <td><span style="" class="triangle"></span>Application Processing</td>
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
                                              <div class="bar-Div">
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
                                              </div>
                                            </tr>
                                          </tbody>
                                          <!-- <div class="footer"> -->
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
                                          <!-- </div> -->
                                        </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
    </div>
</template>