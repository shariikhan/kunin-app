<template>
    <div>
    <div id="manager" class="tab-pane fade in active">
                <div class="introDiv">
                    <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <h4>Hi Harold,</h4>
                        <div class="dateSelect">
                            <label class="w-100">Select Date Range:</label>
                            <div class="calender-Div" @click="getFunctions()">
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            <span class="managerchangeText">Today, June 28</span>
                            <i  class="fa fa-caret-down" aria-hidden="true"></i>
                            </div>
                            <div class="calender-Box">
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
                        </div>
                        </div>
                        </div>
                        <div class="img-div">
                        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                        <h4>My Focus Area's: <span class="achieved-text">(Achieved Time)</span></h4>
                        <div class="progress-image-div">
                            <img class="img-responsive" src="../../assets/img/Progress-div.png">
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
                                    <th>Employee this Period</th>
                                    <th colspan="2">Assigned Time</th>
                                    <th colspan="2">Achieved Time</th>
                                    <th>High Focus (Time of Day)</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td>Application Processing</td>
                                    <td></td>
                                    <td>6 h</td>
                                    <td>32</td>
                                    <td>192 h</td>
                                    <td>86%</td>
                                    <td class="achrived-target">185 h</td>
                                    <td class="achrived-target">96%</td>
                                    <td>10:00 - 12:00</td>
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
                                    <th>Top Performing</th>
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
export default {
    name:"AdminmanagerHome",
    data(){
        return{
            name:"Sharif khan"
        }
    },
    methods:{
        tryFun(){
            alert("Fun with Gun");
        },
         getFunctions(){
         $('#manager .calender-Div').click(function() {
        $('#manager .calender-Box').css('display','block');
      });
      $('#manager .calender-Box .weekText').click(function(){
          var val=$('#manager .commonDiv .weekText').text();
          $('#manager .managerchangeText').text(val);
          $('#manager .calender-Box').css('display','none');
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
       getValue(){
        var val=$('.commonDiv .weekText').text();
        $('.changeText').text(val);
        $('.calender-Box').css('display','none');
        if($('.changeText').text()==="Week over Week"){
          $('.week-by-week').css('display','block');
          $('.downArrow').css('display','block');
          $('.backIcon').css('display','block');
          $('.selectMonth').css('display','block');
        }
        this.$router.push('/weaklyinfo')
      },
    }
}
</script>