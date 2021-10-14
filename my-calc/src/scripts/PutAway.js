const {
    evaluate
} = require('mathjs')

export class OperationSign {
    constructor() {
        this.type = ['+', '-', '*', '/', '.', '%']
        this.typeNoALL = ['*', '/', '.', '%']
    }
    putAway(mas) {
        let length_ = mas.length - 1
        if (this.type.includes(mas[length_])) {
            console.log('1');
            return mas.slice(0, length_)
        }
        return mas
    }
    putFirst(mas) {
        if (this.typeNoALL.includes(mas[0])) {
            return 'Ошибка!'
        }
        let result = evaluate(mas)
        return result
    }
    endValue(mas) {
        let length_ = mas.length - 1
        if (this.type.includes(mas[length_])) {
            return mas.slice(0, length_)
        }
        return mas
    }
}