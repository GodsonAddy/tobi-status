<template>
  <div class="main">
    <a href="https://vodafone.com.gh" alt="" target="_blank">
      <img class="vodafone" alt="logo" src="../assets/vodafone.png" />
    </a>
    <div class="pending">
      <img class="logo" alt="logo" src="../assets/download.jpg" />
      <div class="card">
        <img alt="pending" src="../assets/outline_pending_black_24dp.png" />
        <h4>Dear Customer</h4>
        <div>
          <p>
            Your reported complaint with incident ID:
            <strong>is pending </strong>. We are working speedily to resolve it.
            To follow up on your complaint. Please send an SMS to 655.
          </p>
        </div>
      </div>
      <footer>
        <p>
          Vodafone Ghana does not share your data with any party. 
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
  name: "pending",
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
.pending {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
.logo {
  width: 100px;
  margin-bottom: 20px;
}
.vodafone {
  margin: 0;
  width: 50px;
}
strong {
  color: red;
}
.card {
  border: 1px solid #999;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  box-sizing: border-box;
  box-shadow: 1px 1px 3px silver;
}
.card img { 
  margin-bottom: 10px;
  -webkit-filter: brightness(91%) contrast(126%) invert(21%) sepia(99%)
    hue-rotate(355deg) saturate(6463%);
  filter: brightness(91%) contrast(126%) invert(21%) sepia(99%)
    hue-rotate(355deg) saturate(6463%);
}
h4{
  margin-bottom: 10px;
}
footer {
  padding: 10px 20px;
  text-align: center;
  font-size: 12px;
  color: #666;
}
footer a {
  text-decoration: none;
  color: #ff0000a8;
}
</style>
