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
                              <p>Manager: Credit Cards</p>
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
                     <li :class="[currentPage.includes('Manager')?activeClass:'']">
                        <router-link to="/Manager" >
                           <!-- <i class="fa fa-tachometer" aria-hidden="true"></i> -->
                        <img src="../../assets/img/topicon.png" alt="" width="80">

                        </router-link>
                     </li>
                    
                     <li :class="[currentPage.includes('mCreditCard')?activeClass:''||currentPage.includes('MAllEmployee')?activeClass:'' || 
                     currentPage.includes('weaklydetails')?activeClass:'' || currentPage.includes('monthovermonth')?activeClass:'' ]"> 
                        <router-link to="/mCreditCard">
                        <a data-toggle="tab" href="#cerdit-card">
                           <!-- <i class="fa fa-bar-chart" aria-hidden="true"></i> -->
                        <img src="../../assets/img/seconicon.png" alt="" width="80">

                        </a>
                        </router-link>
                     </li>
                     <!-- <li>
                        <router-link to="/Manager">
                           <img src="../../assets/img/iconeye.png" alt="" width="80">

                        </router-link>
                           
                     </li> -->
                  </ul>
               </div>
            </div>
         </div>
      </section>
      <section>
         <router-view></router-view>
      </section>
    </div>
</template>
<script>
import sidebarMixin from "../sidebarMxin";
export default {
   name:"Manager",
   mixins:[sidebarMixin],
}
</script>