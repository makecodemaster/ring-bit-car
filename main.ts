input.onButtonPressed(Button.A, function () {
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 90)
})
input.onButtonPressed(Button.AB, function () {
    RingbitCar.running_distance(RingbitCar.Direction_run.forward, 5)
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 90)
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
	
})
