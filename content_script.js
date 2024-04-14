const transform = (text) =>
  text
    // remove only one newline
    .replace(/(?<!\n)\n(?!\n)/g, " ")
    // remove '-' for word continue
    .replace(/(\S)-\s|\s-(\S)/g, "$1$2");

let textarea = document.querySelector("div#sourceEditArea textarea");
if (textarea) {
  textarea.value = transform(textarea.value);
}

// document.addEventListener("keydown", (event) => {
//   if (event.altKey && event.key === "n") {
//     let textarea = document.querySelector("div#sourceEditArea textarea");
//     if (textarea) {
//       textarea.value = transform(textarea.value);
//     }
//   }
// });
