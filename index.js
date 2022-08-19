const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("keydown",function(event){
    if(event.code=="Enter"){
        search();
    }
});
function search(){
    const input = searchInput.value;
    window.location.href="https://www.google.com/search?q=" + input + "&source=hp&ei=wor-YuS-OcfWhwOek6mIAw&iflsig=AJiK0e8AAAAAYv6Y0vjbameA50xme-KwpSKz1FOm7vIi&ved=0ahUKEwjkp9SGiNH5AhVH62EKHZ5JCjEQ4dUDCAc&uact=5&oq="+ input +"&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMgsIABCABBCxAxCDATIICAAQsQMQgwEyCwguEIAEELEDENQCMggILhCABBCxAzILCC4QgAQQsQMQ1AIyCAguEIAEELEDMggIABCABBCxAzIOCC4QgAQQsQMQgwEQ1AIyCAgAELEDEIMBOggIABCPARDqAjoOCC4QjwEQxwEQ0QMQ6gI6EQguEIAEELEDEIMBEMcBENEDOgsILhCABBCxAxCDAToFCAAQgAQ6CAgAEIAEEMkDOgUIABCSAzoICC4QgAQQ1AJQpxBYrBdgrRtoAXAAeACAAZsBiAH0BZIBAzAuNZgBAKABAbABCg&sclient=gws-wiz"
}
