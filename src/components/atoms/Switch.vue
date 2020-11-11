<template>
  <div>
   <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
  </div>
</template>

<script>

export default {
  data() {
    return {
      // switchIcon: switchIcon
    }
  }
  }
</script>

<style lang="scss" scoped>
  input[type=checkbox]{
	height: 0;
	width: 0;
	visibility: hidden;
}

label {
	cursor: pointer;
	text-indent: -9999px;
	width: 60px;
	height: 25px;
	background: #f0f0f1;
	display: block;
	border-radius: 100px;
	position: relative;

}

label:after {
	content: '';
	position: absolute;
	top: 2px;
	left: 3px;
	width: 40px;
	height: 30px;
	/* background-image: url("../../assets/switch.svg"); */
  background-image: url(../../assets/checkbox-off.svg);
	/* border-radius: 90px; */
	transition: 0.3s;
}

 input:checked + label {
	background: blue;

}

input:checked + label:after {
  top: -5px;
	left: 64px;
	transform: translateX(-100%);
	background-image: url("../../assets/switch.svg");

}

</style>