interface CanRun {
    step(): void;
}

class Pony implements CanRun {
    step(): void {
        console.log('step');
    }
}

export default Pony;