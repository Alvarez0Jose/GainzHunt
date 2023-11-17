document.addEventListener('DOMContentLoaded', function () {
  const loginButton = document.getElementById('loginButton');

  loginButton.addEventListener('click', async function () {
      try {
          const formData = new FormData(document.getElementById('loginForm'));
          const response = await fetch('/login', {
              method: 'POST',
              body: formData,
          });

          if (response.ok) {
              console.log('Login successful');
              // You might want to redirect the user or update your app's state here
          } else {
              console.log('Login failed');
              // Handle login failure, display an error message, etc.
          }
      } catch (error) {
          console.error('Error during login:', error);
      }
  });
});
