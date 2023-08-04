class Counter {
    private counter: number = 0;
    public incrementCounter() {
        this.counter += 1
    }
    public getCounter(): number {
        return this.counter
    }
}

const value = new Counter();
value.incrementCounter()
value.incrementCounter()
console.log(value.getCounter())