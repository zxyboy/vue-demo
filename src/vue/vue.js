// defineReactive

/**
 * 给obj定义key属性，并赋值val
 *
 * @param obj
 * @param key
 * @param val
 */
function defineReactive(obj, key, val) {
    if (arguments.length === 2) {
        val = obj[key];
    }
    let childOb = observe(val);
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: true,
        get() {
            console.log("obj property key => ", key, " invoke get method")
            return val;
        },
        set(newValue) {
            console.log("obj property key => ", key, " invoke set method , new value => ", newValue)
            if (newValue === val) {
                return;
            }
            val = newValue;
        }
    })
}

// Observer
/**
 * 给指定obj所有属性添加响应式getter/setter
 */
class Observer {
    constructor(obj) {
        console.log("Observer constructor method was invoked , obj => ", obj)
        this.walk(obj)
    }

    /**
     * 遍历obj中所有属性，添加响应式getter/setter
     * @param obj
     */
    walk(obj) {
        for (let key in obj) {
            defineReactive(obj, key)
        }
    }

}

// observe
function observe(value) {
    if (typeof value != 'object') {
        return;
    }
    let ob;
    if (value.__ob__) {
        ob = value.__ob__;
    } else {
        ob = new Observer(value);
    }
    return ob;
}


// test
let o = {
    a: {
        b: {
            c: 10
        }
    },
    d: {
        e: {
            f: 20
        }
    }

}

observe(o)
// console.log(o)
// console.log(o.a.b)
// console.log(o.a.b.c)
