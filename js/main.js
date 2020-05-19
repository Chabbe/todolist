let a = "Så här gör du:";
let b = "Skriv vad du ska göra";
let c = "Klicka på plus-tecknet!";

let toDoItems = [a, b, c];
window.onload = function () {
    let btn = document.getElementById("headbtn");
    btn.addEventListener("click", posttitle);

    function posttitle() {
        let title = document.getElementById("hett");
        let text = document.getElementById("headvalue").value;
        title.innerText = text;
        document.getElementsByTagName("title")[0].innerText = text;
        document.getElementById("headdisa").className = "hidden";
        btn.className = "hidden";

    }

    function createList() {
        document.getElementById("activeitems").innerHTML = null;
        for (let i = 0; i < toDoItems.length; i++) {
            let newLi = document.createElement("li");
            newLi.classList = "activeItem";
            newLi.id = [i];
            newLi.innerHTML = toDoItems[i] + '<i class="fas fa-times-circle"></i>' + '<input type="checkbox" class="marker" />';
            newLi.children[0].addEventListener("click", function(){
                document.getElementById(i).remove();
                toDoItems.splice(i, 1);
                console.log('In remove listener after remove', toDoItems.length);
            });
            newLi.children[1].addEventListener("change", moveItem);
            document.getElementById("activeitems").appendChild(newLi);
        } 
    }

    createList();

    this.document.getElementById("addItem").addEventListener("click", addItem);

    function addItem() {
        if (document.getElementById("newItem").value == "") {
            alert("Du behöver skriva något!");
        } else {
            newItem = document.getElementById("newItem").value;
            let newLi = document.createElement("li");
            newLi.classList = "activeItem";
            newLi.innerHTML = newItem + '<i class="fas fa-times-circle"></i>' + '<input type="checkbox" class="marker" />';
            newLi.children[0].addEventListener("click", function(){
                this.parentElement.remove();
            });
            newLi.children[1].addEventListener("change", moveItem);
            document.getElementById("activeitems").appendChild(newLi);
            document.getElementById("newItem").value = "";
        }
    }


    function moveItem() {
        if (this.checked) {
            let itemTransfer = this.parentElement;
            document.getElementById("inactiveitems").appendChild(itemTransfer);
            itemTransfer.classList = "green";
        } else {
            let itemTransfer = this.parentElement;
            document.getElementById("activeitems").appendChild(itemTransfer);
            itemTransfer.className = "activeItem";
        }
    }

    document.getElementById("sortbtn").addEventListener("click", function(){
        sortList('activeitems');
    });
    
    document.getElementById("sortbtn").addEventListener("click", function(){
        sortList('inactiveitems');
    });
    
    // document.getElementById("sortbtn").addEventListener("click", sortList('inactiveitems'));

    function sortList(id) {                               //Tack google
        var list, i, switching, b, shouldSwitch;
        list = document.getElementById(id);
        switching = true;
        while (switching) {
          switching = false;
          b = list.getElementsByTagName("LI");
          for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
          }
        }
      }
}