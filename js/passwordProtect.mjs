
        document.addEventListener("DOMContentLoaded", function() {
            function passwordProtect() {
                var password = prompt("Enter the password to view this page:");

                if (password === "Password321") {
                    var protectedContent = document.querySelector(".password-protect");

                    if (protectedContent) {
                        protectedContent.classList.remove("password-protect");
                    } 
                } else {
                    alert("Incorrect password.");
                    window.location.href = ""; // Redirect if the password is incorrect
                }
            }

            passwordProtect();
        });