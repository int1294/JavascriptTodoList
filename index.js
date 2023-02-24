let inputarr = [1,[2,3],[4,5,6],[7,8,9,10,[11,12,[13,14]]],15,[16,[17,[18,[19]]]]]
let output = []

function dd(f){
for( i of f){
    if(typeof(i) == 'number'){
        
        
        
        output.push(i)
    }
    else {

        
        dd(i)
    }
}
}
dd(inputarr)
console.log(output)