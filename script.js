
const dispayNum = (num) => {
  
    if (num == 'AC') {
        let result = document.querySelector('.operand');
        result.innerHTML = '';
    } 
    else if (num == '='){
        let result = document.querySelector('.operand');
        result.innerHTML = eval(result.innerHTML);
    }
    else if (num == 'DEL'){
        let result = document.querySelector('.operand');
        let remove = result.innerHTML;
        remove = remove.slice(0,-1);
        result.innerHTML = remove;
    }
    else {
        let result = document.querySelector('.operand');
        result.innerHTML += num;
    }
}
