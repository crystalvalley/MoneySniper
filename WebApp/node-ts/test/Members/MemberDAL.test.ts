import { MemberDAL } from "../../src/Members/MemberDAL";
import { Member } from "../../src/Members/Member";

test('Create Member Instance', () => {
    let memberDAL = new MemberDAL();
    expect(memberDAL).toBeInstanceOf(MemberDAL);
});

test('Find by Email', done => {
    let memberDAL = new MemberDAL();

    memberDAL.findByEmail('admin').then(data => {
        let member = new Member();

        member.email = 'admin';
        member.password = 'admin';

        expect(data).toEqual(member);
        
        done();
    })
});

test('Find All', done => {
    let memberDAL = new MemberDAL();

    memberDAL.findAll().then(data => {
        
        for(let member of data) {
            expect(member).toBeInstanceOf(Member);
        }

        done();
    });
})