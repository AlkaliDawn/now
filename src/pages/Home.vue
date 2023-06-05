<script setup>
import navbar from "@/components/navbar.vue";
document.title = "Now. Home"
</script>

<template>
  <navbar id="navbar"></navbar>
  <div id="content">
    <div id="TreeDiv"><img src="/tree.png" id="TreeImg"/></div>
    <div id="TextContainer">
      <div id="UpperText1" class="Text CreamColor" >
        The best time<br>
        to plant a tree was<br>
      </div>

      <div id="LowerText1" class="Text LightMainColor">
        Yesterday
      </div>
      <div id="Dots" class="Text CreamColor">
            .<br>
            .<br>
            .
      </div>
    </div>
  </div>
</template>

<style scoped>

#content {
    height: calc(100%);
    width: 100vw;
}

#TextContainer {
    position: absolute;
    inset: 0 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 103vw;
    height: 103vh;
}

#TreeDiv {
    width: 103vw;
    height: 103vh;
    overflow: hidden;
    margin: -5px 10px -10px -5px;
    z-index: 1;

}

#TreeImg {
    position: relative;
    filter: blur(3px);
    width: 100%;
    height: 100%;
    object-fit: fill;
    left: -1.5%;
    top: -1.5%;
}

#navbar {
    z-index: 2;
}

#UpperText1 {
    margin-top: 300px;
    line-height: 94px;
    order: 1;
}

#LowerText1 {
    letter-spacing: 0.02em;
    line-height: 94px;
    order: 2;
}

#Dots {
    margin-top: 40px;
    line-height: 60px;
    font-family: 'Quattrocento Sans', sans-serif;
    order: 3;
}

.Text {
    padding: 0;
    margin: 0;
}

</style>