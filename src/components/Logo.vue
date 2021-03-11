<template>
  <a href="#" class="glitch" data-glitch="Explore">オフラインテレビ</a>
</template>

<script>
// https://codepen.io/DevchamploO/pen/QBWdqd  
export default {

}
</script>
<style scoped>

  .glitch{

    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 500;
    font-size  : 20px;
    color: white;
    text-decoration:none;
    
    position: relative;
  }


  .glitch:before,
  .glitch:after{
	content: 'オフラインテレビ';
	opacity: 0.8;
	position: absolute;
	top:0;
	left:0;
  }

  .glitch:before{
	color: #0ff;
	z-index: -1;
  }
  .glitch:after{
	color: #f0f;
	z-index: -2;
  }
  .glitch:hover:before {
	animation: glitch .5s cubic-bezier(.25, .46, .45, .94) both infinite
} 

.glitch:hover:after {
	animation: glitch .3s cubic-bezier(.25, .46, .45, .94) reverse both infinite
}
</style>