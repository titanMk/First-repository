//[2,3,4,2,2,5,5]

function outp(a){
    let temp=[] ,max=0
    for(let i=0 ;i<a.length ;i++){
        if(!temp[a[i]]){
            temp[a[i]]=1
        }
        else temp[a[i]]++

        max=Math.max(max,a[i])
        


    }
    console.log(temp)

    for(let i=0 ;i<=max;i++){
        if(temp[i]!=undefined){
            console.log(`${i} (${temp[i]})`)
        }
    }
}

console.log(outp([2,3,4,2,2,5,5]))