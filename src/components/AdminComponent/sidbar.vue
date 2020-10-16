<template>
    <div>
      
       <section id="main">
         <div class="container-fluid">
            <div class="row">
               <div class="sideNav col-lg-3">
                  <div class="siteName">
                     <h4>Kunin AI</h4>
                  </div>
                  <ul class="nav nav-tabs nav-stacked">
                     <li>
                        <router-link to="/admin" >
                           <!-- <i class="fa fa-tachometer" aria-hidden="true"></i> -->
                        <img src="../../assets/img/topicon.png" alt="" width="80">

                        </router-link>
                     </li>
                     <li>
                        <router-link to="/admin" >
                        <a data-toggle="tab" href="#cerdit-card">
                           <!-- <i class="fa fa-bar-chart" aria-hidden="true"></i> -->
                        <img src="../../assets/img/seconicon.png" alt="" width="80">

                        </a>
                        </router-link>
                     </li>
                     <li class="active">
                        <router-link to="/admin" >
                        <img src="../../assets/img/iconeye.png" alt="" width="80">

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
import sidebarMixin from "../sidebarMxin.js";
export default {
   name:"AdminDashboard",
   mixins:[sidebarMixin],
}
</script>