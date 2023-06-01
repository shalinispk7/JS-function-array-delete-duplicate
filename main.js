// Delete duplicate element
let arr=[1,2,2,3,3,3,4,4,5];
function duplicate(arr){
	let result=[];
	for(i=0;i<arr.length;i++){
		let exists=false; //flag //booolean variable  
			for(j=0;j<result.length;j++){
				if(arr[i]===result[j]){
					exists=true;
					break;
				}
			}
			if(!exists){
				result.push(arr[i]);
			}
		}
		return result;
}
document.write("The elements in array are: "+arr+" <br>")
document.write("Duplicate elements deleted "+duplicate(arr));