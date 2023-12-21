const insert = document.querySelector("#insert");

window.addEventListener("keydown",function(e){
    insert.innerHTML = `
    <div class="color">
    <table>
    <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Key</th>
    </tr>
    <tr>
    <td>${e.key===" " ? 'space': e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>
    </table>
    </div>`
})