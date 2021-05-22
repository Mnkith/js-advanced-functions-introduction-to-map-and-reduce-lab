function mapToNegativize(sourceArray){
  const ary = []
  sourceArray.forEach( int => {
    ary.push(int * -1)
  })
  return ary
}

function mapToNoChange(sourceArray){
  return [...sourceArray]
}

function mapToDouble(sourceArray){
  const ary = []
  sourceArray.forEach( int => {
    ary.push(int * 2)
  })
  return ary
}

function mapToSquare(sourceArray){
  const ary = []
  sourceArray.forEach( int => {
    ary.push(int ** 2)
  })
  return ary
}

function reduceToTotal(sourceArray, sp = 0){
  sourceArray.forEach( int => sp += int )
  return sp
}

function reduceToAllTrue(sourceArray){
  // return !sourceArray.some(e => !e)
  let i = 0
  while(sourceArray[i]){
    i++
  }
  return i == sourceArray.length 
}
 
function reduceToAnyTrue(sourceArray){
  // return sourceArray.some(e => e)
  return !!sourceArray.find( e => e)
  // let flag = false
  // sourceArray.forEach( e => {
  //   if(e){  flag  = true }
  //   if(flag){ return }
  // })
  // return flag 
}

reduceToAnyTrue([1, 2, true, "razmatazz", false])











