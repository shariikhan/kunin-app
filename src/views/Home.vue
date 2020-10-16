<template>
  <div class="home" style="background-color:#f5f8fa;">
        <section id="main">
         <div class="container-fluid p-0">
            <div class="row">
              <div class="col-md-4" >
                <router-link to="/adminLogin" class="btn btn-info btn-sm" style="margin-left:25px; margin-top:25px;">Admin Login</router-link> <br><br>
                <router-link to="/divisionslogin" class="btn btn-info btn-sm" style="margin-left:25px;">Division Login</router-link> <br><br>
                <router-link to="/emplogin" class="btn btn-info btn-sm" style="margin-left:25px;">Employee Login</router-link> <br><br>
                <router-link to="/ManagerLogin" class="btn btn-info btn-sm" style="margin-left:25px;">Manager Login</router-link> <br><br>

              </div>
              <div class="col-md-8">
                <img src="../assets/svg/undraw_social_user_lff0.svg">

              </div>   
            </div>
         </div>
      </section>
    </div>
</template>

<script>
// import $ from "jquery";
// import boostrap from "bootstrap";

export default {
  
  name: 'Home',
 

}
</script>
