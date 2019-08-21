/**
 * 借助构造函数实现继承
 */
function Parent1() {
  this.name = 'parent'
}
// Parent.prototype.say 这个方法，子类是不能继承的
function Child1() {
  Parent.call(this);
  this.type = 'child'
}

/**
 * 借助原型实现继承
 */
function Parent2() {
  this.name = 'parent2'
}
function Child2() {
  this.type = 'child2'
}
Child2.prototype = new Parent2();    //原型链中的原型对象是公用的，改变一个属性值，另一个也会改变


/**
 * 组合继承
 */
function Parent3() {
  this.name = 'parent3'
  this.play = [1, 2, 3, 4]
}
function Child4() {
  Parent3.call(this);
  this.type = 'child4'
}
Child4.prototype = new Parent3()
/**
 * 优化方式
 */
function Parent3() {
  this.name = 'parent3'
  this.play = [1, 2, 3, 4]
}
function Child4() {
  Parent3.call(this);
  this.type = 'child4'
}
Child4.prototype = Parent3.prototype()