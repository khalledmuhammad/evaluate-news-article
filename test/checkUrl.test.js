import {UrlChecker} from "../src/client/js/UrlChecker"
 
test('adds a valid url ', () => {
    const url = 'https://www.filgoal.com'
    expect(UrlChecker(url)).toBe(true);
    
})

test('adds an invalid url ', () => {
    const url = '://www.filgoal.com'
    expect(UrlChecker(url)).toBe(false);
    
})

