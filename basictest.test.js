it('should work', () => {
  const f = jest.fn();
  f({a: 1, b: 2});
  f({a: 3, b: 7});

  // expect(f).toHaveBeenCalledWith(expect.objectContaining({b: 3}));
  // expect(f).not.toHaveBeenCalledWith(expect.objectContaining({b: 7}));

  expect(f).toHaveBeenCalledWith(expect.objectContaining({b: 7}));

  // The function was never called with this value.
  // ONLY { "b": 3 } should be shown in the error snapshot.
  expect(() =>
    expect(f).toHaveBeenCalledWith(expect.objectContaining({b: 3})),
  ).toThrowErrorMatchingSnapshot();

  expect(() =>
    expect(f).not.toHaveBeenCalledWith(expect.objectContaining({b: 7})),
  ).toThrowErrorMatchingSnapshot();
});

it('not', () => {
  const f = jest.fn();
  f({a: 1, b: 2});
  f({a: 2, b: 2});
  // f({a: 3, b: 7});

  expect(f).toHaveBeenCalledWith(expect.not.objectContaining({b: 2}));
});
