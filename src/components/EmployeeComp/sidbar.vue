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
                              <p>Set up and Administration: Credit Cards</p>
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
               <div class="sideNav col-lg-3">
                  <div class="siteName">
                     <h4>Kunin AI</h4>
                  </div>
                  <ul class="nav nav-tabs nav-stacked">
                     <li :class="[currentPage.includes('employee')?activeClass:'']">
                        <router-link to="/employee" >
                        <img src="../../assets/img/topicon.png" alt="" width="80">

                           <!-- <i class="fa fa-tachometer" aria-hidden="true"></i> -->
                        </router-link>
                     </li>
                     <li :class="[currentPage.includes('emplyedetails')?activeClass:'']" >
                        <router-link to="/emplyedetails">
                        <a data-toggle="tab" href="#cerdit-card">
                        <img src="../../assets/img/seconicon.png" alt="" width="80">

                           <!-- <i class="fa.. fa-bar-chart" aria-hidden="true"></i> -->
                        </a>
                        </router-link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
          <section id="main">
         <div class="container-fluid">
            <div class="row">
               
               <div class="maincontent employeecontent col-lg-9">
                  <div class="main_header">
                     <div class="container-fluid">
                        <div class="row">
                           <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                              <p>Department: Credit Cards</p>
                           </div>
                           <div class="user-profile-name">
                           <div class="col-lg-4 col-md-4 col-sm-6 col-xs-4">
                              <p class="loginText"><i class="fa fa-user-circle-o" aria-hidden="true"></i> Harold James</p>
                           </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="manContent">
                    <router-view></router-view>

                  </div>
                </div>
            </div>
            </div>
        
      </section>
    </div>
</template>
<script>
import sidebarMixin from "../sidebarMxin.js";
export default {
   name:"EmplyeDash",
   mixins:[sidebarMixin],
}
</script>
<style lang="css" scoped>
.siteName{
   height: 72px !important;
}
</style>