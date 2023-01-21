import { render, screen, waitFor } from "@testing-library/react"
import Timer from "../components/Timer"

describe("test the timer component", () => {
    it("counts to three seconds", done => {
        render(<Timer setFinalTime={() => {}}/>);
        
        setTimeout(() => {
            expect(screen.getByText("0:03")).toBeTruthy();
            done();
        }, 3300);

    })
})