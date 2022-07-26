<template>
  <h3>
    {{time() }}
  </h3>
</template>

<script>
export default {
    name:'ClockSection',
    methods:{
        time(){
    return new Date().toLocaleString()

        },
     interval(){
            setInterval(()=>{
                   this.time()
                },1000)
     }
        
    }

}

//  let t=  setInterval(()=>{
//               {{new Date().toLocaleString()}}
//             },1000)
</script>

<style></style>
