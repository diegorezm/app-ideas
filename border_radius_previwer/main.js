const mainBox = document.querySelector(".main-border")
const button = document.querySelector("#getValues")

document.addEventListener('keyup', function (e) {
  if (e.code === "Enter") {
    const id = e.target.id;
    const content = Number(e.target.value)
    switch (id) {
      case "top-left":
          mainBox.style.borderTopLeftRadius=`${content}px`
        break;

      case "bottom-left":
          mainBox.style.borderBottomLeftRadius=`${content}px`
        break;

      case "top-right":
           mainBox.style.borderTopRightRadius=`${content}px`
        break;

      case "bottom-right":
          mainBox.style.borderBottomRightRadius=`${content}px`
        break;
    }
    console.log(mainBox.style.borderTopLeftRadius)
  }
})
button.addEventListener("click",function () {
  const topLeft = mainBox.style.borderTopLeftRadius
  const bottomLeft = mainBox.style.borderBottomLeftRadius
  const topRight = mainBox.style.borderTopRightRadius
  const bottomRight = mainBox.style.borderBottomRightRadius

  mainBox.innerHTML=`<p>  border-radius:${topLeft} ${topRight} ${bottomRight} ${bottomLeft};</p>`
})

