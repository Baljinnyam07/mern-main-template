import { composeArticleSlug, cutTextToLength, extractArticleIdFromSlug, slugify } from "../index";

const str = "The quick brown fox jumps over the lazy dog.";

describe("cutTextToLength", () => {
  it("should cut text to length", () => {
    expect(cutTextToLength(str, 20)).toBe("The quick brown fox ...");
  });

  it("should not cut text to length", () => {
    expect(cutTextToLength(str, 100)).toBe(str);
  });
});


const str2="hello world"
describe('sluggify', ()=>{
    it("should sluggify text",()=>{
        expect(slugify(str2)).toBe("hello-world")
    })
})

const id = 123
const title = "Hello world"

describe("composeArticleSlug", ()=>{
    it("should composeArticleSlug article",()=>{
        expect(composeArticleSlug(id,title)).toBe("hello-world-123")
    })
})

const slug = "hello"

describe("extractArticleIdFromSlug", ()=>{
    it("should extractArticleIdFromSlug slug",()=>{
        expect(extractArticleIdFromSlug(slug)).toBe("hello")
    })
})