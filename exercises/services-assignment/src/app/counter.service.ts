export class CounterService {
	activeToInactiveCounter: number = 0;
	inactiveToActiveCounter: number = 0;

	incrementActiveToInactive() {
		this.activeToInactiveCounter++;
		console.log(this.activeToInactiveCounter);
	}

	incrementInactiveToActive() {
		this.inactiveToActiveCounter++;
		console.log(this.inactiveToActiveCounter);
	}
}
