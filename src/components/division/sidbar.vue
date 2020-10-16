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
                              <p>Division: Credit and Lending</p>
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
                     <li :class="[currentPage.includes('division')?activeClass:'']">
                        <router-link to="/division" >
                        <img src="../../assets/img/topicon.png" alt="" width="80">

                           <!-- <i class="fa fa-tachometer" aria-hidden="true"></i> -->
                        </router-link>
                     </li>
                     <li :class="[currentPage.includes('creditCard')?activeClass:'' || currentPage.includes('dallemployee')?activeClass:'']">
                        <router-link to="/creditCard">
                        <img src="../../assets/img/seconicon.png" alt="" width="80">

                           <!-- <i class="fa fa-bar-chart" aria-hidden="true"></i> -->
                        </router-link>
                     </li>
                     <li :class="[currentPage.includes('creditlanding')?activeClass:'']" >
                        <router-link to="/creditlanding">
                        <img src="../../assets/img/iconeye.png" alt="" width="80">
                        <!-- <i class="fa fa-id-card-o" aria-hidden="true">
                         </i> -->
                        </router-link>
                           
                     </li>
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
   name:"DivisionDash",
   mixins:[sidebarMixin],
}
</script>