const app = require("../../app");
const supertest = require("supertest");

test("GET /books", async () => {
    // const post = await Post.create({ title: "Post 1", content: "Lorem ipsum" });

    const book = {
        name: '1984',
        genre: 'sci-fi',
        author: 'George Orwell',
        published: new Date('01/06/1949')
    }

    await supertest(app).get("/books")
    .expect(200)
    .then((response) => {
        // check if there is a value 
        console.log(response.body);
        expect(response).toBeTruthy();
        // Check type and length
        // expect(Array.isArray(response.body)).toBeTruthy();
        // expect(response.body.length).toEqual(1);

        // // Check data
        // expect(response.body[0]._id).toBe(post.id);
        // expect(response.body[0].title).toBe(post.title);
        // expect(response.body[0].content).toBe(post.content);
    });
});