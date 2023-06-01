const timeWord = require('./timeWord');



describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test("works for pm", () => {
    expect(timeWord("15:00")).toEqual("three o clock pm");
  });
  test("works for midnight", () => {
    expect(timeWord("00:00")).toEqual("midnight");
  });
  test("works for noon", () => {
    expect(timeWord("12:00")).toEqual("noon");
  });
  test("works using oh clock", () => {
    expect(timeWord("01:00")).toEqual("one o clock am");
  });
  test("works using am", () => {
    expect(timeWord("01:30")).toEqual("one thirty am");
  });

});

