class Grade {
    constructor(studentName, result) {
        this.studentName = studentName;
        this.result = result;
    }
    toString() {
        return `${this.studentName}: ${this.result}`;
    }
}

module.exports = Grade;