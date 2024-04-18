import {palabraPalidromo} from "../tests/palabraPalindromo";
import{ describe, expect, it, should} from "vitest";


describe ("palabraPolidromo", () =>{
    it("Should be a funtion", ()=>{
        expect(typeof palabraPalidromo).toBe("function");
    })

    it("Should return is your sentence a palidromo or not",()=>{
        expect(palabraPalidromo("amar")).toBe("No0o0o0")
    })

    it("Should return is your sentence a palidromo or not",()=>{
        expect(palabraPalidromo("oso")).toBe("Siiii")
    })
})


