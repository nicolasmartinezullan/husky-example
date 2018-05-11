import chai from 'chai'
import { Calculator } from './Calculator'

let calculator

describe('Calculator', () => {
  beforeEach(() => {
    calculator = new Calculator()
  })
  it('should add correctly 2 numbers', () => {
    const result = calculator.add(1, 2)
    chai.expect(result).to.be.equal(3)
  })
})
