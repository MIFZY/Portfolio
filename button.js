window.addEventListener('load', function () {

    const assignmentOrder = [
        "Assignment/assignment-3/recipe.html",
        "Assignment/assignment4/assignment4/recipe.html",
        "Assignment/assignment5/assignment5/index.html",
        "Assignment/assignment-6/assignment-6/register.html",
        "Assignment/assignment-6/assignment-6/login.html",
        "Assignment/assignment7/assignment7/index.html"
    ];

    const currentPath = window.location.pathname;
    let currentAssignmentIndex = -1;

    for (let i = 0; i < assignmentOrder.length; i++) {
        if (currentPath.includes(assignmentOrder[i])) {
            currentAssignmentIndex = i;
            break;
        }
    }

    if (currentAssignmentIndex === -1) {
        if (currentPath.includes("assignment-6")) {
            currentAssignmentIndex = 3;
        }
    }
    let basePath = "";
    const portfolioIndex = window.location.pathname.indexOf("/Portfolio/");

    if (portfolioIndex !== -1) {
        basePath = window.location.pathname.substring(
            0,
            portfolioIndex + "/Portfolio/".length
        );
    } else {
        basePath = "/";
    }

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "navigation-buttons";

    // ปุ่มย้อนกลับ
    if (currentAssignmentIndex > 0) {
        const backBtn = document.createElement("button");
        backBtn.textContent = "ย้อนกลับ";
        backBtn.className = "nav-btn btn-back";
        backBtn.onclick = function () {
            window.location.href =
                basePath + assignmentOrder[currentAssignmentIndex - 1];
        };
        buttonContainer.appendChild(backBtn);
    }
    // ปุ่มหน้าแรก
    const homeBtn = document.createElement("button");

    homeBtn.textContent = "หน้าแรก";
    homeBtn.className = "nav-btn btn-home";

    homeBtn.onclick = function () {
        window.location.href = basePath + "index.html";
    };
    buttonContainer.appendChild(homeBtn);

    // ปุ่มงานถัดไป
    if (
        currentAssignmentIndex !== -1 &&
        currentAssignmentIndex < assignmentOrder.length - 1
    ) {
        const nextBtn = document.createElement("button");
        nextBtn.textContent = "งานถัดไป";
        nextBtn.className = "nav-btn btn-next";

        nextBtn.onclick = function () {
            window.location.href =
                basePath + assignmentOrder[currentAssignmentIndex + 1];
        };
        buttonContainer.appendChild(nextBtn);
    }

    // เพิ่มปุ่มไว้บนสุดของหน้า
    document.body.insertBefore(
        buttonContainer,
        document.body.firstChild
    );

    // Assignment 5
    if (currentPath.includes("assignment5")) {
        let topElem = document.getElementById("top");
        if (
            topElem &&
            topElem.textContent.trim() === ""
        ) {
            topElem.textContent = "Welcome to the Forum";
        }

        let buttons = document.querySelectorAll("button");
        let postBtn = null;
        let clearBtn = null;

        for (let i = 0; i < buttons.length; i++) {
            let text =
                buttons[i].textContent
                    .trim()
                    .toLowerCase();
            if (text === "post") {
                postBtn = buttons[i];
            }
            if (text === "clear") {
                clearBtn = buttons[i];
            }
        }

        let postCount = 0;
        if (postBtn) {
            postBtn.onclick = function () {
                let msgBox =
                    document.getElementById("message");
                if (!msgBox) return;
                let msg = msgBox.value;
                if (msg.trim() === "") return;
                if (postCount === 0) {
                    let topic =
                        document.getElementById("topic");
                    if (topic) {
                        topic.textContent = msg;
                    }
                } else if (postCount === 1) {
                    let r1 =
                        document.getElementById("reply1");

                    if (r1) {
                        r1.textContent = msg;
                    }
                } else if (postCount === 2) {
                    let r2 =
                        document.getElementById("reply2");

                    if (r2) {
                        r2.textContent = msg;
                    }
                }
                postCount++;
                msgBox.value = "";
            };
        }

        if (clearBtn) {

            clearBtn.onclick = function () {

                let topic =
                    document.getElementById("topic");

                let r1 =
                    document.getElementById("reply1");

                let r2 =
                    document.getElementById("reply2");

                let msgBox =
                    document.getElementById("message");

                if (topic) {
                    topic.textContent = "";
                }
                if (r1) {
                    r1.textContent = "";
                }
                if (r2) {
                    r2.textContent = "";
                }
                if (msgBox) {
                    msgBox.value = "";
                }
                postCount = 0;
            };
        }
    }
});