import { Members } from "../../src/models/Members";

test('Create Member Instance', () => {
    let member = new Members();
    expect(member).toBeInstanceOf(Members);
});

test('Get admin account', done => {
    let member = new Members();

    member.getbyEmail('admin').then(data => {
        console.log(data);
        
        done();
    })
});