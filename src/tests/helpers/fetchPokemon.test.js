import { fetchPokemon } from "../../helpers/fetchPokemon";

describe("Testing fetchPokemon || Helper", () => {
  test("should work propertly fetchPokemon", async () => {
    const resp = await fetchPokemon("pokemon/17", {});
    const body = await resp.json();
    expect(resp instanceof Response).toBe(true);
    expect(body).toEqual(expect.any(Object));
  });
});
