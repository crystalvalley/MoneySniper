import { Member} from "../../src/Members/Member";

test('Create Member instance', () => {
    let member = new Member();

    expect(member).toBeInstanceOf(Member);
});

test("Member Null constructor", () => {
    let member = new Member();

    expect(member.email).toBe(undefined);
    expect(member.name).toBe(undefined);
    expect(member.age).toBe(undefined);
    expect(member.gender).toBe(undefined);
});

test("Setter & Getter Member", () => {
    let member = new Member();
    member.email = 'account@domain.com';
    member.name = 'test';
    member.age = 20;
    member.gender = 'male';

    expect(member.email).toBe('account@domain.com');
    expect(member.name).toBe('test');
    expect(member.age).toBe(20);
    expect(member.gender).toBe('male');
});