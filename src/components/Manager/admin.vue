<template>
    <div>
        <side-bar></side-bar>
        <div class="content">
            <button class="btn btn-success">INfo</button>
        </div>
    </div>
</template>
<script>
import sidebar from "./sidbar";
export default {
    components:{
        sideBar:sidebar,
    },
    name:"manager",
    
}
</script>