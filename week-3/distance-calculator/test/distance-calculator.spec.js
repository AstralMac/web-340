// test/distance-calculator.spec.js

const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

// Define planetary distances in AU
const planetDistances = {
  Mercury: 0.39,
  Venus: 0.72,
  Earth: 1.00,
  Mars: 1.52,
  Jupiter: 5.20,
  Saturn: 9.58,
  Uranus: 19.22,
  Neptune: 30.05,
  Pluto: 39.48
};

// Test 1: Check distance between Earth and Mars
function testEarthToMars() {
  try {
    const distance = calculateDistance(planetDistances.Earth, planetDistances.Mars);
    assert.strictEqual(distance, 0.52);
    console.log('Passed testEarthToMars');
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

// Test 2: Check distance between Jupiter and Saturn
function testJupiterToSaturn() {
  try {
    const distance = calculateDistance(planetDistances.Jupiter, planetDistances.Saturn);
    assert.strictEqual(distance, 4.38);
    console.log('Passed testJupiterToSaturn');
    return true;
  } catch (error) {
    console.error(`Failed testJupiterToSaturn: ${error.message}`);
    return false;
  }
}

// Test 3: Check distance between Venus and Pluto
function testVenusToPluto() {
  try {
    const distance = calculateDistance(planetDistances.Venus, planetDistances.Pluto);
    assert.strictEqual(distance, 38.76);
    console.log('Passed testVenusToPluto');
    return true;
  } catch (error) {
    console.error(`Failed testVenusToPluto: ${error.message}`);
    return false;
  }
}

// Run tests
testEarthToMars();
testJupiterToSaturn();
testVenusToPluto();
