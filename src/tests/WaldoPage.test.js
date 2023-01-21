import { getByRole, getByTestId, render, screen, waitFor } from "@testing-library/react"
import WaldoPage from "../components/WaldoPage"
import userEvent from "@testing-library/user-event"

describe("testing the Waldo Page functionality", () => {
    it("renders the image", () => {
        render(<WaldoPage></WaldoPage>);
        expect(screen.getByRole("img")).toBeTruthy();
    })
    it("correctly handles a click", () => {
        render(<WaldoPage></WaldoPage>);
        userEvent.click(screen.getByRole("img"));

        expect(screen.getByText("Natsuki")).toBeTruthy();
        expect(screen.getByText("Sans")).toBeTruthy();
        expect(screen.getByText("Freddy Fazbear")).toBeTruthy();
    })
    it("removes the option menu when the image is clicked again",async () => {
        render(<WaldoPage></WaldoPage>);
        userEvent.click(screen.getByRole("img"));
        userEvent.click(screen.getByRole("img"));

        await waitFor(() => {
            expect(screen.queryByText("Natsuki")).not.toBeTruthy();
        })
    })
})