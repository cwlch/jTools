/*
 * @Author: ch 
 * @Date: 2020-05-09 14:22:47 
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-03 10:00:10
 */
import loadScript from './load-script';
import getVarType from './get-var-type';


/** 
* 串联加载指定的脚本
* 串联加载[同步]逐个加载，每个加载完成后加载下一个
* 全部加载完成后return Promise
* @param array|string 指定的脚本们
* @return Promise
*/

const loadScriptsAwait = async (scripts:string|string[]):Promise<number> =>{
	const scriptArr:any = getVarType(scripts) === "string" ? [scripts] : scripts;
	let res:Promise<number> = await loadScript(scriptArr[0]);
	for(let i:number = 1,item:string; i < scriptArr.length; i++){
		item = scriptArr[i];
		res = await loadScript(item);
	}
	return res;
};

export default loadScriptsAwait;