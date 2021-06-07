class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vector) {
    vector.x += this.x;
    vector.y += this.y;
    return vector;
  }
  minus(vector) {
    vector.x = this.x - vector.x;
    vector.y = this.y - vector.y;
    return vector;
  }
  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);

class Group {
  constructor() {
    this.members = [];
  }
  vlaja() {
    return new GroupIterator(this);
  }
  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }
  has(value) {
    if (this.members.includes(value)) {
      return true;
    } else {
      return false;
    }
  }
  delete(value) {
    if (this.members.includes(value)) {
      this.members.splice(this.members.indexOf(value), 1);
    }
  }
  static from(array) {
    let group = new Group();
    for (let number of array) {
      group.add(number);
    }
    return group;
  }
}
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

class GroupIterator {
  constructor(group) {
    this.counter = 0;
    this.group = group;
  }
  next() {
    if (this.counter >= this.group.members.length) return { done: true };

    let value = this.group.members[this.counter];
    this.counter++;
    return { value, done: false };
  }
}
Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
};
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}

let map = { one: true, two: true, hasOwnProperty: true };

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// -true
