 const pullCord = document.getElementById('pullCord');
        const lampFace = document.getElementById('lampFace');
        const body = document.body;
        const loginForm = document.getElementById('loginForm');
        const sliderContainer = document.getElementById('sliderContainer');
        const sliderHandle = document.getElementById('sliderHandle');

        let isOn = false;

        // Pull cord logic
        pullCord.addEventListener('mousedown', () => pullCord.style.height = '75px');
        window.addEventListener('mouseup', () => {
            if (pullCord.style.height === '75px') {
                pullCord.style.height = '50px';
                isOn = !isOn;
                body.classList.toggle('light-on', isOn);
                lampFace.innerHTML = isOn ? '● ‿ ●' : '︶ ︶';
            }
        });

        // Basic Login Validation
        function checkLogin() {
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;

            // Set your desired credentials here
            if (user === "admin" && pass === "1234") {
                loginForm.style.display = 'none';
                sliderContainer.style.display = 'block';
            } else {
                document.getElementById('errorMsg').style.display = 'block';
            }
        }

        // Slider Functionality
        let isDragging = false;
        const maxSlide = 320 - 50; // Card width - handle width

        sliderHandle.addEventListener('mousedown', () => isDragging = true);
        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
           
            let rect = sliderContainer.getBoundingClientRect();
            let x = e.clientX - rect.left - 25;
           
            if (x < 0) x = 0;
            if (x > maxSlide) x = maxSlide;
           
            sliderHandle.style.left = x + 'px';

            if (x >= maxSlide - 5) {
                isDragging = false;
                // REDIRECT TO YOUR CHOICE HERE
                window.location.href = "https://www.google.com";
            }
        });

        window.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                sliderHandle.style.left = '0px'; // Snap back if not finished
            }
        });
