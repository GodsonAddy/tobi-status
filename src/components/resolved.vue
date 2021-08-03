<template>
  <div>
    <a href="https://vodafone.com.gh" alt="" target="_blank">
      <img class="vodafone" alt="logo" src="../assets/vodafone.png" />
    </a>
    <div class="resolve">
      <img alt="logo" class="logo" src="../assets/download.jpg" />
      <div class="card">
        <img
          alt="resolve"
          src="../assets/outline_check_circle_outline_black_24dp.png"
        />
        <h4>Dear Customer</h4>
        <div>
          <p>
            Your reported complaint with incident ID:
            <strong> has been Closed</strong>. For further details, please send
            an SMS to 655 for indivduals or email info.gh@vodafone.com for
            enterprise customers.
          </p>
        </div>
      </div>
    </div>
    <footer>
      <p>
        Vodafone Ghana does not share your data with any party. Read our
        <a
          href="https://vodafone.com.gh/personal/privacy-portal"
          target="_blank"
        >
          Privacy Policy
        </a>
        here.
        <a href="https://vodafone.com.gh/terms-and-conditions" target="_blank">
          Terms and Conditions
        </a>
        apply.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "resolved",
};
</script>

<style scoped>
.resolve {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
}
.logo {
  width: 100px;
}
.vodafone {
  top: 0;
  left: 0;
  width: 50px;
  padding: 0 15px;
}
strong {
  color: rgb(11, 235, 11);
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
  box-shadow: 1px 1px 3px silver;
  box-sizing: border-box;
  margin-left: 20px;
}
.card img {
  margin-bottom: 20px;
  -webkit-filter: brightness(111%) contrast(135%) invert(67%) sepia(35%)
    hue-rotate(75deg) saturate(4577%);
  filter: brightness(111%) contrast(111%) invert(67%) sepia(35%)
    hue-rotate(75deg) saturate(4577%);
}
h4 {
  margin-bottom: 10px;
}
footer {
  text-align: center;
  font-size: 12px;
  color: #666;
  padding: 10px 0 10px 70px;
}
footer a {
  text-decoration: none;
  color: #ff0000a8;
}
</style>
