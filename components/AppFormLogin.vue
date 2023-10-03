<script setup>
defineProps({
  username: String,
  password: String,
  remember: Boolean,
});

defineEmits(["update:username", "update:password", "update:remember"]);
</script>

<template>
  <form>
    <slot>
      <div class="container">
        <h1>Login</h1>
        <hr />
      </div>

      <div class="container">
        <label for="username"><b>Username</b></label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
          :value="username"
          @input="$emit('update:username', $event.target.value)"
        />

        <label for="password"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          :checked="password"
          @input="$emit('update:password', $event.target.value)"
        />

        <button type="submit">Login</button>
        <label>
          <input
            type="checkbox"
            name="remember"
            :value="remember"
            @input="$emit('update:remember', $event.target.checked)"
          />
          Remember me
        </label>
      </div>
    </slot>
    <div class="container actions" style="background-color: #f1f1f1">
      <span class="password">
        No account ?
        <span class="link" data-action="register">Sign in</span>
      </span>
      <span class="password">
        Forgot password ?
        <span class="link" data-action="forgot">Reset</span>
      </span>
    </div>
  </form>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

/* Bordered form */
form {
  border: 3px solid #f1f1f1;
}

h1 {
  text-align: center;
}

hr {
  border: 1px solid #f1f1f1;
}

/* Full-width inputs */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

.link {
  background-color: transparent;
  color: blue;
  text-decoration: underline;
}

.link:hover {
  opacity: 0.6;
  cursor: pointer;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

.actions {
  display: flex;
  justify-content: space-between;
}

/* The "Forgot password" text */
span.password {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.password {
    display: block;
    float: none;
  }
}
</style>
