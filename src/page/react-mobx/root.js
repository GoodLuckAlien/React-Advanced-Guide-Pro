

import { observable , makeObservable } from 'mobx'


class Root {
    constructor(){ makeObservable(this) }
    @observable authorInfo = {
        age:'18',
        name:'alien',
        mes:{
            say:'let us learn React!'
        }
    }
    @observable name='《React进阶实践指南》'
}

const Index = new Root()


console.log(Index)

export default Index