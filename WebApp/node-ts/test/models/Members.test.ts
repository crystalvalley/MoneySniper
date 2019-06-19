import { Members } from "../../src/models/Members";

test('Members Model Test', () => {
    let member = new Members();
    expect(member).toBe(typeof Members);
});