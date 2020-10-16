<template>
  <div class="home" style="background-color:#f5f8fa;">
        <section id="main">
         <div class="container-fluid p-0">
            <div class="row">
               <div class="loginContent col-lg-12">
                  <!-- Modal -->
                  <div id="myModal" >
                    <div class="modal-dialog">
                      <!-- Modal content-->
                      <div class="modal-content">
                        <div class="modal-header">
                           <div class="container-fluid">
                              <div class="row">
                                 <div class="col-lg-4 login-logo">
                                    Kunin AI
                                 </div>
                                 <div class="col-lg-8">
                                    <h4 class="welcomeTxt">WELCOME!</h4>
                                 </div>
                              </div>
                           </div>
                          <!-- <button type="button" class="close" data-dismiss="modal">&times;</button>
                          <h4 class="modal-title">Modal Header</h4> -->
                        </div>
                        <div class="modal-body">
                          <div class="formDiv">
                             <div class="row">
                                <div class="col-lg-12">
                                   <label>User ID</label>
                                   <input type="" name="" class="input-form">
                                </div>
                             </div>
                             <div class="row">
                                <div class="col-lg-12">
                                   <label>Password</label>
                                   <input type="" name="" class="input-form">
                                </div>
                             </div>
                              <div class="row">
                                <div class="col-lg-12">
                                   <button class="loginBtn" @click="login()">Login</button>
                                   <button class="forgetBtn">Forget Password ?</button>
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
// import $ from "jquery";
// import boostrap from "bootstrap";

export default {
  
  name: 'employeLogin',
  methods: {
    login(){
      this.$router.push("/employee");
    
    
    }
  },

}
</script>
