import operate from '../operate'

test('it adds', () => {
    expect(operate(3, 5, '+')).toBe("8");
  });
  
  test('it subtract', () => {
    expect(operate( 5,3, '-')).toBe("2");
  });
  
  test('it multiply', () => {
    expect(operate(3, 5, 'x')).toBe("15");
  });
  
  test('it divides', () => {
    expect(operate(15, 5, '÷')).toBe("3");
  });