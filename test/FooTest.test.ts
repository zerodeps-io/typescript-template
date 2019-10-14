import { Foo } from "../source";


describe("Foo", () => {

    test("bar sums two numbers", () => {
        const foo = new Foo();
        expect(foo.bar(1, 2)).toBe(3);
    });

});
