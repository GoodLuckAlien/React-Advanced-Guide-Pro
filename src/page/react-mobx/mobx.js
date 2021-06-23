import { observable ,action } from 'mobx'

class Root{
   @observable info={
       name:'alien',
       mes:'let us learn React!'
   }
//    @observable number = 1
   @action setInfo(){

   }
}

const root = new Root()

console.log(root,'roottoot')

export default root