import { waitFor } from "@testing-library/react";
import { getDoc } from "firebase/firestore";
import checkIfCorrect from "../functions/checkIfCorrect"

jest.mock("firebase/firestore");

describe("test the check function with firebase", () => {
    it("correctly says false", async () => {
        getDoc.mockResolvedValue({position: [1648, 193], screenSize: [1920, 936]})
        const poop = await checkIfCorrect("Natsuki", [1648,193], 300);
        expect(poop).toBe(false);
    }) 

    it("correctly says true", async () => {
        getDoc.mockResolvedValue({position: [1648, 193], screenSize: [1920, 936]})
        const poop = await checkIfCorrect("Natsuki", [1648, 193], 1920);
        expect(poop).toBe(true);
    }) 

    it("works with different ratios", async () => {
        getDoc.mockResolvedValue({position: [1648, 193], screenSize: [1920, 936]})
        const poop = await checkIfCorrect("Natsuki", [1236, 144.75], 1440);
        expect(poop).toBe(true);
    }) 
    it("allows for some margin of error", async () => {
        getDoc.mockResolvedValue({position: [1648, 193], screenSize: [1920, 936]})
        const poop = await checkIfCorrect("Natsuki", [1286, 154.75], 1440);
        expect(poop).toBe(true);
    })
})