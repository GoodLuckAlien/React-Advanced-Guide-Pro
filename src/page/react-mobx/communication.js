import { observable ,action ,makeObservable } from 'mobx'


class Communi {
   constructor(){
       makeObservable(this)
   }
   @observable object = { name:'xxx' ,mes:'11111' ,xixi:{ a:1 } }
   @observable array = [ 1 ,2 , { haha:'' } ]
   @observable mesA = ''
   @observable mesB = ''
   @action setMesA(mes){
       this.mesA = mes
   }
   @action setMesB(mes){
       this.mesB = mes
   }
   @action setMes(mes){
      this.object.mes  = mes
   }
   @action setName(name){
       this.object.name = name
   }
   @action setInfo(newObject){
       this.object = newObject
   }
}
const index = new Communi()
console.log(index)
export default index