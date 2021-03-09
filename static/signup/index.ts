function checkBlank(value:string) {
    if (value.trim().length == 0) {return true} 
    else {return false;}
}

function HTMLelement(name:string) {
    return (<HTMLInputElement>document.getElementById(name))
}

function submit() {
    //정보를 변수에 담기
    const id:string = HTMLelement("id").value.toLowerCase();
    const password:string = HTMLelement("password").value;
    const passwordAgain:string = HTMLelement("passwordAgain").value
    const policy:boolean = HTMLelement("policy").checked;

    if (checkBlank(id) || checkBlank(password)) {
        //check blank
        alert("값을 올바르게 입력하였는지 확인해주세요.");
        return false;
    } else if (password !== passwordAgain) {
        //check password and passwordAgain is same
        alert("비밀번호가 동일하지 않습니다.");
        return false;
    } else if (policy == false) {
        //policy
        alert("약관에 동의해주세요.")
        return false;
    }

    fetch("/signup/upload", {
        method: "POST",
        body: JSON.stringify({
            id: id,
            password: password
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}