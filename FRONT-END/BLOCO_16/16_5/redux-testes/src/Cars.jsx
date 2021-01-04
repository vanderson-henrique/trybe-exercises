import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { moveCar } from './redux/actionCreators';
import { connect } from 'react-redux';

function Cars({
  redCar, blueCar, yellowCar, moveCar,
}) {
  return (
    <div>
      <div>
        <img data-testid='red-img' className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button data-testid='redCar' onClick={() => moveCar('red', !redCar)} type="button">move</button>
      </div>
      <div>
        <img data-testid='blue-img' className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button data-testid='blueCar' onClick={() => moveCar('blue', !blueCar)} type="button">move</button>
      </div>
      <div>
        <img data-testid='yellow-img' className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button data-testid='yellowCar' onClick={() => moveCar('yellow', !yellowCar)} type="button">move</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  redCar: state.cars.red,
  blueCar: state.cars.blue,
  yellowCar: state.cars.yellow,
});

const mapDispatchToProps = (dispatch) => ({
  moveCar: (car, side) => dispatch(moveCar(car, side)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cars);