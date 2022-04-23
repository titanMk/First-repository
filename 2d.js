//1 main bombshell function , 2.)Function to create n xm matrix 
//3.)is Cell within matrix
//x=[-1,1,-1,-1,0,0,1,1]
//y=[0,0,1,-1,1,-1,1,-1]
/*
let newRow,newCol
 
function bombshell(bombshells ,r,c){
    const mat=matrix(r,c)
  const  x=[-1,1,-1,-1,0,0,1,1] ,y=[0,0,1,-1,1,-1,1,-1]
  for(let i=0 ;i<bombshells.length; i++){
      const [row,col]=bombshells[i]
      mat[row][col]=-1
      for(let index =0;index<x.length ;index++){
        newRow=row + x[index]
        newCol=col + y[index]
         if (isInsidecell(r,c,newRow,newCol)){
             mat[newRow][newCol]+=1
         }
         

  }
  
      
  }return mat
}
function isInsidecell(r,c,newRow,newCol){
    return newRow<r && newCol<c &&newRow >=0 && newCol>=0
}

function matrix(r,c){

    const mat=[]
    for(let i=0 ;i<r;i++){
        mat[i]=[]
        for(let j=0;j<c;j++){
            mat[i][j]=0
        }
    }return mat
}

console.log(bombshell([[2,3],[2,1]],4,4))

//ROTATE MATRIX BY 90 DEGREE


const newarray=matrix(3,3) 


function array(a){
    for(let i=0;i<a.length ;i++){
        let num=a.length-1
        for(let j=0 ;j<a[0].length ;j++){
            newarray[j][num-i]=a[i][j]

        }
        
    }return newarray
}

function matrix(r,col){

    const mat=[]
    for(let i=0 ;i<r;i++){
        mat[i]=[]
        for(let j=0;j<col;j++){
            mat[i][j]=0
        }
    }return mat
}
console.log(array([[1,2,3] ,[4,5,6],[7,8,9] ,[10,11,12]]))



//TRANSPOSE OF MATRIX

const newarray=matrix(4,3) 


function array(a){
    for(let i=0;i<a.length ;i++){
        for(let j=0 ;j<a[0].length ;j++){
            newarray[j][i]=a[i][j]

        }
        
    }return newarray
}

function matrix(r,col){

    const mat=[]
    for(let i=0 ;i<col;i++){
        mat[i]=[]
        for(let j=0;j<r;j++){
            mat[i][j]=0
        }
    }return mat
}
console.log(array([[1,2,3] ,[4,5,6],[7,8,9] ,[10,11,12]]))

//Print in WAVE FORMM,,,,,

function wave(a){
    for(let i=0;i<a[0].length ;i++){
        if(i%2==0){
        for(let j=0 ;j<a.length ;j++){
           console.log(a[j][i])
        }
    }
    else for(let j=a.length-1 ;j>=0 ;j--){
        console.log(a[j][i])
    }
}


}



console.log(wave([[1,2,3,4] ,[5,6,7,8] ,[9,1,2,3]]))
*/

//PROB 4 2D  ARRAY  18/04

function findX(X,a){
 let r =0 , c=a[0].length-1
 while((r>=0 && c>=0)||(r<a.length && c>=0)||(r<a.length && c<a[0].length)){
     if(X==a[r][c]){
         return [r,c]
         break;
     }
     if(X<a[r][c]){
         c--
     }
     else{
          c++
     }
 }
 return [-1,-1]
}
console.log(findX(21,[[2,14,15,16],[7,18,20,22],[8,21,23,24],[10,26,27,28]]))