// Exercise 04
// Write a JavaScript program to remove items from a dropdown list.



function removecolor()
{
    let sel = document.querySelectorAll('#colorSelect option');
for (let i=0; i < sel.length; i++){
    if (sel[i].selected) {
        sel[i].remove();
        return;
    }
}
    // sel.parentNode.removeChild(sel[sel.length -1]);
    // sel.parentNode.removeChild(sel);
}