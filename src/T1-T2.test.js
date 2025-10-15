import '@testing-library/jest-dom';
import { tests } from '../T1-T2/T1-T2.js';
describe("tests", () => {
    const t0 = tests()[0];
    const t1 = tests()[1];
    const t2 = tests()[2];
    const t3 = tests()[3];
    const t4 = tests()[4];
    const t5 = tests()[5];
    const t6 = tests()[6];
    const t7 = tests()[7];
    t0.toggleAvailability();
    test('comproves that magicBook is correctly defined', () => {
        expect(typeof(t0)=='object' && !Array.isArray(t0)).toBe(true);
        expect(t0.author).toBe("Harper Lee");
        expect(t0.genre).toBe("Fiction");
        expect(t0.yearPublished).toBe(1960);
        expect(t0.available).toBe(false);
        expect(t0.magicSeal).toBe("TOEEMAGIC");
    });
    test('comproves mysticalBooks is correctly mapped', () => {
        expect(t1[0]).toBe("ONEZMAGIC");
        expect(t1[1]).toBe("THENMAGIC");
        expect(t1[2]).toBe("TOEEMAGIC");
        expect(t1[3]).toBe("19LLMAGIC");
        expect(t1[4]).toBe("THLDMAGIC");
        expect(t1[5]).toBe("THERMAGIC");
        expect(t1[6]).toBe("HANGMAGIC");
        expect(t1[7]).toBe("BREYMAGIC");
        expect(t1[8]).toBe("THENMAGIC");
        expect(t1[9]).toBe("THERMAGIC");
    });
    test('comproves if fantasyBooksAfter1950 is correctly filtered', () => {
        expect(t2.length).toBe(2);
        expect(typeof(t2[0])=='object' && !Array.isArray(t2[0])).toBe(true);
        expect(typeof(t2[1])=='object' && !Array.isArray(t2[1])).toBe(true);
        expect(t2[0].genre).toBe("Fantasy");
        expect(t2[1].genre).toBe("Fantasy");
    });
    test('comproves if recursiveOracle returns 7 when reciving the library', () => {
        expect(t3).toBe(7);
    });
    test('comproves if compareBooks returns the same book \"Harry Potter and the Sorcerer\'s Stone\"', () => {
        expect(t4.length).toBe(2);
        expect(typeof(t4[0])=='object' && !Array.isArray(t4[0])).toBe(true);
        expect(typeof(t4[1])=='object' && !Array.isArray(t4[1])).toBe(true);
        expect(t4[0].author).toBe("J.K. Rowling");
        expect(t4[0].author).toBe(t4[0].author);
        expect(t4[1].title).toBe("Harry Potter and the Sorcerer's Stone");
        expect(t4[0].title).toBe(t4[0].title);
    });
    test('comproves if earliestPublication returns the spected results', () => {
        expect(typeof(t5)=='object' && !Array.isArray(t5[0])).toBe(true);
        expect(t5.author).toBe("Homer");
        expect(t5.title).toBe("The Odyssey");
        expect(t5.yearPublished).toBe(-800);
    });
    test('comproves if clonedLibrary is correctly cloned and added', () => {
        expect(t6.length).toBe(11);
        expect(Array.isArray(t6)).toBe(true);
        expect(typeof(t6[0])=='object' && !Array.isArray(t6[0])).toBe(true);
        expect(t6[0].title).toBe("One Hundred Years of Solitude");
        expect(t6[1].title).toBe("The Lord of the Rings");
        expect(t6[2].title).toBe("To Kill a Mockingbird");
        expect(t6[3].title).toBe("1984");
        expect(t6[4].title).toBe("The Great Gatsby");
        expect(t6[5].title).toBe("The Catcher in the Rye");
        expect(t6[6].title).toBe("Harry Potter and the Sorcerer's Stone");
        expect(t6[7].title).toBe("Brave New World");
        expect(t6[8].title).toBe("The Hobbit");
        expect(t6[9].title).toBe("The Odyssey");
    });
    test('comproves if serializedBook is correctly serialized', () => {
        expect(t7).toBe("{\"title\":\"One Hundred Years of Solitude\",\"author\":\"Gabriel García Márquez\",\"genre\":\"Fiction\",\"yearPublished\":1967,\"available\":true}");
    });
});
