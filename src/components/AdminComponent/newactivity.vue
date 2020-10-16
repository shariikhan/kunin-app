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
                              <p>Setup and Administration</p>
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
               <div class="maincontent col-lg-9">
                  <div class=" mainContent">
                     <div id="card" class="">
                        <div class="tabs-Div">
                           <div class="container-fluid">
                              <div class="row">
                                 <div class="col-lg-12">
                                    <ul class="nav nav-tabs">
                                      <li class="active"><router-link data-toggle="tab" to="/admin">Manage Activities</router-link></li>
                                       <li><router-link data-toggle="tab" to="/operations" >Operation</router-link></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class=" main-tabs-content">
                           <div class="container-fluid">
                              <div class="row">
                                 <div class="col-lg-12">
                                    <div class="">
                                       <div id="activity" class="">
                                           <!-- Edit Screen -->
                                          <div class="newActivity">
                                             <div class="container-fluid ">
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
                                                            <input type="text" name="activity" class="input-form" v-model="actvityName">
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
                                                               <select class="select-form" style="color: #12727d;" v-model="division_id">
                                                                  <option v-for="(dname,index) in divisonsName" :key="index" :value="dname.division_id">{{dname.division_name}}</option>
                                                               </select>
                                                            </div>
                                                            <div class="col-lg-6">
                                                               <p class="same-text-label">DEPARTMENT</p>
                                                               <select  class="select-form" style="color: #12727d;" v-model="dept_id">
                                                               <option v-for="(dname,index) in totalDepart" :key="index" :value="dname.department_id">
                                                                  {{dname.department_name}}
                                                                  </option>
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
                                                         <div class="row m-t-20" style="margin-bottom:25px;">
                                                            <div class="col-lg-6">
                                                               <div class="select-exsisting">
                                                                  <div class="custom-select" v-for="(alloc,ind) in selectOptions " :key="ind">
                                                                  <select  class="select-form" v-model="alloc.selectAllocation">
                                                                     <option v-for="(alloc,index) in Allocations" :key="index" :value="alloc.allocation_id">
                                                                     {{alloc.allocation_name}}
                                                                     </option>
                                                                     
                                                                     </select>
                                                                     <span   @click="removeAlloc(ind)" class="removeText">Remove</span>
                                                                     </div>
                                                               </div>
                                                               <p @click="addAlloc()" class="addAllocationText"><i class="fa fa-plus-circle" aria-hidden="true"></i> Add Allocation</p>
                                                               <div id="finish-exsisting-location" class="exsistingAllocation">
                                                                  <div class="row">
                                                                     <div class="col-lg-6">
                                                                        <p>
                                                                           <a class="finishBtn" @click.prevent="onFinsh()">Finish</a>
                                                                        </p>
                                                                     </div>
                                                                     <div class="col-lg-6">
                                                                        <p @click="closeLoanDiv()">
                                                                           <a class="cancleBtn">Cancel</a>
                                                                        </p>
                                                                     </div>
                                                                  </div>
                                                               </div>
                                                            </div>
                                                            <div class="col-lg-6">
                                                               <div class="create-customentry" 
                                                               v-for="(item,k) in customEntry"  :key="k" >
                                                                  <div class="custom-field-div">
                                                                     <input type="text" v-model="item.custom" name="custom-field" class="input-form"><span @click="removeCustom(k)" class="removeText">Remove</span></div>
                                                               </div>
                                                               <p @click="addCustomEntryDiv()" class="addAllocationText"><i class="fa fa-plus-circle" aria-hidden="true"></i> Add Custom Entry</p>
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
            </div>
         </div>
         <!-- </div>
         </div> -->
      </section>
    </div>
</template>
<script>
import $ from "jquery";
import axios from "axios";
export default {
   name:"newactivity",
   data(){
      return{
              selectedDepartment: 'all',
        totalOperations: [],
        divisonsName: [],
        totalDepart: [],
        selected: 'all',
         Allocations:[],
         selectOptions:[{
         selectAllocation:'',
         }],
         customEntry:[
            {
               custom:'',
            }
         ],
         actvityName:'',
         division_id:'',
         dept_id:'',
         allocationName:[],
        
         
      }
   },
    methods:{
       addAlloc(){
          this.selectOptions.push({ selectAllocation: '' });
       },
       removeAlloc(index){
      this.selectOptions.splice(index, 1);
       },
        removeCustom(index){
      this.customEntry.splice(index, 1);
      },
    
      createActivity(){
         this.$router.push("/newactivity");
        
      },
      addCustomEntryDiv(){
         this.customEntry.push({custom:''});
      },
      getAllocation(){
         axios.get("http://www.amock.io/api/kunin-io/v0/divisions/9da53e80-c141-11ea-b3de-0242ac130004/departments/9da53e80-c141-11ea-b3de-0242ac130004/activities/all/allocations").then((res)=>{
            let allocatedData=res.data.data;
            let Allocation=[];
            allocatedData.forEach(elem => {
                  Allocation=elem.allocations;
            });
            this.Allocations=Allocation;
         })
      },
        getDivisions() {
            axios.get("http://www.amock.io/api/kunin-io/v0/divisions?format=names_ids").then((res) => {

                this.divisonsName = res.data.data;
                // console.log(res);
            }).catch((err) => {
                console.log(err);
            })
        },
        getDepartments() {
            axios.get("http://www.amock.io/api/kunin-io/v0/divisions/9da53e80-c141-11ea-b3de-0242ac130004/departments").then((res) => {
                let dpt = res.data.data;
                let dptarry = [];
                dpt.forEach(el => {
                    if (el.departments.length > 0) {
                        dptarry = el.departments;
                        console.log(el.departments)
                    }


                });
                this.totalDepart = dptarry;


            }).catch((error) => {
                console.log(error);
            })
    },
      onFinsh(){

        const data = new FormData()
         var actname=this.actvityName;
         var divsn=this.division_id;
         var dptid=this.dept_id;
         var allocat=this.selectOptions;
         var custom=this.customEntry;

         // for server side api
         let send_Allocation=[];
         let send_custom=[];
         allocat.forEach(element => {
            if(element.selectAllocation){
               send_Allocation.push(element.selectAllocation);
            }
         });
         custom.forEach(csels => {
            send_custom.push(csels.custom);
         });
       console.log(send_custom)



         data.append('name',this.actvityName);
         data.append('allocation',this.selectOptions);
         data.append('custom_allocations',this.customEntry);
         // console.log(data);
         // console.log(allocat);

         axios.post("http://www.amock.io/api/kunin-io/v0/divisions/9da53e80-c141-11ea-b3de-0242ac130004/departments/9da53e80-c141-11ea-b3de-0242ac130004/activities/f32a41f8-c145-11ea-b3de-0242ac130004/allocations",{
        'name': this.actvityName,
        'allocations': send_Allocation,
        'custom_allocations':send_Allocation}).then((res)=>{
           console.log(res)
        }).catch((err)=>{
           console.log(err);
        })

      }


    },
    created(){
       this.getAllocation();
        this.getDivisions();
        this.getDepartments();
    }
    
}
</script>