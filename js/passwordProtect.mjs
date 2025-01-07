
document.addEventListener("DOMContentLoaded", async function () {
    // Hash the password
    async function hashPassword(password) {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hash = await crypto.subtle.digest('SHA-256', data);
        return Array.from(new Uint8Array(hash))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');
    }

    // Password protection logic
    async function passwordProtect() {
        const correctHash = "03acdbde471a8ba15f347ff9d982c99e778a8bf18ad73b83e86eb29a4ee415bc";
        const userPassword = prompt("Enter the password to view this page:");
        const userHash = await hashPassword(userPassword);

        if (userHash === correctHash) {
            const protectedContent = document.querySelector(".password-protect");
            if (protectedContent) {
                protectedContent.classList.remove("password-protect");
            }
        } else {
            alert("Incorrect password.");
            window.location.href = "./index.html";
        }
    }

    passwordProtect();
});