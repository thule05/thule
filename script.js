// A. Validation Form
const form = document.querySelector("form");
const checked = true;

form.addEventListener("submit", function (e)
{
    e.preventDefault();

    const name = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const tinnhan = document.getElementById("tinnhan").value.trim();

    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "")
    {
        alert("Vui lòng nhập họ tên đầy đủ!");
        checked = false;
    }

    if (!emailCheck.test(email))
    {
        alert("Sai định dạng email!");
        checked = false;
    }

    if (tinnhan.length < 10)
    {
        alert("Tin nhắn phải có ít nhất 10 ký tự!");
        checked = false;
    }

    if (checked)
    {
        alert("Gửi thông tin thành công!");
    }

    form.reset();
});

// B. Xử lý checkbox “Hoàn thành mục tiêu”
const checkboxes = document.querySelectorAll(".table1 input[type = 'checkbox']");

checkboxes.forEach((checkbox) =>
{
    checkbox.addEventListener("change", function ()
    {
        const row = this.closest("tr");

        if (this.checked)
        {
            row.style.backgroundColor = "#c6f5c6";
            row.style.textDecoration = "line-through";
        } else
        {
            row.style.backgroundColor = "";
            row.style.textDecoration = "";
        }
    });
});

// C. Hiệu ứng

const image = document.querySelector("img[alt='profile']");

image.addEventListener("mouseover", function ()
{
    this.style.transform = "scale(1.05)";
    this.style.transition = "transform 0.2s";
    this.style.border = "4px solid #D8B4F8";
});

image.addEventListener("mouseout", function ()
{
    this.style.transform = "scale(1)";
    this.style.border = "none";
});

// Thêm nút “Lên đầu trang” (Back to top), nút này sẽ hiện ra khi cuộn xuống quá 300px
const button = document.createElement("button");

button.textContent = "Quay lại đầu trang";
document.body.appendChild(button);

button.style.bottom = "30px";
button.style.right = "30px";
button.style.padding = "10px 15px";
button.style.borderRadius = "6px";
button.style.cursor = "pointer";

window.addEventListener("scroll", function ()
{
    if (window.scrollY > 300)
    {
        button.style.display = "block";
    }
    else
    {
        button.style.display = "none";
    }
});

button.addEventListener("click", function ()
{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
