<template>
  <div class="main">
    <a href="https://vodafone.com.gh" alt="" target="_blank" class="vodafone">
      <img alt="logo" src="../assets/vodafone.png" />
    </a>
    <div class="card-wrap">
      <div class="logo">
        <img alt="logo" src="../assets/download.jpg" />
      </div>
      <div class="card">
        <img class="loading" alt="loading" src="../assets/loading.png" />
        <div>
          <h4>Dear Customer</h4>
          <p>
            Your reported complaint with incident ID:
            <strong>is in progress</strong>. We are working speedily to resolve
            it. To follow up on your complaint. Please send an SMS to 655.
          </p>
        </div>
      </div>
      <footer>
        <p>
          Vodafone Ghana does not share your data with any third party. Read our
          <a
            href="https://vodafone.com.gh/personal/privacy-portal"
            target="_blank"
          >
            Privacy Policy
          </a>
          here.
          <a
            href="https://vodafone.com.gh/terms-and-conditions"
            target="_blank"
          >
            Terms and Conditions
          </a>
          apply.
        </p> 
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "inProgress",
}
</script>

<style scoped>
.main {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-content: space-evenly;
  padding: 0 15px;
}
.vodafone {
  width: 50px;
  margin-bottom: 70px;
}
.vodafone > img {
  width: 100%;
  height: 100%;
}
.card-wrap {
  display: flex;
  margin-top: 15px;
  flex-direction: column;
  align-items: center;
}
.logo {
  right: 21vw;
  z-index: 10;
  width: 70px;
  height: 70px;
  position: absolute;
}
.logo img {
  width: 100%;
  height: 100%;
}
.card {
  border: 1px solid #999;
  border-radius: 5px;
  margin-top: 35px;
  padding: 5px 10px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 1px 1px 3px silver;
}
.loading {
  height: 80px;
  width: 80px;
  margin-bottom: 20px;
}
strong {
  color: #ce9603;
}
footer {
  padding: 10px 15px;
  text-align: center;
  font-size: 12px;
  color: #666;
}
footer a {
  text-decoration: none;
  color: #ff0000a8;
}
h4{
  margin-bottom: 10px;
}
</style>
